import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX6PBvOOx8OTcFio02IJV_uuVt5D5cnbQ",
  authDomain: "clone-19d01.firebaseapp.com",
  projectId: "clone-19d01",
  storageBucket: "clone-19d01.appspot.com",
  messagingSenderId: "871904944533",
  appId: "1:871904944533:web:9467601e45f86d72df969c",
  measurementId: "G-EZ86CXFPCN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
