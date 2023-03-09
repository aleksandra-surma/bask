import { actionTypes } from 'reducers/basketReducer';

const handleBasket = {
  addProduct: ({ id, name, price, images, slug }, selectedColor, selectedSize, dispatch, setBasketItemsAmount) => {
    const basketProduct = {
      id,
      name,
      price,
      slug,
      img: images[selectedColor.name][0].src.src,
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
    };

    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      payload: basketProduct,
    });

    setBasketItemsAmount((state) => state + 1); // <- todo: check if necessary
  },
  incrementQuantity: (product, dispatch) => {
    dispatch({
      type: actionTypes.INCREMENT_PRODUCT_QUANTITY,
      payload: { product },
    });
  },
  decrementQuantity: (product, dispatch) => {
    dispatch({
      type: actionTypes.DECREMENT_PRODUCT_QUANTITY,
      payload: { product },
    });
  },

  removeProduct: (product, dispatch) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_BASKET,
      payload: { product },
    });
  },

  getAllProducts: () => {
    console.log('handleBasket.getAllProducts()');
    // todo: getAllProducts()
  },
};

export default handleBasket;
