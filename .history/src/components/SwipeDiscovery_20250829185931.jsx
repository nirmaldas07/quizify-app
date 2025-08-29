//src/component/SwipeDiscovery.jsx

const SwipeDiscovery = ({ onSelect }) => {
  const categories = [
    { id: 'random', emoji: '🎲', title: 'Random Mix', color: 'from-purple-500 to-pink-500' },
    { id: 'trending', emoji: '📈', title: 'Trending Now', color: 'from-blue-500 to-cyan-500' },
    { id: 'level', emoji: '📊', title: 'Your Level', color: 'from-green-500 to-teal-500' },
    { id: 'daily', emoji: '🎯', title: 'Daily Challenge', color: 'from-orange-500 to-red-500' }
  ];
  
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`aspect-square rounded-3xl bg-gradient-to-br ${cat.color} p-6 flex flex-col items-center justify-center gap-3 transform hover:scale-105 transition-all`}
        >
          <span className="text-4xl">{cat.emoji}</span>
          <span className="text-white font-bold">{cat.title}</span>
        </button>
      ))}
    </div>
  );
};