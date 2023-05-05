import createCheckout from 'services/checkout/create';

const newCheckout = async (req, res) => {
  switch (req.method) {
    case 'POST': {
      try {
        const payload = req.body;
        const { checkout } = await createCheckout(payload);

        res.status(200).json({ status: 'created', checkout });
      } catch (error) {
        console.log('error: ', error);
        res.status(422).json({ status: 'not_created', error });
      }
      break;
    }
    default:
      res.status(400);
  }
};

export default newCheckout;
