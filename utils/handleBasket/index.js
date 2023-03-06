import { actionTypes } from 'reducers/basketReducer';

const handleBasket = {
  addProduct: ({ id, name, price }, selectedColor, selectedSize, dispatch, setBasketItemsAmount) => {
    console.log('handleBasket.addProduct');
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

    setBasketItemsAmount((state) => state + 1);
  },

  deleteProduct: () => {
    console.log('handleBasket.deleteProduct()');
  },
};

export default handleBasket;
