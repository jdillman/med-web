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

const actions = createTypes(['CREATE', 'READ', 'UPDATE', 'DELETE'], '@ENTITY');
const actionCreator = (type, target, schema) => {
  return (params) => ({
    type,
    target,
    service: api.bind(this, target),
    payload: params,
    successSelector: payload => normalizeData(payload.data, schema),
    failureSelector: (response) => () => {},
  });
};

const createApi = (target, entityActions, schema) => {
  const entityApi = {};

  entityActions.forEach(action => {
    switch (action) {
      case 'READ':
        entityApi.getAll = actionCreator(actions.READ, target, schema);
        entityApi.get = actionCreator(actions.READ, target, schema);
        break;
      case 'CREATE':
        entityApi.create = actionCreator(actions.CREATE, target, schema);
        break;
      default:
    }
  });

  return entityApi;
};

export const entities = {};
const initState = {};
entityConfig.forEach(({ path, actions: actionList, schema }) => {
  initState[path] = { schema, ...entityState };
  entities[path] = { ...createApi(path, actionList, schema)};
});

const initialState = completeState(initState);

function cleanData(schema, data) {
  return data;
}

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

// Reducers (state changers)
const reducerDescription = {
  primaryActions: [actions.CREATE, actions.READ, actions.UPDATE, actions.DELETE],
  override: {},
};

export default createReducer(initialState, completeReducer(reducerDescription));
