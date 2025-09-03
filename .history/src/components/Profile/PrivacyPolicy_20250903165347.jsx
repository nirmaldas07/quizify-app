// src/components/Profile/PrivacyPolicy.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Screen from './Screen.jsx';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <Screen title="Privacy Policy" subtitle="Your data, your control">
      <div className="flex flex-col justify-center min-h-[calc(100vh-200px)]">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold text-white mb-2">Privacy Policy</h2>
            <p className="text-white/60 text-lg mb-6">Will be updated soon</p>
            
            <div className="space-y-3 text-left text-white/50 text-sm">
              <p>• Your data is encrypted and secure</p>
              <p>• We never share your personal information</p>
              <p>• You can delete your account anytime</p>
              <p>• Minimal data collection for best experience</p>
            </div>
            
            <button
              onClick={() => navigate(-1)}
              className="mt-8 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 
                       hover:from-purple-600 hover:to-pink-600 transition-all duration-200 
                       font-semibold text-white shadow-lg"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </Screen>
  );
}