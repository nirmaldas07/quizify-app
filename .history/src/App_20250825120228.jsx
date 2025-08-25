// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Play from "./components/Play.jsx";
import Quiz from "./components/Quiz";
import PartySpin from "./components/PartySpin.jsx";

// 🔽 EXPLICIT imports from the Profile folder (avoid the folder/barrel import)
import ProfileHome from "./components/Profile/ProfileHome.jsx";
import ProfileLeaderboard from "./components/Profile/Leaderboard.jsx";
import ProfileHistory from "./components/Profile/History.jsx";
import ProfileRewards from "./components/Profile/Rewards.jsx";
import ProfileBadges from "./components/Profile/Badges.jsx";
import ProfileAchievements from "./components/Profile/Achievements.jsx";
import ProfileStreaks from "./components/Profile/Streaks.jsx";
import ProfileQuests from "./components/Profile/Quests.jsx";
import ProfileSettings from "./components/Profile/Settings.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/play/party" element={<PartySpin />} />

        {/* Profile routes */}
        <Route path="/profile" element={<ProfileHome />} />
        <Route path="/profile/leaderboard" element={<ProfileLeaderboard />} />
        <Route path="/profile/history" element={<ProfileHistory />} />
        <Route path="/profile/rewards" element={<ProfileRewards />} />
        <Route path="/profile/badges" element={<ProfileBadges />} />
        <Route path="/profile/achievements" element={<ProfileAchievements />} />
        <Route path="/profile/streaks" element={<ProfileStreaks />} />
        <Route path="/profile/quests" element={<ProfileQuests />} />
        <Route path="/profile/settings" element={<ProfileSettings />} />

        {/* Old leaders path -> redirect to new */}
        <Route path="/leaders" element={<Navigate to="/profile/leaderboard" replace />} />

        {/* Quiz flow */}
        <Route path="/quiz/:category/start" element={<Quiz />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
