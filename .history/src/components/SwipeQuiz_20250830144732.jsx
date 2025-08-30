import { useState, useEffect, useRef, useCallback } from 'react';
import { useGame } from '../App';
import useSound from 'use-sound';
import Papa from 'papaparse';
import SwipeDiscovery from './SwipeDiscovery';
import { useNavigate } from 'react-router-dom';

const SwipeQuiz = () => {
  const navigate = useNavigate();
  const { player, addCoins, addXP } = useGame();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [streak, setStreak] = useState(0);
  const [lives, setLives] = useState(5);
  const [sessionCoins, setSessionCoins] = useState(0);
  const [loading, setLoading] = useState(true);
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [showDiscovery, setShowDiscovery] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState('');
  const [showMotivationCard, setShowMotivationCard] = useState(false);
  const [motivationMessage, setMotivationMessage] = useState('');
  const [showNoLivesModal, setShowNoLivesModal] = useState(false);
  const [showQuitModal, setShowQuitModal] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isInQuiz, setIsInQuiz] = useState(false);
  const [showHeartLoss, setShowHeartLoss] = useState(false);
  const [showCoinGain, setShowCoinGain] = useState(false);
  const [questionsAnsweredSinceFifty, setQuestionsAnsweredSinceFifty] = useState(0);
  const [questionsAnsweredSinceAudience, setQuestionsAnsweredSinceAudience] = useState(0);
  
  // Lifelines
  const [used5050At, setUsed5050At] = useState(-1);
  const [usedAudienceAt, setUsedAudienceAt] = useState(-1);
  const [elimMap, setElimMap] = useState({});
  const [audienceMap, setAudienceMap] = useState({});
  
  const containerRef = useRef(null);
  const scrollTimeoutRef = useRef(null); // Add this line
  const [playCorrect] = useSound('/sounds/correct.mp3', { volume: 0.6 });
  const [playWrong] = useSound('/sounds/wrong.mp3', { volume: 0.6 });
  const [playCoin] = useSound('/sounds/coin.mp3', { volume: 0.75 });
  
  // Random animal emoji for each question
  const animalEmojis = ['🐼', '🐱', '🐶', '🦊', '🐰', '🐨', '🐯', '🦁', '🐸', '🐵'];

  // Reset all quiz state
    const resetQuizState = () => {
    setQuestions([]);
    setCurrentIndex(0);
    setAnswers({});
    setStreak(0);
    setLives(5);
    setSessionCoins(0);
    setLoading(true);
    setFeedbackMessage(null);
    setShowMotivationCard(false);
    setMotivationMessage('');
    setShowNoLivesModal(false);
    setShowQuitModal(false);
    setShowResults(false);
    setIsInQuiz(false);
    setShowHeartLoss(false);
    setShowCoinGain(false);
    setQuestionsAnsweredSinceFifty(0);
    setQuestionsAnsweredSinceAudience(0);
    setUsed5050At(-1);
    setUsedAudienceAt(-1);
    setElimMap({});
    setAudienceMap({});
    setSelectedCategory(null);
    setSelectedCategoryName('');
    setTargetNavigation(null);
    };
    
  // Reset discovery view when component mounts
    useEffect(() => {
    // Reset everything when component mounts
    resetQuizState();
    setShowDiscovery(true);
    
    return () => {
    document.body.classList.remove('hide-bottom-nav');
    resetQuizState(); // Also reset when unmounting
    // Clear any pending scroll timeout
    if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
    }
    };
    }, []);

// Hide/show nav based on whether we're in discovery or quiz
useEffect(() => {
  if (!showDiscovery && questions.length > 0) {
    // In quiz - hide nav
    document.body.classList.add('hide-bottom-nav');
  } else {
    // In discovery - show nav
    document.body.classList.remove('hide-bottom-nav');
  }
}, [showDiscovery, questions.length]);
  
  // Track when in quiz
  useEffect(() => {
    if (!showDiscovery && questions.length > 0) {
      setIsInQuiz(true);
    }
  }, [showDiscovery, questions.length]);
  
  // Intercept navigation
  const [targetNavigation, setTargetNavigation] = useState(null);

  useEffect(() => {
    const handleNavClick = (e) => {
      if (isInQuiz && !showResults) {
        const navButton = e.target.closest('button[type="button"]');
        const navText = navButton?.querySelector('.text-\\[10px\\]')?.textContent;
        
        if (navText && ['Home', 'Play', 'Profile', 'Swipe'].includes(navText)) {
          e.preventDefault();
          e.stopPropagation();
          
          // Store where user wants to go
          const paths = { 'Home': '/', 'Play': '/play', 'Profile': '/profile', 'Swipe': '/swipe' };
          setTargetNavigation(paths[navText]);
          setShowQuitModal(true);
        }
      }
    };
    
    document.addEventListener('click', handleNavClick, true);
    return () => document.removeEventListener('click', handleNavClick, true);
  }, [isInQuiz, showResults]);
  
