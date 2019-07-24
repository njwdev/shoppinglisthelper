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
        dispatch({ type: 'CREATE_LIST', list });
        console.log(list);
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
        authorId: 'Henry',
      })
      .then(() => {
        dispatch({ type: 'ADD_ITEM_TO_LIST', list });
        console.log(list);
      })
      .catch(err => {
        dispatch({ type: 'ADD_ITEM_TO_LIST_ERROR', err });
      });
  };
};
