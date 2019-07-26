import * as actionTypes from '../actionTypes/actionTypes';

export const createList = list => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('lists')
      .add({
        ...list,
        createdOn: new Date(),
        authorId: 'Frodo',
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

export const addItemToList = items => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('lists')
      .add({
        ...items,
      })
      .then(() => {
        dispatch({ type: actionTypes.ADD_ITEM_TO_LIST, items });
        console.log('inside add to list' + items);
      })
      .catch(err => {
        dispatch({ type: 'ADD_ITEM_TO_LIST_ERROR', err });
      });
  };
};
