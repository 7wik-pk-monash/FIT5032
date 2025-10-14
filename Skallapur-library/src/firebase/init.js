// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOS-yJ-3KAOUY645JrnP26RP9-U8gz014",
  authDomain: "week7-sathwik.firebaseapp.com",
  projectId: "week7-sathwik",
  storageBucket: "week7-sathwik.firebasestorage.app",
  messagingSenderId: "561994516651",
  appId: "1:561994516651:web:fa217461d6b385180d0fee"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
