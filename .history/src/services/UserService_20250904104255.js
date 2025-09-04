// src/services/UserService.js

class UserService {
  // Initialize the service
  constructor() {
    console.log('UserService initialized');
  }

  // Get all data for a user (merged from all sources)
  getUserData(phone) {
    try {
      if (!phone) {
        console.log('No phone provided to getUserData');
        return null;
      }

      // Get from permanent storage
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      const userData = users[phone] || {};

      // Get from extended profile
      const profileData = JSON.parse(
        localStorage.getItem(`user_profile_${phone}`) || '{}'
      );

      // Merge data (profile data takes priority for name)
      const merged = {
        ...userData,
        phone: phone,
        username: profileData.name || userData.username || '',
        email: profileData.email || '',
        city: profileData.city || '',
        state: profileData.state || '',
        country: profileData.country || ''
      };

      console.log('getUserData merged result:', merged);
      return merged;
    } catch (error) {
      console.error('Error in getUserData:', error);
      return null;
    }
  }

  // Check if user exists
  userExists(phone) {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      return users.hasOwnProperty(phone);
    } catch (error) {
      console.error('Error checking if user exists:', error);
      return false;
    }
  }

  // Create new user
  createUser(phone, userData) {
    try {
      console.log('Creating user:', phone, userData);
      
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      
      // Save to permanent storage
      users[phone] = {
        username: userData.username,
        password: userData.password || '123456', // Default for now
        avatar: userData.avatar,
        gender: userData.gender,
        ageGroup: userData.ageGroup,
        phone: phone,
        createdAt: new Date().toISOString()
      };
      
      localStorage.setItem('users', JSON.stringify(users));
      
      // Set as current user
      this.setCurrentUser(phone);
      
      console.log('User created successfully');
      return true;
    } catch (error) {
      console.error('Error creating user:', error);
      return false;
    }
  }

  // Set current logged-in user
  setCurrentUser(phone) {
    try {
      const userData = this.getUserData(phone);
      if (!userData) return false;

      const currentUser = {
        phone: phone,
        username: userData.username,
        avatar: userData.avatar,
        gender: userData.gender,
        ageGroup: userData.ageGroup
      };

      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      
      // Also update game player
      const player = JSON.parse(localStorage.getItem('qp_player') || '{}');
      player.name = userData.username;
      localStorage.setItem('qp_player', JSON.stringify(player));
      
      console.log('Current user set:', currentUser);
      return true;
    } catch (error) {
      console.error('Error setting current user:', error);
      return false;
    }
  }

  // Update user profile
  updateUserProfile(phone, updates) {
    try {
      console.log('Updating profile for:', phone, updates);
      
      // Update in users database if username changed
      if (updates.name) {
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        if (users[phone]) {
          users[phone].username = updates.name;
          localStorage.setItem('users', JSON.stringify(users));
        }
      }

      // Update extended profile
      const profileKey = `user_profile_${phone}`;
      const currentProfile = JSON.parse(localStorage.getItem(profileKey) || '{}');
      const updatedProfile = { ...currentProfile, ...updates };
      localStorage.setItem(profileKey, JSON.stringify(updatedProfile));

      // Update current user if logged in
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      if (currentUser.phone === phone) {
        this.setCurrentUser(phone);
      }

      console.log('Profile updated successfully');
      return true;
    } catch (error) {
      console.error('Error updating profile:', error);
      return false;
    }
  }

  // Get current logged-in user
  getCurrentUser() {
    try {
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      if (!currentUser.phone) return null;
      
      // Always get fresh data
      return this.getUserData(currentUser.phone);
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  }

  // Sign out
  signOut() {
    try {
      // Only clear session data
      localStorage.removeItem('currentUser');
      localStorage.removeItem('rememberCredentials');
      sessionStorage.clear();
      
      console.log('User signed out');
      return true;
    } catch (error) {
      console.error('Error signing out:', error);
      return false;
    }
  }
}

// Create a single instance to use throughout the app
const userService = new UserService();

// Make it available globally for testing in console
window.userService = userService;

export default userService;