import finalizeCheckout from 'services/checkout/finalize';

const newUser = async (req, res) => {
  switch (req.method) {
    case 'POST': {
      try {
        const stripeCheckoutId = req.body;
        const { checkout } = await finalizeCheckout(stripeCheckoutId);

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

export default newUser;
