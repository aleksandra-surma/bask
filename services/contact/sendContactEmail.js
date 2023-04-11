// import sgMail from '@sendgrid/mail';
import nodemailer from 'nodemailer';
import { renderToString } from 'react-dom/server';

import EmailContactTemplate from 'components/Message/ContactTemplate';

/**
 * PROD
 * if process.env.IS_PROD is true send email by SendGrid
 * if necessary change sender
 *
 * DEV
 * if process.env.IS_PROD is false send email by ethereal
 * email and pass may expire, renew if don't work
 */

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmailWithLink = async (payload) => {
  console.log('payload sendEmailWithLink: ', payload);
  // const html = render(<EmailContactTemplate payload={payload} />, {
  //   pretty: true,
  // });
  // const html = render(getHtml(payload));

  try {
    if (process.env.NEXT_PUBLIC_APP_STAGE === 'PROD') {
      console.log('Mail test PROD');
      const transporterProd = nodemailer.createTransport({
        host: 'ssl0.ovh.net',
        port: 465,
        auth: {
          user: process.env.EMAIL_CONTACT_PROD,
          pass: process.env.EMAIL_PASS_PROD,
        },
      });

      await transporterProd.sendMail({
        from: `kontakt@bask.com.pl`,
        to: 'kontakt@bask.com.pl',
        subject: '✔ Bask - wiadomość z formularza kontaktowego 📝',
        html: renderToString(<EmailContactTemplate payload={payload} />),
      });

      // const messageOptions = {
      //   to: `bask.lublin@gmail.com`,
      //   from: 'bask.lublin@gmail.com', // Change to your verified sender
      //   subject: 'Wiadomość z formularza kontaktowego - Bask ✔',
      //   html,
      // };
      //
      // await sgMail.send(messageOptions);
    } else {
      // dev sender - credentials expire after some time - renew -> https://ethereal.email/create
      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'laurine72@ethereal.email',
          pass: '1xjtcRjMaCYV3Gs51d',
        },
      });

      const response = await transporter.sendMail({
        from: 'Sender Name <sender@example.com>',
        to: 'Recipient <recipient@example.com>',
        subject: '✔ Bask - wiadomość z formularza kontaktowego 📝',
        html: renderToString(<EmailContactTemplate payload={payload} />),
      });

      console.log(`E-mail sent, Preview URL: ${nodemailer.getTestMessageUrl(response)}`);
    }
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};

export default sendEmailWithLink;
