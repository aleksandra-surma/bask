// custom hook to access the global state from any component in your application
import { useContext } from 'react';
import { BasketContext } from '../contexts/BasketContext';

const useBasketState = () => useContext(BasketContext);

export default useBasketState;
