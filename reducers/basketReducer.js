// Define the initial state for the buy reducer
const initialState = {
  basket: [],
};

// Define the types of actions that can be dispatched to the reducer
const actionTypes = {
  ADD_TO_BASKET: 'ADD_TO_BASKET',
  INCREMENT_PRODUCT_QUANTITY: 'INCREMENT_PRODUCT_QUANTITY',
  DECREMENT_PRODUCT_QUANTITY: 'DECREMENT_PRODUCT_QUANTITY',
  COUNT_ITEMS_BASKET: 'COUNT_ITEMS_BASKET',
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
      console.log('action: ', action);

      return 'Test';
    }
    case actionTypes.COUNT_ITEMS_BASKET:
      return 0;
    default:
      return state;
  }
};

export { initialState, actionTypes, basketReducer };
