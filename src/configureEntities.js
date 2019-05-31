/* 
  An Entity is high level data model. By configuring a "schema", "path", and
  "actions" you can generate an easy to use structure without unncessary
  boilerplate.

  Example:
  {
    path: 'accounts',
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
// import { entityFieldTypes } from ''

export const ENTITY = {
  STRING: '',
  UUID: 'uuid',
  BOOL: 'bool',
  DATE: 'date',
  DATETIME: 'datetime',
};

const entityConfigure = [{
  path: 'accounts',
  actions: ['CREATE', 'READ'],
  schema: {
    id: ENTITY.UUID,
    name: ENTITY.STRING,
    active: ENTITY.BOOL,
    activeAt: ENTITY.DATETIME,
    createdAt: ENTITY.DATETIME,
    updatedAt: ENTITY.DATETIME,
  },
}];

export default entityConfigure;
