import { actionTypes } from 'reducers/basketReducer';

const handleBasket = () => ({
  addProduct: ({ id, name, price }, selectedColor, selectedSize, dispatch) => {
    console.log('here: ');
    const basketProduct = {
      id,
      name,
      price,
      color: selectedColor,
      size: selectedSize,
    };

    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      payload: basketProduct,
    });
  },
  deleteProduct: () => {
    console.log('handleBasket.deleteProduct()');
  },
});

export const addProduct = ({ id, name, price }, selectedColor, selectedSize, dispatch) => {
  console.log('here: ');
  const basketProduct = {
    id,
    name,
    price,
    color: selectedColor,
    size: selectedSize,
  };

  dispatch({
    type: actionTypes.ADD_TO_BASKET,
    payload: basketProduct,
  });
};

export default handleBasket;
