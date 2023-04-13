import airtableClient from './airtableClient';

export const getAllRecords = async (db) => {
  const products = await airtableClient(db).select().firstPage();

  if (products) {
    return products.map((product) => ({ airtableId: product.id, ...product.fields }));
  }

  return products;
};

export const getFilteredRecords = async (db, condition) => {
  const productsHighlighted = await airtableClient(db)
    .select({
      filterByFormula: condition,
    })
    .firstPage();

  return productsHighlighted;
};
