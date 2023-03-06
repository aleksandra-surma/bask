import { createContext, useEffect } from 'react';
import { initialState, basketReducer } from '../reducers/basketReducer';
import usePersistedContext from '../hooks/usePersistedContext';

const initialBasketState = { basket: [] };
// create a new context object
export const BasketContext = createContext(initialBasketState);

// create a provider component to wrap your application and provide the context value
export const BasketProvider = ({ children }) => {
  const [state, dispatch] = usePersistedContext('bask-basket', basketReducer, initialBasketState);

  useEffect(() => {
    console.log('initialState: ', initialState);
    // dispatch({ type: actionTypes.ADD_TO_BASKET });
  }, []);
  console.log('state: ', state);

  return <BasketContext.Provider value={{ state, dispatch }}>{children}</BasketContext.Provider>;
};

// BasketProvider.getInitialProps = async () => {
//   const [state, dispatch] = usePersistedContext('bask-basket', basketReducer, initialState);
//
//   // let initialState = '';
//   //
//   // if (typeof window !== 'undefined') {
//   //   initialState = localStorage.getItem('bask-basket');
//   // }
//
//   return { state, dispatch };
// };
