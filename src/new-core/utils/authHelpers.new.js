// src/utils/authHelpers.js
// Check if user exists
export const checkUserExists = async (phoneNumber) => {
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  return !!users[phoneNumber];
};

// Save new user
export const saveUser = (phoneNumber, userData) => {
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  users[phoneNumber] = userData;
  localStorage.setItem('users', JSON.stringify(users));
};

// Get user data
export const getUserData = (phoneNumber) => {
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  return users[phoneNumber];
};

// Check if logged in
export const isLoggedIn = () => {
  return !!localStorage.getItem('currentUser');
};

// Get current user
export const getCurrentUser = () => {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
};

// Logout
export const logout = () => {
  localStorage.removeItem('currentUser');
};