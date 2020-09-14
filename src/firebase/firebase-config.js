import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA26j-I66ckuu-IFF-FK5u_fN7kQbJXIwk",
    authDomain: "react-app-82bc3.firebaseapp.com",
    databaseURL: "https://react-app-82bc3.firebaseio.com",
    projectId: "react-app-82bc3",
    storageBucket: "react-app-82bc3.appspot.com",
    messagingSenderId: "182037137081",
    appId: "1:182037137081:web:c0c94a5f4249a0893f7d68"
};

firebase.initializeApp(firebaseConfig);

//Esta va a ser la referencia a mi base de datos que voy a usar para grabar
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); // Esta es para que pueda hacer autentificación con google

export {
    db,
    googleAuthProvider,
    firebase
}