/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';
import { ReactReduxContext } from 'react-redux';

/**
 * Custom hook that attaches reducer to redux state tree
 * The hook is only runs on first render
 * https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
 * @param {string} key - name in the redux state tree to use
 * @param {function} reducer - reducer function to use
 */
export default function useStore({ key, reducer }) {
  const context = useContext(ReactReduxContext);

  useEffect(() => {
    context.store.injectReducer(key, reducer);
  }, []); // [] => we want to run this hook only once
}
