import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  // Mock user data
  const user = {
    name: 'Nirmal',
    avatar: '/avatar.png',
    level: 12,
    xp: 2840,
    xpToNext: 3000,
    coins: 450,
    rank: 1,
    streak: 15,
    hasStreakFreeze: true,
    dailyQuest: { progress: 2, target: 3, reward: 50 },
    weeklyQuest: { progress: 8, target: 10, reward: 200 }
  };

  const profileSections = [
    { 
      id: 'leaderboard', 
      title: 'Leaderboard', 
      subtitle: 'Compete this week', 
      icon: '🏆',
      hasNotification: false,
      route: '/leaderboard'
    },
    { 
      id: 'history', 
      title: 'History', 
      subtitle: 'Track what you tried', 
      icon: '📊',
      hasNotification: false,
      route: '/profile/history'
    },
    { 
      id: 'rewards', 
      title: 'Rewards', 
      subtitle: 'Redeem your wins', 
      icon: '🎁',
      hasNotification: true,
      route: '/profile/rewards'
    },
    { 
      id: 'badges', 
      title: 'Badges', 
      subtitle: 'Collect and show off', 
      icon: '🏅',
      hasNotification: false,
      route: '/profile/badges'
    },
    { 
      id: 'achievements', 
      title: 'Achievements', 
      subtitle: 'Milestones you\'ve hit', 
      icon: '🎯',
      hasNotification: true,
      route: '/profile/achievements'
    },
    { 
      id: 'streaks', 
      title: 'Streaks', 
      subtitle: 'Don\'t break the chain', 
      icon: '🔥',
      hasNotification: false,
      route: '/profile/streaks'
    },
    { 
      id: 'quests', 
      title: 'Quests', 
      subtitle: 'Small goals. Big gains', 
      icon: '⚡',
      hasNotification: false,
      route: '/profile/quests'
    },
    { 
      id: 'friends', 
      title: 'Friends', 
      subtitle: 'Play with your people', 
      icon: '👥',
      hasNotification: false,
      route: '/profile/friends'
    },
    { 
      id: 'wallet', 
      title: 'Wallet', 
      subtitle: 'Every coin accounted', 
      icon: '💰',
      hasNotification: false,
      route: '/profile/wallet'
    },
    { 
      id: 'settings', 
      title: 'Settings', 
      subtitle: 'Make it yours', 
      icon: '⚙️',
      hasNotification: false,
      route: '/profile/settings'
    }
  ];

  const handleNavigation = (route) => {
    navigate(route);
  };

  const getXPPercentage = () => {
    const currentLevelXP = user.xp % 1000; // Assuming 1000 XP per level
    return (currentLevelXP / 1000) * 100;
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 pb-24">
      {/* Header Section - Sticky */}
      <div className="sticky top-0 bg-black z-10 pb-4">
        <div className="flex items-center justify-between mb-6">
          {/* Avatar + Name */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigation('/profile/edit')}
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-white"
            />
            <div>
              <h1 className="text-xl font-semibold">{user.name}</h1>
              <p className="text-gray-400 text-sm">Tap to edit</p>
            </div>
          </div>

          {/* Level, Coins, Rank */}
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-sm text-gray-400">Level</div>
              <div className="text-lg font-bold text-blue-400">{user.level}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400">Coins</div>
              <div className="text-lg font-bold text-yellow-400">{user.coins}</div>
            </div>
            <div 
              className="bg-blue-900 px-3 py-1 rounded-full cursor-pointer"
              onClick={() => handleNavigation('/leaderboard')}
            >
              <span className="text-xs font-semibold">#{user.rank}</span>
            </div>
          </div>
        </div>

        {/* XP Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>XP: {user.xp}</span>
            <span>Next: {user.xpToNext}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${getXPPercentage()}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Quick Cards Section */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Streak Card */}
        <div 
          className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-700 transition-colors"
          onClick={() => handleNavigation('/profile/streaks')}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🔥</span>
            <span className="text-sm font-semibold">Streak</span>
            {user.hasStreakFreeze && (
              <span className="text-xs bg-blue-900 px-2 py-1 rounded">❄️</span>
            )}
          </div>
          <div className="text-2xl font-bold text-orange-400">{user.streak}</div>
          <div className="text-xs text-gray-400">days</div>
        </div>

        {/* Quests Card */}
        <div 
          className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-700 transition-colors"
          onClick={() => handleNavigation('/profile/quests')}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">⚡</span>
            <span className="text-sm font-semibold">Daily Quest</span>
          </div>
          <div className="text-lg font-bold text-green-400">
            {user.dailyQuest.progress}/{user.dailyQuest.target}
          </div>
          <div className="text-xs text-gray-400">+{user.dailyQuest.reward} coins</div>
        </div>
      </div>

      {/* Profile Sections List */}
      <div className="space-y-1">
        {profileSections.map((section) => (
          <div
            key={section.id}
            className="flex items-center justify-between p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors relative"
            onClick={() => handleNavigation(section.route)}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{section.icon}</span>
              <div>
                <div className="text-white font-medium">{section.title}</div>
                <div className="text-sm text-gray-400">{section.subtitle}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {section.hasNotification && (
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              )}
              <span className="text-gray-400">›</span>
            </div>
          </div>
        ))}
      </div>

      {/* Year in Review - Seasonal */}
      <div 
        className="mt-6 bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-4 cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => handleNavigation('/profile/year-review')}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">🎉</span>
          <div>
            <div className="text-white font-medium">Year in Review</div>
            <div className="text-sm text-gray-300">Your year, leveled up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;