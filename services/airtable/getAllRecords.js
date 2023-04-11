import airtableClient from './airtableClient';

const getAllRecords = async (db) => {
  const products = await airtableClient(db).select().firstPage();

  if (products) {
    return products.map((product) => ({ airtableId: product.id, ...product.fields }));
  }

  return products;
};

export default getAllRecords;
