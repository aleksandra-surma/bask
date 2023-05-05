import airtableClient from './airtableClient';

export const getAllRecords = async (airtableDb, subDb) => {
  const products = await airtableClient(airtableDb)(subDb).select().firstPage();

  if (products) {
    return products.map((product) => ({ airtableId: product.id, ...product.fields }));
  }

  return products;
};

export const getFilteredRecords = async (airtableDb, subDb, condition) => {
  const productsHighlighted = await airtableClient(airtableDb)(subDb)
    .select({
      filterByFormula: condition,
    })
    .firstPage();

  return productsHighlighted;
};
