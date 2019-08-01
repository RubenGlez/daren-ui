import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDHfbZNC5JpWs8DfWzNllU2i4TDuRdVWXI',
  authDomain: 'daren-app-9efce.firebaseapp.com',
  databaseURL: 'https://daren-app-9efce.firebaseio.com',
  projectId: 'daren-app-9efce',
  storageBucket: '',
  messagingSenderId: '510485297532',
  appId: '1:510485297532:web:92b614b361c0c4bd',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set persistence
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);


export default firebase;
