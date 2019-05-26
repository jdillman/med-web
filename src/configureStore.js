import {
  applyMiddleware,
  createStore,
  compose,
  combineReducers,
} from 'redux';

import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import entityReducer from './lib/entityService'

const rootReducer = combineReducers({
  entities: entityReducer,
});

// entities use thunks and fetchMiddlewar
const middleware = applyMiddleware(thunk, fetchMiddleware);

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middleware);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancers);
}
