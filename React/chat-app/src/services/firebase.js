import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDEqm6THLcNrU31CFgis8Dd9GAc4c-NaPg",
    authDomain: "chat-app-aafaf.firebaseapp.com",
    projectId: "chat-app-aafaf",
    storageBucket: "chat-app-aafaf.appspot.com",
    messagingSenderId: "777360800961",
    appId: "1:777360800961:web:1311e0a6805c608ade6840"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };