//src/components/SwipeQuiz.jsx

import { useState, useEffect, useRef, useCallback } from 'react';
import { useGame } from '../App';
import useSound from 'use-sound';
import Papa from 'papaparse';

const SwipeQuiz = () => {
  const { player, addCoins, addXP } = useGame();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [streak, setStreak] = useState(0);
  const [lives, setLives] = useState(5);
  const [sessionCoins, setSessionCoins] = useState(0);
  const [loading, setLoading] = useState(true);
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  
  const containerRef = useRef(null);
  const [playCorrect] = useSound('/sounds/correct.mp3', { volume: 0.6 });
  const [playWrong] = useSound('/sounds/wrong.mp3', { volume: 0.6 });
  
  // Load questions
  useEffect(() => {
    loadInitialQuestions();
  }, []);
  
    const loadInitialQuestions = async () => {
    try {
        const response = await fetch('/data/quiz_questions_bank.csv');
        const csv = await response.text();
        
        // Parse CSV using Papa Parse (add this import at top)
        // import Papa from 'papaparse';
        
        const { data } = Papa.parse(csv, { 
        header: true, 
        skipEmptyLines: true 
        });
        
        // Transform CSV data to your format
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
            explanation: row.explanation || ''
        };
        }).filter(q => q.prompt && q.options.length === 4);
        
        // Shuffle and take random 50 questions
        const shuffled = parsedQuestions.sort(() => Math.random() - 0.5);
        setQuestions(shuffled.slice(0, 50));
        setLoading(false);
    } catch (error) {
        console.error('Failed to load questions:', error);
        setLoading(false);
    }
    };
  
  const handleAnswer = (questionId, optionIndex) => {
    if (answers[questionId] !== undefined) return; // Already answered
    
    const question = questions.find(q => q.id === questionId);
    const isCorrect = optionIndex === question.answerIndex;
    
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    
    if (isCorrect) {
      playCorrect();
      setStreak(prev => prev + 1);
      setSessionCoins(prev => prev + 10);
      addCoins(10);
      
      // Streak feedback
      if ((streak + 1) % 3 === 0) {
        showFeedback(`🔥 ${streak + 1} streak!`);
      }
    } else {
      playWrong();
      setStreak(0);
      setLives(prev => Math.max(0, prev - 1));
      showFeedback('💪 Keep going!');
    }
    
    // Auto-scroll after 1.5s
    setTimeout(() => {
      scrollToNext();
    }, 1500);
  };
  
  const scrollToNext = () => {
    if (currentIndex < questions.length - 1) {
      const nextIndex = currentIndex + 1;
      const element = document.getElementById(`question-${nextIndex}`);
      element?.scrollIntoView({ behavior: 'smooth' });
      setCurrentIndex(nextIndex);
    }
  };
  
  const showFeedback = (message) => {
    setFeedbackMessage(message);
    setTimeout(() => setFeedbackMessage(null), 2000);
  };
  
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
      <div className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800">
        <div className="flex items-center justify-between px-4 py-3">
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
              <span key={i} className={i < lives ? 'text-red-500' : 'text-gray-600'}>
                ❤️
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Questions Container */}
      <div 
        ref={containerRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory pt-16"
        style={{ scrollBehavior: 'smooth' }}
      >
        {questions.map((question, index) => (
          <QuestionSlide
            key={question.id}
            question={question}
            index={index}
            answered={answers[question.id]}
            onAnswer={(optIdx) => handleAnswer(question.id, optIdx)}
          />
        ))}
      </div>
      
      {/* Feedback Overlay */}
      {feedbackMessage && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
          <div className="bg-gray-800/90 px-6 py-3 rounded-full text-white font-bold animate-fadeIn">
            {feedbackMessage}
          </div>
        </div>
      )}
      
      {/* Bottom Hint */}
      <div className="fixed bottom-20 left-0 right-0 text-center pointer-events-none">
        <div className="text-gray-500 text-sm animate-bounce">
          Swipe up for next
        </div>
      </div>
<style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>

    </div>
  );
};

// Question Slide Component
const QuestionSlide = ({ question, index, answered, onAnswer }) => {
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
      className="h-screen snap-start flex flex-col justify-center px-4 py-8"
    >
      {/* Question Card */}
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        <div className={`bg-gradient-to-br ${getDifficultyColor(question.difficulty)} p-6 rounded-3xl mb-6`}>
          <div className="text-white/80 text-sm mb-2">Question {index + 1}</div>
          <h2 className="text-2xl font-bold text-white">
            {question.prompt}
          </h2>
        </div>
        
        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, optIdx) => {
            const isAnswered = answered !== undefined;
            const isSelected = answered === optIdx;
            const isCorrect = optIdx === question.answerIndex;
            
            let buttonClass = "w-full p-4 rounded-2xl font-medium transition-all ";
            
            if (isAnswered) {
              if (isCorrect) {
                buttonClass += "bg-green-500 text-white";
              } else if (isSelected) {
                buttonClass += "bg-red-500 text-white";
              } else {
                buttonClass += "bg-gray-700 text-gray-400";
              }
            } else {
              buttonClass += "bg-gray-800 text-white hover:bg-gray-700 active:scale-98";
            }
            
            return (
              <button
                key={optIdx}
                onClick={() => !isAnswered && onAnswer(optIdx)}
                disabled={isAnswered}
                className={buttonClass}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">
                    {['🅰️', '🅱️', '🅲️', '🅳️'][optIdx]}
                  </span>
                  <span className="flex-1 text-left">{option}</span>
                  {isAnswered && isCorrect && (
                    <span>✓</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SwipeQuiz;