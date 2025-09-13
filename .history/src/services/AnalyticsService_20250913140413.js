// src/services/AnalyticsService.js
import { trackEvent, setAnalyticsUserId } from '../utils/firebase';
import { doc, setDoc, updateDoc, increment, serverTimestamp, getDoc, arrayUnion } from "firebase/firestore";
import { db } from '../utils/firebase';

class AnalyticsService {
  constructor() {
    this.sessionStart = Date.now();
    this.userId = null;
    this.sessionId = null;
  }

 async startSession(userId) {
  // Force clear old data
  this.userId = null;
  this.sessionId = null;
  
  // Set new user ID
  this.userId = userId;
  this.sessionStart = Date.now();
  this.sessionId = `${userId}_${Date.now()}`;
  
  console.log('Analytics session started for:', userId); // Debug log
    
    // Set user ID for Firebase Analytics
    setAnalyticsUserId(userId);
    
    // Track in Firebase Analytics
    trackEvent('session_start', { userId });
    
    // Store session in Firestore
    const today = new Date().toISOString().split('T')[0];
    try {
      await setDoc(doc(db, 'sessions', this.sessionId), {
        userId,
        startTime: serverTimestamp(),
        date: today,
        active: true,
        events: []  // Track user journey
      });
      
      // Update or create user stats
      const userStatsRef = doc(db, 'user_stats', userId);
      const userStats = await getDoc(userStatsRef);
      
      if (userStats.exists()) {
        await updateDoc(userStatsRef, {
          totalSessions: increment(1),
          lastActive: serverTimestamp()
        });
      } else {
        await setDoc(userStatsRef, {
          userId,
          totalSessions: 1,
          totalQuizzes: 0,
          totalScore: 0,
          joinedDate: serverTimestamp(),
          lastActive: serverTimestamp()
        });
      }
    } catch (error) {
      console.error('Session tracking error:', error);
    }
    
    // Keep localStorage as backup
    this.trackEventLocal('session_start', { userId });
  }

  async endSession() {
    if (this.sessionId) {
      const duration = Math.floor((Date.now() - this.sessionStart) / 1000);
      
      // Track in Firebase Analytics
      trackEvent('session_end', { 
        userId: this.userId,
        duration 
      });
      
        // Update session in Firestore with summary
        try {
        // Get the session to calculate summary
        const sessionDoc = await getDoc(doc(db, 'sessions', this.sessionId));
        const sessionData = sessionDoc.data();
        
        // Calculate summary from events
        const summary = {
            totalEvents: sessionData?.events?.length || 0,
            uniqueButtons: [...new Set(sessionData?.events?.map(e => e.buttonName) || [])],
            uniqueScreens: [...new Set(sessionData?.events?.map(e => e.context) || [])],
            mostClickedButton: this.getMostFrequent(sessionData?.events?.map(e => e.buttonName) || [])
        };
        
        await updateDoc(doc(db, 'sessions', this.sessionId), {
            endTime: serverTimestamp(),
            duration,
            active: false,
            summary
        });
        } catch (error) {
        console.error('End session error:', error);
        }
    }
  }

logout() {
  console.log('Analytics logout - clearing user:', this.userId);
  this.userId = null;
  this.sessionId = null;
  this.sessionStart = Date.now();
  // Clear localStorage analytics too
  localStorage.removeItem('analytics_events');
}

  trackEvent(eventName, data = {}) {
    // Firebase Analytics
    trackEvent(eventName, {
      userId: this.userId,
      ...data
    });
    
    // Keep localStorage tracking as backup
    this.trackEventLocal(eventName, data);
  }

  trackEventLocal(eventName, data = {}) {
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
    
    console.log('Event tracked locally:', event);
  }

