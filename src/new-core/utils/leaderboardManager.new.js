// /src/utils/leaderboardManager.js


// Leaderboard storage key
const LEADERBOARD_KEY = 'qp_leaderboard';
const MAX_ENTRIES = 100;

// Initialize with some default data if empty
const DEFAULT_LEADERBOARD = [
  { id: 'bot1', name: 'Bryan Wolf', score: 420, streak: 12, country: '🇺🇸', lastPlayed: Date.now() - 86400000 },
  { id: 'bot2', name: 'Meghan Jess', score: 385, streak: 8, country: '🇨🇦', lastPlayed: Date.now() - 172800000 },
  { id: 'bot3', name: 'Alex Turner', score: 360, streak: 15, country: '🇬🇧', lastPlayed: Date.now() - 3600000 },
  { id: 'bot4', name: 'Marsha Fisher', score: 340, streak: 5, country: '🇦🇺', lastPlayed: Date.now() - 7200000 },
  { id: 'bot5', name: 'Sarah Chen', score: 310, streak: 4, country: '🇸🇬', lastPlayed: Date.now() - 14400000 },
  { id: 'bot6', name: 'Mike Johnson', score: 290, streak: 2, country: '🇺🇸', lastPlayed: Date.now() - 28800000 },
  { id: 'bot7', name: 'Priya Sharma', score: 270, streak: 5, country: '🇮🇳', lastPlayed: Date.now() - 43200000 },
  { id: 'bot8', name: 'David Kim', score: 250, streak: 3, country: '🇰🇷', lastPlayed: Date.now() - 57600000 },
];

export const leaderboardManager = {
  // Get full leaderboard
  getLeaderboard: () => {
    try {
      const stored = localStorage.getItem(LEADERBOARD_KEY);
      if (!stored) {
        // Initialize with default data
        localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(DEFAULT_LEADERBOARD));
        return DEFAULT_LEADERBOARD;
      }
      return JSON.parse(stored);
    } catch (e) {
      console.error('Error reading leaderboard:', e);
      return DEFAULT_LEADERBOARD;
    }
  },

  // Update or add player score
  updatePlayerScore: (playerId, playerData) => {
    try {
      let leaderboard = leaderboardManager.getLeaderboard();
      const existingIndex = leaderboard.findIndex(e => e.id === playerId);
      
      const entry = {
        id: playerId,
        name: playerData.name,
        score: playerData.score,
        streak: playerData.streak || 0,
        country: playerData.country || '🇮🇳',
        lastPlayed: Date.now()
      };
      
      if (existingIndex >= 0) {
        // Update if new score is higher
        if (entry.score > leaderboard[existingIndex].score) {
          leaderboard[existingIndex] = entry;
        }
      } else {
        // Add new entry
        leaderboard.push(entry);
      }
      
      // Sort by score descending
      leaderboard.sort((a, b) => b.score - a.score);
      
      // Keep only top entries
      leaderboard = leaderboard.slice(0, MAX_ENTRIES);
      
      localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(leaderboard));
      return leaderboard;
    } catch (e) {
      console.error('Error updating leaderboard:', e);
      return leaderboardManager.getLeaderboard();
    }
  },

  // Get player rank
  getPlayerRank: (playerId) => {
    const leaderboard = leaderboardManager.getLeaderboard();
    const index = leaderboard.findIndex(e => e.id === playerId);
    return index >= 0 ? index + 1 : null;
  },

  // Get leaderboard with player inserted at correct position
  getLeaderboardWithPlayer: (playerData) => {
    const leaderboard = leaderboardManager.getLeaderboard();
    const withPlayer = [...leaderboard];
    
    // Remove existing player entry if exists
    const existingIndex = withPlayer.findIndex(e => e.id === playerData.id);
    if (existingIndex >= 0) {
      withPlayer.splice(existingIndex, 1);
    }
    
    // Add current player data
    withPlayer.push({
      id: playerData.id || 'current-player',
      name: playerData.name || 'You',
      score: playerData.score || 0,
      streak: playerData.streak || 0,
      country: playerData.country || '🇮🇳',
      lastPlayed: Date.now(),
      you: true
    });
    
    // Sort and add ranks
    return withPlayer
      .sort((a, b) => b.score - a.score)
      .map((entry, index) => ({ ...entry, rank: index + 1 }));
  }
};