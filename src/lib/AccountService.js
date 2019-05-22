import { createTypes, createReducer, completeState } from 'redux-recompose';

const initialState = completeState({
  accounts: [],
});

const actions = createTypes([
  'CREATE',
  'READ',
  'UPDATE',
  'DELETE',
], '@@ACCOUNT');

const reducerDescription: {
  primaryActions: [actions.CREATE, actions.READ, actions.UPDATE, actions.DELETE],
  override: {
    // [actions.custom]: onAdd()
  },
}

// 
// function transformArr(arr, key) {
//   const ordered = [];
//   const byId = arr.reduce((acc, obj) => {
//     ordered.push(obj[key]);
//     return {
//       ...acc,
//       [obj[key]]: obj,
//     };
//   }, {});
// 
//   return {
//     ordered,
//     byId,
//   };
// }

export default createReducer(initialState, completeReducer(reducerDescription))
