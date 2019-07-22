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
