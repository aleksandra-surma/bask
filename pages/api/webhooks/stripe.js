import Stripe from 'stripe';
import { buffer } from 'micro';
import finalize from 'services/checkout/finalize';

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
    const event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
    if (event.type === 'payment_intent.succeeded') {
      console.log('event.data.object: ', event.data.object);
      const { dealId } = event.data.object.metadata;
      console.log('dealId here: ', dealId);
      await finalize(dealId);
      // console.log('event: ', event);
    } //todo: add other events
    res.json({ received: true });
  } catch (error) {
    console.log('error.message: ', error.message);
    res.status(400).json(`Webhook Error: ${error.message}`);
  }
}
