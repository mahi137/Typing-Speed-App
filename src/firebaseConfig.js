
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAURcVbYUfibfV4J_oEvkxLHrM0c72BqTs",
    authDomain: "typing-speed-website-993da.firebaseapp.com",
    projectId: "typing-speed-website-993da",
    storageBucket: "typing-speed-website-993da.appspot.com",
    messagingSenderId: "420096175062",
    appId: "1:420096175062:web:fc48066b199641b556d277",
    measurementId: "G-19E5DC470Y"
  };

  const firebaseapp =firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const db = firebaseapp.firestore();

  export {auth,db} 