const getProducts = async (req, res) => {
  switch (req.method) {
    case 'GET': {
      try {
        // const products = await getAllProducts();

        // res.status(200).json({ products });
        res.status(200).json({});
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
