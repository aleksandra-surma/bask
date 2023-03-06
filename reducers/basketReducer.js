// Define the initial state for the buy reducer
const initialState = {
  basket: [],
};

// Define the types of actions that can be dispatched to the reducer
const actionTypes = {
  ADD_TO_BASKET: 'ADD_TO_BASKET',
  REMOVE_FROM_BASKET: 'REMOVE_FROM_BASKET',
};

// Define the basket reducer function
const basketReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      if (!state) {
        return { basket: [action.payload] };
      }
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    // case actionTypes.REMOVE_FROM_BASKET:
    //   const index = state.basket.findIndex((item) => item.id === action.payload.id);
    //   const newBasket = [...state.basket];
    //
    //   if (index >= 0) {
    //     newBasket.splice(index, 1);
    //   }
    //
    //   return {
    //     ...state,
    //     basket: newBasket,
    //   };
    default:
      return state;
  }
};

export { initialState, actionTypes, basketReducer };
