import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAws_r9s5KZWv8qZdd0L7g7rtJae-fk0Yk",
    authDomain: "tinder090909-a918a.firebaseapp.com",
    projectId: "tinder090909-a918a",
    storageBucket: "tinder090909-a918a.appspot.com",
    messagingSenderId: "897994308281",
    appId: "1:897994308281:web:eb0bab9e581771117cb968",
    measurementId: "G-XXVL9HZ7LJ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;