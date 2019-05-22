import { createTypes, createReducer, completeReducer, completeState } from 'redux-recompose';

const initialState = completeState({
  accounts: [],
});

const actions = createTypes([
  'CREATE',
  'READ',
  'UPDATE',
  'DELETE',
], '@@ACCOUNT');

const reducerDescription = {
  primaryActions: [actions.CREATE, actions.READ, actions.UPDATE, actions.DELETE],
}

export default createReducer(initialState, completeReducer(reducerDescription));
