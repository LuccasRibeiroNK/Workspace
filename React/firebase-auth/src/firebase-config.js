import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDEqm6THLcNrU31CFgis8Dd9GAc4c-NaPg",
    authDomain: "chat-app-aafaf.firebaseapp.com",
    projectId: "chat-app-aafaf",
    storageBucket: "chat-app-aafaf.appspot.com",
    messagingSenderId: "777360800961",
    appId: "1:777360800961:web:1311e0a6805c608ade6840"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);