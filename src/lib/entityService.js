import { createTypes, createReducer, completeState, completeReducer } from 'redux-recompose';

// TODO configurable
import { create, list, update, remove } from './api';
import entityConfig from '../configureEntities';

const entityState = {
  byId: {},
  allIds: [],
  sortedIds: [],
};

const CRUDactions = createTypes(['CREATE', 'READ', 'UPDATE', 'DELETE'], '@ENTITY');
const reducerDescription = {
  primaryActions: [CRUDactions.CREATE, CRUDactions.READ, CRUDactions.UPDATE, CRUDactions.DELETE],
  override: {},
};

const apiMapper = type => {
  switch (type) {
    case CRUDactions.CREATE:
      return create;
    case CRUDactions.DELETE:
      return remove;
    case CRUDactions.UPDATE:
      return update;
    case CRUDactions.READ:
    default:
      return list;
  }
};

const actionCreator = (type, target, entity) => {
  return params => {
    return {
      type,
      target,
      // Service function to be executed
      service: apiMapper(type).bind(this, target),
      // The params will be passed into the service function
      payload: params,
      successSelector: payload => normalizeData(payload.data, entity),
      failureSelector: response => () => {
        console.log('failure', response);
      },
    };
  };
};

const createActions = (target, entity) => {
  return {
    getAll: actionCreator(CRUDactions.READ, target, entity),
    get: actionCreator(CRUDactions.READ, target, entity),
    create: actionCreator(CRUDactions.CREATE, target, entity),
    remove: actionCreator(CRUDactions.DELETE, target, entity),
    update: actionCreator(CRUDactions.UPDATE, target, entity),
  };
};

// TODO configurable
function cleanData(data, entity) {
  return entity.schema.cast(data);
}

// TODO configurable
function normalizeData(data = [], entity) {
  const allIds = [];
  const sortedIds = [];

  // todo better
  data.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  const byId = data.reduce((acc, item) => {
    acc[item.id] = cleanData(item, entity);
    allIds.push(item.id);
    return acc;
  }, {});

  return {
    allIds,
    byId,
    sortedIds,
  };
}

const entityActions = {};
const initState = {};

Object.entries(entityConfig).forEach(([target, entity]) => {
  initState[target] = { ...entityState };
  entityActions[target] = { ...createActions(target, entity) };
});

const initialState = completeState(initState);

export { entityActions };
export default createReducer(initialState, completeReducer(reducerDescription));