// Better scroll control for one question per swipe
useEffect(() => {
  const container = containerRef.current;
  if (!container) return;
  
  let isScrolling = false;
  let touchStartY = 0;
  let scrollTimeout = null;
  
  // Prevent default scroll
  const preventScroll = (e) => {
    if (!showDiscovery && questions.length > 0) {
      e.preventDefault();
    }
  };
  
  const handleTouchStart = (e) => {
    touchStartY = e.touches[0].clientY;
    isScrolling = false;
  };
  
  const handleTouchMove = (e) => {
      if (!showDiscovery && questions.length > 0 && !showQuitModal && !showNoLivesModal) {
      e.preventDefault(); // Prevent default scrolling
    }
  };
  
  const handleTouchEnd = (e) => {
    if (isScrolling || showQuitModal || showNoLivesModal) return;
    
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > 30) { // Lowered threshold for easier swiping
      isScrolling = true;
      
      // Clear any existing timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);
      
      if (diff > 0 && currentIndex < questions.length - 1) {
        // Swipe up - next question (only one)
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        container.scrollTo({ 
          top: nextIndex * window.innerHeight, 
          behavior: 'smooth' 
        });
      } else if (diff < 0 && currentIndex > 0) {
        // Swipe down - previous question (only one)
        const prevIndex = currentIndex - 1;
        setCurrentIndex(prevIndex);
        container.scrollTo({ 
          top: prevIndex * window.innerHeight, 
          behavior: 'smooth' 
        });
      }
      
      // Longer timeout to prevent multiple scrolls
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 800); // Increased from 500ms
    }
  };
  
  // Add passive: false to allow preventDefault
  container.addEventListener('touchstart', handleTouchStart, { passive: false });
  container.addEventListener('touchmove', handleTouchMove, { passive: false });
  container.addEventListener('touchend', handleTouchEnd, { passive: false });
  container.addEventListener('wheel', preventScroll, { passive: false });
  
  return () => {
    container.removeEventListener('touchstart', handleTouchStart);
    container.removeEventListener('touchmove', handleTouchMove);
    container.removeEventListener('touchend', handleTouchEnd);
    container.removeEventListener('wheel', preventScroll);
    if (scrollTimeout) clearTimeout(scrollTimeout);
  };
}, [currentIndex, questions.length, showDiscovery]);

    // Disable scrolling when modal is open
    useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    if (showQuitModal || showNoLivesModal) {
        // Disable scrolling
        container.style.overflow = 'hidden';
        container.style.touchAction = 'none';
    } else {
        // Re-enable scrolling
        container.style.overflow = 'auto';
        container.style.touchAction = 'auto';
    }
    }, [showQuitModal, showNoLivesModal]);

    // Cancel auto-scroll when modals open
    useEffect(() => {
    if (showQuitModal || showNoLivesModal) {
        // Cancel any pending scroll
        if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
        }
    }
    }, [showQuitModal, showNoLivesModal]);

  
  // Load questions
  const loadQuestions = async (category) => {
    try {
      const response = await fetch('/data/quiz_questions_bank.csv');
      const csv = await response.text();
      
      const { data } = Papa.parse(csv, { 
        header: true, 
        skipEmptyLines: true 
      });
      
      const parsedQuestions = data.map((row, idx) => {
        const options = [row.option1, row.option2, row.option3, row.option4].filter(Boolean);
        const answerMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
        
        return {
          id: row.id || `q_${idx}`,
          prompt: row.question,
          options: options,
          answerIndex: answerMap[row.answer?.toUpperCase()] || 0,
          category: row.category || 'General Knowledge',
          difficulty: row.difficulty?.toLowerCase() || 'medium',
          explanation: row.explanation || '',
          stats: {
            views: Math.floor(Math.random() * 10000) + 1000,
            attempted: Math.floor(Math.random() * 5000) + 500,
            correctRate: Math.floor(Math.random() * 40) + 30
          }
        };
      }).filter(q => q.prompt && q.options.length === 4);
      
      const shuffled = parsedQuestions.sort(() => Math.random() - 0.5);
      const selectedQuestions = shuffled.slice(0, 50).map(q => ({
        ...q,
        mascot: animalEmojis[Math.floor(Math.random() * animalEmojis.length)]
      }));
      
      setQuestions(selectedQuestions);
      setLoading(false);
    } catch (error) {
      console.error('Failed to load questions:', error);
      setLoading(false);
    }
  };
  
  // Check if should show motivation card
  const shouldShowMotivation = (index) => {
    if (index === 1) return true;
    if (index === 3 || index === 7 || index === 10 || index === 15 || index === 20) return true;
    if (index > 20 && index % 5 === 0) return true;
    return false;
  };
  
  const handleAnswer = (questionId, optionIndex) => {
    if (answers[questionId] !== undefined) return;
    
    const question = questions.find(q => q.id === questionId);
    const isCorrect = optionIndex === question.answerIndex;
    const questionIndex = questions.findIndex(q => q.id === questionId);
    
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    
    // Increment answered questions for lifelines
    setQuestionsAnsweredSinceFifty(prev => prev + 1);
    setQuestionsAnsweredSinceAudience(prev => prev + 1);
    
    if (isCorrect) {
      playCorrect();
      setStreak(prev => prev + 1);
      setSessionCoins(prev => prev + 10);
      
      // Show coin animation
      setShowCoinGain(true);
      setTimeout(() => {
        playCoin();
      }, 300);
      setTimeout(() => setShowCoinGain(false), 2000);
      
      createConfetti();
      
      if (shouldShowMotivation(questionIndex + 1)) {
        const messages = ['Awesome!', 'Perfect!', 'Brilliant!', 'Outstanding!', 'Incredible!'];
        setMotivationMessage(messages[Math.floor(Math.random() * messages.length)]);
        setShowMotivationCard(true);
        setTimeout(() => setShowMotivationCard(false), 2000);
      }
    } else {
      playWrong();
      setStreak(0);
      
      // Show heart loss animation
      setShowHeartLoss(true);
      setTimeout(() => setShowHeartLoss(false), 1500);
      
      setLives(prev => {
        const newLives = Math.max(0, prev - 1);
        if (newLives === 0) {
          setTimeout(() => setShowNoLivesModal(true), 500);
        }
        return newLives;
      });
      
      if (lives > 1 && shouldShowMotivation(questionIndex + 1)) {
        const messages = ['Keep trying!', 'You got this!', "Don't give up!", 'Stay strong!', 'Keep going!'];
        setMotivationMessage(messages[Math.floor(Math.random() * messages.length)]);
        setShowMotivationCard(true);
        setTimeout(() => setShowMotivationCard(false), 2000);
      }
    }
    
    if (lives > 1 || isCorrect) {
    // Store the timeout ID so we can cancel it
    scrollTimeoutRef.current = setTimeout(() => {
        scrollToNext();
    }, 2500);
    }
  };
  
  const createConfetti = () => {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.inset = '0';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '1000';
    document.body.appendChild(container);
    
    const emojis = ['🎉', '✨', '⭐', '🎊', '🌟'];
    for (let i = 0; i < 20; i++) {
      const confetti = document.createElement('div');
      confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      confetti.style.position = 'fixed';
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.top = '-50px';
      confetti.style.fontSize = '24px';
      confetti.style.animation = `fall ${2 + Math.random() * 2}s ease-out`;
      container.appendChild(confetti);
    }
    
    setTimeout(() => container.remove(), 4000);
  };
  
    const scrollToNext = () => {
    // Don't scroll if any modal is open
    if (showQuitModal || showNoLivesModal) return;
    
    if (currentIndex < questions.length - 1) {
        const nextIndex = currentIndex + 1;
        const element = document.getElementById(`question-${nextIndex}`);
        element?.scrollIntoView({ behavior: 'smooth' });
        setCurrentIndex(nextIndex);
    }
    };
    
  const handleFiftyFifty = (questionId) => {
    const questionIndex = questions.findIndex(q => q.id === questionId);
    
    // Check if can use
    if (used5050At >= 0 && questionsAnsweredSinceFifty < 5) {
      setFeedbackMessage(`After ${5 - questionsAnsweredSinceFifty} attempts`);
      setTimeout(() => setFeedbackMessage(null), 2000);
      return;
    }
    
    const question = questions[questionIndex];
    const wrongOptions = [0,1,2,3].filter(i => i !== question.answerIndex);
    const toEliminate = wrongOptions.sort(() => Math.random() - 0.5).slice(0, 2);
    
    setElimMap({ ...elimMap, [questionId]: toEliminate });
    setUsed5050At(questionIndex);
    setQuestionsAnsweredSinceFifty(0);
  };
  
  const handleAudience = (questionId) => {
    const questionIndex = questions.findIndex(q => q.id === questionId);
    
    // Check if can use
    if (usedAudienceAt >= 0 && questionsAnsweredSinceAudience < 5) {
      setFeedbackMessage(`After ${5 - questionsAnsweredSinceAudience} attempts`);
      setTimeout(() => setFeedbackMessage(null), 2000);
      return;
    }
    
    const question = questions[questionIndex];
    const correctAnswer = question.answerIndex;
    const percentages = [0, 0, 0, 0];
    
    const correctPercentage = 40 + Math.floor(Math.random() * 31);
    percentages[correctAnswer] = correctPercentage;
    
    let remaining = 100 - correctPercentage;
    const otherOptions = [0,1,2,3].filter(i => i !== correctAnswer);
    
    for (let i = 0; i < otherOptions.length - 1; i++) {
      const percentage = Math.floor(Math.random() * (remaining / 2));
      percentages[otherOptions[i]] = percentage;
      remaining -= percentage;
    }
    percentages[otherOptions[otherOptions.length - 1]] = remaining;
    
    setAudienceMap({ ...audienceMap, [questionId]: percentages });
    setUsedAudienceAt(questionIndex);
    setQuestionsAnsweredSinceAudience(0);
  };
  
  const handleCategorySelect = (category, categoryName) => {
    resetQuizState(); // Reset everything first
    setSelectedCategory(category);
    setSelectedCategoryName(categoryName);
    setShowDiscovery(false);
    loadQuestions(category);
  };
  
  const handleBackClick = () => {
    setTargetNavigation('/swipe');
    setShowQuitModal(true);
  };
  
  const handleQuitConfirm = () => {
    setShowResults(true);
    setShowQuitModal(false);
    document.body.classList.remove('hide-bottom-nav'); // Add this

  };
  
  // Results Screen Component
  const ResultsScreen = () => {
    const correctAnswers = Object.keys(answers).filter(qId => {
      const question = questions.find(q => q.id === qId);
      return answers[qId] === question?.answerIndex;
    }).length;
    
    // Auto-dismiss after 2 seconds
    useEffect(() => {
    // Hide nav when showing results
    document.body.classList.add('hide-bottom-nav');
    
    const timer = setTimeout(() => {
        addCoins(sessionCoins);
        // Reset everything BEFORE changing views
        resetQuizState();
        setIsInQuiz(false); // Critical: reset this
        setShowResults(false);
        setShowDiscovery(true);
        document.body.classList.remove('hide-bottom-nav');
        // Don't navigate - just let the component re-render with discovery view
    }, 2000);
    
    return () => {
        clearTimeout(timer);
        document.body.classList.remove('hide-bottom-nav');
    };
    }, []);
    
    return (
      <div className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-3xl p-8 max-w-md w-full text-center border border-gray-700">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-white mb-4">Session Complete!</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-700/50 rounded-xl p-4">
              <div className="text-gray-400 text-sm mb-1">Questions Answered</div>
              <div className="text-2xl font-bold text-white">{Object.keys(answers).length}</div>
            </div>
            
            <div className="bg-gray-700/50 rounded-xl p-4">
              <div className="text-gray-400 text-sm mb-1">Correct Answers</div>
              <div className="text-2xl font-bold text-green-400">{correctAnswers}</div>
            </div>
            
            <div className="bg-gray-700/50 rounded-xl p-4">
              <div className="text-gray-400 text-sm mb-1">Coins Earned</div>
              <div className="text-2xl font-bold text-yellow-400">🪙 {sessionCoins}</div>
            </div>
            
            <div className="bg-gray-700/50 rounded-xl p-4">
              <div className="text-gray-400 text-sm mb-1">Lives Remaining</div>
              <div className="text-2xl font-bold text-red-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < lives ? '' : 'opacity-30'}>❤️</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  if (showResults) {
    return <ResultsScreen />;
  }
  
  if (showDiscovery) {
    return <SwipeDiscovery onSelect={handleCategorySelect} />;
  }
  
  if (loading) {
    return (
      <div className="h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading questions...</div>
      </div>
    );
  }
  
  return (
    <div className="h-screen bg-gray-900 relative">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800 pt-12">
        <div className="flex items-center justify-between px-4 py-3">
          <button 
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl text-white text-sm font-medium hover:bg-white/15 transition-all"
          >
            ← Back
          </button>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full">
              <span>🪙</span>
              <span className="font-bold text-yellow-400">{sessionCoins}</span>
            </div>
            <div className="flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full">
              <span>🔥</span>
              <span className="font-bold text-orange-400">{streak}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <span 
                key={i} 
                className={`${i < lives ? 'text-red-500' : 'text-gray-600 opacity-30'} ${
                  showHeartLoss && i === lives - 1 ? 'animate-heartLoss' : ''
                }`}
              >
                ❤️
              </span>
            ))}
          </div>
        </div>
        
        {/* Category name */}
        {selectedCategoryName && (
          <div className="text-center py-1">
            <span className="text-xs text-gray-400">{selectedCategoryName}</span>
          </div>
        )}
      </div>
      
      {/* Coin Gain Animation */}
      {showCoinGain && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
          <div className="bg-yellow-500 text-white px-4 py-2 rounded-full font-bold animate-coinFloat">
            +10 🪙
          </div>
        </div>
      )}
      
      {/* Questions Container */}
      <div 
        ref={containerRef}
        className="h-full overflow-y-hidden snap-y snap-mandatory pt-32"
        style={{ 
            scrollBehavior: 'smooth', 
            overscrollBehavior: 'none',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'none' // Prevent native touch scrolling
            }}
      >
        {questions.map((question, index) => (
          <QuestionSlide
            key={question.id}
            question={question}
            index={index}
            answered={answers[question.id]}
            onAnswer={(optIdx) => handleAnswer(question.id, optIdx)}
            onFiftyFifty={() => handleFiftyFifty(question.id)}
            onAudience={() => handleAudience(question.id)}
            eliminated={elimMap[question.id] || []}
            audiencePercentages={audienceMap[question.id]}
            canUseFiftyFifty={used5050At < 0 || questionsAnsweredSinceFifty >= 5}
            canUseAudience={usedAudienceAt < 0 || questionsAnsweredSinceAudience >= 5}
          />
        ))}
      </div>
      
      {/* No Lives Modal */}
      {showNoLivesModal && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700">
            <div className="text-5xl mb-4">😔</div>
            <h3 className="text-xl font-bold mb-2 text-white">No Lives Left!</h3>
            <p className="text-gray-400 mb-6">Sorry, you have no lives left to continue swiping.</p>
            <button
            onClick={() => {
                setShowResults(true);
                document.body.classList.remove('hide-bottom-nav'); // Add this
            }}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-white font-medium"
            >
            View Results
            </button>
          </div>
        </div>
      )}
      
      {/* Quit Modal */}
      {showQuitModal && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700">
            <div className="text-4xl mb-4">🤔</div>
            <h3 className="text-xl font-bold mb-2 text-white">Leave Swipe Mode?</h3>
            <p className="text-gray-400 mb-6">Your progress will be saved</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowQuitModal(false)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium text-white"
              >
                Stay
              </button>
              <button
                onClick={handleQuitConfirm}
                className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium text-white"
              >
                Leave
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Motivation Card */}
      {showMotivationCard && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 px-8 py-6 rounded-3xl text-white font-bold text-2xl shadow-2xl animate-fadeIn">
            {motivationMessage}
          </div>
        </div>
      )}
      
      {/* Feedback */}
      {feedbackMessage && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
          <div className="bg-gray-800/90 px-6 py-3 rounded-full text-white font-bold animate-fadeIn">
            {feedbackMessage}
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        @keyframes fall {
          to { 
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes heartLoss {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5) rotate(-15deg); opacity: 0.8; }
          100% { transform: scale(0) rotate(-45deg); opacity: 0; }
        }
        
        @keyframes coinFloat {
          0% { transform: translateX(-50%) translateY(0) scale(0.5); opacity: 0; }
          50% { transform: translateX(-50%) translateY(-20px) scale(1.2); opacity: 1; }
          100% { transform: translateX(-50%) translateY(-40px) scale(0.8); opacity: 0; }
        }
        
        .animate-heartLoss {
          animation: heartLoss 1.5s ease-out;
        }
        
        .animate-coinFloat {
          animation: coinFloat 2s ease-out;
        }
      `}</style>
    </div>
  );
};

// Question Slide Component
const QuestionSlide = ({ 
  question, 
  index, 
  answered, 
  onAnswer, 
  onFiftyFifty, 
  onAudience,
  eliminated,
  audiencePercentages,
  canUseFiftyFifty,
  canUseAudience 
}) => {
  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'easy': return 'from-green-500 to-green-600';
      case 'hard': return 'from-red-500 to-red-600';
      default: return 'from-yellow-500 to-yellow-600';
    }
  };
  
  return (
    <div 
      id={`question-${index}`}
        className="h-screen snap-start flex flex-col px-4 pb-4"
        style={{ paddingTop: '150px' }} // Adjust this value as needed
    >
      {/* Mascot */}
      <div className="flex justify-center py-2">
        <span className="text-8xl" style={{ animation: 'float 3s ease-in-out infinite' }}>
          {question.mascot}
        </span>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col justify-start max-w-md mx-auto w-full">
        {/* Question */}
        <div className={`bg-gradient-to-br ${getDifficultyColor(question.difficulty)} p-6 rounded-3xl mb-4`}>
          <div className="text-white/80 text-sm mb-2">Question {index + 1}</div>
          <h2 className="text-2xl font-bold text-white">
            {question.prompt}
          </h2>
        </div>
        
        {/* Options */}
        <div className="space-y-3 mb-3">
          {question.options.map((option, optIdx) => {
            const isAnswered = answered !== undefined;
            const isSelected = answered === optIdx;
            const isCorrect = optIdx === question.answerIndex;
            const isEliminated = eliminated.includes(optIdx);
            
            let buttonClass = "w-full p-4 rounded-2xl font-medium transition-all ";
            
            if (isEliminated) {
              buttonClass += "bg-gray-700/30 text-gray-500/50 cursor-not-allowed";
            } else if (isAnswered) {
              if (isCorrect) {
                buttonClass += "bg-green-500 text-white";
              } else if (isSelected) {
                buttonClass += "bg-red-500 text-white";
              } else {
                buttonClass += "bg-gray-700 text-gray-400";
              }
            } else {
              buttonClass += "bg-gray-800 text-white hover:bg-gray-700";
            }
            
            return (
              <button
                key={optIdx}
                onClick={() => !isAnswered && !isEliminated && onAnswer(optIdx)}
                disabled={isAnswered || isEliminated}
                className={buttonClass}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">
                    {['🅰️', '🅱️', '🅲️', '🅳️'][optIdx]}
                  </span>
                  <span className="flex-1 text-left">{option}</span>
                  {audiencePercentages && audiencePercentages[optIdx] > 0 && (
                    <span className="bg-purple-600/20 px-2 py-1 rounded-full text-xs">
                      {audiencePercentages[optIdx]}%
                    </span>
                  )}
                  {isAnswered && isCorrect && (
                    <span>✓</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
        
        {/* Lifelines */}
        {!answered && (
          <div className="flex justify-center gap-3 mb-3">
            <button
              onClick={onFiftyFifty}
              disabled={!canUseFiftyFifty}
              className={`px-4 py-2 rounded-lg font-medium text-sm ${
                canUseFiftyFifty 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-700 text-gray-500'
              }`}
            >
              ⚡ 50:50
            </button>
            <button
              onClick={onAudience}
              disabled={!canUseAudience}
              className={`px-4 py-2 rounded-lg font-medium text-sm ${
                canUseAudience 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-700 text-gray-500'
              }`}
            >
              👥 Audience
            </button>
          </div>
        )}
        
        {/* Stats */}
        <div className="text-center mt-3 mb-2">
          <div className="text-gray-500 text-xs">
            {question.stats.views.toLocaleString()} views • {question.stats.attempted.toLocaleString()} attempted • {question.stats.correctRate}% correct
          </div>
        </div>
        
        {/* Swipe hint */}
        <div className="text-center mt-8 mb-4">
          <div className="text-gray-500 text-sm animate-bounce">
            Swipe up for next
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwipeQuiz;