import { renderToString } from 'react-dom/server';
import EmailContactTemplate from 'components/Message/ContactTemplate';
import postmarkClient from 'services/email/postmarkClient';

/**
 * PROD
 * if process.env.IS_PROD is true send email by SendGrid
 * if necessary change sender
 *
 * DEV
 * if process.env.IS_PROD is false send email by ethereal
 * email and pass may expire, renew if don't work
 */

const sendContactEmail = async (payload) => {
  try {
    await postmarkClient.sendEmail({
      From: process.env.NEXT_PUBLIC_EMAIL_CONTACT_PROD,
      To: process.env.NEXT_PUBLIC_EMAIL_CONTACT_PROD,
      Subject: '✔ Bask - wiadomość z formularza kontaktowego 📝',
      HtmlBody: renderToString(<EmailContactTemplate payload={payload} />),
    });
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};

export default sendContactEmail;
