import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyB0d6yT0OuONLdeDug73k732RTFSObI0A4",
    authDomain: "crwn-db-130ff.firebaseapp.com",
    projectId: "crwn-db-130ff",
    storageBucket: "crwn-db-130ff.appspot.com",
    messagingSenderId: "581064553437",
    appId: "1:581064553437:web:68dbd7fc16dad79397bc34",
    measurementId: "G-NR2XQG58YX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

