import finalize from 'services/checkout/finalize';

export default async function successPayment(req, res) {
  switch (req.method) {
    case 'PUT': {
      try {
        const { id } = req.query;

        const { customerOrder, checkout } = await finalize(id);

        res.status(200).json({ customerOrder, checkout });
      } catch (error) {
        console.log('error.message: ', error.message);
        res.status(422).json({ customerOrder: null, checkout: null, error });
      }
      break;
    }
    default:
      res.status(400);
  }
}
