import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Quiz from './components/Quiz';
import DifficultySelection from './components/DifficultySelection';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';

function App() {
  return (
    <Routes>
      {/* All routes wrapped with Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="quiz/:category" element={<DifficultySelection />} />
        <Route path="quiz/:category/start" element={<Quiz />} />
      </Route>
    </Routes>
  );
}

export default App;
