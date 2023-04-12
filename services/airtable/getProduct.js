import { db } from 'data/dbData';
import airtableClient from './airtableClient';
import getAllRecords from './getAllRecords';

const getProduct = async (slug) => {
  const [product] = await airtableClient(db.products)
    .select({
      // sort: [{ field: 'id', direction: 'desc' }],
      filterByFormula: `slug="${slug}"`,
    })
    .firstPage();
  console.log('product: ', product);

  if (!product) {
    return product;
  }

  const storeItems = await getAllRecords(db.store);

  const selectedStoreItems = storeItems.filter((storeItem) => {
    return product.fields.store.some((item) => item === storeItem.airtableId);
  });

  // console.log('{ id: product.id, ...product.fields, store: selectedStoreItems }: ', { id: product.id, ...product.fields, store: selectedStoreItems });

  const storeItemsWithStockQuantity = selectedStoreItems.map((storeItem) => {
    // console.log('storeItem: ', storeItem);

    const storeQuantityObj = [
      {
        name: '86/92',
        quantity: storeItem['size_86/92'],
      },
      {
        name: '98/104',
        quantity: storeItem['size_98/104'],
      },
      {
        name: '110/116',
        quantity: storeItem['size_110/116'],
      },
      {
        name: '122/128',
        quantity: storeItem['size_122/128'],
      },
      {
        name: '134/140',
        quantity: storeItem['size_134/140'],
      },
    ];

    delete storeItem['size_86/92'];
    delete storeItem['size_98/104'];
    delete storeItem['size_110/116'];
    delete storeItem['size_122/128'];
    delete storeItem['size_134/140'];

    return { ...storeItem, quantity: storeQuantityObj };
  });

  return { id: product.id, ...product.fields, store: storeItemsWithStockQuantity };
};

export default getProduct;
