// src/components/Quiz/PracticeStart.jsx
import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

function PracticeStart() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Get parameters from URL
    const questions = searchParams.get('questions') || '15';
    const difficulty = searchParams.get('difficulty') || 'easy';
    const category = searchParams.get('category') || 'mixed';
    const fromQuest = searchParams.get('from') === 'quest';
    
    // For random category selection
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
    
    const selectedCategory = category === 'random' 
      ? categories[Math.floor(Math.random() * categories.length)]
      : category;
    
    console.log('PracticeStart - Launching practice mode:', {
      category: selectedCategory,
      difficulty,
      questions,
      fromQuest
    });
    
    // Navigate to quiz with practice mode
    navigate(`/quiz/${selectedCategory}`, {
      replace: true,
      state: {
        mode: 'practice',
        difficulty: difficulty,
        count: parseInt(questions),
        timer: { type: 'off', seconds: 0 }, // No timer in practice
        fromQuest: fromQuest,
        questType: fromQuest ? 'practiceQuestions' : null,
        returnPath: fromQuest ? '/profile/quests' : '/'
      }
    });
  }, [searchParams, navigate]);
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      color: 'white',
      fontSize: '20px'
    }}>
      Loading practice questions...
    </div>
  );
}

export default PracticeStart;