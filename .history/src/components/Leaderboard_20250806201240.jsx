import React from 'react';
import BackButton from './BackButton';

const dummyLeaderboard = [
  { name: 'Rohit', points: 1100, avatar: '', country: '🇮🇳' },
  { name: 'Sara', points: 1050, avatar: '', country: '🇺🇸' },
  { name: 'Aman', points: 980, avatar: '', country: '🇨🇦' },
  { name: 'Priya', points: 950, avatar: '', country: '🇬🇧' },
  { name: 'Nirmal', points: 1209, avatar: '/avatar.png', country: '🇮🇳' }, // current user
];

const CURRENT_USER = 'Nirmal';

const Leaderboard = () => {
  const sortedUsers = [...dummyLeaderboard].sort((a, b) => b.points - a.points);

  const getBadge = (rank) => {
    return rank === 0 ? '🥇' : rank === 1 ? '🥈' : rank === 2 ? '🥉' : `#${rank + 1}`;
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 pb-24">
      <BackButton />

      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">🏆 Leaderboard</h1>

      {/* ✅ Title Row */}
      <div className="flex justify-between px-4 py-2 text-xs text-gray-400 font-semibold border-b border-gray-700 mb-2">
        <div className="w-12">Rank</div>
        <div className="flex-1">Name</div>
        <div className="w-16 text-center">Country</div>
        <div className="w-20 text-right">Points</div>
      </div>

      {/* Leaderboard List */}
      <div className="space-y-2">
        {sortedUsers.map((user, index) => {
          const isCurrentUser = user.name === CURRENT_USER;

          return (
            <div
              key={user.name}
              className={`flex items-center justify-between px-4 py-2 rounded-md shadow-sm ${
                isCurrentUser ? 'bg-blue-900' : 'bg-gray-800'
              }`}
            >
              {/* Rank */}
              <div className="w-12 font-semibold text-sm text-gray-200">
                {getBadge(index)}
              </div>

              {/* Avatar + Name */}
              <div className="flex items-center gap-2 flex-1">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-6 h-6 rounded-full object-cover border border-white"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-sm">
                    👤
                  </div>
                )}
                <span className="text-white text-sm">{user.name}</span>
              </div>

              {/* Country */}
              <div className="w-16 text-center text-sm">{user.country || '🌍'}</div>

              {/* Points */}
              <div className="w-20 text-right text-yellow-400 font-semibold text-sm">
                {user.points} pts
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leaderboard;
