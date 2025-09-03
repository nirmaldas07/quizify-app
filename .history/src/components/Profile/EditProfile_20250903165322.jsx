// src/components/Profile/EditProfile.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Screen from './Screen.jsx';

export default function EditProfile() {
  const navigate = useNavigate();
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
  const [isEdited, setIsEdited] = useState(false);

  useEffect(() => {
    // Load user data from localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const userData = JSON.parse(localStorage.getItem(`user_${currentUser.phone}`) || '{}');
    
    setProfileData({
      name: currentUser.username || '',
      phone: currentUser.phone || '',
      gender: currentUser.gender || userData.gender || '',
      ageGroup: currentUser.ageGroup || userData.ageGroup || '',
      city: userData.city || '',
      email: userData.email || '',
      state: userData.state || '',
      country: userData.country || ''
    });
  }, []);

  const handleSave = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    // Update currentUser
    const updatedUser = {
      ...currentUser,
      username: profileData.name,
      gender: profileData.gender,
      ageGroup: profileData.ageGroup
    };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    
    // Update user profile data
    const userKey = `user_${currentUser.phone}`;
    const userData = JSON.parse(localStorage.getItem(userKey) || '{}');
    const updatedUserData = {
      ...userData,
      ...profileData
    };
    localStorage.setItem(userKey, JSON.stringify(updatedUserData));
    
    navigate(-1);
  };

  const handleChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
    setIsEdited(true);
  };

  return (
    <Screen title="Edit Profile" subtitle="Update your information">
      <div className="flex flex-col justify-center min-h-[calc(100vh-200px)]">
        <div className="space-y-4">
          {/* Basic Info Section */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-4">
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">Basic Information</h3>
            
            <div className="space-y-3">
              <InputField
                label="Name"
                value={profileData.name}
                onChange={(value) => handleChange('name', value)}
                placeholder="Your full name"
              />
              
              <InputField
                label="Phone"
                value={profileData.phone}
                disabled={true}
                icon="🔒"
                helperText="Cannot be changed"
              />
              
              <div className="grid grid-cols-2 gap-3">
                <InputField
                  label="Gender"
                  value={profileData.gender}
                  disabled={true}
                  placeholder="Set during signup"
                />
                
                <InputField
                  label="Age Group"
                  value={profileData.ageGroup}
                  disabled={true}
                  placeholder="Set during signup"
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-4">
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">Contact & Location</h3>
            
            <div className="space-y-3">
              <InputField
                label="Email"
                value={profileData.email}
                onChange={(value) => handleChange('email', value)}
                placeholder="yourname@example.com"
                type="email"
                helperText="Verification required"
              />
              
              <InputField
                label="City"
                value={profileData.city}
                onChange={(value) => handleChange('city', value)}
                placeholder="Add your city name"
              />
              
              <InputField
                label="State"
                value={profileData.state}
                onChange={(value) => handleChange('state', value)}
                placeholder="Your state/province"
              />
              
              <InputField
                label="Country"
                value={profileData.country}
                onChange={(value) => handleChange('country', value)}
                placeholder="Your country"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => navigate(-1)}
              className="flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                       transition-all duration-200 font-semibold text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={!isEdited}
              className={`flex-1 py-3 rounded-2xl font-semibold text-white shadow-lg
                       transition-all duration-200 ${
                isEdited 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                  : 'bg-gray-600 cursor-not-allowed'
              }`}
            >
              Save Changes
            </button>
          </div>
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
          value={value}
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