//src/utils/firestore.js
import { FirebaseFirestore } from '@capacitor-firebase/firestore';

// Initialize Firestore
export const db = FirebaseFirestore;

// User operations
export const saveUserToFirestore = async (phone, userData) => {
  try {
    await db.setDocument({
      reference: `users/${phone}`,
      data: userData
    });
    return true;
  } catch (error) {
    console.error('Error saving user:', error);
    return false;
  }
};

export const getUserFromFirestore = async (phone) => {
  try {
    const result = await db.getDocument({
      reference: `users/${phone}`
    });
    return result.data;
  } catch (error) {
    console.error('Error getting user:', error);
    return null;
  }
};