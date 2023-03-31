import Stripe from 'stripe';
import { getCustomersOrder } from '../airtable/getCustomersOrder';
import airtableClient from '../airtable/airtableClient';
// import { Stripe } from 'stripe'; // check with Stripe

// export default async function finalize(offerId) {

export default async function finalize(dealId) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const [customerOrder] = await getCustomersOrder(dealId);

  const checkout = await stripe.checkout.sessions.retrieve(customerOrder.fields.stripeCheckoutId);

  if (customerOrder.stripeCheckoutStatus === 'succeeded' || checkout.payment_status === 'unpaid') {
    return { customerOrder, checkout };
  }

  const paymentIntent = await stripe.paymentIntents.retrieve(checkout.payment_intent);

  if (paymentIntent.status === 'succeeded') {
    await airtableClient('temporaryCustomers').update([
      {
        id: customerOrder.id,
        fields: {
          stripeCheckoutStatus: paymentIntent.status,
        },
      },
    ]);
    return { customerOrder, checkout };
  }

  return { customerOrder, checkout };
}

// todo: if payment successful decrease product quantity in db
