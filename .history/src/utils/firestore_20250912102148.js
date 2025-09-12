// src/utils/firestore.js
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

// User operations
export const saveUserToFirestore = async (phone, userData) => {
  console.log('Starting Firestore save for:', phone);
  console.log('User data:', JSON.stringify(userData));
  
  try {
    await setDoc(doc(db, "users", phone), userData);
    console.log('Firestore save successful');
    return true;
  } catch (error) {
    console.error('Firestore save error:', error);
    console.error('Error details:', JSON.stringify(error));
    return false;
  }
};

export const getUserFromFirestore = async (phone) => {
  try {
    const docSnap = await getDoc(doc(db, "users", phone));
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch (error) {
    console.error('Error getting user:', error);
    return null;
  }
};