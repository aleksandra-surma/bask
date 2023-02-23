import sgMail from '@sendgrid/mail';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import EmailContactTemplate from 'components/Email/ContactTemplate';

/**
 * PROD
 * if process.env.IS_PROD is true send email by SendGrid
 * if necessary change sender
 *
 * DEV
 * if process.env.IS_PROD is false send email by ethereal
 * email and pass may expire, renew if don't work
 */

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmailWithLink = async (textContent) => {
  const html = render(<EmailContactTemplate text={textContent} />, {
    pretty: true,
  });

  try {
    if (process.env.IS_PROD) {
      const messageOptions = {
        to: `bask.lublin@gmail.com`,
        from: 'bask.lublin@gmail.com', // Change to your verified sender
        subject: 'Wiadomość z formularza kontaktowego - Bask ✔',
        html,
      };

      await sgMail.send(messageOptions);
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
        subject: 'Link aktywacyjny do konta SayInvest ✔',
        html,
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
