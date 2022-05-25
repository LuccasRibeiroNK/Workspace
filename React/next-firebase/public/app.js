
const auth = firebase.auth();
// console.log(auth);
const whenSignIn = document.getElementById('whenSignIn');
const whenSignOut = document.getElementById('whenSignOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => {
    auth.signInWithPopup(provider);
};

signOutBtn.onclick = () => {
    auth.signOut();
};