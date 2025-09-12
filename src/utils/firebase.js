// src/utils/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBteLG6N6Sr-AXt0M13CYpS0Cflu6kv_AQ",
  authDomain: "quizify-43799.firebaseapp.com",
  projectId: "quizify-43799",
  storageBucket: "quizify-43799.firebasestorage.app",
  messagingSenderId: "389410159905",
  appId: "1:389410159905:web:e81a297fd64eb0bc4a1260",
  measurementId: "G-7BFF7BFNJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Export the app in case you need it elsewhere
export default app;