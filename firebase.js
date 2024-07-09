import firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSAQTDXsV8v2XqPi4iS84J7YJ7li-0yCM",
  authDomain: "mail-whatsapp-chat.firebaseapp.com",
  projectId: "mail-whatsapp-chat",
  storageBucket: "mail-whatsapp-chat.appspot.com",
  messagingSenderId: "1024132719070",
  appId: "1:1024132719070:web:de89bba49b968dc151bd4f",
  measurementId: "G-W2XRBXX8D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = app.firestore();
const auth = app.auth();
const rtdb = firebase.database();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export { db, rtdb, auth, googleProvider, githubProvider };
