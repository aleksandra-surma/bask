import airtableClient from 'services/airtable/airtableClient';

export const getCustomersOrder = async (dealId) => {
  const customerOrder = await airtableClient('temporaryCustomers')
    .select({
      filterByFormula: `dealId = '${dealId}'`,
    })
    .firstPage();

  console.log('getCustomersOrder customerOrder: ', customerOrder);

  // const customerOrder = await airtableClient('temporaryCustomers')
  //     .select({
  //       filterByFormula: `stripeCheckoutId = '${stripeCheckoutId}'`,
  //     })
  //     .firstPage();

  return customerOrder;
};
