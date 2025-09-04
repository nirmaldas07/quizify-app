// src/components/Play/modes/treasureHunt/TreasureHuntMode.jsx

import { useEffect, useState, useRef } from "react";
import Papa from "papaparse";
import { useGameData } from "../../shared/hooks/useGameData.js";
import { ISLANDS, GAME_CONSTANTS, getIslandById, isIslandUnlocked } from "./data/islandConfig.js";
import IslandMapScreen from "./IslandMapScreen.jsx";
import IslandDetailModal from "./IslandDetailModal.jsx";
import TreasureQuestionScreen from "./TreasureQuestionScreen.jsx";
import TreasureRewardScreen from "./TreasureRewardScreen.jsx";
import FinalTreasureScreen from "./FinalTreasureScreen.jsx";
import GameDataService from '../../../../services/GameDataService';

export default function TreasureHuntMode({ onBack }) {
const { 
  coins, 
  xp, 
  level, 
  soundOn, 
  setSoundOn 
} = useGameData();
// Don't extract addCoins or addXp - use GameDataService directly
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [gameScreen, setGameScreen] = useState('map'); // 'map', 'island-detail', 'playing', 'reward', 'final-treasure'
  const [selectedIsland, setSelectedIsland] = useState(null);
  const [allQuestions, setAllQuestions] = useState([]);

  // Island progress tracking
  const [islandProgress, setIslandProgress] = useState(() => {
    const saved = localStorage.getItem(GAME_CONSTANTS.STORAGE_KEYS.PROGRESS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to load progress:", e);
      }
    }
    // Initialize progress for all islands
    return ISLANDS.reduce((acc, island) => {
      acc[island.id] = {
        unlocked: island.id === 1, // First island unlocked by default
        completed: false,
        treasurePiece: false,
        perfectScore: false,
        bestScore: 0,
        attempts: 0
      };
      return acc;
    }, {});
  });

  // Current island session state
  const [currentSession, setCurrentSession] = useState({
    islandId: null,
    questions: [],
    currentQuestionIndex: 0,
    shovelsRemaining: GAME_CONSTANTS.SHOVELS_PER_ISLAND,
    correctAnswers: 0,
    wrongAnswers: 0,
    timeRemaining: 300,
    gemsFound: 0,
    coinsEarned: 0,
    questionTimes: [], // Track time taken per question for speed bonus
    startTime: null
  });

  // Stats tracking
  const [totalStats, setTotalStats] = useState(() => {
    const saved = localStorage.getItem(GAME_CONSTANTS.STORAGE_KEYS.STATS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to load stats:", e);
      }
    }
    return {
      totalCoinsEarned: 0,
      totalGemsFound: 0,
      totalTreasurePieces: 0,
      totalQuestionsAnswered: 0,
      totalCorrectAnswers: 0,
      islandsCompleted: 0,
      gameCompleted: false
    };
  });

  const timerRef = useRef(null);
  const questionStartTimeRef = useRef(null);

  // Load questions on mount and setup history
  useEffect(() => {
    loadQuestions();
    
    // Push a history state when entering treasure hunt mode
    window.history.pushState({ mode: 'treasureHunt' }, '', window.location.href);
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Save progress whenever it changes
  useEffect(() => {
    localStorage.setItem(GAME_CONSTANTS.STORAGE_KEYS.PROGRESS, JSON.stringify(islandProgress));
  }, [islandProgress]);

  // Save stats whenever they change
  useEffect(() => {
    localStorage.setItem(GAME_CONSTANTS.STORAGE_KEYS.STATS, JSON.stringify(totalStats));
  }, [totalStats]);

  // Timer for island gameplay
  useEffect(() => {
    if (gameScreen === 'playing' && currentSession.timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setCurrentSession(prev => {
          const newTime = prev.timeRemaining - 1;
          if (newTime <= 0) {
            handleTimeUp();
            return { ...prev, timeRemaining: 0 };
          }
          // Warning sound at 30 seconds
          if (newTime === 30 && soundOn) {
            playSound(GAME_CONSTANTS.SOUNDS.TICK, 0.6);
          }
          return { ...prev, timeRemaining: newTime };
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameScreen, currentSession.timeRemaining, soundOn]);

  // Handle Android back button - Fixed version
  useEffect(() => {
    const handlePopState = (e) => {
      e.preventDefault();
      
      // Only show exit confirm if we're on the map screen and not already showing confirm
      if (gameScreen === 'map' && !showExitConfirm) {
        setShowExitConfirm(true);
        // Push state again to prevent immediate navigation
        window.history.pushState({ mode: 'treasureHunt' }, '', window.location.href);
      } else if (gameScreen !== 'map') {
        // If we're in a game screen, go back to map
        setGameScreen('map');
        setSelectedIsland(null);
        // Push state again
        window.history.pushState({ mode: 'treasureHunt' }, '', window.location.href);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [gameScreen, showExitConfirm]);

  // Load questions from CSV
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
    } catch (error) {
      console.error("Failed to load questions:", error);
    }
  };

  // Get questions for specific island
  const getIslandQuestions = (islandId) => {
    const island = getIslandById(islandId);
    if (!island || allQuestions.length === 0) return [];

    // Filter questions by island's difficulty
    let eligibleQuestions = allQuestions.filter(q => 
      island.questionDifficulty.includes(q.difficulty)
    );

    // If not enough questions, use all questions
    if (eligibleQuestions.length < GAME_CONSTANTS.QUESTIONS_PER_ISLAND) {
      eligibleQuestions = allQuestions;
    }

    // Randomly select questions
    const shuffled = [...eligibleQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, GAME_CONSTANTS.QUESTIONS_PER_ISLAND);
  };

  // Handle island selection from map
  const handleIslandSelect = (islandId) => {
    if (!isIslandUnlocked(islandId, islandProgress)) {
      if (soundOn) playSound("/sounds/locked.mp3", 0.5);
      vibrate([100]);
      return;
    }
    
    setSelectedIsland(islandId);
    setGameScreen('island-detail');
    if (soundOn) playSound("/sounds/select.mp3", 0.5);
  };

  // Start playing an island
  const handleStartIsland = (islandId) => {
    const island = getIslandById(islandId);
    const questions = getIslandQuestions(islandId);
    
    setCurrentSession({
      islandId,
      questions,
      currentQuestionIndex: 0,
      shovelsRemaining: GAME_CONSTANTS.SHOVELS_PER_ISLAND,
      correctAnswers: 0,
      wrongAnswers: 0,
      timeRemaining: island.timeLimit,
      gemsFound: 0,
      coinsEarned: 0,
      questionTimes: [],
      startTime: Date.now()
    });
    
    questionStartTimeRef.current = Date.now();
    setGameScreen('playing');
    if (soundOn) playSound("/sounds/start.mp3", 0.6);
  };

  // Handle answer selection
  const handleAnswer = (selectedIndex) => {
    const currentQuestion = currentSession.questions[currentSession.currentQuestionIndex];
    const correct = selectedIndex === currentQuestion.correctIndex;
    const questionTime = (Date.now() - questionStartTimeRef.current) / 1000; // in seconds
    
    // Update session state
    setCurrentSession(prev => {
      const newState = {
        ...prev,
        questionTimes: [...prev.questionTimes, questionTime]
      };

      if (correct) {
        const island = getIslandById(prev.islandId);
        let coinsEarned = island.rewards.perCorrectAnswer;
        
        // Speed bonus
        if (questionTime < GAME_CONSTANTS.SPEED_BONUS_THRESHOLD) {
          coinsEarned += island.rewards.speedBonus;
        }
        
        // Gem discovery
        const foundGem = Math.random() < island.rewards.gemChance;
        if (foundGem) {
          coinsEarned += island.rewards.gemBonus;
          newState.gemsFound = prev.gemsFound + 1;
        }
        
        newState.correctAnswers = prev.correctAnswers + 1;
        newState.coinsEarned = prev.coinsEarned + coinsEarned;
        
        // // Play sounds
        // if (soundOn) {
        //   playSound(GAME_CONSTANTS.SOUNDS.DIG, 0.5);
        //   if (foundGem) {
        //     setTimeout(() => playSound(GAME_CONSTANTS.SOUNDS.GEM_FOUND, 0.6), 500);
        //   }
        // }
      } else {
        newState.wrongAnswers = prev.wrongAnswers + 1;
        newState.shovelsRemaining = prev.shovelsRemaining - 1;
        
        // if (soundOn) {
        //   playSound(GAME_CONSTANTS.SOUNDS.WRONG, 0.5);
        //   if (newState.shovelsRemaining === 0) {
        //     setTimeout(() => playSound(GAME_CONSTANTS.SOUNDS.SHOVEL_BREAK, 0.6), 300);
        //   }
        // }
        vibrate([200]);
      }
      
      return newState;
    });

    // Check if island is complete or failed
    setTimeout(() => {
      const nextIndex = currentSession.currentQuestionIndex + 1;
      
      if (currentSession.shovelsRemaining === 0 && !correct) {
        // Failed - no more shovels
        completeIsland();
      } else if (nextIndex >= GAME_CONSTANTS.QUESTIONS_PER_ISLAND) {
        // Completed all questions
        completeIsland();
      } else {
        // Move to next question
        setCurrentSession(prev => ({
          ...prev,
          currentQuestionIndex: nextIndex
        }));
        questionStartTimeRef.current = Date.now();
      }
    }, correct ? 2000 : 1500); // Longer delay for correct (showing animation)
  };

  // Handle time up
  const handleTimeUp = () => {
    completeIsland();
  };

  // Complete island and show rewards
  const completeIsland = () => {
    const island = getIslandById(currentSession.islandId);
    const earnedTreasure = currentSession.correctAnswers >= island.requiredCorrect;
    const perfectScore = currentSession.correctAnswers === GAME_CONSTANTS.QUESTIONS_PER_ISLAND;
    
    // Calculate final coins
    let finalCoins = currentSession.coinsEarned;
    if (perfectScore) {
      finalCoins += island.rewards.perfectBonus;
    }
    if (earnedTreasure) {
      finalCoins += island.rewards.completionCoins;
    }
    
    // Update island progress
    setIslandProgress(prev => {
      const newProgress = { ...prev };
      const islandData = newProgress[currentSession.islandId];
      
      islandData.completed = true;
      islandData.attempts += 1;
      
      if (earnedTreasure && !islandData.treasurePiece) {
        islandData.treasurePiece = true;
        
        // Unlock next island
        const nextIsland = ISLANDS.find(i => i.id === currentSession.islandId + 1);
        if (nextIsland && newProgress[nextIsland.id]) {
          newProgress[nextIsland.id].unlocked = true;
          if (soundOn) {
            setTimeout(() => playSound(GAME_CONSTANTS.SOUNDS.ISLAND_UNLOCK, 0.7), 2000);
          }
        }
      }
      
      if (perfectScore) {
        islandData.perfectScore = true;
      }
      
      islandData.bestScore = Math.max(islandData.bestScore || 0, currentSession.correctAnswers);
      
      return newProgress;
    });
    
    // Update total stats
    setTotalStats(prev => ({
      ...prev,
      totalCoinsEarned: prev.totalCoinsEarned + finalCoins,
      totalGemsFound: prev.totalGemsFound + currentSession.gemsFound,
      totalTreasurePieces: prev.totalTreasurePieces + (earnedTreasure && !islandProgress[currentSession.islandId].treasurePiece ? 1 : 0),
      totalQuestionsAnswered: prev.totalQuestionsAnswered + (currentSession.correctAnswers + currentSession.wrongAnswers),
      totalCorrectAnswers: prev.totalCorrectAnswers + currentSession.correctAnswers,
      islandsCompleted: prev.islandsCompleted + (!islandProgress[currentSession.islandId].completed ? 1 : 0)
    }));
    
    // Add coins to user account
    GameDataService.addCoins(finalCoins, `Treasure Hunt - ${island.name} Island`);
    GameDataService.addXP(currentSession.correctAnswers);
    
    // Update session with final coins
    setCurrentSession(prev => ({ ...prev, coinsEarned: finalCoins }));
    
    // Play completion sound
    if (soundOn) {
      playSound(earnedTreasure ? GAME_CONSTANTS.SOUNDS.TREASURE_FOUND : GAME_CONSTANTS.SOUNDS.ISLAND_COMPLETE, 0.7);
    }
    
    // Check if all treasure pieces collected
    const allPiecesCollected = ISLANDS.every(island => 
      islandProgress[island.id]?.treasurePiece === true
    );
    
    if (allPiecesCollected && !totalStats.gameCompleted) {
      // Game completed!
      setTotalStats(prev => ({ ...prev, gameCompleted: true }));
      setTimeout(() => {
        setGameScreen('final-treasure');
        if (soundOn) playSound(GAME_CONSTANTS.SOUNDS.FINAL_TREASURE, 0.8);
      }, 3000);
    } else {
      setGameScreen('reward');
    }
  };

  // Handle retry island
  const handleRetryIsland = () => {
    handleStartIsland(currentSession.islandId);
  };

  // Handle continue from reward screen
  const handleContinue = () => {
    setGameScreen('map');
    setSelectedIsland(null);
  };

  // Handle game completion
  const handleFinalTreasure = () => {
    // Award final treasure bonus
    addCoins(GAME_CONSTANTS.FINAL_TREASURE_REWARD);
    addXp(10); // Bonus XP for completing the game
    
    setTotalStats(prev => ({
      ...prev,
      totalCoinsEarned: prev.totalCoinsEarned + GAME_CONSTANTS.FINAL_TREASURE_REWARD
    }));
    
    setGameScreen('map');
  };

  // Handle exit confirmation
  const confirmExit = () => {
    // Go back to PlayHome using browser history
    window.history.go(-1);
    onBack();
  };

  // Utility functions
  const playSound = (path, volume = 0.5) => {
    try {
      const audio = new Audio(path);
      audio.volume = volume;
      audio.play();
    } catch (e) {
      console.error("Failed to play sound:", e);
    }
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

  // Render different screens based on game state
  let currentScreen = null;
  
  switch (gameScreen) {
    case 'map':
      currentScreen = (
        <IslandMapScreen
          islands={ISLANDS}
          islandProgress={islandProgress}
          onSelectIsland={handleIslandSelect}
          onBack={() => setShowExitConfirm(true)}
          soundOn={soundOn}
          setSoundOn={setSoundOn}
          totalStats={totalStats}
        />
      );
      break;
    
    case 'island-detail':
      currentScreen = (
        <IslandDetailModal
          island={getIslandById(selectedIsland)}
          progress={islandProgress[selectedIsland]}
          onStart={() => handleStartIsland(selectedIsland)}
          onClose={() => setGameScreen('map')}
          soundOn={soundOn}
        />
      );
      break;
    
    case 'playing':
      currentScreen = (
        <TreasureQuestionScreen
          island={getIslandById(currentSession.islandId)}
          question={currentSession.questions[currentSession.currentQuestionIndex]}
          questionNumber={currentSession.currentQuestionIndex + 1}
          totalQuestions={GAME_CONSTANTS.QUESTIONS_PER_ISLAND}
          shovelsRemaining={currentSession.shovelsRemaining}
          timeRemaining={currentSession.timeRemaining}
          coinsEarned={currentSession.coinsEarned}
          gemsFound={currentSession.gemsFound}
          onAnswer={handleAnswer}
          onQuit={() => setGameScreen('map')}
          soundOn={soundOn}
          setSoundOn={setSoundOn}
        />
      );
      break;
    
    case 'reward':
      currentScreen = (
        <TreasureRewardScreen
          island={getIslandById(currentSession.islandId)}
          session={currentSession}
          earnedTreasure={currentSession.correctAnswers >= getIslandById(currentSession.islandId).requiredCorrect}
          onRetry={handleRetryIsland}
          onContinue={handleContinue}
          soundOn={soundOn}
        />
      );
      break;
    
    case 'final-treasure':
      currentScreen = (
        <FinalTreasureScreen
          totalStats={totalStats}
          onContinue={handleFinalTreasure}
          soundOn={soundOn}
        />
      );
      break;
    
    default:
      currentScreen = null;
  }
  
  // Return the screen with modal overlay
  return (
    <>
      {currentScreen}
      
      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-white/10">
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">🏝️</div>
              <h3 className="text-xl font-bold text-white mb-2">Leave Treasure Hunt?</h3>
              <p className="text-white/70">Your island progress is saved!</p>
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