import authReducer from './authReducer';
import shoppingListReducer from './shoppingListReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  shoppingList: shoppingListReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
