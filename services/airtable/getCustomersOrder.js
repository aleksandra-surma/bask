import airtableClient from 'services/airtable/airtableClient';

export const getCustomersOrder = async (dealId) => {
  const customerOrder = await airtableClient('temporaryCustomers')
    .select({
      filterByFormula: `dealId = '${dealId}'`,
    })
    .firstPage();

  // const customerOrder = await airtableClient('temporaryCustomers')
  //     .select({
  //       filterByFormula: `stripeCheckoutId = '${stripeCheckoutId}'`,
  //     })
  //     .firstPage();

  return customerOrder;
};
