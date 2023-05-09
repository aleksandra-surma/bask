import Stripe from 'stripe';
import finalize from 'services/checkout/finalize';
import { buffer } from 'micro';
import { renderToString } from 'react-dom/server';
import ShoppingConfirmation from 'components/Message/ShoppingConfirmation';
import postmarkClient from 'services/email/postmarkClient';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function stripeWebhooks(req, res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(buf.toString(), sig, process.env.STRIPE_WEBHOOK_SECRET);

    if (event.type === 'payment_intent.succeeded') {
      console.log('stripeWebhooks payment_intent.succeeded');
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

      res.json({ received: true });
      console.log('time to send confirmations to bask and customer');

      const messages = [
        {
          From: process.env.NEXT_PUBLIC_EMAIL_SHOPPING_PROD,
          To: process.env.NEXT_PUBLIC_EMAIL_CONTACT_PROD,
          Subject: '✔ Bask - klient opłacił zamówienie 🛒',
          HtmlBody: renderToString(<ShoppingConfirmation addressData={combinedAddress} basketData={basket} />),
        },
        {
          From: process.env.NEXT_PUBLIC_EMAIL_SHOPPING_PROD,
          To: combinedAddress.email,
          Subject: '✔ Bask - Twoje zamówienie zostało opłacone 🛒',
          HtmlBody: renderToString(<ShoppingConfirmation addressData={combinedAddress} basketData={basket} />),
        },
      ];

      await postmarkClient.sendEmailBatch(messages, function (error, batchResults) {
        if (error) {
          console.error(`Unable to send via postmark: ${error.message}`);
          return;
        }
        console.log('batchResults:', batchResults);
        console.info('Messages sent to postmark');
      });
    } else if (event.type === 'payment_intent.payment_failed') {
      console.log('payment failed');
      return res.json({ received: true });
    } else {
      console.log(`Unhandled event type ${event.type}`);
      return res.json({ received: true });
    }
  } catch (error) {
    console.log('error.message: ', error.message);
    return res.status(400).json(`Webhook Error: ${error.message}`);
  }
  return res.send({ received: true });
  // return res.status(200).json({ received: true });
}
// todo: add other events
