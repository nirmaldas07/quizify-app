//src/utils/authHelpers.js

// Check if user exists in your backend/localStorage
export const checkUserExists = async (phoneNumber) => {
  // For now, use localStorage. Replace with API call later
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  return !!users[phoneNumber];
};

// Save new user
export const saveUser = (phoneNumber, userData) => {
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  users[phoneNumber] = userData;
  localStorage.setItem('users', JSON.stringify(users));
};