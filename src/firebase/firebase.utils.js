import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDWIPYc1VthOxkPUNwx1uFB1k8oJkuagFw",
  authDomain: "crwn-db-91256.firebaseapp.com",
  databaseURL: "https://crwn-db-91256.firebaseio.com",
  projectId: "crwn-db-91256",
  storageBucket: "crwn-db-91256.appspot.com",
  messagingSenderId: "810669300630",
  appId: "1:810669300630:web:757afb510f9306fefe5bb7",
  measurementId: "G-2YCVKY9WYF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// triggers prompt to sign in using Google account
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;