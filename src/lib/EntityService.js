import {
  createTypes,
  createReducer,
  completeState,
  completeReducer,
} from 'redux-recompose';

import api from './api';
import entityConfig from '../configureEntities';

const entityState = {
  byId: {},
  allIds: [],
  sortedIds: [],
};

// todo configurable with adapters
const RESTactions = createTypes(['CREATE', 'READ', 'UPDATE', 'DELETE'], '@ENTITY');

// this is completed to auto include _success _failure events/state. Actions
// you don't want to have this behavior add to override
const reducerDescription = {
  primaryActions: [RESTactions.CREATE, RESTactions.READ, RESTactions.UPDATE, RESTactions.DELETE],
  override: {},
};

const actionCreator = (type, target, schema) => {
  return (params) => ({
    type,
    target,
    service: api.bind(this, target),
    payload: params,
    successSelector: payload => normalizeData(payload.data, schema),
    failureSelector: response => () => {
      console.log('failure', response);
    },
  });
};

// todo Not happy with this, move abstraction to an adapter
const createApi = (adapter, schema) => {
  const { path, type = 'REST' } = adapter;

  switch (type) {
    case 'REST':
      return {
        getAll: actionCreator(RESTactions.READ, path, schema),
        get: actionCreator(RESTactions.READ, path, schema),
        create: actionCreator(RESTactions.CREATE, path, schema),
        remove: actionCreator(RESTactions.DELETE, path, schema),
        update: actionCreator(RESTactions.UPDATE, path, schema),
      };
    default:
  }

  return {};
};

// Injectable item formatter
function cleanData(schema, data) {
  return data;
}

// Injectable normalizer
function normalizeData(data = [], schema = {}) {
  const allIds = [];
  const byId = data.reduce((acc, item) => {
    acc[item.id] = cleanData(schema, item);
    allIds.push(item.id);
    return acc;
  }, {});

  return {
    schema,
    allIds,
    byId,
    sortedIds: { ...allIds }, // todo
  }
}

const entities = {};
const initState = {};
entityConfig.forEach(({ adapter, schema }) => {
  initState[adapter.path] = { schema, ...entityState };
  entities[adapter.path] = { ...createApi(adapter, schema)};
});

const initialState = completeState(initState);

export { entities };
export default createReducer(initialState, completeReducer(reducerDescription));
