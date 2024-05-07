// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyBoq0oOlG15keHqVzwOY-4BnwTWkF-E8",
  authDomain: "database-demo-3e2fa.firebaseapp.com",
  projectId: "database-demo-3e2fa",
  storageBucket: "database-demo-3e2fa.appspot.com",
  messagingSenderId: "410547459807",
  appId: "1:410547459807:web:27f2f31b398583c2a83b6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};