  async trackQuizAttempt(quizData) {
    const { mode, category, score, totalQuestions, timeSpent } = quizData;
    const accuracy = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
    
    // Firebase Analytics
    trackEvent('quiz_completed', {
      mode,
      category,
      score,
      accuracy,
      time_spent: timeSpent,
      userId: this.userId
    });
    
    // Store in Firestore
    try {
      await setDoc(doc(db, 'quiz_attempts', `${this.userId}_${Date.now()}`), {
        userId: this.userId,
        sessionId: this.sessionId,
        mode,
        category,
        score,
        totalQuestions,
        accuracy,
        timeSpent,
        timestamp: serverTimestamp()
      });
      
      // Update user stats
      await updateDoc(doc(db, 'user_stats', this.userId), {
        totalQuizzes: increment(1),
        totalScore: increment(score),
        totalQuestions: increment(totalQuestions),
        lastActive: serverTimestamp()
      });
    } catch (error) {
      console.error('Quiz tracking error:', error);
    }
    
    // Update daily stats with quiz data
    this.updateDailyStats('quiz_completed', { score, category });
    
    // Keep localStorage backup
    this.trackEventLocal('quiz_completed', {
      mode,
      category,
      score,
      totalQuestions,
      accuracy,
      timeSpent
    });
  }

  trackScreenView(screenName) {
    trackEvent('screen_view', {
      screen_name: screenName,
      userId: this.userId
    });
  }

  async trackButtonClick(buttonName, context) {
    // Firebase Analytics (24-48 hour delay)
    trackEvent('button_click', {
      button_name: buttonName,
      context,
      userId: this.userId
    });
    
    // Store in Firestore for immediate viewing
    try {
      await setDoc(doc(db, 'events', `${this.userId}_${Date.now()}`), {
        userId: this.userId,
        eventType: 'button_click',
        buttonName,
        context,
        timestamp: serverTimestamp()
      });
    } catch (error) {
      console.error('Button tracking error:', error);
    }
    
    // Also append to current session
    if (this.sessionId) {
      try {
        await updateDoc(doc(db, 'sessions', this.sessionId), {
          events: arrayUnion({
            type: 'button_click',
            buttonName,
            context,
            timestamp: new Date().toISOString()
          })
        });
      } catch (error) {
        console.error('Session event tracking error:', error);
      }
    }
    // Update daily stats
    this.updateDailyStats(buttonName);
  }


  async updateDailyStats(action, data = {}) {
    if (!this.userId) return;
    
    const today = new Date().toISOString().split('T')[0];
    const statsRef = doc(db, 'user_daily_stats', `${this.userId}_${today}`);
    
    try {
      // Try to update existing document
      await updateDoc(statsRef, {
        [`actions.${action}`]: increment(1),
        totalActions: increment(1),
        lastActive: serverTimestamp()
      });
    } catch (error) {
      // Document doesn't exist, create it
      try {
        await setDoc(statsRef, {
          userId: this.userId,
          date: today,
          actions: { [action]: 1 },
          totalActions: 1,
          firstActive: serverTimestamp(),
          lastActive: serverTimestamp(),
          sessions: arrayUnion(this.sessionId)
        });
      } catch (err) {
        console.error('Daily stats error:', err);
      }
    }
  }

  trackGameScore(score, gameType) {
    this.trackQuizAttempt({
      mode: gameType,
      category: 'general',
      score,
      totalQuestions: 10, // Adjust based on your game
      timeSpent: Math.floor((Date.now() - this.sessionStart) / 1000)
    });
  }

  getUserAnalytics() {
    // This now returns localStorage data for quick access
    // Real analytics should be fetched from Firestore
    const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    const userEvents = events.filter(e => e.userId === this.userId);
    
    return {
      totalSessions: userEvents.filter(e => e.event === 'session_start').length,
      totalGames: userEvents.filter(e => e.event === 'quiz_completed').length,
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

  // New method to track feature usage
  trackFeatureUsage(featureName, details = {}) {
    trackEvent('feature_used', {
      feature: featureName,
      userId: this.userId,
      ...details
    });
  }

  getMostFrequent(arr) {
    if (!arr.length) return null;
    const counts = arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
  }
}

export default new AnalyticsService();