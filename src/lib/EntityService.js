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
const CRUDactions = createTypes(['CREATE', 'READ', 'UPDATE', 'DELETE'], '@ENTITY');

// this is completed to auto include _success _failure events/state. Actions
// you don't want to have this behavior add to override
const reducerDescription = {
  primaryActions: [CRUDactions.CREATE, CRUDactions.READ, CRUDactions.UPDATE, CRUDactions.DELETE],
  override: {},
};

const actionCreator = (type, target, entity) => {
  return (params) => ({
    type,
    target,
    service: api.bind(this, target),
    payload: params,
    successSelector: payload => normalizeData(payload.data, entity),
    failureSelector: response => () => {
      console.log('failure', response);
    },
  });
};

// todo Not happy with this, move abstraction to an adapter
const createApi = (target, entity) => {
  return {
    getAll: actionCreator(CRUDactions.READ, target, entity),
    get: actionCreator(CRUDactions.READ, target, entity),
    create: actionCreator(CRUDactions.CREATE, target, entity),
    remove: actionCreator(CRUDactions.DELETE, target, entity),
    update: actionCreator(CRUDactions.UPDATE, target, entity),
  };
};

// Injectable item formatter
function cleanData(schema, data) {
  return data;
}

function normalizeData(data = [], entity) {
  const allIds = [];
  const byId = data.reduce((acc, item) => {
    acc[item.id] = cleanData(entity.schema, item);
    allIds.push(item.id);
    return acc;
  }, {});

  return {
    allIds,
    byId,
    sortedIds: { ...allIds }, // todo
  }
}

const entities = {};
const initState = {};

Object.entries(entityConfig).forEach(([ target, entity ]) => {
  const { schema } = entity;
  initState[target] = { schema, ...entityState };
  entities[target] = { ...createApi(target, entity)};
});

const initialState = completeState(initState);

export { entities };
export default createReducer(initialState, completeReducer(reducerDescription));
