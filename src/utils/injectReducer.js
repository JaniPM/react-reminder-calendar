import React from 'react';
import useStore from '../hooks/useStore';

/**
 * Dynamically injects a reducer
 *
 * @param {string} key A key of the reducer
 * @param {function} reducer A reducer that will be injected
 *
 */
export default ({ key, reducer }) => (WrappedComponent) => {
  const ReducerInjector = (props) => {
    useStore(key, reducer);
    return (<WrappedComponent {...props} />);
  };
  return ReducerInjector;
};
