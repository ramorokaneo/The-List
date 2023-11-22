// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfqRil27WCbvdfCkQCuSrc6tsiNczjdqk",
  authDomain: "list-it-2890a.firebaseapp.com",
  projectId: "list-it-2890a",
  storageBucket: "list-it-2890a.appspot.com",
  messagingSenderId: "955351865208",
  appId: "1:955351865208:web:f315559e2e427dba9a9a8d",
  measurementId: "G-GPGDSD1WJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const FIRESTORE_DB = getFirestore(app);
// const storage =
const auth = initializeAuth(app);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

// export { firebase, firestore };
export { FIRESTORE_DB, auth, firebase, firestore };