import {
  applyMiddleware,
  createStore,
  compose,
  combineReducers,
} from 'redux';

import thunk from 'redux-thunk';

import { fetchMiddleware } from 'redux-recompose';

import entities from './lib/EntityService'

const rootReducer = combineReducers({
  entities,
});

const middleware = applyMiddleware(thunk, fetchMiddleware);

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middleware);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancers);
}
