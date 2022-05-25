import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";

const firebaseConfig = {

    apiKey: "AIzaSyCri9SbIItuuJyK3TSmx8OT3QEv1Uj0ZgI",

    authDomain: "next-firebase-17712.firebaseapp.com",

    projectId: "next-firebase-17712",

    storageBucket: "next-firebase-17712.appspot.com",

    messagingSenderId: "253230435816",

    appId: "1:253230435816:web:a94808094ec0991202685d",

    measurementId: "G-EKXQVEQR3B"

};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


