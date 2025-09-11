import { FirebaseFirestore } from '@capacitor-firebase/firestore';

// Initialize Firestore
export const db = FirebaseFirestore;

// User operations
export const saveUserToFirestore = async (phone, userData) => {
  console.log('Starting Firestore save for:', phone);
  console.log('User data:', JSON.stringify(userData));
  
  try {
    const result = await db.setDocument({
      reference: `users/${phone}`,
      data: userData
    });
    console.log('Firestore save successful:', result);
    return true;
  } catch (error) {
    console.error('Firestore save error:', error);
    console.error('Error details:', JSON.stringify(error));
    return false;
  }
};