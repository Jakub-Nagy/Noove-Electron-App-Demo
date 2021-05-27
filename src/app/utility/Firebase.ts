import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyA39Mwak-HfTPhpr3W_u5TzqEkeOstVmMU",
  authDomain: "noove-95d6e.firebaseapp.com",
  projectId: "noove-95d6e",
  storageBucket: "noove-95d6e.appspot.com",
  messagingSenderId: "142954203025",
  appId: "1:142954203025:web:8f2386c88b2555d903bc30",
  measurementId: "G-0P97VR9MQ0",
});

export const auth = firebase.auth();
export const db = firebase.firestore();