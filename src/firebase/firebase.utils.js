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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.collection('users').doc(userAuth.uid);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//trigger pop up
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
