import { getAllRecords } from 'services/airtable/getAllRecords';

const getProducts = async (req, res) => {
  switch (req.method) {
    case 'GET': {
      try {
        const products = await getAllRecords();

        res.status(200).json({ products });
      } catch (error) {
        res.status(422).json({ products: [] });
      }
      break;
    }
    default:
      res.status(400);
  }
};

export default getProducts;
