import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBENZ-UXvqc9TaiNk2ZXXPGdAMYZ5JhXKw",
    authDomain: "oddam-w-dobre-rece-d907f.firebaseapp.com",
    databaseURL: "https://oddam-w-dobre-rece-d907f.firebaseio.com",
    projectId: "oddam-w-dobre-rece-d907f",
    storageBucket: "oddam-w-dobre-rece-d907f.appspot.com",
    messagingSenderId: "464939827985",
    appId: "1:464939827985:web:fcf654cb3ee78adbfa02b0"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase