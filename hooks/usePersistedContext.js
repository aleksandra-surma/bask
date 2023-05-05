import { useReducer, useEffect } from 'react';

export default function usePersistedContext(key, reducer, initialState) {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    if (typeof window !== 'undefined') {
      const persistedState = localStorage.getItem(key);
      return persistedState ? JSON.parse(persistedState) : initialState;
    }
    return initialState;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state, key]);

  return [state, dispatch];
}
