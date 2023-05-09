// import sendContactEmail from 'services/contact/sendContactEmail';
import { schema } from 'data/form/schema';
import postmarkClient from 'services/email/postmarkClient';
import { renderToString } from 'react-dom/server';
import EmailContactTemplate from 'components/Message/ContactTemplate';

const contactForm = async (req, res) => {
  switch (req.method) {
    case 'POST': {
      try {
        const payload = req.body;

        const payloadVerified = await schema.contactFormServer.validateAsync(payload);

        // Verify the reCAPTCHA token
        const verifiedUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${payloadVerified.captchaToken}`;

        const response = await fetch(verifiedUrl, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          },
          method: 'POST',
        });
        const captchaValidation = await response.json();

        console.log('captchaValidation: ', captchaValidation);

        if (!captchaValidation.success) {
          console.log('fail captcha');
          res.status(422).json({ status: 'captcha_invalid', error: 'failed captcha' });
          return;
        }

        await new Promise(() => {
          postmarkClient.sendEmail({
            From: process.env.NEXT_PUBLIC_EMAIL_CONTACT_PROD,
            To: process.env.NEXT_PUBLIC_EMAIL_CONTACT_PROD,
            Subject: '✔ Bask - wiadomość z formularza kontaktowego 📝',
            HtmlBody: renderToString(<EmailContactTemplate payload={payload} />),
          });
        });

        res.status(200).json({
          status: 'payload_sent',
        });
      } catch (error) {
        console.log('error: ', error);
        res.status(422).json({ status: 'not_created', error: error.message });
      }
      res.status(200).json({ received: true });
      break;
    }
    default:
      res.status(400);
      break;
  }
};

export default contactForm;
