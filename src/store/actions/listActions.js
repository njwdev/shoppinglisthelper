import * as actionTypes from '../actionTypes/actionTypes';

export const createList = list => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('lists')
      .add({
        ...list,
        createdOn: new Date(),
        authorId: 'Samwise',
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

export const addItemToList = list => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('lists')
      .add({
        ...list.items,
        test: test,
      })
      .then(() => {
        dispatch({ type: actionTypes.ADD_ITEM_TO_LIST, list });
        console.log('inside add to list');
      })
      .catch(err => {
        dispatch({ type: 'ADD_ITEM_TO_LIST_ERROR', err });
      });
  };
};
