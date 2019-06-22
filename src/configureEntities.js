/* 
  An Entity is high level data model. By configuring an adapter and yup schemas
  you can generate an easy to use redux structure without unncessary boilerplate.

  Example:
  {
    adapter: 'accounts',
    schema: {}
  }

  Generates:
  
  // Dispatchable Action creators to hydrate the store.
  // Built in form validations on create(), update() against schema.
  // Handles loading and success/failure states + last error message
  import { entities } from '/lib/entityService';
  entities.accounts.{get, getAll, create, delete, update}

  // Store has an accounts object with well structured data
  const mapState = ({ entities: { accounts } }) => ({
    accounts: accounts.allIds.map(id => accounts.byId[id]),
  });

*/

import accounts from './entities/account';

const entities = {
  accounts,
};

console.log(entities);

export default entities;
