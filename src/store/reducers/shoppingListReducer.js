import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
  lists: {},
};

const shoppingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_LIST:
      console.log('Created List', action.list);
      return state;
    case 'CREATE_LIST_ERROR':
      console.log('create list error', action.err);
      return state;
    case 'ADD_ITEM_TO_LIST':
      console.log('Added item to List', action.items);
      return state;
    case 'ADD_ITEM_TO_LIST_ERROR':
      console.log('Add item to list error', action.err);
      return state;
    default:
      return state;
  }
};

export default shoppingListReducer;
