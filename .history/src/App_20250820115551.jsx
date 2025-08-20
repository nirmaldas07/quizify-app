// src/App.jsx
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Play from "./components/Play.jsx";
import Leaderboard from "./components/Leaderboard";
import Profile from "./components/Profile";
// import DifficultySelection from "./components/DifficultySelection";
import ConfirmStartSheet from "./components/ConfirmStartSheet";
import Quiz from "./components/Quiz";
import PartySpin from "./components/PartySpin.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/play/party" element={<PartySpin />} />

        {/* Quiz flow */}
        <Route path="/quiz/:category" element={<DifficultySelection />} />
        <Route path="/quiz/:category/start" element={<Quiz />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
        
      </Route>
    </Routes>
  );
}

// imports


// inside your <Routes>

