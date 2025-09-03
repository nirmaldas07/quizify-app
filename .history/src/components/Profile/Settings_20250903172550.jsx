// src/components/Profile/Settings.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Screen from "./Screen.jsx";

export default function Settings() {
  const navigate = useNavigate();
  const [sound, setSound] = useState(true);
  const [haptics, setHaptics] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [showSignOutModal, setShowSignOutModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  // Get current user data
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const [username, setUsername] = useState(currentUser.username || '');
  const [tempUsername, setTempUsername] = useState(currentUser.username || '');
  
  const handleSignOut = () => {
    // Get the phone number before clearing session data
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const userPhone = currentUser.phone;
    
    // Clear ONLY session data, NOT user registration data
    localStorage.removeItem('currentUser');
    localStorage.removeItem('qp_player');
    localStorage.removeItem('rememberCredentials');
    
    // Clear session storage
    sessionStorage.clear();
    
    // Navigate directly to SignIn page if we have a phone
    if (userPhone) {
      navigate('/auth/signin', { 
        replace: true, 
        state: { phone: userPhone } 
      });
    } else {
      // Fallback to auth page if no phone number
      navigate('/auth', { replace: true });
    }
  };

  const handleEditProfile = () => {
    setIsEditMode(true);
    setTempUsername(username);
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
    setTempUsername(username); // Reset to original
  };

  const handleSaveChanges = () => {
    // Update username in current session
    const updatedUser = {
      ...currentUser,
      username: tempUsername
    };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    
    // Also update in the users database
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[currentUser.phone]) {
      users[currentUser.phone] = {
        ...users[currentUser.phone],
        username: tempUsername
      };
      localStorage.setItem('users', JSON.stringify(users));
    }
    
    setUsername(tempUsername);
    setIsEditMode(false);
    
    // Show success message
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  return (
    <>
      <Screen title="Settings" subtitle="Make it yours">
        <div className="flex flex-col justify-center min-h-[calc(100vh-200px)]">
          <div className="space-y-4">
            
            {/* Profile Section */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-2">
              <div className="px-4 pt-3 pb-1">
                <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider">Profile</h3>
              </div>
              <div className="divide-y divide-white/10">
                {/* Avatar and Username */}
                <div className="px-4 py-4">
                  <div className="flex items-center gap-4">
                    {currentUser.avatar && (
                      <div className="text-4xl">{currentUser.avatar.emoji}</div>
                    )}
                    <div className="flex-1">
                      {isEditMode ? (
                        <input
                          type="text"
                          value={tempUsername}
                          onChange={(e) => setTempUsername(e.target.value)}
                          className="bg-white/10 rounded-lg px-3 py-2 text-white w-full
                                   border border-white/20 focus:border-purple-400 focus:outline-none"
                          placeholder="Enter username"
                          autoFocus
                        />
                      ) : (
                        <>
                          <div className="text-lg font-semibold text-white">{username}</div>
                          <div className="text-sm text-white/50">{currentUser.phone}</div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Edit/Save Buttons */}
                <div className="px-4 py-4">
                  {!isEditMode ? (
                    <button
                      onClick={handleEditProfile}
                      className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500
                               hover:from-purple-600 hover:to-indigo-600 transition-all duration-200
                               font-semibold text-white flex items-center justify-center gap-2"
                    >
                      <span>✏️</span>
                      <span>Edit Profile</span>
                    </button>
                  ) : (
                    <div className="flex gap-3">
                      <button
                        onClick={handleCancelEdit}
                        className="flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20
                                 transition-all duration-200 font-semibold text-white"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSaveChanges}
                        className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500
                                 hover:from-green-600 hover:to-emerald-600 transition-all duration-200
                                 font-semibold text-white"
                      >
                        Save Changes
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Success Message */}
            {showSuccessMessage && (
              <div className="rounded-2xl bg-green-500/20 border border-green-500/30 p-4
                            flex items-center justify-center gap-2 animate-pulse">
                <span className="text-green-400 font-semibold">Profile updated</span>
                <span className="text-2xl">✅</span>
              </div>
            )}

            {/* Preferences Section */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-2">
              <div className="px-4 pt-3 pb-1">
                <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider">Preferences</h3>
              </div>
              <div className="divide-y divide-white/10">
                <Row
                  icon="🔊"
                  label="Sound"
                  subtitle="Game sounds & effects"
                  right={<Toggle on={sound} set={setSound} />}
                />
                <Row
                  icon="📳"
                  label="Haptics"
                  subtitle="Vibration feedback"
                  right={<Toggle on={haptics} set={setHaptics} />}
                />
                <Row
                  icon="🔔"
                  label="Notifications"
                  subtitle="Daily reminders"
                  right={<Toggle on={notifications} set={setNotifications} />}
                />
              </div>
            </div>

            {/* Account Section */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-2">
              <div className="px-4 pt-3 pb-1">
                <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider">Account</h3>
              </div>
              <div className="divide-y divide-white/10">
                <Row
                  icon="📱"
                  label="Phone Number"
                  subtitle={currentUser.phone || 'Not set'}
                  right={<span className="text-white/40 text-sm">Cannot change</span>}
                />
                <Row
                  icon="🔒"
                  label="Privacy Policy"
                  subtitle="Your data is safe"
                  right={<span className="text-white/40 text-lg">→</span>}
                  onClick={() => navigate("/profile/privacy")}
                />
              </div>
            </div>

            {/* Sign Out Button */}
            <button
              className="w-full rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-900/30 to-pink-900/30 
                       py-4 text-red-300 font-semibold backdrop-blur-sm
                       transition-all duration-200 hover:from-red-900/40 hover:to-pink-900/40 
                       active:scale-[0.98] flex items-center justify-center gap-2"
              onClick={() => setShowSignOutModal(true)}
            >
              <span>🚪</span>
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </Screen>

      {/* Sign Out Confirmation Modal */}
      {showSignOutModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-6 w-full max-w-sm border border-white/20 shadow-2xl">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4 animate-bounce">👋</div>
              <h3 className="text-xl font-bold mb-2 text-white">Leaving Already?</h3>
              <p className="text-white/60 text-sm">
                You'll need to sign in again to continue your quiz journey
              </p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowSignOutModal(false)}
                className="flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white"
              >
                Stay
              </button>
              <button
                onClick={handleSignOut}
                className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 
                         hover:from-red-600 hover:to-pink-600 transition-all duration-200 
                         font-semibold text-white shadow-lg"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Row({ icon, label, subtitle, right, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition-all duration-200
                 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={!onClick}
    >
      <div className="flex items-center gap-3">
        {icon && <span className="text-xl">{icon}</span>}
        <div>
          <div className="text-sm font-semibold text-white">{label}</div>
          {subtitle && <div className="text-xs text-white/50 mt-0.5">{subtitle}</div>}
        </div>
      </div>
      {right}
    </button>
  );
}

function Toggle({ on, set }) {
  return (
    <span
      onClick={(e) => { 
        e.stopPropagation(); 
        set(v => !v); 
        if (navigator.vibrate) navigator.vibrate(10); 
      }}
      className={[
        "inline-flex w-12 h-7 items-center rounded-full transition-all duration-300 px-1 shadow-inner",
        on
          ? "bg-gradient-to-r from-green-400 to-emerald-500 justify-end"
          : "bg-gray-600 justify-start",
      ].join(" ")}
      role="switch"
      aria-checked={on}
    >
      <span className={[
        "w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300",
        on ? "scale-110" : "scale-100"
      ].join(" ")} />
    </span>
  );
}