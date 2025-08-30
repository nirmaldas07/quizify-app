//src/components/SwipeDiscovery.jsx
const SwipeDiscovery = ({ onSelect }) => {
  const categories = [
    { id: 'random', emoji: '🎲', title: 'Random Mix', color: 'from-purple-500 to-pink-500' },
    { id: 'trending', emoji: '📈', title: 'Trending Now', color: 'from-blue-500 to-cyan-500' },
    { id: 'level', emoji: '📊', title: 'Your Level', color: 'from-green-500 to-teal-500' },
    { id: 'daily', emoji: '🎯', title: 'Daily Challenge', color: 'from-orange-500 to-red-500' }
  ];
  
  return (
    <div className="fixed inset-0 bg-gray-900 overflow-hidden">
      {/* Header */}
      <div className="text-center pt-8 pb-4">
        <h1 className="text-2xl font-bold text-white">Choose a swipe mode</h1>
      </div>
      
      {/* Categories Grid */}
      <div className="flex items-center justify-center px-4 h-[calc(100vh-120px)]">
        <div className="grid grid-cols-2 gap-4 w-full max-w-md h-[65vh]">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id, cat.title)}
              className={`rounded-3xl bg-gradient-to-br ${cat.color} p-6 flex flex-col items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl`}
            >
              <span className="text-5xl">{cat.emoji}</span>
              <span className="text-white font-bold text-lg text-center">{cat.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwipeDiscovery;