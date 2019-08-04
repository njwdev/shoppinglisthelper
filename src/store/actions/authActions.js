import * as actionTypes from '../actionTypes/actionTypes';
import firebase from '../../config/firebase/firebaseConfig';

export const login = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: actionTypes.LOGIN_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: actionTypes.LOGIN_ERROR, err });
      });
  };
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: actionTypes.LOGOUT_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: actionTypes.LOGOUT_ERROR, err });
      });
  };
};
