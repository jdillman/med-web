import {
  createTypes,
  createReducer,
  completeState,
  completeReducer,
} from 'redux-recompose';
import api from './api';

const entityList = {
  accounts: {
    byId: {},
    allIds: [],
    sortedIds: [],
  },
  locations: {},
  users: {},
  people: {},
};

export const actions = createTypes(['CREATE', 'READ', 'UPDATE', 'DELETE'], '@ENTITY');
const initialState = completeState(entityList);

function normalizeData(data = []) {
  const allIds = [];
  const byId = data.reduce((acc, item) => {
    acc[item.id] = item;
    allIds.push(item.id);
    return acc;
  }, {});

  return {
    allIds,
    byId,
  }
}

const actionCreator = (type, target) => {
  return (params) => ({
    type,
    target,
    service: api.bind(this, target),
    payload: params,
    successSelector: payload => normalizeData(payload.data),
    failureSelector: (response) => () => {},
  });
}

export const entities = {
  accounts: {
    getAll: actionCreator(actions.READ, 'accounts'),
    get: actionCreator(actions.READ, 'accounts'),
    create: actionCreator(actions.CREATE, 'accounts'),
    delete: actionCreator(actions.DELETE, 'accounts'),
  },
  locations: {
    getAll: actionCreator(actions.READ, 'locations'),
  },
  users: {
    getAll: actionCreator(actions.READ, 'users'),
  },
  people: {
    getAll: actionCreator(actions.READ, 'people'),
  },
}

// Reducers (state changers)
const reducerDescription = {
  primaryActions: [actions.CREATE, actions.READ, actions.UPDATE, actions.DELETE],
  override: {},
};

export default createReducer(initialState, completeReducer(reducerDescription));
