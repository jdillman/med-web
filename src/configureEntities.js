/* 
  An Entity is high level data model. By configuring an adapter and schema
  you can generate an easy to use structure without unncessary boilerplate.

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
// import { entityFieldTypes } from ''

export const ENTITY = {
  STRING: '',
  UUID: 'uuid',
  BOOL: 'bool',
  DATE: 'date',
  DATETIME: 'datetime',
};

const entityConfigure = [{
  adapter: {
    path: 'accounts',
    // advanced usercases
    normalizer: () => { console.log('<--- coming in')},
    serializer: () => { console.log('going out --->')},
  },
  schema: {
    id: ENTITY.UUID,
    name: ENTITY.STRING,
    active: ENTITY.BOOL,
    activeAt: ENTITY.DATETIME,
    createdAt: ENTITY.DATETIME,
    updatedAt: ENTITY.DATETIME,
  },
}];


  // const { object, string, number, date } = require('yup')
  // 
  // const contactSchema = object({
  //   name: string()
  //     .required(),
  //   age: number()
  //     .required()
  //     .positive()
  //     .integer(),
  //   email: string()
  //     .email(),
  //   website: string()
  //     .url(),
  //   createdOn: date()
  //     .default(() => new Date())
  // })
  // 
  // contactSchema.cast({
  //   name: 'jimmy',
  //   age: '24',
  //   createdOn: '2014-09-23T19:25:25Z'
  // })
  // 



export default entityConfigure;
