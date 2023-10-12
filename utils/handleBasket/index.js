import { actionTypes } from 'reducers/basketReducer';

const handleBasket = {
  addProduct: (product, selectedColor, selectedSize, dispatch, setBasketItemsAmount) => {
    const { id, name, price, slug, promotionPrice, promotionValue } = product;

    const basketProduct = {
      id,
      name,
      price: promotionValue > 0 ? promotionPrice : price,
      slug,
      img: product[`attachments-${selectedColor}`][0].thumbnails.large.url,
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
