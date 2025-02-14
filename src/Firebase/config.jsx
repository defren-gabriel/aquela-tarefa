// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBSAFzsBT7WUSIPWAdfp1lAGKxXHBqa3Mc",
  authDomain: "aquela-tarefa.firebaseapp.com",
  projectId: "aquela-tarefa",
  storageBucket: "aquela-tarefa.firebasestorage.app",
  messagingSenderId: "469550372008",
  appId: "1:469550372008:web:02e46154c56d0bc9d51e9d",
  measurementId: "G-RDKG1R6VVR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
