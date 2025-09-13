// src/components/Admin/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('7d'); // 7d, 30d, all
  
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeToday: 0,
    totalSessions: 0,
    totalEvents: 0,
    avgSessionTime: 0,
    totalQuizzes: 0,
    avgQuizScore: 0,
    topButtons: []
  });

  const [users, setUsers] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [events, setEvents] = useState([]);
  const [dailyStats, setDailyStats] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userJourney, setUserJourney] = useState([]);

  useEffect(() => {
    fetchDashboardData();
    const unsubscribe = setupRealtimeListeners();
    return () => unsubscribe && unsubscribe();
  }, [timeRange]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch all collections
      const [usersSnap, sessionsSnap, eventsSnap, quizSnap, dailySnap] = await Promise.all([
        getDocs(collection(db, 'user_stats')),
        getDocs(collection(db, 'sessions')),
        getDocs(collection(db, 'events')),
        getDocs(collection(db, 'quiz_attempts')),
        getDocs(collection(db, 'user_daily_stats'))
      ]);

      // Process users
      const usersList = usersSnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
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

      // Calculate button click frequency
      const buttonCounts = {};
      eventsList.forEach(event => {
        if (event.buttonName) {
          buttonCounts[event.buttonName] = (buttonCounts[event.buttonName] || 0) + 1;
        }
      });
      
      const topButtons = Object.entries(buttonCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10)
        .map(([name, count]) => ({ name, count }));

      // Process quiz attempts
      const quizList = quizSnap.docs.map(doc => doc.data());
      const avgScore = quizList.length > 0 
        ? Math.round(quizList.reduce((sum, q) => sum + (q.score || 0), 0) / quizList.length)
        : 0;

      // Process daily stats for chart
      const dailyList = dailySnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      // Group by date for chart
      const dailyGrouped = {};
      dailyList.forEach(stat => {
        if (stat.date) {
          if (!dailyGrouped[stat.date]) {
            dailyGrouped[stat.date] = { users: new Set(), actions: 0 };
          }
          dailyGrouped[stat.date].users.add(stat.userId);
          dailyGrouped[stat.date].actions += stat.totalActions || 0;
        }
      });

      const chartData = Object.entries(dailyGrouped)
        .map(([date, data]) => ({
          date,
          users: data.users.size,
          actions: data.actions
        }))
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(-7); // Last 7 days

      setDailyStats(chartData);

      // Calculate active today
      const today = new Date().toISOString().split('T')[0];
      const todaysSessions = sessionsList.filter(s => s.date === today);
      const uniqueUsersToday = new Set(todaysSessions.map(s => s.userId)).size;

      // Calculate average session time
      const completedSessions = sessionsList.filter(s => s.duration);
      const avgDuration = completedSessions.length > 0
        ? Math.round(completedSessions.reduce((sum, s) => sum + s.duration, 0) / completedSessions.length)
        : 0;

      setStats({
        totalUsers: usersList.length,
        activeToday: uniqueUsersToday,
        totalSessions: sessionsList.length,
        totalEvents: eventsList.length,
        avgSessionTime: avgDuration,
        totalQuizzes: quizList.length,
        avgQuizScore: avgScore,
        topButtons
      });

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const setupRealtimeListeners = () => {
    // Listen to active sessions
    const q = query(
      collection(db, 'sessions'),
      where('active', '==', true),
      limit(10)
    );
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log(`${snapshot.size} active sessions right now`);
    });
    
    return unsubscribe;
  };

  const loadUserJourney = async (userId) => {
    try {
      // Get all events for this user
      const userEvents = events
        .filter(e => e.userId === userId)
        .sort((a, b) => {
          const timeA = a.timestamp?.toDate?.() || new Date(a.timestamp);
          const timeB = b.timestamp?.toDate?.() || new Date(b.timestamp);
          return timeB - timeA;
        })
        .slice(0, 50); // Last 50 events
      
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

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      dateStyle: 'short',
      timeStyle: 'short'
    });
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Never';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    return date.toLocaleDateString('en-IN');
  };

  // Simple bar chart component
  const BarChart = ({ data, dataKey, color = '#3B82F6' }) => {
    const maxValue = Math.max(...data.map(d => d[dataKey]));
    
    return (
      <div className="space-y-2">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="text-xs text-gray-400 w-20">{item.date || item.name}</div>
            <div className="flex-1 bg-gray-800 rounded-full h-6 relative overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
                style={{
                  width: `${(item[dataKey] / maxValue) * 100}%`,
                  background: `linear-gradient(90deg, ${color}, ${color}dd)`
                }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                {item[dataKey]}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <div className="text-white">Loading analytics...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-4 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">📊 Analytics</h1>
            <div className="flex gap-2">
              {['7d', '30d', 'all'].map(range => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                    timeRange === range 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {range === '7d' ? '7 Days' : range === '30d' ? '30 Days' : 'All Time'}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => navigate('/profile')}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            ← Back
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800 px-6">
        <div className="flex space-x-6">
          {[
            { id: 'overview', label: 'Overview', icon: '📈' },
            { id: 'users', label: 'Users', icon: '👥' },
            { id: 'engagement', label: 'Engagement', icon: '⚡' },
            { id: 'events', label: 'Events', icon: '🎯' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-1 border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === tab.id 
                  ? 'border-blue-500 text-blue-500' 
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-6 border border-blue-500/20">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm text-gray-400">Total Users</h3>
                  <span className="text-2xl">👥</span>
                </div>
                <div className="text-3xl font-bold text-white">{stats.totalUsers}</div>
                <div className="text-xs text-gray-500 mt-1">All time</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl p-6 border border-green-500/20">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm text-gray-400">Active Today</h3>
                  <span className="text-2xl">🟢</span>
                </div>
                <div className="text-3xl font-bold text-white">{stats.activeToday}</div>
                <div className="text-xs text-gray-500 mt-1">Unique users</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm text-gray-400">Avg Session</h3>
                  <span className="text-2xl">⏱️</span>
                </div>
                <div className="text-3xl font-bold text-white">{formatDuration(stats.avgSessionTime)}</div>
                <div className="text-xs text-gray-500 mt-1">Per session</div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-xl p-6 border border-amber-500/20">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm text-gray-400">Quiz Score</h3>
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="text-3xl font-bold text-white">{stats.avgQuizScore}%</div>
                <div className="text-xs text-gray-500 mt-1">Average</div>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Daily Active Users Chart */}
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Daily Active Users</h3>
                {dailyStats.length > 0 ? (
                  <BarChart data={dailyStats} dataKey="users" color="#3B82F6" />
                ) : (
                  <div className="text-gray-500 text-center py-8">No data available</div>
                )}
              </div>

              {/* Top Features */}
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Top Features Used</h3>
                {stats.topButtons.length > 0 ? (
                  <div className="space-y-2">
                    {stats.topButtons.slice(0, 5).map((button, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2">
                        <span className="text-sm">{button.name}</span>
                        <span className="text-sm text-gray-400">{button.count} clicks</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-500 text-center py-8">No data available</div>
                )}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="text-2xl font-bold">{stats.totalSessions}</div>
                <div className="text-sm text-gray-400">Total Sessions</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="text-2xl font-bold">{stats.totalEvents}</div>
                <div className="text-sm text-gray-400">Total Events</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="text-2xl font-bold">{stats.totalQuizzes}</div>
                <div className="text-sm text-gray-400">Quizzes Taken</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="text-2xl font-bold">{Math.round(stats.totalEvents / Math.max(stats.totalUsers, 1))}</div>
                <div className="text-sm text-gray-400">Events/User</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-800">
                <h2 className="text-lg font-semibold">All Users ({users.length})</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-950">
                    <tr>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">User ID</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Sessions</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Quizzes</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Score</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Joined</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Last Active</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.id} className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                        <td className="py-3 px-4">
                          <div className="font-medium text-white">{user.userId || user.id}</div>
                        </td>
                        <td className="py-3 px-4 text-gray-400">{user.totalSessions || 0}</td>
                        <td className="py-3 px-4 text-gray-400">{user.totalQuizzes || 0}</td>
                        <td className="py-3 px-4 text-gray-400">{user.totalScore || 0}</td>
                        <td className="py-3 px-4 text-gray-400">{formatDate(user.joinedDate)}</td>
                        <td className="py-3 px-4 text-gray-400">{formatDate(user.lastActive)}</td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => loadUserJourney(user.id)}
                            className="px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg text-sm transition-colors"
                          >
                            View Journey
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {users.length === 0 && (
                  <div className="text-center py-8 text-gray-500">No users found</div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'engagement' && (
          <div className="space-y-6">
            {/* Engagement Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Session Distribution */}
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Session Duration Distribution</h3>
                <div className="space-y-3">
                  {[
                    { label: '< 1 min', count: sessions.filter(s => s.duration < 60).length },
                    { label: '1-5 min', count: sessions.filter(s => s.duration >= 60 && s.duration < 300).length },
                    { label: '5-10 min', count: sessions.filter(s => s.duration >= 300 && s.duration < 600).length },
                    { label: '> 10 min', count: sessions.filter(s => s.duration >= 600).length }
                  ].map(item => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-sm">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-800 rounded-full h-2">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                            style={{ width: `${(item.count / Math.max(sessions.length, 1)) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-400 w-12 text-right">{item.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Heatmap */}
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Activity by Day</h3>
                <BarChart data={dailyStats} dataKey="actions" color="#10B981" />
              </div>
            </div>

            {/* User Retention */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">User Retention</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">
                    {Math.round((users.filter(u => {
                      const lastActive = u.lastActiveDate;
                      return lastActive && (new Date() - lastActive) < 86400000;
                    }).length / Math.max(users.length, 1)) * 100)}%
                  </div>
                  <div className="text-sm text-gray-400 mt-1">Daily Active</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">
                    {Math.round((users.filter(u => {
                      const lastActive = u.lastActiveDate;
                      return lastActive && (new Date() - lastActive) < 604800000;
                    }).length / Math.max(users.length, 1)) * 100)}%
                  </div>
                  <div className="text-sm text-gray-400 mt-1">Weekly Active</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">
                    {Math.round((users.filter(u => {
                      const lastActive = u.lastActiveDate;
                      return lastActive && (new Date() - lastActive) < 2592000000;
                    }).length / Math.max(users.length, 1)) * 100)}%
                  </div>
                  <div className="text-sm text-gray-400 mt-1">Monthly Active</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Events ({events.length} total)</h2>
              <div className="space-y-1 max-h-[600px] overflow-y-auto">
                {events.slice(0, 100).map(event => (
                  <div key={event.id} className="flex items-center justify-between py-2 px-3 hover:bg-gray-800/50 rounded transition-colors">
                    <div className="flex-1">
                      <span className="text-sm font-medium text-white">{event.buttonName}</span>
                      <span className="text-xs text-gray-500 ml-2">{event.context}</span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {formatTimestamp(event.timestamp)}
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
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => {
            setSelectedUser(null);
            setUserJourney([]);
          }}
        >
          <div 
            className="bg-gray-900 rounded-xl p-6 max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">User Journey</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-400">User ID:</span> <span className="text-white">{selectedUser.userId || selectedUser.id}</span></div>
                <div><span className="text-gray-400">Total Sessions:</span> <span className="text-white">{selectedUser.totalSessions || 0}</span></div>
                <div><span className="text-gray-400">Total Quizzes:</span> <span className="text-white">{selectedUser.totalQuizzes || 0}</span></div>
                <div><span className="text-gray-400">Total Score:</span> <span className="text-white">{selectedUser.totalScore || 0}</span></div>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Recent Activity</h4>
              <div className="space-y-2">
                {userJourney.length > 0 ? (
                  userJourney.map((event, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-2 px-3 bg-gray-800/50 rounded">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <span className="text-sm font-medium">{event.buttonName}</span>
                        <span className="text-xs text-gray-500 ml-2">{event.context}</span>
                      </div>
                      <div className="text-xs text-gray-400">{formatTimestamp(event.timestamp)}</div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">No events found for this user</div>
                )}
              </div>
            </div>
            
            <button
              onClick={() => {
                setSelectedUser(null);
                setUserJourney([]);
              }}
              className="mt-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}