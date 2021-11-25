import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyCObfmo3XlYt50v4QdQFv50Yu0HWlJuwK4',
  authDomain: 'crwn-db-26923.firebaseapp.com',
  projectId: 'crwn-db-26923',
  storageBucket: 'crwn-db-26923.appspot.com',
  messagingSenderId: '1082569688871',
  appId: '1:1082569688871:web:364ba060e9441ec3ba0b02',
  measurementId: 'G-GP6VJNP6VB',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//trigger pop up
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
