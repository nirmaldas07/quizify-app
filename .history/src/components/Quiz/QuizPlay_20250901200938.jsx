// src/components/Quiz/QuizPlay.jsx

import React, { useEffect } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

function QuizPlay() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const category = searchParams.get('category');
    const difficulty = searchParams.get('difficulty');
    const fromQuest = searchParams.get('from') === 'quest';
    
    const categories = [
      'general-knowledge', 
      'fun-facts', 
      'science', 
      'history', 
      'geography', 
      'computer', 
      'artificial-intelligence',
      'sports',
      'mixed'
    ];
    
    const difficulties = ['easy', 'medium', 'hard'];
    
    const selectedCategory = category === 'random' 
      ? categories[Math.floor(Math.random() * categories.length)]
      : category || 'mixed';
      
    const selectedDifficulty = difficulty === 'random'
      ? difficulties[Math.floor(Math.random() * difficulties.length)]
      : difficulty || 'medium';
    
    console.log('QuizPlay - fromQuest:', fromQuest);
    console.log('QuizPlay - returnPath will be:', fromQuest ? '/quests' : '/');
    
    // Navigate with complete state
    navigate(`/quiz/${selectedCategory}`, {
      replace: true,
      state: {
        mode: 'quiz',
        difficulty: selectedDifficulty,
        count: 5,
        timer: { type: 'per_q', seconds: 45 },
        fromQuest: fromQuest,
        returnPath: '/quests'  // Always set to /quests when coming from quest
      }
    });
  }, [searchParams, navigate]);
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontSize: '20px'
    }}>
      Starting your quiz...
    </div>
  );
}

export default QuizPlay;