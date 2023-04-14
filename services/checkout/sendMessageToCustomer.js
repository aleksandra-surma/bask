// import sgMail from '@sendgrid/mail';
import nodemailer from 'nodemailer';
import { renderToString } from 'react-dom/server';
import CustomerShoppingConfirmation from 'components/Message/CustomerShoppingConfirmation';

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

const sendMessageToCustomer = async (addressData, basketObj) => {
  try {
    if (process.env.NEXT_PUBLIC_APP_STAGE === 'PROD') {
      console.log('Mail test PROD');
      const transporterProd = nodemailer.createTransport({
        host: 'ssl0.ovh.net',
        port: 465,
        auth: {
          user: process.env.EMAIL_SHOPPING_PROD,
          pass: process.env.EMAIL_PASS_PROD,
        },
      });

      await transporterProd.sendMail({
        from: `zakupy@bask.com.pl`,
        to: `${addressData.email}`,
        subject: '✔ Bask - Twoje zamówienie zostało opłacone 🛒',
        html: renderToString(<CustomerShoppingConfirmation addressData={addressData} basketObj={basketObj} />),
      });
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
        subject: '✔ Bask - Twoje zamówienie zostało opłacone 🛒',
        html: renderToString(<CustomerShoppingConfirmation addressData={addressData} basketObj={basketObj} />),
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

export default sendMessageToCustomer;

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

// const sendMessageToCustomer = async (addressData, basketObj, mailTextObj) => {

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

// export default sendMessageToCustomer;

// import sgMail from '@sendgrid/mail';
