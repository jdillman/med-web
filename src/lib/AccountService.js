import {
  createTypes,
  createReducer,
  completeState,
  completeReducer,
} from 'redux-recompose';

// Actions (namespaced api)
export const actions = createTypes(['CREATE', 'READ', 'UPDATE', 'DELETE'], '@@ACCOUNT');

// Plug in service
const AccountService = {
  getAll: (params) => {
    console.log('load all accounts', params);
    return {};
  },
};

const initialState = completeState({
  accounts: [],
});

// Middleware (side effects)
export const actionCreators = {
  getAll: (params) => {
    return {
      type: actions.READ,
      target: 'accounts',
      service: AccountService.getAll,
      payload: params,
      successSelector: (response) => { console.log('success') /* some return value */ },
      failureSelector: (response) => { console.log('failure') /* some return value */ },
    }
  },
};

// Reducers (state changers)
const reducerDescription = {
  primaryActions: [actions.CREATE, actions.READ, actions.UPDATE, actions.DELETE],
};

export default createReducer(initialState, completeReducer(reducerDescription));
