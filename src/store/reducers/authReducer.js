import * as actionTypes from '../actionTypes/actionTypes';

const initialState = { authError: null };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_ERROR:
      console.log('login failed');
      return {
        ...state,
        authError: 'Login failed',
      };
    case actionTypes.LOGIN_SUCCESS:
      console.log('login success');
      return {
        ...state,
        authError: null,
      };
    case actionTypes.LOGOUT_SUCCESS:
      console.log('Logout success');
      return state;
    case actionTypes.LOGOUT_ERROR:
      console.log("Logout didn't work");
      return state;

    case actionTypes.SIGNUP_SUCCESS:
      console.log('sign up successful');
      return { ...state, authError: null };
    case actionTypes.SIGNUP_ERROR:
      console.log("sign up didn't work");
      return { ...state, authError: action.err.message };

    default:
      return state;
  }
};

export default authReducer;
