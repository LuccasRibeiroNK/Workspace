// import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyD9LhOkMOGBBYIjO9uTI7ngy8qrsooDAjU",

    authDomain: "colegio-a6a2a.firebaseapp.com",

    projectId: "colegio-a6a2a",

    storageBucket: "colegio-a6a2a.appspot.com",

    messagingSenderId: "575672051670",

    appId: "1:575672051670:web:4e8de523107bd84470e677",

    measurementId: "G-FJE87GF07T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);