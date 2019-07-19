import authReducer from './authReducer';
import listReducer from './listReducer';
import { combineReducers } from 'react-redux';

const rootReducer = combineReducers({ auth: authReducer, list: listReducer });

export default rootReducer;
