// import Stripe from 'stripe';
import { Stripe } from 'stripe';

export default async function createCheckout() {
  // export default async function createCheckout(payload) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  return stripe.checkout; // dummy return
}
