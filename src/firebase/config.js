import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCBc3ClaV2DiEQwZaIVNSuyoFnDJi1zXXA",
    authDomain: "list-app-9096f.firebaseapp.com",
    projectId: "list-app-9096f",
    storageBucket: "list-app-9096f.appspot.com",
    messagingSenderId: "165278450105",
    appId: "1:165278450105:web:84c73dc31e4c3a0b0e3668",
    measurementId: "G-5VRTVL03P8"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export { firebase };