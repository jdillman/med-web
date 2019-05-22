import {
  // applyMiddleware,
  createStore,
  compose,
  combineReducers,
} from 'redux';
// Reducers

import accounts from './lib/AccountService'

const rootReducer = combineReducers({
  accounts,
});

// const middleware = applyMiddleware(StatusMiddleware, PatientsMiddleware);

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancers = composeEnhancers(middleware);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState); // , enhancers
}
