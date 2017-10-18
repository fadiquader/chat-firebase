import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB4YKYX39BF3XJoQyohJimfOB9fX5yIKqo",
    authDomain: "smart-hands-1214f.firebaseapp.com",
    databaseURL: "https://smart-hands-1214f.firebaseio.com",
    projectId: "smart-hands-1214f",
    storageBucket: "smart-hands-1214f.appspot.com",
    messagingSenderId: "524714027027"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
