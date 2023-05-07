import Stripe from 'stripe';
import finalize from 'services/checkout/finalize';
import { buffer } from 'micro';
// import sendMessageToCustomer from 'services/checkout/sendMessageToCustomer';
// import sendMessageToBask from 'services/checkout/sendMessageToBask';
// import sendMessageToCustomer from 'services/checkout/sendMessageToCustomer';
import nodemailer from 'nodemailer';
import { renderToString } from 'react-dom/server';
import BaskShoppingConfirmation from 'components/Message/BaskShoppingConfirmation';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function stripeWebhooks(req, res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'];

  console.log('stripeWebhooks');

  try {
    // buf is the raw request body from Stripe, add .toString() to convert to string and pass to stripe.webhooks.constructEvent
    const event = stripe.webhooks.constructEvent(buf.toString(), sig, process.env.STRIPE_WEBHOOK_SECRET);
    //   console.log('event: ', event);
    if (event.type === 'payment_intent.succeeded') {
      console.log('stripeWebhooks payment_intent.succeeded');
      // console.log('payment succeeded, payment_intent.succeeded');
      const { dealId } = event.data.object.metadata;
      await finalize(dealId);

      const {
        temporaryCustomer: {
          fields: { addressData, invoiceAddressData, basketData },
        },
      } = await finalize(dealId);

      const basket = JSON.parse(basketData);
      const address = JSON.parse(addressData);
      const invoiceAddress = JSON.parse(invoiceAddressData);

      const combinedAddress = invoiceAddress ? { ...address, ...invoiceAddress } : address;

      // send email to Bask and Customer
      res.json({ received: true });
      console.log('time to send confirmations to bask and customer');
      // await sendMessageToBask(combinedAddress, basket);
      const transporterProd = nodemailer.createTransport({
        host: 'ssl0.ovh.net',
        port: 465,
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL_SHOPPING_PROD,
          pass: process.env.EMAIL_PASS_PROD,
        },
      });

      console.log('after createTransport');

      await new Promise(() => {
        // await new Promise((resolve, reject) => {
        // send mail

        transporterProd.sendMail({
          // from: `Bask - zakupy <${process.env.NEXT_PUBLIC_EMAIL_SHOPPING_PROD}>`,
          // to: `Bask - kontakt <${process.env.NEXT_PUBLIC_EMAIL_CONTACT_PROD}>`,
          from: `<zakupy@bask.com.pl>`,
          to: '<kontakt@bask.com.pl>',

          replyTo: `${addressData.email}`,
          subject: '✔ Bask - klient opłacił zamówienie 🛒',
          // text: 'Bask - klient opłacił zamówienie 🛒',
          html: renderToString(<BaskShoppingConfirmation addressData={combinedAddress} basketData={basket} />),
          // html: renderToString(<BaskShoppingConfirmation addressData={addressData} basketData={basketData} />),
        });
      });

      // await sendMessageToCustomer(combinedAddress, basket);

      //todo: here Promise
      console.log('confirmations sent, i hope');
    } else if (event.type === 'payment_intent.payment_failed') {
      console.log('payment failed');
      res.json({ received: true });
    } else {
      console.log(`Unhandled event type ${event.type}`);
      res.json({ received: true });
    }
  } catch (error) {
    console.log('error.message: ', error.message);
    res.status(400).json(`Webhook Error: ${error.message}`);
  }
}
// todo: add other events
// res.json({ received: true });
