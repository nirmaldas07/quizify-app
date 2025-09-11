// src/utils/firebaseAuth.js

import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { Capacitor } from '@capacitor/core';

// Store verification ID globally for the verification step
let currentVerificationId = null;

// Initialize Firebase Authentication
export const initializeFirebase = async () => {
  // For Capacitor, Firebase initializes automatically via google-services.json
  // We just need to check if it's working
  try {
    console.log('Firebase should be auto-initialized on Android');
    // No explicit initialization needed for Capacitor native plugin
    return true;
  } catch (error) {
    console.error('Firebase check error:', error);
    return false;
  }
};

// Send OTP to phone number
export const sendOTP = async (phoneNumber) => {
  try {
    console.log('Sending OTP to:', phoneNumber);
    
    // Ensure phone number has country code
    if (!phoneNumber.startsWith('+')) {
      throw new Error('Phone number must include country code (e.g., +91)');
    }
    
    // For Capacitor Firebase Authentication
    const result = await FirebaseAuthentication.signInWithPhoneNumber({
      phoneNumber: phoneNumber
    });
    
    console.log('OTP sent successfully, verificationId:', result.verificationId);
    
    // Store verification ID for later use
    currentVerificationId = result.verificationId;
    
    return { 
      success: true, 
      verificationId: result.verificationId 
    };
  } catch (error) {
    console.error('Error sending OTP:', error);
    
    // Handle specific error cases
    let errorMessage = 'Failed to send OTP';
    
    if (error.message?.includes('auth/invalid-phone-number')) {
      errorMessage = 'Invalid phone number format';
    } else if (error.message?.includes('auth/too-many-requests')) {
      errorMessage = 'Too many requests. Please try again later';
    } else if (error.message?.includes('auth/app-not-authorized')) {
      errorMessage = 'App not authorized. Check Firebase configuration';
    } else if (error.message?.includes('initialized')) {
      errorMessage = 'Firebase not initialized properly';
    }
    
    return { 
      success: false, 
      error: errorMessage,
      details: error.message 
    };
  }
};

// Verify OTP code
export const verifyOTP = async (code, verificationId = null) => {
  try {
    console.log('Verifying OTP code:', code);
    
    // Use provided verificationId or the stored one
    const verId = verificationId || currentVerificationId;
    
    if (!verId) {
      throw new Error('No verification ID available. Please request OTP first.');
    }
    
    // Confirm the verification code
    const credential = {
      verificationId: verId,
      verificationCode: code
    };
    
    console.log('Using verification ID:', verId);
    
    const result = await FirebaseAuthentication.confirmVerificationCode(credential);
    
    console.log('OTP verified successfully:', result);
    
    // Clear the stored verification ID after successful verification
    currentVerificationId = null;
    
    return { 
      success: true, 
      user: result.user,
      additionalUserInfo: result.additionalUserInfo 
    };
  } catch (error) {
    console.error('Error verifying OTP:', error);
    
    // Handle specific error cases
    let errorMessage = 'Invalid verification code';
    
    if (error.message?.includes('auth/invalid-verification-code')) {
      errorMessage = 'Invalid verification code. Please check and try again';
    } else if (error.message?.includes('auth/code-expired')) {
      errorMessage = 'Verification code expired. Please request a new one';
    } else if (error.message?.includes('auth/session-expired')) {
      errorMessage = 'Session expired. Please request a new OTP';
    }
    
    return { 
      success: false, 
      error: errorMessage,
      details: error.message 
    };
  }
};

// Get current authenticated user
export const getCurrentUser = async () => {
  try {
    const result = await FirebaseAuthentication.getCurrentUser();
    return result?.user || null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

// Sign out
export const logout = async () => {
  try {
    await FirebaseAuthentication.signOut();
    currentVerificationId = null; // Clear any stored verification ID
    console.log('User signed out successfully');
    return { success: true };
  } catch (error) {
    console.error('Error signing out:', error);
    return { success: false, error: error.message };
  }
};

// Add auth state listener
export const onAuthStateChanged = (callback) => {
  return FirebaseAuthentication.addListener('authStateChange', (result) => {
    console.log('Auth state changed:', result);
    callback(result.user);
  });
};

// Remove auth state listener
export const removeAuthStateListener = (listener) => {
  if (listener && listener.remove) {
    listener.remove();
  }
};

// Check if phone number is in test mode
export const isTestPhoneNumber = (phoneNumber) => {
  // Your test phone numbers
  const testNumbers = [
    '+919701019117', // Your configured test number
  ];
  return testNumbers.includes(phoneNumber);
};