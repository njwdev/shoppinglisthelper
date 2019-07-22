import authReducer from './authReducer';
import shoppingListReducer from './shoppingListReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,

  shoppingList: shoppingListReducer,
});

export default rootReducer;
