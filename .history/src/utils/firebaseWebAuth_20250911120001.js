import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDsHfdaC3tx_kSqwvT5h_9pSk7gr-Jccgo",
  authDomain: "quizify-43799.firebaseapp.com",
  projectId: "quizify-43799",
  storageBucket: "quizify-43799.firebasestorage.app",
  messagingSenderId: "389410159905",
  appId: "1:389410159905:android:cd1534ae168fa1274a1260"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Store references globally
let appVerifier = null;
let confirmationResult = null;

// Initialize reCAPTCHA
export const setupRecaptcha = () => {
  if (!appVerifier) {
    appVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'invisible',
      'callback': () => {
        console.log('reCAPTCHA verified');
      }
    });
  }
  return appVerifier;
};

// Send OTP
export const sendOTP = async (phoneNumber) => {
  try {
    setupRecaptcha();
    confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    console.log('OTP sent successfully');
    return { success: true };
  } catch (error) {
    console.error('Error sending OTP:', error);
    return { success: false, error: error.message };
  }
};

// Verify OTP
export const verifyOTP = async (otp) => {
  try {
    if (!confirmationResult) {
      throw new Error('No OTP request found. Please request OTP first.');
    }
    const result = await confirmationResult.confirm(otp);
    console.log('User signed in:', result.user);
    return { success: true, user: result.user };
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return { success: false, error: error.message };
  }
};

// Check if phone number is test number
export const isTestPhoneNumber = (phoneNumber) => {
  const testNumbers = ['+919701019117'];
  return testNumbers.includes(phoneNumber);
};