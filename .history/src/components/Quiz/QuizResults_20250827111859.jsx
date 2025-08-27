// src/components/Quiz/QuizResults.jsx
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../../App";
import CoinFly from "../CoinFly";
// import XPill from "../XPill";
// import CoinPill from "../CoinPill";

const COIN_TO_XP = 2;
const COINS_PER_CORRECT = 5;

const QuizResults = ({ 
  results, 
  onRetake, 
  onReview,
  isRetake = false,
  isPractice = false 
}) => {
  const navigate = useNavigate();
  const { 
    xp, 
    coins, 
    level, 
    combo,
    addXP, 
    addCoins, 
    updateCombo,
    nextThreshold 
  } = useGame();

  const [showReward, setShowReward] = useState(true);
  const [pendingReward, setPendingReward] = useState(null);
  const [countCorrect, setCountCorrect] = useState(0);
  const [countCoins, setCountCoins] = useState(0);
  const [showFlash, setShowFlash] = useState(false);
  const coinPillRef = useRef(null);

  const { correct, total, category, mode, elapsedMs } = results;
  const accuracy = total ? Math.round((correct / total) * 100) : 0;

  // Calculate rewards
  useEffect(() => {
    // No rewards for practice or retakes
    if (isPractice || isRetake) {
      setShowReward(false);
      return;
    }

    const baseCoins = correct * COINS_PER_CORRECT;
    
    // Apply combo multiplier for streaks
    let bonusMultiplier = 1;
    if (accuracy === 100) {
      bonusMultiplier = 1.5; // 50% bonus for perfect score
      updateCombo(combo + 1); // Increment combo for perfect scores
    } else if (accuracy >= 80) {
      bonusMultiplier = 1.2; // 20% bonus for high scores
    } else {
      updateCombo(0); // Reset combo if score is below 80%
    }

    const totalCoins = Math.floor(baseCoins * bonusMultiplier);
    const totalXP = totalCoins * COIN_TO_XP;

    setPendingReward({
      coins: totalCoins,
      xp: totalXP,
      bonusApplied: bonusMultiplier > 1
    });

    // Animate the reward screen
    setShowFlash(true);
    setTimeout(() => setShowFlash(false), 180);

    // Count-up animation
    const duration = 1000;
    const startTime = performance.now();
    let raf;

    const animate = (currentTime) => {
      const progress = Math.min(1, (currentTime - startTime) / duration);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCountCorrect(Math.round(correct * easeOut));
      setCountCoins(Math.round(totalCoins * easeOut));
      
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    setCountCorrect(0);
    setCountCoins(0);
    raf = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(raf);
  }, [correct, accuracy, isPractice, isRetake, combo, updateCombo]);

  // Handle coin animation completion
  const handleCoinAnimationDone = () => {
    if (pendingReward) {
      addXP(pendingReward.xp);
      addCoins(pendingReward.coins);
      setPendingReward(prev => ({ ...prev, awarded: true }));
    }
  };

  // Auto-advance from reward to results
  useEffect(() => {
    if (!showReward) return;
    if (pendingReward && !pendingReward.awarded) return;
    
    const timer = setTimeout(() => setShowReward(false), 2000);
    return () => clearTimeout(timer);
  }, [showReward, pendingReward]);

  // Format time
  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  if (showReward && !isPractice && !isRetake) {
    return (
      <>
        {/* Coin animation */}
        {pendingReward && pendingReward.coins > 0 && !pendingReward.awarded && (
          <CoinFly
            targetRef={coinPillRef}
            count={Math.min(28, Math.max(12, Math.round(pendingReward.coins / 2)))}
            onDone={handleCoinAnimationDone}
          />
        )}

        {/* HUD */}
        <div className="mt-3 flex items-center justify-end gap-2 px-3">
          <XPill level={level} xp={xp} next={nextThreshold} />
          <CoinPill ref={coinPillRef} total={coins} />
        </div>

        {/* Reward Card */}
        <div 
          className="relative mt-4 card rounded-3xl p-8 text-center overflow-hidden"
          style={{ animation: "popIn 380ms ease-out" }}
        >
          {showFlash && (
            <div className="absolute inset-0 bg-white/70 pointer-events-none rounded-3xl" />
          )}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div 
              className="h-full w-1/3 -skew-x-12 bg-white/10 blur-md"
              style={{ animation: "shine 900ms ease-out forwards 120ms" }}
            />
          </div>

          <div className="relative">
            <div className="text-3xl md:text-4xl font-extrabold mb-2">Rewards</div>
            <div className="text-sm text-base-muted mb-6">
              {category} • {mode === "practice" ? "Practice" : "Quiz"}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              <div className="rounded-2xl border border-base-border bg-white/5 p-5">
                <div className="text-base-muted text-sm">Correct answers</div>
                <div className="text-5xl font-black mt-1">{countCorrect}</div>
              </div>
              <div className="rounded-2xl border border-base-border bg-white/5 p-5">
                <div className="text-base-muted text-sm">Coins</div>
                <div className="text-5xl font-black mt-1">{countCoins}</div>
                <div className="text-xs text-base-muted mt-1">
                  {correct} × 5
                  {pendingReward?.bonusApplied && " (+ bonus)"}
                </div>
              </div>
            </div>

            {combo > 0 && (
              <div className="mt-4 text-sm text-yellow-400">
                🔥 Combo streak: {combo}
              </div>
            )}

            <div className="mt-6 text-xs text-base-muted">
              Finalizing… <span className="animate-pulse">•••</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Main results view
  return (
    <>
      {/* HUD */}
      <div className="mt-3 flex items-center justify-between px-3">
        <button
          onClick={() => navigate("/")}
          className="px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm"
        >
          ← Home
        </button>
        <div className="flex items-center gap-2">
          <XPill level={level} xp={xp} next={nextThreshold} />
          <CoinPill total={coins} />
        </div>
      </div>

      {/* Results Card */}
      <div className="mt-4 card rounded-3xl p-5 text-center">
        <h2 className="text-xl font-semibold mb-1">Results</h2>
        <div className="text-sm text-base-muted mb-4">
          {category} • {mode === "practice" ? "Practice" : "Quiz"}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="rounded-xl border border-base-border bg-white/5 p-3">
            <div className="text-xs text-base-muted">Score</div>
            <div className="text-lg font-semibold">{correct}/{total}</div>
          </div>
          <div className="rounded-xl border border-base-border bg-white/5 p-3">
            <div className="text-xs text-base-muted">Accuracy</div>
            <div className="text-lg font-semibold">{accuracy}%</div>
          </div>
          <div className="rounded-xl border border-base-border bg-white/5 p-3">
            <div className="text-xs text-base-muted">Time</div>
            <div className="text-lg font-semibold">{formatTime(elapsedMs)}</div>
          </div>
        </div>

        {/* Combo indicator */}
        {combo > 0 && (
          <div className="mb-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30 p-3">
            <div className="text-yellow-400">
              🔥 Combo Streak: {combo}
              {accuracy === 100 && " - Perfect Score!"}
            </div>
            <div className="text-xs text-base-muted mt-1">
              Keep scoring above 80% to maintain your streak
            </div>
          </div>
        )}

        {/* Stats summary */}
        <QuizStats category={category} />

        {/* Action buttons */}
        <div className="mt-5 space-y-3">
          <div className="flex gap-2 justify-center">
            <button 
              className="flex-1 max-w-[140px] py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-sm"
              onClick={onReview}
            >
              Review Answers
            </button>
            <button 
              className="flex-1 max-w-[140px] py-3 rounded-2xl border border-white/20 text-white font-medium text-sm"
              onClick={onRetake}
            >
              Retake Quiz
            </button>
          </div>
          <div className="flex gap-2 justify-center">
            <button 
              className="flex-1 max-w-[140px] py-2.5 rounded-xl border border-white/20 bg-white/5 text-white text-sm"
              onClick={() => navigate("/profile/history")}
            >
              History
            </button>
            <button 
              className="flex-1 max-w-[140px] py-2.5 rounded-xl border border-white/20 bg-white/5 text-white text-sm"
              onClick={() => navigate("/")}
            >
              Home
            </button>
          </div>
        </div>
      </div>

      {/* Recent Quizzes */}
      <RecentQuizzes onReview={onReview} />
    </>
  );
};

// Stats component
const QuizStats = ({ category }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("qp_stats");
      if (stored) {
        const data = JSON.parse(stored);
        const categoryStats = data.sessions?.filter(s => s.cat === category) || [];
        if (categoryStats.length > 0) {
          const recent = categoryStats.slice(-7);
          const avgAccuracy = Math.round(
            recent.reduce((acc, s) => acc + (s.correct / s.total) * 100, 0) / recent.length
          );
          setStats({
            avgAccuracy,
            totalSessions: categoryStats.length,
            lastSession: categoryStats[categoryStats.length - 1]
          });
        }
      }
    } catch (error) {
      console.error("Error loading stats:", error);
    }
  }, [category]);

  if (!stats) return null;

  return (
    <div className="rounded-xl border border-base-border bg-white/5 p-3 text-left">
      <ul className="list-disc list-inside text-xs text-base-muted space-y-1">
        <li>Avg. accuracy (last 7): <b>{stats.avgAccuracy}%</b></li>
        <li>Total sessions: <b>{stats.totalSessions}</b></li>
        <li>Last score: <b>{stats.lastSession.correct}/{stats.lastSession.total}</b></li>
      </ul>
    </div>
  );
};

// Recent quizzes component (simplified)
const RecentQuizzes = ({ onReview }) => {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("qp_recent");
      if (stored) {
        const data = JSON.parse(stored);
        setRecent(data.slice(0, 5));
      }
    } catch (error) {
      console.error("Error loading recent quizzes:", error);
    }
  }, []);

  if (recent.length === 0) return null;

  return (
    <div className="mt-4 card rounded-3xl p-5">
      <h3 className="text-base font-semibold mb-3">Recent Quizzes</h3>
      <div className="space-y-2">
        {recent.map((quiz) => (
          <div 
            key={quiz.id} 
            className="flex items-center justify-between py-2 border-b border-white/10 last:border-0"
          >
            <div className="flex-1">
              <div className="text-sm">{quiz.cat}</div>
              <div className="text-xs text-base-muted">
                {quiz.correct}/{quiz.total} • {Math.round((quiz.correct / quiz.total) * 100)}%
              </div>
            </div>
            <button
              className="px-2 py-1 rounded-lg border border-base-border bg-base-card text-xs"
              onClick={() => onReview(quiz.snapshot)}
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizResults;