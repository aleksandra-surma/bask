import createCheckout from 'services/checkout/create';

const newUser = async (req, res) => {
  switch (req.method) {
    case 'POST': {
      try {
        const orderItems = req.body;
        console.log('orderItems: ', orderItems);
        const checkout = await createCheckout(orderItems);

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
