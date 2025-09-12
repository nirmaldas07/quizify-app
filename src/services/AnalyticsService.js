class AnalyticsService {
  constructor() {
    this.sessionStart = Date.now();
    this.userId = null;
  }

  startSession(userId) {
    this.userId = userId;
    this.sessionStart = Date.now();
    this.trackEvent('session_start', { userId });
  }

  trackEvent(eventName, data = {}) {
    const event = {
      event: eventName,
      userId: this.userId,
      timestamp: Date.now(),
      sessionDuration: Math.floor((Date.now() - this.sessionStart) / 1000),
      ...data
    };
    
    const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    events.push(event);
    localStorage.setItem('analytics_events', JSON.stringify(events));
    
    console.log('Event tracked:', event);
  }

  trackGameScore(score, gameType) {
    this.trackEvent('game_completed', { score, gameType });
  }

  getUserAnalytics() {
    const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    const userEvents = events.filter(e => e.userId === this.userId);
    
    return {
      totalSessions: userEvents.filter(e => e.event === 'session_start').length,
      totalGames: userEvents.filter(e => e.event === 'game_completed').length,
      averageSessionTime: this.calculateAverageSessionTime(userEvents),
      lastActive: userEvents[userEvents.length - 1]?.timestamp
    };
  }

  calculateAverageSessionTime(events) {
    const sessions = events.filter(e => e.event === 'session_start');
    if (sessions.length === 0) return 0;
    
    const totalTime = events.reduce((sum, e) => sum + (e.sessionDuration || 0), 0);
    return Math.floor(totalTime / sessions.length);
  }
}

export default new AnalyticsService();