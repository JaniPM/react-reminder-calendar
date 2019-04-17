import reducer, { initialState } from './reducer';

export { reducer };

/**
 * Root state selectors
 */

export const selectRoot = state => state.root || initialState;
