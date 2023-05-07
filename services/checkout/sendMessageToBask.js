// import sgMail from '@sendgrid/mail';
import nodemailer from 'nodemailer';
import { renderToString } from 'react-dom/server';
import BaskShoppingConfirmation from 'components/Message/BaskShoppingConfirmation';

/**
 * PROD
 * if process.env.IS_PROD is true send email by ***
 * if necessary change sender
 *
 * DEV
 * if process.env.IS_PROD is false send email by ethereal
 * email and pass may expire, renew if don't work
 */

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMessageToBask = async (addressData, basketData) => {
  console.log('before send sendMessageToBask');
  console.log('addressData: ', addressData);
  console.log('basketData: ', basketData);
  console.log('process.env.NEXT_PUBLIC_EMAIL_SHOPPING_PROD: ', process.env.NEXT_PUBLIC_EMAIL_SHOPPING_PROD);
  console.log('process.env.IS_PROD: ', process.env.IS_PROD);
  try {
    // if (process.env.NEXT_PUBLIC_APP_STAGE === 'PROD') {
    // const transporterProd = nodemailer.createTransport({
    //   host: 'ssl0.ovh.net',
    //   port: 465,
    //   auth: {
    //     user: process.env.NEXT_PUBLIC_EMAIL_SHOPPING_PROD,
    //     pass: process.env.EMAIL_PASS_PROD,
    //   },
    // });
    //
    // await transporterProd.sendMail({
    //   // from: `kontakt@bask.com.pl`,
    //   from: process.env.NEXT_PUBLIC_EMAIL_SHOPPING_PROD,
    //   to: process.env.NEXT_PUBLIC_EMAIL_CONTACT_PROD,
    //   // to: 'ouritsu.taynama@gmail.com',
    //
    //   replyTo: `${addressData.email}`,
    //   subject: '✔ Bask - klient opłacił zamówienie 🛒',
    //   html: renderToString(<BaskShoppingConfirmation addressData={addressData} basketData={basketData} />),
    // });
    // } else {
    // dev sender - credentials expire after some time - renew -> https://ethereal.email/create
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_DEV,
        pass: process.env.EMAIL_PASS_DEV,
      },
    });

    const response = await transporter.sendMail({
      from: 'Sender Name <sender@example.com>',
      to: 'Recipient <recipient@example.com>',
      subject: '✔ Bask - klient opłacił zamówienie 🛒',
      html: renderToString(<BaskShoppingConfirmation addressData={addressData} basketData={basketData} />),
    });

    console.log(`E-mail sent, Preview URL: ${nodemailer.getTestMessageUrl(response)}`);
    // }
  } catch (error) {
    // console.error(error);

    const transporterError = nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port: 465,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_SHOPPING_PROD,
        pass: process.env.EMAIL_PASS_PROD,
      },
    });

    await transporterError.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_SHOPPING_PROD,
      to: 'sebastian.lucjan@gmail.com',
      // to: 'kontakt@bask.com.pl',
      replyTo: `${addressData.email}`,
      subject: `✔ Bask - błąd w wysyłce maila "klient opłacił zamówienie 🛒"`,
      // html: renderToString(<div>Error: {JSON.stringify(error)}</div>),
      html: `<!DOCTYPE html>
<html lang='pl'>
  <head>
    <meta charset="UTF-8">
    <title>Test Email</title>
  </head>
  <body>
    <h1>Hello!</h1>
    <p>This is a test email.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </body>
</html>`,
    });

    if (error.response) {
      console.error(error.response.body);
    }
  }
};

export default sendMessageToBask;

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

// const html = render(<EmailTemplate text={mailTextObj.emailTextContent} buttonLabel={mailTextObj.emailButtonLabel} url={functionalLink} />, {
//   pretty: true,
// });

// const sendMessageToBask = async (addressData, basketData, mailTextObj) => {

// try {
//   // if (true) {
//   // if (process.env.NEXT_PUBLIC_APP_STAGE === 'PROD') {
//   const messageOptions = {
//     template_id: 'd-1b4295e0d6874dafae0fb0fd80bffa44',
//     from: {
//       email: 'bask.lublin@gmail.com',
//     },
//     personalizations: [
//       {
//         to: [
//           {
//             email: 'sebastian.lucjan@gmail.com',
//             // email: 'bask.lublin@gmail.com',
//           },
//         ],
//         dynamic_template_data: {
//           subject: '✔ Bask - zamówienie opłacone ✔',
//           // textContent: mailTextObj.emailTextContent,
//           // buttonLabel: mailTextObj.emailButtonLabel,
//           // buttonUrl: functionalLink,
//           first_name: firstName,
//         },
//       },
//     ],
//   };

// await sgMail.send(messageOptions);
// } else {
// dev sender - credentials expire after some time - renew -> https://ethereal.email/create
// const transporter = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: 587,
//   auth: {
//     user: 'amely.gutkowski74@ethereal.email',
//     pass: 'g9GvjrB5r9acZjdwS2',
//   },
// });
//
// const response = await transporter.sendMail({
//   from: 'Sender Name <sender@example.com>',
//   to: 'Recipient <recipient@example.com>',
//   subject: 'Mail to Bask after checkout',
//   // subject: mailTextObj.emailSubject,
//   html,
// });

// console.log(`E-mail sent, Preview URL: ${nodemailer.getTestMessageUrl(response)}`);
// }
//   } catch (error) {
//     console.error(error);
//
//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// };

// export default sendMessageToBask;

// import sgMail from '@sendgrid/mail';
