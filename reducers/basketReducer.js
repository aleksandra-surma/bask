// Define the initial state for the buy reducer
const initialState = {
  basket: [],
};

// Define the types of actions that can be dispatched to the reducer
const actionTypes = {
  ADD_TO_BASKET: 'ADD_TO_BASKET',
  INCREMENT_PRODUCT_QUANTITY: 'INCREMENT_PRODUCT_QUANTITY',
  DECREMENT_PRODUCT_QUANTITY: 'DECREMENT_PRODUCT_QUANTITY',
  REMOVE_FROM_BASKET: 'REMOVE_FROM_BASKET',
};

// Define the basket reducer function
const basketReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET: {
      if (!state) {
        return { basket: [action.payload] };
      }

      // check if there is already the same product in basket
      const productIndex = state?.basket?.findIndex((item) => {
        return item.name === action.payload.name && item.color.name === action.payload.color.name && item.size.name === action.payload.size.name;
      });

      if (productIndex === -1) {
        return {
          ...state,
          basket: [...state.basket, action.payload],
        };
      }

      const updatedBasket = state?.basket?.map((product, index) => {
        if (productIndex === index) {
          const updatedQuantity = product.quantity + 1;
          return { ...product, quantity: updatedQuantity };
        }
        return product;
      });

      return {
        basket: updatedBasket,
      };
    }

    case actionTypes.INCREMENT_PRODUCT_QUANTITY: {
      if (!state) {
        return null;
      }

      const incrementProduct = action.payload.product;

      const updatedBasket = state.basket.map((product) => {
        if (
          product.name === incrementProduct.name &&
          product.size.name === incrementProduct.size.name &&
          product.color.name === incrementProduct.color.name
        ) {
          const updatedQuantity = product.quantity + 1;
          return { ...product, quantity: updatedQuantity };
        }
        return product;
      });

      return {
        ...state,
        basket: updatedBasket,
      };
    }

    case actionTypes.DECREMENT_PRODUCT_QUANTITY: {
      if (!state) {
        return null;
      }
      const decrementProduct = action.payload.product;

      if (decrementProduct.quantity < 2) {
        return null;
      }

      const updatedBasket = state.basket.map((product) => {
        if (
          product.name === decrementProduct.name &&
          product.size.name === decrementProduct.size.name &&
          product.color.name === decrementProduct.color.name
        ) {
          const updatedQuantity = product.quantity - 1;
          return { ...product, quantity: updatedQuantity };
        }
        return product;
      });

      return {
        ...state,
        basket: updatedBasket,
      };
    }

    case actionTypes.REMOVE_FROM_BASKET: {
      if (!state) {
        return null;
      }
      const removeProduct = action.payload.product;

      const updatedBasket = state.basket.filter((product) => {
        return !(
          product.name === removeProduct.name &&
          product.size.name === removeProduct.size.name &&
          product.color.name === removeProduct.color.name
        );
      });

      return {
        ...state,
        basket: updatedBasket,
      };
    }

    default:
      return state;
  }
};

export { initialState, actionTypes, basketReducer };
