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
          // size: basketItem.size,
          // color: basketItem.color,
        },
        unit_amount: basketItem.price * 100,
      },
      quantity: basketItem.quantity,
      customer_details: {},
    };
  });
  // images: basketItem.img,

  const paymentObject = {
    payment_method_types: ['blik', 'p24', 'card'],
    line_items: lineItems,
    mode: 'payment',
    locale: 'pl',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/card-summary/checkout`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/card-summary`,

    // billing_details: {
    //   address: {
    //     name: 'Test Tester',
    //     phone: '601234567',
    //     city: 'Lublin',
    //     line1: 'Zimowa 10/25',
    //     postal_code: '20-337',
    //   },
    // },
  };

  const session = await stripe.checkout.sessions.create(paymentObject);

  return session;
}
