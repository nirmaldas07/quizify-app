// src/components/Quiz/QuizPlay.jsx

import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

function QuizPlay() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    const category = searchParams.get('category');
    const difficulty = searchParams.get('difficulty');
    const fromQuest = searchParams.get('from') === 'quest';
    
    // List of available categories based on your quiz data
    // These should match the slugs used in your routes
    const categories = [
      'general-knowledge', 
      'fun-facts', 
      'science', 
      'history', 
      'geography', 
      'computer', 
      'artificial-intelligence',
      'sports',
      'mixed' // for mixed category
    ];
    
    const difficulties = ['easy', 'medium', 'hard'];
    
    // Random selection if needed
    const selectedCategory = category === 'random' 
      ? categories[Math.floor(Math.random() * categories.length)]
      : category || 'mixed';
      
    const selectedDifficulty = difficulty === 'random'
      ? difficulties[Math.floor(Math.random() * difficulties.length)]
      : difficulty || 'medium';
    
    console.log('QuizPlay - Navigating to:', `/quiz/${selectedCategory}`);
    console.log('With state:', { mode: 'quiz', difficulty: selectedDifficulty });
    
    // Navigate to the actual quiz route with the selected parameters
    // Your Quiz component expects the category in the URL and other params in state
    navigate(`/quiz/${selectedCategory}`, {
      replace: true,
      state: {
        mode: 'quiz',
        difficulty: selectedDifficulty,
        count: 5,  // Fixed 5 questions for quest quizzes
        timer: { type: 'per_q', seconds: 45 },
        fromQuest: fromQuest,
        returnPath: fromQuest ? '/quests' : '/'  // Track where to return
      }
    });
  }, [searchParams, navigate]);
  
  // Show loading while we redirect
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