import React, { useState, useEffect, useRef } from "react";

// Fun Facts Database
const funFacts = {
  science: [
    "A day on Venus is longer than its year! It takes 243 Earth days to rotate once.",
    "Honey never spoils! Archaeologists have found 3000-year-old honey that's still edible.",
    "Your brain uses 20% of your body's energy, despite being only 2% of your body weight.",
    "Octopuses have three hearts and blue blood!",
    "A single lightning bolt contains enough energy to toast 100,000 slices of bread."
  ],
  history: [
    "The Great Wall of China isn't visible from space without aid, contrary to popular belief.",
    "Cleopatra lived closer to the Moon landing than to the construction of the Great Pyramid.",
    "Oxford University is older than the Aztec Empire!",
    "The shortest war in history lasted only 38 minutes (Britain vs Zanzibar, 1896).",
    "Ancient Romans used urine as mouthwash because of its ammonia content!"
  ],
  general: [
    "Bananas are berries, but strawberries aren't!",
    "There are more stars in the universe than grains of sand on Earth.",
    "A group of flamingos is called a 'flamboyance'.",
    "The Eiffel Tower can grow 6 inches taller in summer due to thermal expansion.",
    "Bubble wrap was originally invented as wallpaper!"
  ],
  geography: [
    "Russia has 11 time zones - more than any other country!",
    "Africa is the only continent that sits on all four hemispheres.",
    "Canada has more lakes than the rest of the world combined.",
    "The Sahara Desert was once a lush rainforest 6,000 years ago.",
    "Istanbul is the only city located on two continents."
  ]
};

const getRandomFunFact = (category = 'general') => {
  const categoryFacts = funFacts[category.toLowerCase()] || funFacts.general;
  return categoryFacts[Math.floor(Math.random() * categoryFacts.length)];
};

