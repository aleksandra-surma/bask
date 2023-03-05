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
    // else {
    //   localStorage.setItem(key, JSON.stringify({}));
    // }
  }, [state, key]);

  return [state, dispatch];
}

// import { useReducer, useEffect } from 'react';
//
// export default function usePersistedContext(key, reducer, initialState) {
//   const [state, dispatch] = useReducer(reducer, initialState, () => {
//     const persistedState = localStorage.getItem(key);
//     return persistedState ? JSON.parse(persistedState) : initialState;
//   });
//
//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(state));
//   }, [state, key]);
//
//   return [state, dispatch];
// }

// import { useState, useEffect } from 'react';
//
// // function usePersistedContext(Context, key) {
// function usePersistedContext(key) {
//   const [state, setState] = useState(() => {
//     const persistedState = localStorage.getItem(key);
//     return persistedState ? JSON.parse(persistedState) : {};
//   });
//
//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(state));
//   }, [state, key]);
//
//   return [state, setState];
// }
