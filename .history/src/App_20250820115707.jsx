import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'General Knowledge', questions: 50, icon: '🧠' },
  { name: 'Current Affairs', questions: 40, icon: '📰' },
  { name: 'Fun Facts', questions: 30, icon: '🎉' },
  { name: 'Science', questions: 45, icon: '🧪' },
];

const Home = () => {
  const navigate = useNavigate();
  const userName = 'Nirmal';

  return (
    <div className="min-h-screen bg-black text-white p-6 pb-24 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pt-12">
        <div>
          <h1 className="text-2xl font-bold">Hi, {userName}</h1>
          <p className="text-gray-400">Let’s make this day productive</p>
        </div>
        <img
          src="/avatar.png"
          alt="avatar"
          className="w-12 h-12 rounded-full border border-white"
        />
      </div>

      {/* Ranking and Points */}
      <div className="bg-gray-800 rounded-xl px-4 py-3 flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          🏆 <span>Ranking</span>
          <span className="text-yellow-400 font-bold ml-1">348</span>
        </div>
        <div className="flex items-center gap-2">
          💰 <span>Points</span>
          <span className="text-yellow-400 font-bold ml-1">1209</span>
        </div>
      </div>

      {/* Category Grid */}
      <h2 className="text-xl font-semibold mb-4">Let's play</h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() =>
              navigate(`/quiz/${cat.name.toLowerCase().replace(/\s+/g, '-')}`, {
                state: { difficulty: 'easy' },
              })
            }
            className="bg-[#1f2937] p-4 rounded-lg shadow hover:bg-[#374151] transition text-left"
          >
            <div className="text-3xl mb-2">{cat.icon}</div>
            <div className="font-semibold text-white">{cat.name}</div>
            <div className="text-gray-400 text-sm">{cat.questions} questions</div>
          </button>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around items-center h-16 border-t border-gray-700">
        <button
          className="flex flex-col items-center text-sm"
          onClick={() => navigate('/')}
        >
          <div className="text-xl">🏠</div>
          <span>Home</span>
        </button>
        <button
          className="flex flex-col items-center text-sm"
          onClick={() => alert('Coming soon!')}
        >
          <div className="text-xl">🏆</div>
          <span>Leaderboard</span>
        </button>
        <button
          className="flex flex-col items-center text-sm"
          onClick={() => alert('Coming soon!')}
        >
          <div className="text-xl">👤</div>
          <span>You</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
