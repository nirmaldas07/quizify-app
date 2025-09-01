// src/components/Quiz/QuizPlay.jsx

import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Quiz from './Quiz'; // Import your existing Quiz component

function QuizPlay() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [quizConfig, setQuizConfig] = useState(null);
  
  useEffect(() => {
    const category = searchParams.get('category');
    const difficulty = searchParams.get('difficulty');
    const fromQuest = searchParams.get('from') === 'quest';
    
    // List of available categories (update these based on your actual categories)
    const categories = [
      'general-knowledge', 
      'fun-facts', 
      'science', 
      'history', 
      'geography', 
      'computer', 
      'artificial-intelligence',
      'sports'
    ];
    
    const difficulties = ['easy', 'medium', 'hard'];
    
    // Random selection if needed
    const selectedCategory = category === 'random' 
      ? categories[Math.floor(Math.random() * categories.length)]
      : category;
      
    const selectedDifficulty = difficulty === 'random'
      ? difficulties[Math.floor(Math.random() * difficulties.length)]
      : difficulty;
    
    console.log('Selected category:', selectedCategory);
    console.log('Selected difficulty:', selectedDifficulty);
    
    setQuizConfig({
      category: selectedCategory,
      difficulty: selectedDifficulty,
      mode: 'quiz', // Your Quiz component expects a mode
      fromQuest: fromQuest
    });
  }, [searchParams]);
  
  // Show loading while we prepare the quiz
  if (!quizConfig) {
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
        Preparing your quiz...
      </div>
    );
  }
  
  // Render the Quiz component with the selected configuration
  return (
    <Quiz 
      category={quizConfig.category}
      difficulty={quizConfig.difficulty}
      mode={quizConfig.mode}
    />
  );
}

export default QuizPlay;