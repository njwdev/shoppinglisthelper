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

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        return firestore
          .collection('users')
          .doc(res.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          });
      })
      .then(() => {
        dispatch({ type: actionTypes.SIGNUP_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: actionTypes.SIGNUP_ERROR, err });
      });
  };
};
