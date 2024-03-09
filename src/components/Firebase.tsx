// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMTY7T7jBFxCKKJn67wb5o_K1iuqjpz-s",
  authDomain: "todo-app-3cb37.firebaseapp.com",
  projectId: "todo-app-3cb37",
  storageBucket: "todo-app-3cb37.appspot.com",
  messagingSenderId: "596613843235",
  appId: "1:596613843235:web:a135149213097221be6496"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);