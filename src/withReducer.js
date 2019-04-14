import React from 'react';
import { ReactReduxContext } from 'react-redux';

const withReducer = (key, reducer) => (WrappedComponent) => {
  const Extended = (props, context) => {
    const { store } = context;

    // Add new reducer to store
    store.injectReducer(key, reducer);

    // Now just give back the original component as-is.
    return <WrappedComponent {...props} />;
  };

  Extended.contextTypes = {
    store: ReactReduxContext
  };

  return Extended;
};

export default withReducer;
