// src/utils/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, logEvent, setUserId } from "firebase/analytics";

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

// Initialize Analytics
export const analytics = getAnalytics(app);

// Helper function to track events
export const trackEvent = (eventName, eventParams = {}) => {
  try {
    logEvent(analytics, eventName, eventParams);
    console.log('Event tracked:', eventName, eventParams);
  } catch (error) {
    console.error('Analytics error:', error);
  }
};

// Helper function to set user for analytics
export const setAnalyticsUserId = (userId) => {
  try {
    setUserId(analytics, userId);
    console.log('Analytics user set:', userId);
  } catch (error) {
    console.error('Set user ID error:', error);
  }
};

// Export the app in case you need it elsewhere
export default app;