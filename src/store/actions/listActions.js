import * as actionTypes from '../actionTypes/actionTypes';

export const createList = list => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('lists')
      .add({
        ...list,
        createdOn: new Date(),
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
      })
      .then(() => {
        dispatch({ type: actionTypes.CREATE_NEW_LIST, list });
        console.log('In create list');
      })
      .catch(err => {
        dispatch({ type: 'CREATE_LIST_ERROR', err });
      });
  };
};

export const addItemToList = (item, listId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('lists')
      .doc(listId)
      .collection('items')
      .add({
        ...item,
        createdOn: new Date(),
      })
      .then(docRef => {
        dispatch({ type: actionTypes.ADD_ITEM_TO_LIST, item });
        console.log('In add item to list', docRef);
      })
      .catch(err => {
        dispatch({ type: 'ADD_ITEM_TO_LIST_ERROR', err });
      });
  };
};
