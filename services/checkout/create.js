import Stripe from 'stripe';
import { schema } from 'data/form/schema';
// import { Stripe } from 'stripe'; // check with Stripe

export default async function createCheckout(payload) {
  const { userData, basket, shippingCost } = await schema.createCheckout.validateAsync(payload);

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const lineItems = basket.map((basketItem) => {
    return {
      price_data: {
        currency: 'PLN',
        product_data: {
          name: basketItem.name,
          description: `${basketItem.size} ${basketItem.color}`,
          metadata: {
            size: basketItem.size,
            color: basketItem.color,
          },
        },
        unit_amount: basketItem.price * 100,
      },
      quantity: basketItem.quantity,

      customer_details: {},
    };
  });

  const paymentObject = {
    payment_method_types: ['blik', 'p24', 'card'],
    line_items: lineItems,
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: { amount: shippingCost ? shippingCost * 100 : 0, currency: 'pln' },
          display_name: shippingCost ? 'Koszt przesyłki' : 'Darmowa dostawa',
        },
      },
    ],
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

  console.log('userData: ', userData);

  return session;
}
