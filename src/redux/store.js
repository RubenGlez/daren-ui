import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { firestoreReducer, reduxFirestore, getFirestore } from 'redux-firestore';
import { firebaseReducer, reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import firebaseConfig from '../firebase/config';

import authReducer from './reducers/authReducer';
import projectReducer from './reducers/projectReducer';
import userReducer from './reducers/userReducer';


const store = createStore(
  combineReducers({
    auth: authReducer,
    project: projectReducer,
    user: userReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
  }),
  compose(
    applyMiddleware(
      thunk.withExtraArgument({
        getFirebase,
        getFirestore,
      })
    ),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig, {
      useFirestoreForProfile: true,
      userProfile: 'users',
      attachAuthIsReady: true,
    }),
  )
);

export default store;