export default function EnhancedHome() {
  // State Management
  const [coins, setCoins] = useState(150);
  const [streak, setStreak] = useState(7);
  const [level, setLevel] = useState(5);
  const [xp, setXp] = useState(450);
  
  // Daily Challenge States
  const [dailyQ, setDailyQ] = useState(null);
  const [challengeStep, setChallengeStep] = useState('question'); // 'question', 'result', 'funfact', 'preview'
  const [picked, setPicked] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentFunFact, setCurrentFunFact] = useState('');
  const [showEarnCoins, setShowEarnCoins] = useState(false);
  const [animateCard, setAnimateCard] = useState(false);
  
  const DAILY_Q_XP = 10;
  const DAILY_Q_COINS = 5;

  // Categories for quick navigation
  const earnCoinsOptions = [
    { 
      id: 'quiz',
      title: 'Complete Quizzes', 
      subtitle: '5 coins per correct answer',
      icon: '📝',
      color: 'from-blue-500 to-cyan-500',
      action: () => console.log('Navigate to quiz')
    },
    { 
      id: 'daily',
      title: 'Daily Challenge', 
      subtitle: '5 coins daily',
      icon: '🎯',
      color: 'from-orange-500 to-pink-500',
      action: () => {
        setShowEarnCoins(false);
        document.getElementById('daily-challenge')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      id: 'spin',
      title: 'Spin & Play', 
      subtitle: 'Win up to 50 coins',
      icon: '🎰',
      color: 'from-purple-500 to-indigo-500',
      action: () => console.log('Navigate to spin')
    },
    { 
      id: 'achievements',
      title: 'Achievements', 
      subtitle: 'Special rewards for milestones',
      icon: '🏆',
      color: 'from-green-500 to-emerald-500',
      action: () => console.log('Navigate to achievements')
    }
  ];

  // Load daily question
  useEffect(() => {
    // Simulate loading a daily question
    setDailyQ({
      category: "Science",
      prompt: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answerIndex: 1,
      explanation: "Mars appears red due to iron oxide (rust) on its surface."
    });
    
    // Add entrance animation
    setTimeout(() => setAnimateCard(true), 100);
  }, []);

  const handleDailyAnswer = (idx) => {
    if (picked !== null) return;
    
    setPicked(idx);
    const correct = idx === dailyQ.answerIndex;
    setIsCorrect(correct);
    
    // Step 1: Show result
    setTimeout(() => {
      setChallengeStep('result');
      if (correct) {
        setCoins(prev => prev + DAILY_Q_COINS);
        setXp(prev => prev + DAILY_Q_XP);
        setStreak(prev => prev + 1);
      }
    }, 500);
    
    // Step 2: Show fun fact
    setTimeout(() => {
      const fact = getRandomFunFact(dailyQ.category);
      setCurrentFunFact(fact);
      setChallengeStep('funfact');
    }, 2500);
    
    // Step 3: Show preview/next action
    setTimeout(() => {
      setChallengeStep('preview');
    }, 6000);
  };

  const resetDailyChallenge = () => {
    setChallengeStep('question');
    setPicked(null);
    setIsCorrect(false);
    // Load new question
    setDailyQ({
      category: "History",
      prompt: "Who painted the Mona Lisa?",
      options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
      answerIndex: 1,
      explanation: "Leonardo da Vinci painted the Mona Lisa between 1503-1519."
    });
  };

  const renderDailyChallenge = () => {
    if (!dailyQ) return null;

    switch (challengeStep) {
      case 'question':
        return (
          <div className={`transition-all duration-700 ${animateCard ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold">🎯 Daily Challenge</h3>
                <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-medium animate-pulse">
                  Day {streak}
                </span>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                +{DAILY_Q_COINS} coins
              </span>
            </div>
            
            <div className="mb-2">
              <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                {dailyQ.category}
              </span>
            </div>
            
            <p className="text-sm mb-4 text-gray-300">{dailyQ.prompt}</p>
            
            <div className="grid grid-cols-2 gap-3">
              {dailyQ.options.map((opt, idx) => {
                const isPicked = picked === idx;
                const isAnswer = idx === dailyQ.answerIndex;
                const showResult = picked !== null;
                
                return (
                  <button
                    key={idx}
                    onClick={() => handleDailyAnswer(idx)}
                    disabled={picked !== null}
                    className={`p-3 rounded-xl border-2 text-sm font-medium transition-all transform hover:scale-105 ${
                      showResult
                        ? isAnswer 
                          ? 'border-green-500 bg-green-500/20 animate-pulse' 
                          : isPicked 
                            ? 'border-red-500 bg-red-500/20 shake' 
                            : 'border-gray-700 bg-gray-800/50 opacity-50'
                        : 'border-gray-700 bg-gray-800/50 hover:bg-gray-700/50 active:scale-95'
                    } ${picked !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    {opt}
                    {showResult && isAnswer && ' ✓'}
                    {showResult && isPicked && !isAnswer && ' ✗'}
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 'result':
        return (
          <div className="text-center py-8 animate-fadeIn">
            <div className={`text-6xl mb-4 ${isCorrect ? 'animate-bounce' : 'animate-shake'}`}>
              {isCorrect ? '🎉' : '😅'}
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${isCorrect ? 'text-green-400' : 'text-orange-400'}`}>
              {isCorrect ? 'Brilliant!' : 'Nice Try!'}
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              {isCorrect 
                ? `You earned ${DAILY_Q_COINS} coins and ${DAILY_Q_XP} XP!` 
                : `The answer was ${dailyQ.options[dailyQ.answerIndex]}`}
            </p>
            {dailyQ.explanation && (
              <p className="text-xs text-gray-500 italic">
                {dailyQ.explanation}
              </p>
            )}
          </div>
        );

      case 'funfact':
        return (
          <div className="animate-slideIn">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl animate-spin-slow">💡</span>
                <h4 className="text-lg font-bold text-purple-400">Fun Fact!</h4>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {currentFunFact}
              </p>
              <div className="mt-4 flex justify-center">
                <div className="flex gap-1">
                  {[1,2,3].map(i => (
                    <div key={i} className={`w-2 h-2 rounded-full transition-all ${
                      i === 2 ? 'bg-purple-400 w-6' : 'bg-gray-600'
                    }`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'preview':
        return (
          <div className="animate-fadeIn">
            <div className="text-center py-6">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-lg font-bold mb-2">Come back tomorrow!</h4>
              <p className="text-sm text-gray-400 mb-4">
                Keep your {streak + (isCorrect ? 1 : 0)} day streak going!
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={resetDailyChallenge}
                  className="px-4 py-2 bg-gray-700 rounded-xl text-sm hover:bg-gray-600 transition-all"
                >
                  Try Another
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-sm font-medium hover:opacity-90 transition-all">
                  Share Achievement 🚀
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
        .animate-slideIn { animation: slideIn 0.5s ease-out; }
        .animate-shake { animation: shake 0.5s ease-out; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .shake { animation: shake 0.5s ease-out; }
      `}</style>

      <div className="relative z-10 px-4 pt-10 pb-24">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-1">Hi, Nirmal! 👋</h1>
            <p className="text-sm text-gray-400">Ready for today's adventure?</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowEarnCoins(true)}
              className="px-4 py-2 rounded-2xl bg-gray-800 border border-gray-700 flex items-center gap-2 hover:bg-gray-700 transition-all hover:scale-105 active:scale-95"
            >
              🪙 <span className="font-bold">{coins}</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 grid place-items-center hover:bg-gray-700 transition">
              👤
            </button>
          </div>
        </div>

        {/* Hero Card - Spin & Win */}
        <div 
          className="relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 20px 40px rgba(102, 126, 234, 0.4)'
          }}
        >
          <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10 animate-float" />
          <div className="absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10 animate-float" style={{ animationDelay: '1.5s' }} />
          
          <h2 className="text-3xl font-bold mb-2">🎰 Spin & Win</h2>
          <p className="text-base opacity-90 mb-4">Test your luck, win amazing prizes!</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur">
            Play Now →
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          {[
            { icon: "🎯", label: `Quest`, color: "from-orange-500 to-pink-500" },
            { icon: "🔥", label: `${streak} Days`, color: "from-red-500 to-orange-500" },
            { icon: "🏆", label: "Awards", color: "from-blue-500 to-purple-500" },
            { icon: "🎁", label: "Rewards", color: "from-green-500 to-teal-500" },
          ].map((action, idx) => (
            <button
              key={idx}
              className={`bg-gradient-to-br ${action.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-110 active:scale-95`}
            >
              <div className="text-2xl">{action.icon}</div>
              <div className="text-[10px] font-medium text-white">{action.label}</div>
            </button>
          ))}
        </div>

        {/* Daily Challenge Section */}
        <div id="daily-challenge" className="mb-6">
          <div className="rounded-3xl bg-gray-800/50 backdrop-blur border border-gray-700 p-6 min-h-[280px]">
            {renderDailyChallenge()}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-4">Choose Your Adventure</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { name: "General", icon: "🧠", gradient: "from-red-500 to-pink-500" },
              { name: "Science", icon: "🧪", gradient: "from-cyan-500 to-teal-500" },
              { name: "Fun Facts", icon: "🎉", gradient: "from-yellow-400 to-orange-500" },
              { name: "History", icon: "🏺", gradient: "from-green-400 to-emerald-500" },
              { name: "AI & Tech", icon: "🤖", gradient: "from-purple-400 to-indigo-500" },
              { name: "More", icon: "✨", gradient: "from-pink-400 to-rose-500" },
            ].map((cat) => (
              <button
                key={cat.name}
                className={`bg-gradient-to-br ${cat.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg active:scale-95`}
              >
                <div className="text-3xl">{cat.icon}</div>
                <div className="text-xs font-bold text-white text-center">{cat.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Practice Mode */}
        <button className="w-full rounded-2xl bg-gray-800/50 border border-gray-700 p-5 flex justify-between items-center hover:bg-gray-700/50 transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl">
              📚
            </div>
            <div className="text-left">
              <div className="font-medium">Practice Mode</div>
              <div className="text-xs text-gray-400">No timer • Learn at your pace</div>
            </div>
          </div>
          <div className="text-xl">→</div>
        </button>

        {/* Enhanced Earn Coins Modal */}
        {showEarnCoins && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-3xl p-6 w-full max-w-md border border-gray-700 shadow-2xl animate-fadeIn">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Earn Coins 🪙
                </h3>
                <button
                  onClick={() => setShowEarnCoins(false)}
                  className="w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 grid place-items-center hover:bg-gray-700 transition-all"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-3 mb-6">
                {earnCoinsOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={option.action}
                    className="w-full p-4 rounded-2xl bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-all group transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                        {option.icon}
                      </div>
                      <div className="text-left flex-1">
                        <div className="font-semibold text-white">{option.title}</div>
                        <div className="text-xs text-gray-400">{option.subtitle}</div>
                      </div>
                      <div className="text-gray-500 group-hover:text-white transition-colors">
                        →
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-4 border border-yellow-500/30">
                <div className="flex items-center gap-3">
                  <div className="text-2xl animate-bounce">💡</div>
                  <div>
                    <div className="text-sm font-medium text-yellow-400">Pro Tip</div>
                    <div className="text-xs text-gray-300">Complete daily challenges to maintain your streak and earn bonus rewards!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}