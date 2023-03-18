import Stripe from 'stripe';
// import { Stripe } from 'stripe'; // check with Stripe

// todo: add Joi schema

export default async function createCheckout(payload) {
  // todo: add Joi validation

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  console.log('createCheckout payload: ', payload);

  const basket = payload;

  const lineItems = basket.map((basketItem) => {
    return {
      price_data: {
        currency: 'PLN',
        // currency: basketItem.priceCurrency,
        product_data: {
          name: basketItem.name,
          // color: basketItem.color,
          // size: basketItem.size,
        },
        unit_amount: basketItem.price,
      },
      quantity: basketItem.quantity,
    };
  });

  const paymentObject = {
    payment_method_types: ['blik', 'p24', 'card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/card-summary/checkout`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/card-summary/checkout`,
  };

  const session = await stripe.checkout.sessions.create(paymentObject);

  return session;
}
