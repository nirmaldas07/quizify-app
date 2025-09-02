// src/components/Play/modes/survival/SurvivalMode.jsx

import { useEffect, useState, useRef } from "react";
import Papa from "papaparse";
import { useGameData } from "../../shared/hooks/useGameData.js";
import LivesDisplay from "./LivesDisplay.jsx";
import QuestionScreen from "./QuestionScreen.jsx";
import GameOverScreen from "./GameOverScreen.jsx";

const DIFFICULTY_TIERS = {
  EASY: { min: 0, max: 9, timer: 30, points: 10 },
  MEDIUM: { min: 10, max: 24, timer: 25, points: 20 },
  HARD: { min: 25, max: 49, timer: 20, points: 30 },
  EXPERT: { min: 50, max: 99, timer: 15, points: 50 },
  LEGENDARY: { min: 100, max: Infinity, timer: 10, points: 100 }
};

export default function SurvivalMode({ onBack, isFromQuest }) {
  const { 
    coins, 
    xp, 
    level, 
    soundOn, 
    addCoins, 
    addXp, 
    setSoundOn 
  } = useGameData();

  const [gameState, setGameState] = useState('playing'); // 'playing', 'gameOver'
  const [lives, setLives] = useState(3);
  const [questionCount, setQuestionCount] = useState(0);
  const [correctStreak, setCorrectStreak] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [currentDifficulty, setCurrentDifficulty] = useState('EASY');
  
  const [allQuestions, setAllQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);
  const [checkpoint, setCheckpoint] = useState(0);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  
  const timerRef = useRef(null);
  const usedQuestionIds = useRef(new Set());

  // Load questions on mount
  useEffect(() => {
    loadQuestions();
    loadCheckpoint();
    
    // Push a history state when entering survival mode
    window.history.pushState({ mode: 'survival' }, '', window.location.href);
    
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Timer logic
  useEffect(() => {
    if (gameState === 'playing' && currentQuestion && timeLeft > 0 && !showFeedback) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTimeUp();
            return 0;
          }
          if (prev === 6 && soundOn) {
            playSound("/sounds/tick.mp3", 0.8);
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [gameState, currentQuestion, timeLeft, showFeedback, soundOn]);

  // Update difficulty based on question count
  useEffect(() => {
    const newDifficulty = getDifficultyTier(questionCount);
    if (newDifficulty !== currentDifficulty) {
      setCurrentDifficulty(newDifficulty);
      if (soundOn) playSound("/sounds/levelup.mp3", 0.6);
    }
  }, [questionCount, currentDifficulty, soundOn]);

  // Save checkpoint every 10 questions
  useEffect(() => {
    if (questionCount > 0 && questionCount % 10 === 0) {
      saveCheckpoint();
      setCheckpoint(questionCount);
      if (soundOn) playSound("/sounds/checkpoint.mp3", 0.7);
    }
  }, [questionCount, soundOn]);

  // Handle Android back button
  useEffect(() => {
    const handlePopState = (e) => {
      e.preventDefault();
      // Show exit confirmation when back button is pressed
      setShowExitConfirm(true);
      // Push state again to prevent immediate navigation
      window.history.pushState({ mode: 'survival' }, '', window.location.href);
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const getDifficultyTier = (count) => {
    if (count >= 100) return 'LEGENDARY';
    if (count >= 50) return 'EXPERT';
    if (count >= 25) return 'HARD';
    if (count >= 10) return 'MEDIUM';
    return 'EASY';
  };

  const loadQuestions = async () => {
    try {
      const response = await fetch("/data/quiz_questions_bank.csv");
      const csvText = await response.text();
      const { data } = Papa.parse(csvText, { 
        header: true, 
        skipEmptyLines: true,
        transformHeader: h => h.trim().toLowerCase()
      });

      const processedQuestions = data.map((row, index) => {
        const options = [row.option1, row.option2, row.option3, row.option4]
          .map(opt => (opt || "").trim())
          .filter(Boolean);

        if (options.length < 4) return null;

        const answerMap = { a: 0, b: 1, c: 2, d: 3 };
        let correctIndex = answerMap[row.answer?.toLowerCase()];
        
        if (correctIndex === undefined) {
          correctIndex = options.findIndex(opt => 
            opt.toLowerCase() === (row.answer || "").toLowerCase()
          );
        }
        
        if (correctIndex === -1) correctIndex = 0;

        return {
          id: row.id || `q_${index}`,
          prompt: (row.question || "").trim(),
          options,
          correctIndex,
          category: (row.category || row.subject || "general").trim(),
          difficulty: (row.difficulty || "medium").toLowerCase()
        };
      }).filter(Boolean);

      setAllQuestions(processedQuestions);
      loadNextQuestion(processedQuestions);
    } catch (error) {
      console.error("Failed to load questions:", error);
    }
  };

  const loadNextQuestion = (questionsPool = allQuestions) => {
    const availableQuestions = questionsPool.filter(q => !usedQuestionIds.current.has(q.id));
    
    if (availableQuestions.length === 0) {
      usedQuestionIds.current.clear();
      availableQuestions.push(...questionsPool);
    }

    const difficulty = currentDifficulty.toLowerCase();
    let candidateQuestions = availableQuestions.filter(q => 
      q.difficulty === difficulty || q.difficulty === 'medium'
    );
    
    if (candidateQuestions.length === 0) {
      candidateQuestions = availableQuestions;
    }

    const question = candidateQuestions[Math.floor(Math.random() * candidateQuestions.length)];
    
    if (question) {
      usedQuestionIds.current.add(question.id);
      setCurrentQuestion(question);
      setTimeLeft(DIFFICULTY_TIERS[currentDifficulty].timer);
      setShowFeedback(false);
    }
  };

  const handleAnswer = (selectedIndex) => {
    if (showFeedback) return;

    const correct = selectedIndex === currentQuestion.correctIndex;
    setLastAnswerCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      handleCorrectAnswer();
    } else {
      handleWrongAnswer();
    }

    setTimeout(() => {
      if (lives > 0 || correct) {
        setQuestionCount(prev => prev + 1);
        loadNextQuestion();
      }
    }, 1500);
  };
    
  const handleCorrectAnswer = () => {
    const points = DIFFICULTY_TIERS[currentDifficulty].points;
    setTotalScore(prev => prev + points);
    setCorrectStreak(prev => {
      const newStreak = prev + 1;
      
      // Update quest progress for "Win 5 in a row"
      if (isFromQuest) {
        const progress = JSON.parse(localStorage.getItem('questProgress') || '{}');
        progress.winStreak = Math.max(progress.winStreak || 0, newStreak);
        progress.date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
        localStorage.setItem('questProgress', JSON.stringify(progress));
        
        if (newStreak >= 5) {
          console.log('Win streak quest completed!');
        }
      }
      
      // Restore life every 5 correct answers in a row
      if (newStreak % 5 === 0 && lives < 3) {
        setLives(prev => Math.min(prev + 1, 3));
        if (soundOn) playSound("/sounds/lifeup.mp3", 0.8);
      }
      
      return newStreak;
    });

    addCoins(Math.floor(points / 10));
    addXp(1);
    if (soundOn) playSound("/sounds/correct.mp3", 0.7);
  };

  const handleWrongAnswer = () => {
    setCorrectStreak(0);
    setLives(prev => {
      const newLives = prev - 1;
      if (newLives <= 0) {
        setGameState('gameOver');
        saveHighScore();
      }
      return newLives;
    });
    
    if (soundOn) playSound("/sounds/wrong.mp3", 0.7);
    vibrate([200]);
  };

  const handleTimeUp = () => {
    handleWrongAnswer();
  };

  const saveCheckpoint = () => {
    const checkpointData = {
      questionCount,
      totalScore,
      lives,
      correctStreak,
      timestamp: Date.now()
    };
    localStorage.setItem('survival_checkpoint', JSON.stringify(checkpointData));
  };

  const loadCheckpoint = () => {
    const saved = localStorage.getItem('survival_checkpoint');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        // Only restore if checkpoint is less than 24 hours old
        if (Date.now() - data.timestamp < 86400000) {
          setQuestionCount(data.questionCount);
          setTotalScore(data.totalScore);
          setLives(data.lives);
          setCorrectStreak(data.correctStreak);
          setCheckpoint(data.questionCount);
        } else {
          localStorage.removeItem('survival_checkpoint');
        }
      } catch (error) {
        console.error("Failed to load checkpoint:", error);
      }
    }
  };

  const clearCheckpoint = () => {
    localStorage.removeItem('survival_checkpoint');
    setCheckpoint(0);
  };

  const saveHighScore = () => {
    const currentHigh = parseInt(localStorage.getItem('survival_highscore') || '0');
    if (totalScore > currentHigh) {
      localStorage.setItem('survival_highscore', totalScore.toString());
      localStorage.setItem('survival_highquestions', questionCount.toString());
    }
  };

  const handleRestart = () => {
    setGameState('playing');
    setLives(3);
    setQuestionCount(0);
    setCorrectStreak(0);
    setTotalScore(0);
    setCurrentDifficulty('EASY');
    usedQuestionIds.current.clear();
    clearCheckpoint();
    loadNextQuestion();
  };

  const handleContinueFromCheckpoint = () => {
    setGameState('playing');
    loadNextQuestion();
  };

  const handleBackPress = () => {
    setShowExitConfirm(true);
  };

  const confirmExit = () => {
    // Save progress if from quest
    if (isFromQuest) {
      const progress = JSON.parse(localStorage.getItem('questProgress') || '{}');
      progress.winStreak = Math.max(progress.winStreak || 0, correctStreak);
      progress.date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
      localStorage.setItem('questProgress', JSON.stringify(progress));
      
      // Navigate directly to quests
      window.location.href = '/profile/quests';
    } else {
      // Go back to PlayHome
      window.history.go(-1);
      onBack();
    }
  };

  const playSound = (path, volume = 0.5) => {
    try {
      const audio = new Audio(path);
      audio.volume = volume;
      audio.play();
    } catch {}
  };

  const vibrate = (pattern) => {
    if (navigator.vibrate) {
      navigator.vibrate(pattern);
    }
  };

  // Hide bottom nav
  useEffect(() => {
    document.body.classList.add('hide-bottom-nav');
    return () => {
      document.body.classList.remove('hide-bottom-nav');
    };
  }, []);

  if (gameState === 'gameOver') {
    return (
      <>
        <GameOverScreen
          score={totalScore}
          questionsAnswered={questionCount}
          highScore={parseInt(localStorage.getItem('survival_highscore') || '0')}
          checkpoint={checkpoint}
          onRestart={handleRestart}
          onContinue={checkpoint > 0 ? handleContinueFromCheckpoint : null}
          onBack={handleBackPress}
        />
        
        {/* Exit Confirmation Modal */}
        {showExitConfirm && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">🚪</div>
                <h3 className="text-xl font-bold text-white mb-2">Leave the game?</h3>
                <p className="text-white/70">Your progress saves at checkpoints!</p>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowExitConfirm(false)} 
                  className="flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  Keep Playing
                </button>
                <button 
                  onClick={confirmExit} 
                  className="flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  Exit
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-base-bg text-white flex items-center justify-center">
        <div className="text-xl">Loading questions...</div>
      </div>
    );
  }

  return (
    <>
      <QuestionScreen
        question={currentQuestion}
        onAnswer={handleAnswer}
        lives={lives}
        questionCount={questionCount}
        correctStreak={correctStreak}
        totalScore={totalScore}
        currentDifficulty={currentDifficulty}
        timeLeft={timeLeft}
        showFeedback={showFeedback}
        lastAnswerCorrect={lastAnswerCorrect}
        checkpoint={checkpoint}
        onBack={handleBackPress}
        soundOn={soundOn}
        setSoundOn={setSoundOn}
      />
      
      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10">
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">🚪</div>
              <h3 className="text-xl font-bold text-white mb-2">Leave the game?</h3>
              <p className="text-white/70">Your progress saves at checkpoints!</p>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setShowExitConfirm(false)} 
                className="flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                Keep Playing
              </button>
              <button 
                onClick={confirmExit} 
                className="flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}