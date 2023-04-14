import Stripe from 'stripe';
import { schema } from 'data/form/schema';
import { randomUUID } from 'crypto';
import airtableClient from 'services/airtable/airtableClient';
import { db } from 'data/dbData';

export default async function createCheckout(payload) {
  const { userData, basket, finalPrice, shippingCost } = await schema.createCheckout.validateAsync(payload);

  const addressData = {
    email: userData.email,
    firstName: userData.firstName,
    lastName: userData.lastName,
    address: userData.address,
    additionalAddress: userData.additionalAddress,
    city: userData.city,
    nip: userData.nip,
    phone: userData.phoneNumber,
    postalCode: userData.postalCode,
    addressTheSame: userData.addressTheSame,
    finalPrice,
  };

  const invoiceAddressData = userData.addressTheSame
    ? ''
    : {
        invoiceAddress: userData.invoiceAddress,
        invoiceAdditionalAddress: userData.invoiceAdditionalAddress,
        invoiceCity: userData.invoiceCity,
        invoiceName: userData.invoiceName,
        invoicePostalCode: userData.invoicePostalCode,
      };

  const dbId = process.env.AIRTABLE_PAYMENTS_BASE;
  const subDb = db.payments.temporaryCustomers;

  const {
    id: airtableId,
    fields: { dealId },
  } = await airtableClient(dbId)(subDb).create({
    dealId: randomUUID(),
    basketData: JSON.stringify(basket),
    addressData: JSON.stringify(addressData),
    invoiceAddressData: JSON.stringify(invoiceAddressData),
    stripeCheckoutId: '',
    stripeCheckoutStatus: '',
  });

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
    payment_intent_data: {
      metadata: {
        dealId,
        addressData: JSON.stringify(addressData),
        invoiceAddressData: JSON.stringify(invoiceAddressData),
      },
    },
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
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/card-summary/${dealId}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/card-summary/${dealId}/cancel`,

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

  await airtableClient(process.env.AIRTABLE_PAYMENTS_BASE)(db.payments.temporaryCustomers).update([
    {
      id: airtableId,
      fields: {
        stripeCheckoutId: session.id,
        stripeCheckoutStatus: session.payment_status,
      },
    },
  ]);

  return { checkout: session };
}
