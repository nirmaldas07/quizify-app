// src/components/Admin/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [timeFilter, setTimeFilter] = useState('7d');
  
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeToday: 0,
    totalSessions: 0,
    avgSessionDuration: 0,
    totalQuizzes: 0,
    quizzesPerSession: 0,
    dauMau: 0,
    bounceRate: 0,
    dailyGrowth: 0,
    quizzesPerUser: 0,
    topButtons: []
  });

  const [users, setUsers] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [events, setEvents] = useState([]);
  const [retentionData, setRetentionData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userJourney, setUserJourney] = useState([]);

  useEffect(() => {
    document.body.classList.add('hide-bottom-nav');
    return () => {
      document.body.classList.remove('hide-bottom-nav');
    };
  }, []);

  useEffect(() => {
    fetchDashboardData();
    const unsubscribe = setupRealtimeListeners();
    return () => unsubscribe && unsubscribe();
  }, [timeFilter]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      const [usersSnap, sessionsSnap, eventsSnap, quizSnap] = await Promise.all([
        getDocs(collection(db, 'user_stats')),
        getDocs(collection(db, 'sessions')),
        getDocs(collection(db, 'events')),
        getDocs(collection(db, 'quiz_attempts'))
      ]);

      // Fetch actual user profiles for names
      const userProfilesSnap = await getDocs(collection(db, 'users'));
      const userProfiles = {};
      userProfilesSnap.docs.forEach(doc => {
        userProfiles[doc.id] = doc.data();
      });

      // Process users with names
      const usersList = usersSnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        name: userProfiles[doc.id]?.username || 'Unknown',
        joinedDate: doc.data().joinedDate?.toDate?.() || null,
        lastActiveDate: doc.data().lastActive?.toDate?.() || null
      }));
      setUsers(usersList);

      // Process sessions
      const sessionsList = sessionsSnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSessions(sessionsList);

      // Process events
      const eventsList = eventsSnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setEvents(eventsList);

      // Calculate button frequency
      const buttonCounts = {};
      eventsList.forEach(event => {
        if (event.buttonName) {
          buttonCounts[event.buttonName] = (buttonCounts[event.buttonName] || 0) + 1;
        }
      });
      
      const topButtons = Object.entries(buttonCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5)
        .map(([name, count]) => ({ name, count }));

      // Process quiz data
      const quizList = quizSnap.docs.map(doc => doc.data());

      // Calculate quizzes per session
      const quizzesPerSession = sessionsList.length > 0 
        ? (quizList.length / sessionsList.length).toFixed(1)
        : 0;

      // Calculate bounce rate
      const userEventCounts = {};
      eventsList.forEach(e => {
        userEventCounts[e.userId] = (userEventCounts[e.userId] || 0) + 1;
      });
      const bouncedUsers = Object.values(userEventCounts).filter(count => count === 1).length;
      const bounceRate = Object.keys(userEventCounts).length > 0 
        ? Math.round((bouncedUsers / Object.keys(userEventCounts).length) * 100) 
        : 0;

      // Calculate daily growth
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      
      const todayUsers = usersList.filter(u => {
        return u.joinedDate && u.joinedDate.toDateString() === today.toDateString();
      }).length;
      
      const yesterdayUsers = usersList.filter(u => {
        return u.joinedDate && u.joinedDate.toDateString() === yesterday.toDateString();
      }).length;
      
      const dailyGrowth = yesterdayUsers > 0 
        ? Math.round(((todayUsers - yesterdayUsers) / yesterdayUsers) * 100)
        : todayUsers * 100;

      // Calculate active today and this month
      const todayStr = new Date().toISOString().split('T')[0];
      const todaysSessions = sessionsList.filter(s => s.date === todayStr);
      const uniqueUsersToday = new Set(todaysSessions.map(s => s.userId)).size;

      // Calculate DAU/MAU
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      const monthlyActiveUsers = new Set(
        sessionsList
          .filter(s => {
            const sessionDate = new Date(s.date);
            return sessionDate.getMonth() === currentMonth && sessionDate.getFullYear() === currentYear;
          })
          .map(s => s.userId)
      ).size;
      
      const dauMau = monthlyActiveUsers > 0 
        ? Math.round((uniqueUsersToday / monthlyActiveUsers) * 100)
        : 0;

      // Calculate average session duration
      const completedSessions = sessionsList.filter(s => s.duration);
      const avgDuration = completedSessions.length > 0
        ? Math.round(completedSessions.reduce((sum, s) => sum + s.duration, 0) / completedSessions.length)
        : 0;

      // Quizzes per user
      const quizzesPerUser = usersList.length > 0 
        ? (quizList.length / usersList.length).toFixed(1)
        : 0;

      // Calculate retention data
      const retentionCohorts = calculateRetention(usersList, sessionsList);
      setRetentionData(retentionCohorts);

      setStats({
        totalUsers: usersList.length,
        activeToday: uniqueUsersToday,
        totalSessions: sessionsList.length,
        avgSessionDuration: avgDuration,
        totalQuizzes: quizList.length,
        quizzesPerSession,
        dauMau,
        bounceRate,
        dailyGrowth,
        quizzesPerUser,
        topButtons
      });

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateRetention = (users, sessions) => {
    const retentionDays = [1, 2, 3, 4, 5, 6, 7];
    const retention = [];

    retentionDays.forEach(day => {
      let retained = 0;
      let total = 0;

      users.forEach(user => {
        if (!user.joinedDate) return;
        
        const joinDate = new Date(user.joinedDate);
        const checkDate = new Date(joinDate);
        checkDate.setDate(checkDate.getDate() + day);
        
        const wasActive = sessions.some(s => {
          if (s.userId !== user.id) return false;
          const sessionDate = new Date(s.date);
          return sessionDate.toDateString() === checkDate.toDateString();
        });

        if (new Date() - joinDate >= day * 24 * 60 * 60 * 1000) {
          total++;
          if (wasActive) retained++;
        }
      });

      retention.push({
        day: `D${day}`,
        rate: total > 0 ? Math.round((retained / total) * 100) : 0,
        retained,
        total
      });
    });

    return retention;
  };

  const setupRealtimeListeners = () => {
    const q = query(
      collection(db, 'sessions'),
      where('active', '==', true),
      limit(10)
    );
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log(`${snapshot.size} active sessions`);
    });
    
    return unsubscribe;
  };

  const loadUserJourney = async (userId) => {
    try {
      const userEvents = events
        .filter(e => e.userId === userId)
        .sort((a, b) => {
          const timeA = a.timestamp?.toDate?.() || new Date(a.timestamp);
          const timeB = b.timestamp?.toDate?.() || new Date(b.timestamp);
          return timeB - timeA;
        })
        .slice(0, 50);
      
      setUserJourney(userEvents);
      setSelectedUser(users.find(u => u.id === userId));
    } catch (error) {
      console.error('Error loading user journey:', error);
    }
  };

  const formatDuration = (seconds) => {
    if (!seconds) return '0s';
    if (seconds < 60) return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Never';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      dateStyle: 'short',
      timeStyle: 'short'
    });
  };

  const BarChart = ({ data, dataKey, color = '#3B82F6', showValue = true }) => {
    const maxValue = Math.max(...data.map(d => d[dataKey]));
    
    return (
      <div className="space-y-2">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="text-xs text-gray-400 w-12">{item.day || item.name}</div>
            <div className="flex-1 bg-gray-800 rounded-full h-6 relative overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
                style={{
                  width: `${(item[dataKey] / maxValue) * 100}%`,
                  background: `linear-gradient(90deg, ${color}, ${color}dd)`
                }}
              />
              {showValue && (
                <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                  {item[dataKey]}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white/20 mx-auto mb-4"></div>
          <div className="text-white/60 text-sm">Loading analytics...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Header */}
      <div className="bg-[#0a0a0a] border-b border-white/10 px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/profile')}
              className="h-11 w-11 rounded-full bg-white/5 backdrop-blur border border-white/10 grid place-items-center hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-xl font-semibold tracking-tight">Analytics</h1>
          </div>
          <div className="flex gap-1.5">
            {[
              { id: 'today', label: 'Today' },
              { id: 'yesterday', label: 'YTD' },
              { id: '7d', label: '7D' },
              { id: 'all', label: 'All' }
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setTimeFilter(filter.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  timeFilter === filter.id 
                    ? 'bg-white/15 text-white' 
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-white/10 px-4">
        <div className="flex gap-6">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'users', label: 'Users' },
            { id: 'engagement', label: 'Engagement' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-1 border-b-2 transition-colors text-sm font-medium ${
                activeTab === tab.id 
                  ? 'border-white text-white' 
                  : 'border-transparent text-white/40 hover:text-white/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics Row */}
      <div className="px-4 py-3 bg-[#0a0a0a] border-b border-white/10">
        <div className="flex gap-3 overflow-x-auto pb-1">
          <div className="flex-shrink-0 px-3 py-2 bg-white/5 rounded-lg min-w-[80px]">
            <div className="text-[10px] text-white/40 uppercase tracking-wider">Sessions</div>
            <div className="text-base font-semibold">{stats.totalSessions}</div>
          </div>
          <div className="flex-shrink-0 px-3 py-2 bg-white/5 rounded-lg min-w-[80px]">
            <div className="text-[10px] text-white/40 uppercase tracking-wider">Avg Time</div>
            <div className="text-base font-semibold">{formatDuration(stats.avgSessionDuration)}</div>
          </div>
          <div className="flex-shrink-0 px-3 py-2 bg-white/5 rounded-lg min-w-[80px]">
            <div className="text-[10px] text-white/40 uppercase tracking-wider">Quizzes</div>
            <div className="text-base font-semibold">{stats.totalQuizzes}</div>
          </div>
          <div className="flex-shrink-0 px-3 py-2 bg-white/5 rounded-lg min-w-[80px]">
            <div className="text-[10px] text-white/40 uppercase tracking-wider">Q/User</div>
            <div className="text-base font-semibold">{stats.quizzesPerUser}</div>
          </div>
          <div className="flex-shrink-0 px-3 py-2 bg-white/5 rounded-lg min-w-[80px]">
            <div className="text-[10px] text-white/40 uppercase tracking-wider">Bounce</div>
            <div className="text-base font-semibold">{stats.bounceRate}%</div>
          </div>
          <div className="flex-shrink-0 px-3 py-2 bg-white/5 rounded-lg min-w-[80px]">
            <div className="text-[10px] text-white/40 uppercase tracking-wider">Growth</div>
            <div className={`text-base font-semibold ${stats.dailyGrowth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {stats.dailyGrowth > 0 ? '+' : ''}{stats.dailyGrowth}%
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* Main Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#0a0a0a] rounded-2xl p-5 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs text-white/40 uppercase tracking-wider">Total Users</h3>
                  <span className="text-lg">👥</span>
                </div>
                <div className="text-3xl font-bold">{stats.totalUsers}</div>
                <div className="text-xs text-white/40 mt-1">All time</div>
              </div>
              
              <div className="bg-[#0a0a0a] rounded-2xl p-5 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs text-white/40 uppercase tracking-wider">Active Today</h3>
                  <span className="text-lg">🟢</span>
                </div>
                <div className="text-3xl font-bold">{stats.activeToday}</div>
                <div className="text-xs text-white/40 mt-1">Unique users</div>
              </div>
              
              <div className="bg-[#0a0a0a] rounded-2xl p-5 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs text-white/40 uppercase tracking-wider">Q/Session</h3>
                  <span className="text-lg">📊</span>
                </div>
                <div className="text-3xl font-bold">{stats.quizzesPerSession}</div>
                <div className="text-xs text-white/40 mt-1">Average</div>
              </div>
              
              <div className="bg-[#0a0a0a] rounded-2xl p-5 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs text-white/40 uppercase tracking-wider">DAU/MAU</h3>
                  <span className="text-lg">📈</span>
                </div>
                <div className="text-3xl font-bold">{stats.dauMau}%</div>
                <div className="text-xs text-white/40 mt-1">Stickiness</div>
              </div>
            </div>

            {/* Top Features List */}
            <div className="bg-[#0a0a0a] rounded-2xl p-5 border border-white/10">
              <h3 className="text-sm font-semibold mb-4 text-white/80">Top Features Used</h3>
              <div className="space-y-3">
                {stats.topButtons.map((button, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : '📍'}</span>
                      <span className="text-sm text-white/80">{button.name}</span>
                    </div>
                    <span className="text-sm text-white/40">{button.count} clicks</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden">
            <div className="px-5 py-4 border-b border-white/10">
              <h2 className="text-sm font-semibold text-white/80">All Users ({users.length})</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-black/50">
                  <tr>
                    <th className="text-left py-3 px-4 text-xs font-medium text-white/40 uppercase tracking-wider">Phone</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-white/40 uppercase tracking-wider">Name</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-white/40 uppercase tracking-wider">Sessions</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-white/40 uppercase tracking-wider">Quizzes</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-white/40 uppercase tracking-wider">Score</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-white/40 uppercase tracking-wider">Joined</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-white/40 uppercase tracking-wider">Active</th>
                    <th className="text-center py-3 px-4 text-xs font-medium text-white/40 uppercase tracking-wider">View</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {users.map(user => (
                    <tr key={user.id} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 text-sm text-white/80">{user.userId || user.id}</td>
                      <td className="py-3 px-4 text-sm text-white/60">{user.name}</td>
                      <td className="py-3 px-4 text-sm text-white/60">{user.totalSessions || 0}</td>
                      <td className="py-3 px-4 text-sm text-white/60">{user.totalQuizzes || 0}</td>
                      <td className="py-3 px-4 text-sm text-white/60">{user.totalScore || 0}</td>
                      <td className="py-3 px-4 text-sm text-white/60">{formatDate(user.joinedDate)}</td>
                      <td className="py-3 px-4 text-sm text-white/60">{formatDate(user.lastActiveDate)}</td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => loadUserJourney(user.id)}
                          className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-xs transition-colors"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'engagement' && (
          <div className="space-y-4">
            {/* User Retention Summary */}
            <div className="bg-[#0a0a0a] rounded-2xl p-5 border border-white/10">
              <h3 className="text-sm font-semibold mb-4 text-white/80">User Retention</h3>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center p-3 bg-white/5 rounded-xl">
                  <div className="text-2xl font-bold text-green-400">
                    {Math.round((users.filter(u => {
                      const lastActive = u.lastActiveDate;
                      return lastActive && (new Date() - lastActive) < 86400000;
                    }).length / Math.max(users.length, 1)) * 100)}%
                  </div>
                  <div className="text-xs text-white/40 mt-1">Daily Active</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-xl">
                  <div className="text-2xl font-bold text-blue-400">
                    {Math.round((users.filter(u => {
                      const lastActive = u.lastActiveDate;
                      return lastActive && (new Date() - lastActive) < 604800000;
                    }).length / Math.max(users.length, 1)) * 100)}%
                  </div>
                  <div className="text-xs text-white/40 mt-1">Weekly Active</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-xl">
                  <div className="text-2xl font-bold text-purple-400">
                    {Math.round((users.filter(u => {
                      const lastActive = u.lastActiveDate;
                      return lastActive && (new Date() - lastActive) < 2592000000;
                    }).length / Math.max(users.length, 1)) * 100)}%
                  </div>
                  <div className="text-xs text-white/40 mt-1">Monthly Active</div>
                </div>
              </div>

              {/* Retention Chart */}
              <h4 className="text-xs font-medium text-white/60 mb-3 uppercase tracking-wider">Retention by Day</h4>
              <BarChart data={retentionData} dataKey="rate" color="#10B981" />
            </div>

            {/* Session Distribution */}
            <div className="bg-[#0a0a0a] rounded-2xl p-5 border border-white/10">
              <h3 className="text-sm font-semibold mb-4 text-white/80">Session Duration</h3>
              <div className="space-y-3">
                {[
                  { label: '< 1 min', count: sessions.filter(s => s.duration < 60).length },
                  { label: '1-5 min', count: sessions.filter(s => s.duration >= 60 && s.duration < 300).length },
                  { label: '5-10 min', count: sessions.filter(s => s.duration >= 300 && s.duration < 600).length },
                  { label: '> 10 min', count: sessions.filter(s => s.duration >= 600).length }
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-sm text-white/60">{item.label}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-white/10 rounded-full h-1.5">
                        <div 
                          className="h-full bg-white/40 rounded-full"
                          style={{ width: `${(item.count / Math.max(sessions.length, 1)) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-white/40 w-10 text-right">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* User Journey Modal */}
      {selectedUser && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => {
            setSelectedUser(null);
            setUserJourney([]);
          }}
        >
          <div 
            className="bg-[#0a0a0a] rounded-2xl p-5 max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold mb-4">User Journey</h3>
            <div className="grid grid-cols-2 gap-3 text-sm mb-4">
              <div className="text-white/40">User: <span className="text-white/80">{selectedUser.name}</span></div>
              <div className="text-white/40">Phone: <span className="text-white/80">{selectedUser.userId || selectedUser.id}</span></div>
              <div className="text-white/40">Sessions: <span className="text-white/80">{selectedUser.totalSessions || 0}</span></div>
              <div className="text-white/40">Quizzes: <span className="text-white/80">{selectedUser.totalQuizzes || 0}</span></div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              <h4 className="text-xs font-medium text-white/40 mb-3 uppercase tracking-wider">Recent Activity</h4>
              <div className="space-y-2">
                {userJourney.map((event, idx) => (
                  <div key={idx} className="flex items-center gap-3 py-2 px-3 bg-white/5 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <div className="flex-1">
                      <span className="text-sm text-white/80">{event.buttonName}</span>
                      <span className="text-xs text-white/40 ml-2">{event.context}</span>
                    </div>
                    <div className="text-xs text-white/40">{formatTimestamp(event.timestamp)}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => {
                setSelectedUser(null);
                setUserJourney([]);
              }}
              className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}