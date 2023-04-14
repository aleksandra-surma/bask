import Stripe from 'stripe';
import finalize from 'services/checkout/finalize';
import { buffer } from 'micro';
import sendMessageToCustomer from 'services/checkout/sendMessageToCustomer';
import sendMessageToBask from 'services/checkout/sendMessageToBask';

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
    // buf is the raw request body from Stripe, add .toString() to convert to string and pass to stripe.webhooks.constructEvent
    const event = stripe.webhooks.constructEvent(buf.toString(), sig, process.env.STRIPE_WEBHOOK_SECRET);
    //   console.log('event: ', event);
    if (event.type === 'payment_intent.succeeded') {
      console.log('payment succeeded, payment_intent.succeeded');
      //     console.log('event.data.object: ', event.data.object);
      const { dealId } = event.data.object.metadata;
      //     console.log('dealId here: ', dealId);
      await finalize(dealId);
      //
      // console.log('event: ', event);

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
      await sendMessageToBask(combinedAddress, basket);
      await sendMessageToCustomer(combinedAddress, basket);
    } else if (event.type === 'payment_intent.payment_failed') {
      console.log('payment failed');
      res.json({ received: true });
    } else {
      console.log(`Unhandled event type ${event.type}`);
      res.json({ received: true });
    }

    //todo: add other events
    // res.json({ received: true });
  } catch (error) {
    console.log('error.message: ', error.message);
    res.status(400).json(`Webhook Error: ${error.message}`);
  }
}
