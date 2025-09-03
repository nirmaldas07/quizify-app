// src/components/Profile/EditProfile.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Screen from './Screen.jsx';

export default function EditProfile() {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Get current user data
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const phone = currentUser.phone;
  
  // Form states
  const [username, setUsername] = useState(currentUser.username || '');
  const [avatar, setAvatar] = useState(currentUser.avatar || { emoji: '🎮', bg: '#667eea' });
  
  // Temporary states for editing
  const [tempUsername, setTempUsername] = useState(username);
  const [tempAvatar, setTempAvatar] = useState(avatar);
  
  const avatarOptions = [
    { emoji: '🦄', bg: '#e879f9' },
    { emoji: '🐱', bg: '#f97316' },
    { emoji: '🐶', bg: '#3b82f6' },
    { emoji: '🐸', bg: '#10b981' },
    { emoji: '🦊', bg: '#f59e0b' },
    { emoji: '🐼', bg: '#64748b' },
    { emoji: '🐨', bg: '#8b5cf6' },
    { emoji: '🦁', bg: '#eab308' },
    { emoji: '🐯', bg: '#ef4444' },
    { emoji: '🦉', bg: '#06b6d4' },
    { emoji: '🎮', bg: '#667eea' },
    { emoji: '🎯', bg: '#dc2626' }
  ];
  
  const handleEdit = () => {
    setIsEditMode(true);
    setTempUsername(username);
    setTempAvatar(avatar);
  };
  
  const handleCancel = () => {
    setIsEditMode(false);
    setTempUsername(username);
    setTempAvatar(avatar);
  };
  
  const handleSave = () => {
    // Update in localStorage - both current user and users database
    const updatedUser = {
      ...currentUser,
      username: tempUsername,
      avatar: tempAvatar
    };
    
    // Update current session
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    
    // Update in users database
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[phone]) {
      users[phone] = {
        ...users[phone],
        username: tempUsername,
        avatar: tempAvatar
      };
      localStorage.setItem('users', JSON.stringify(users));
    }
    
    // Update state
    setUsername(tempUsername);
    setAvatar(tempAvatar);
    setIsEditMode(false);
    
    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };
  
  return (
    <Screen title="Edit Profile" subtitle="Update your details">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-240px)] space-y-6">
        
        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500/20 border border-green-500/50 rounded-2xl px-6 py-3 backdrop-blur-sm z-50 animate-bounce">
            <div className="flex items-center gap-2 text-green-400 font-semibold">
              <span>Profile updated</span>
              <span className="text-2xl">✓</span>
            </div>
          </div>
        )}
        
        {/* Avatar Display/Selection */}
        <div className="text-center space-y-4">
          <div className="relative inline-block">
            <div 
              className="w-32 h-32 rounded-full flex items-center justify-center shadow-xl"
              style={{ 
                background: isEditMode ? tempAvatar.bg : avatar.bg,
                border: '4px solid rgba(255,255,255,0.2)'
              }}
            >
              <span className="text-6xl">{isEditMode ? tempAvatar.emoji : avatar.emoji}</span>
            </div>
            {isEditMode && (
              <div className="absolute -bottom-2 -right-2 bg-purple-500 rounded-full p-2 shadow-lg">
                <span className="text-white text-xs font-bold">EDIT</span>
              </div>
            )}
          </div>
          
          {/* Avatar Grid - Only show when editing */}
          {isEditMode && (
            <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto mt-6">
              {avatarOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setTempAvatar(option)}
                  className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-200 ${
                    tempAvatar.emoji === option.emoji 
                      ? 'ring-2 ring-white scale-110' 
                      : 'hover:scale-105'
                  }`}
                  style={{ background: option.bg }}
                >
                  <span className="text-2xl">{option.emoji}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Username Field */}
        <div className="w-full max-w-sm space-y-2">
          <label className="text-white/60 text-sm font-semibold">Username</label>
          <input
            type="text"
            value={isEditMode ? tempUsername : username}
            onChange={(e) => setTempUsername(e.target.value)}
            disabled={!isEditMode}
            className={`w-full px-4 py-3 rounded-2xl text-white font-semibold transition-all duration-200 ${
              isEditMode 
                ? 'bg-white/20 border-2 border-white/30 focus:border-purple-400 focus:outline-none' 
                : 'bg-white/10 border-2 border-transparent cursor-not-allowed'
            }`}
            placeholder="Enter username"
          />
        </div>
        
        {/* Phone Number Field (Read-only) */}
        <div className="w-full max-w-sm space-y-2">
          <label className="text-white/60 text-sm font-semibold">Phone Number</label>
          <div className="w-full px-4 py-3 rounded-2xl bg-white/5 border-2 border-transparent text-white/50 font-semibold">
            {phone || 'Not available'}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="w-full max-w-sm space-y-3 mt-8">
          {!isEditMode ? (
            <button
              onClick={handleEdit}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
            >
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={handleCancel}
                className="flex-1 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </Screen>
  );
}