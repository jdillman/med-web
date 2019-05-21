import { wrapService, withPostSuccess } from 'redux-recompose';

const initialState = {
  targetLoading: true
};

const reducerDescription = {
  [actions.LOADED]: onLoaded()
};

export default createReducer(initialState, reducerDescription);






class AccountService {
  constructor() {
    this.items = [
      {
        account_id: 1,
        name: "test1",
        active: false,
        active_at: null,
      },
      {
        account_id: 1,
        name: "test1",
        active: false,
        active_at: null,
      },
    ];
  }

  async getAll() {
    return Promise.resolve(this.items);
  }

  async get(id) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        return Promise.resolve(this.items[i]);
      }
    }

    return null;
  }

  async create(item) {
    console.log("ItemService.createItem():");
    console.log(item);
    return Promise.resolve(item);
  }

  async deleteItem(itemId) {
    console.log("ItemService.deleteItem():");
    console.log("item ID:" + itemId);
  }

  async updateItem(item) {
    console.log("ItemService.updateItem():");
    console.log(item);
  }
}

// Export your service by also specifying the reducer name and the target for each action.
export default wrapService(service, 'account', { getCards: 'cards' });

