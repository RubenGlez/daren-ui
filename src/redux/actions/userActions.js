
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';


export const updateUser = (id, user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('users').doc(id).update({
      ...user,
      updatedAt: new Date(),
    }).then(() => {
      dispatch({ type: UPDATE_USER, user });
    }).catch(error => {
      dispatch({ type: UPDATE_USER_ERROR, error });
    });
  };
};
