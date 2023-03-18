import Stripe from 'stripe';
// import { Stripe } from 'stripe'; // check with Stripe

// export default async function finalize(offerId) {

export default async function finalize(stripeCheckoutId) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const checkout = await stripe.checkout.sessions.retrieve(stripeCheckoutId); // todo: other way than in tutorial

  return { checkout };
}

// todo: if payment successful decrease product quantity in db
// todo: chmaro stripe (backend) one more time (time stamp 21:00) - important things !!!
