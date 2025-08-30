// src/components/Play/modes/survival/GameOverScreen.jsx
export default function GameOverScreen({ 
  score, 
  questionsAnswered, 
  highScore,
  checkpoint,
  onRestart,
  onContinue,
  onBack
}) {
  const isNewHighScore = score > highScore;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-5xl font-black mb-4">GAME OVER</h1>
        
        {isNewHighScore && (
          <div className="text-yellow-400 text-2xl mb-4">🏆 NEW HIGH SCORE! 🏆</div>
        )}
        
        <div className="space-y-2 mb-8">
          <div className="text-xl">Score: {score}</div>
          <div>Questions Answered: {questionsAnswered}</div>
          <div className="text-sm opacity-70">Best: {highScore}</div>
        </div>
        
        <div className="space-y-3">
          {checkpoint > 0 && onContinue && (
            <button onClick={onContinue} className="w-full p-4 bg-green-600 rounded-xl">
              Continue from Checkpoint ({checkpoint})
            </button>
          )}
          <button onClick={onRestart} className="w-full p-4 bg-blue-600 rounded-xl">
            New Game
          </button>
          <button onClick={onBack} className="w-full p-4 bg-white/10 rounded-xl">
            Back to Modes
          </button>
        </div>
      </div>
    </div>
  );
}