import {
  createTypes,
  createReducer,
  completeState,
  completeReducer,
} from 'redux-recompose';

export const actions = createTypes(['CREATE', 'READ', 'UPDATE', 'DELETE'], '@ENTITY');
const initialState = completeState({
  accounts: {},
  locations: {},
  users: {},
  people: {},
});

// don't judge :D
const api = resource => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:5001/api/v1/${resource}`)
    .then(response => {
      if (!response.ok) return resolve(response)
      return response.json();
    })
    .then(data => resolve({ ok: true, data }))
    .catch(err => reject(err))
  });
}

function normalizeData(data = []) {
  return data.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
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

export const Entities = {
  accounts: {
    getAll: actionCreator(actions.READ, 'accounts'),
    get: actionCreator(actions.READ, 'accounts', '/{id}'),
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
