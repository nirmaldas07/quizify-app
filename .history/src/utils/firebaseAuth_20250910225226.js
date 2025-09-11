// src/utils/firebaseAuth.js

import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { Capacitor } from '@capacitor/core';

// Initialize Firebase on app start
export const initializeFirebase = async () => {
  if (Capacitor.isNativePlatform()) {
    try {
      // This is required for Capacitor Firebase plugins
      await FirebaseAuthentication.initializeApp();
      console.log('Firebase Authentication initialized');
      return true;
    } catch (error) {
      console.error('Firebase init error:', error);
      return false;
    }
  }
};

// Send OTP to phone number
export const sendOTP = async (phoneNumber) => {
  try {
    const result = await FirebaseAuthentication.signInWithPhoneNumber({
      phoneNumber: phoneNumber // format: +919701019117
    });
    return { success: true, verificationId: result.verificationId };
  } catch (error) {
    console.error('Error sending OTP:', error);
    return { success: false, error: error.message };
  }
};

// Verify OTP code
export const verifyOTP = async (verificationId, code) => {
  try {
    const result = await FirebaseAuthentication.signInWithPhoneNumber({
      verificationId: verificationId,
      verificationCode: code
    });
    return { success: true, user: result.user };
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return { success: false, error: error.message };
  }
};

// Get current user
export const getCurrentUser = () => {
  return FirebaseAuthentication.getCurrentUser();
};

// Logout
export const logout = async () => {
  await FirebaseAuthentication.signOut();
};