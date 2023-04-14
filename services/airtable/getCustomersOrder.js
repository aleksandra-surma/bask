import airtableClient from 'services/airtable/airtableClient';
import { db } from 'data/dbData';

export const getCustomersOrder = async (dealId) => {
  const dbId = process.env.AIRTABLE_PAYMENTS_BASE;
  const subDb = db.payments.temporaryCustomers;

  const customerOrder = await airtableClient(dbId)(subDb)
    .select({
      filterByFormula: `dealId = '${dealId}'`,
    })
    .firstPage();

  return customerOrder;
};
