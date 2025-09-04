// src/components/Profile/EditProfile.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Screen from './Screen.jsx';
import userService from '../../services/UserService';

export default function EditProfile() {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: '',
    phone: '',
    gender: '',
    ageGroup: '',
    city: '',
    email: '',
    state: '',
    country: ''
  });
  
  const [tempProfileData, setTempProfileData] = useState({
    name: '',
    phone: '',
    gender: '',
    ageGroup: '',
    city: '',
    email: '',
    state: '',
    country: ''
  });

  useEffect(() => {
    // Load user data from localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    if (!currentUser.phone) {
    // Try to get phone from users database
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const userPhone = Object.keys(users).find(phone => 
        users[phone].username === currentUser.username
    );
    
    if (userPhone) {
        currentUser.phone = userPhone;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
        navigate('/profile');
        return;
    }
    }
    
    const userData = userService.getUserData(currentUser.phone);
    // Add this line to preserve the password
    const originalPassword = userData.password;
    
    // Get the stored profile data
    const storedProfileData = JSON.parse(localStorage.getItem(`user_profile_${currentUser.phone}`) || '{}');
    
    // Format gender with capital first letter
    const formatGender = (gender) => {
      if (!gender) return '';
      return gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase();
    };
    
    const loadedData = {
      name: storedProfileData.name || currentUser.username || userData.username || '',
      phone: currentUser.phone || '',
      gender: formatGender(storedProfileData.gender || currentUser.gender || userData.gender || ''),
      ageGroup: storedProfileData.ageGroup || currentUser.ageGroup || userData.ageGroup || '',
      city: storedProfileData.city || '',
      email: storedProfileData.email || '',
      state: storedProfileData.state || '',
      country: storedProfileData.country || ''
    };
    
    setProfileData(loadedData);
    setTempProfileData(loadedData);
  }, [navigate]);

  // Check if there are any changes
  useEffect(() => {
    if (isEditMode) {
      const changed = JSON.stringify(profileData) !== JSON.stringify(tempProfileData);
      setHasChanges(changed);
    }
  }, [tempProfileData, profileData, isEditMode]);

  const handleEdit = () => {
    setIsEditMode(true);
    setTempProfileData({...profileData});
    setHasChanges(false);
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setTempProfileData({...profileData});
    setHasChanges(false);
  };

    const handleSave = () => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        
        if (!currentUser.phone) return;
        
        // Use UserService to update profile
        const success = userService.updateUserProfile(currentUser.phone, tempProfileData);
        
        if (success) {
            // Update state
            setProfileData({...tempProfileData});
            setIsEditMode(false);
            setHasChanges(false);
            
            // Show success message
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }
    };

  const handleChange = (field, value) => {
    setTempProfileData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Screen title="Edit Profile" subtitle="Update your information">
      {/* Success Message - Properly Centered */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-green-500/20 border border-green-500/50 rounded-2xl px-8 py-4 backdrop-blur-sm animate-bounce">
            <div className="flex items-center gap-2 text-green-400 font-semibold text-lg">
              <span>Profile updated</span>
              <span className="text-2xl">✓</span>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex flex-col justify-center min-h-[calc(100vh-200px)]">
        <div className="space-y-4">
          {/* Basic Info Section */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-4">
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">Basic Information</h3>
            
            <div className="space-y-3">
              <InputField
                label="Name"
                value={isEditMode ? tempProfileData.name : profileData.name}
                onChange={(value) => handleChange('name', value)}
                placeholder="Your full name"
                disabled={!isEditMode}
              />
              
              <InputField
                label="Phone"
                value={profileData.phone}
                disabled={true}
                icon="🔒"
                helperText="Cannot be changed"
              />
              
                <div className="grid grid-cols-2 gap-3">
                {/* Gender Selection */}
                {isEditMode && (!profileData.gender || profileData.gender === 'Not set') ? (
                    <div>
                    <label className="text-xs text-white/60 mb-1 block">Gender</label>
                    <select
                        value={tempProfileData.gender || ''}
                        onChange={(e) => handleChange('gender', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                                text-white transition-all duration-200 hover:bg-white/10 
                                focus:bg-white/10 focus:border-white/30 focus:outline-none"
                    >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    </div>
                ) : (
                    <InputField
                    label="Gender"
                    value={profileData.gender || 'Not set'}
                    disabled={true}
                    placeholder="Set during signup"
                    />
                )}
                
                {/* Age Group Selection */}
                {isEditMode && (!profileData.ageGroup || profileData.ageGroup === 'Not set') ? (
                    <div>
                    <label className="text-xs text-white/60 mb-1 block">Age Group</label>
                    <select
                        value={tempProfileData.ageGroup || ''}
                        onChange={(e) => handleChange('ageGroup', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                                text-white transition-all duration-200 hover:bg-white/10 
                                focus:bg-white/10 focus:border-white/30 focus:outline-none"
                    >
                        <option value="">Select</option>
                        <option value="under-5">Under 5 yrs</option>
                        <option value="5-10">5-10 yrs</option>
                        <option value="11-15">11-15 yrs</option>
                        <option value="16-20">16-20 yrs</option>
                        <option value="20+">20+ yrs</option>
                    </select>
                    </div>
                ) : (
                    <InputField
                    label="Age Group"
                    value={profileData.ageGroup || 'Not set'}
                    disabled={true}
                    placeholder="Set during signup"
                    />
                )}
                </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-4">
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">Contact & Location</h3>
            
            <div className="space-y-3">
              <InputField
                label="Email"
                value={isEditMode ? tempProfileData.email : profileData.email}
                onChange={(value) => handleChange('email', value)}
                placeholder="yourname@example.com"
                type="email"
                helperText={isEditMode ? "Optional" : profileData.email ? "" : "Not provided"}
                disabled={!isEditMode}
              />
              
              <InputField
                label="City"
                value={isEditMode ? tempProfileData.city : profileData.city}
                onChange={(value) => handleChange('city', value)}
                placeholder="Add your city name"
                disabled={!isEditMode}
              />
              
              <InputField
                label="State"
                value={isEditMode ? tempProfileData.state : profileData.state}
                onChange={(value) => handleChange('state', value)}
                placeholder="Your state/province"
                disabled={!isEditMode}
              />
              
              <InputField
                label="Country"
                value={isEditMode ? tempProfileData.country : profileData.country}
                onChange={(value) => handleChange('country', value)}
                placeholder="Your country"
                disabled={!isEditMode}
              />
            </div>
          </div>

          {/* Action Buttons */}
          {!isEditMode ? (
            <button
              onClick={handleEdit}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 
                       hover:from-purple-600 hover:to-pink-600 transition-all duration-200 
                       font-semibold text-white shadow-lg"
            >
              Edit
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={handleCancel}
                className="flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={!hasChanges}
                className={`flex-1 py-3 rounded-2xl font-semibold text-white shadow-lg
                         transition-all duration-200 ${
                  hasChanges
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 cursor-pointer' 
                    : 'bg-gray-600 cursor-not-allowed opacity-50'
                }`}
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

function InputField({ label, value, onChange, disabled, placeholder, type = 'text', icon, helperText }) {
  return (
    <div>
      <label className="text-xs text-white/60 mb-1 block">{label}</label>
      <div className="relative">
        <input
          type={type}
          value={value || ''}
          onChange={(e) => onChange && onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                   text-white placeholder-white/30 transition-all duration-200
                   ${disabled 
                     ? 'opacity-50 cursor-not-allowed' 
                     : 'hover:bg-white/10 focus:bg-white/10 focus:border-white/30 focus:outline-none'
                   }`}
        />
        {icon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50">{icon}</span>
        )}
      </div>
      {helperText && (
        <p className="text-xs text-white/40 mt-1">{helperText}</p>
      )}
    </div>
  );
}