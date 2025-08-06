import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DifficultySelection = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const difficulties = [
    {
      level: 'easy',
      title: 'Easy',
      description: '10 questions • 30 sec each',
      icon: '😊',
      color: 'bg-green-500 hover:bg-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700'
    },
    {
      level: 'medium',
      title: 'Medium',
      description: '15 questions • 25 sec each',
      icon: '🤔',
      color: 'bg-yellow-500 hover:bg-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700'
    },
    {
      level: 'hard',
      title: 'Hard',
      description: '20 questions • 20 sec each',
      icon: '😤',
      color: 'bg-red-500 hover:bg-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700'
    }
  ];

  const handleDifficultySelect = (difficulty) => {
    navigate(`/quiz/${category}/start?difficulty=${difficulty}`);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-md mx-auto">
        <div className="flex items-center mb-6">
          <button 
            onClick={handleBack}
            className="mr-4 p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Select Difficulty</h1>
            <p className="text-gray-600 capitalize">{category?.replace(/-/g, ' ')}</p>
          </div>
        </div>

        <div className="space-y-4">
          {difficulties.map((diff) => (
            <button
              key={diff.level}
              onClick={() => handleDifficultySelect(diff.level)}
              className={`w-full p-6 rounded-xl ${diff.bgColor} border-2 border-transparent hover:border-gray-300 transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{diff.icon}</div>
                  <div className="text-left">
                    <h3 className={`text-xl font-bold ${diff.textColor}`}>{diff.title}</h3>
                    <p className="text-gray-600 text-sm">{diff.description}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start space-x-3">
            <div className="text-blue-500 text-xl">💡</div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-1">Quick Tip</h4>
              <p className="text-blue-700 text-sm">
                Start with Easy mode to warm up, then challenge yourself with harder difficulties!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-gray-800">4.2</div>
            <div className="text-xs text-gray-600">Avg Score</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-gray-800">2:30</div>
            <div className="text-xs text-gray-600">Best Time</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-gray-800">73</div>
            <div className="text-xs text-gray-600">Attempts</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifficultySelection;
