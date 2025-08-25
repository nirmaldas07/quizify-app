import React, { useState } from 'react';
import BackButton from './BackButton';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Nirmal Das',
    email: 'nirmalnitw7@gmail.com',
    phone: '+91-9701019117',
    state: 'Karnataka',
    city: 'Bangalore',
    rank: 348,
    points: 1209,
    avatar: '/avatar.png',
  });

  const handleChange = (field, value) => {
    setUser(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    alert('✅ Profile saved successfully!');
    // You can later store in localStorage or backend
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 pb-24">
      {/* Back Button */}
      <BackButton />

      <h1 className="text-2xl font-bold mb-4">👤 Your Profile</h1>

      {/* Profile Card */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-2 border-white mb-4"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm">
          <div>
            <p className="text-gray-400 mb-1">Name</p>
            <input
              type="text"
              value={user.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <p className="text-gray-400 mb-1">Email</p>
            <input
              type="email"
              value={user.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <p className="text-gray-400 mb-1">Phone</p>
            <input
              type="text"
              value={user.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <p className="text-gray-400 mb-1">City</p>
            <input
              type="text"
              value={user.city}
              onChange={(e) => handleChange('city', e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <p className="text-gray-400 mb-1">State</p>
            <input
              type="text"
              value={user.state}
              onChange={(e) => handleChange('state', e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <p className="text-gray-400 mb-1">Rank</p>
            <p className="text-yellow-300 font-bold text-lg">#{user.rank}</p>
          </div>
          <div>
            <p className="text-gray-400 mb-1">Points</p>
            <p className="text-green-400 font-bold text-lg">{user.points}</p>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded font-semibold"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
