// import React from 'react';
import firebase from 'firebase';

const firebaseConfig ={
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   apiKey: "AIzaSyAqv4Y9Q3ANFs6Ozm36PdT8RTROLRcnYoU",
  authDomain: "messenger-clone-c6a6d.firebaseapp.com",
  databaseURL: "https://messenger-clone-c6a6d.firebaseio.com",
  projectId: "messenger-clone-c6a6d",
  storageBucket: "messenger-clone-c6a6d.appspot.com",
  messagingSenderId: "896393162245",
  appId: "1:896393162245:web:b0b1dc2aefc50bffbf766c",
  measurementId: "G-SDF9JP3SS0"
  
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;
  