import Stripe from 'stripe';
import { getCustomersOrder } from 'services/airtable/getCustomersOrder';
import airtableClient from 'services/airtable/airtableClient';
import { db } from '../../data/dbData';

export default async function finalize(dealId) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const [customerOrder] = await getCustomersOrder(dealId);

  // console.log('customerOrder: ', customerOrder);

  const checkout = await stripe.checkout.sessions.retrieve(customerOrder.fields.stripeCheckoutId);

  if (customerOrder.stripeCheckoutStatus === 'succeeded' || checkout.payment_status === 'unpaid') {
    return { customerOrder, checkout };
  }

  const paymentIntent = await stripe.paymentIntents.retrieve(checkout.payment_intent);

  if (paymentIntent.status === 'succeeded') {
    const dbId = process.env.AIRTABLE_PAYMENTS_BASE;
    const subDb = db.payments.temporaryCustomers;

    const [temporaryCustomer] = await airtableClient(dbId)(subDb).update([
      {
        id: customerOrder.id,
        fields: {
          stripeCheckoutStatus: paymentIntent.status,
        },
      },
    ]);
    return { customerOrder, checkout, temporaryCustomer };
  }

  return { customerOrder, checkout, temporaryCustomer: null };
}

// todo: if payment successful decrease product quantity in db

// "Webhook Error: No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? \nLearn more about webhook signing and explore webhook integration examples for various frameworks at https://github.com/stripe/stripe-node#webhook-signing"
