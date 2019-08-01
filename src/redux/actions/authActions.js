export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';


export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password,
    ).then(() => {
      dispatch({ type: LOGIN_SUCCESS });
    }).catch(error => {
      dispatch({
        type: LOGIN_ERROR,
        error,
      });
    });
  };
};


export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({ type: SIGNOUT_SUCCESS });
    });
  };
};


export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password,
    ).then(res => {
      return firestore.collection('users').doc(res.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        createdAt: new Date(),
      });
    }).then(() => {
      dispatch({ type: SIGNUP_SUCCESS });
    }).catch(error => {
      dispatch({
        type: SIGNUP_ERROR,
        error,
      });
    });
  };
};