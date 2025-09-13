// src/components/Admin/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { collection, query, where, orderBy, limit, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  
  // State for different data
  const [stats, setStats] = useState({
    totalUsers: 0,
    todayActive: 0,
    totalSessions: 0,
    avgSessionTime: 0
  });
  
  const [users, setUsers] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [recentEvents, setRecentEvents] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch Dashboard Data
  useEffect(() => {
    fetchDashboardData();
    // Set up real-time listeners
    const unsubscribe = setupRealtimeListeners();
    return () => unsubscribe && unsubscribe();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch users
      const usersSnapshot = await getDocs(collection(db, 'user_stats'));
      const usersList = usersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUsers(usersList);
      
      // Fetch today's active sessions
      const today = new Date().toISOString().split('T')[0];
      const sessionsQuery = query(
        collection(db, 'sessions'),
        where('date', '==', today),
        orderBy('startTime', 'desc'),
        limit(50)
      );
      const sessionsSnapshot = await getDocs(sessionsQuery);
      const sessionsList = sessionsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSessions(sessionsList);
      
      // Fetch recent events
      const eventsQuery = query(
        collection(db, 'events'),
        orderBy('timestamp', 'desc'),
        limit(100)
      );
      const eventsSnapshot = await getDocs(eventsQuery);
      const eventsList = eventsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setRecentEvents(eventsList);
      
      // Calculate stats
      calculateStats(usersList, sessionsList);
      
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const setupRealtimeListeners = () => {
    // Listen to new sessions
    const sessionsQuery = query(
      collection(db, 'sessions'),
      where('active', '==', true),
      limit(10)
    );
    
    const unsubscribe = onSnapshot(sessionsQuery, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          console.log('New active session:', change.doc.data());
        }
      });
    });
    
    return unsubscribe;
  };

  const calculateStats = (usersList, sessionsList) => {
    const today = new Date().toISOString().split('T')[0];
    const todaysSessions = sessionsList.filter(s => s.date === today);
    const uniqueUsersToday = new Set(todaysSessions.map(s => s.userId)).size;
    
    const totalDuration = sessionsList.reduce((sum, s) => sum + (s.duration || 0), 0);
    const avgDuration = sessionsList.length > 0 ? Math.round(totalDuration / sessionsList.length) : 0;
    
    setStats({
      totalUsers: usersList.length,
      todayActive: uniqueUsersToday,
      totalSessions: sessionsList.length,
      avgSessionTime: avgDuration
    });
  };

  const formatDuration = (seconds) => {
    if (!seconds) return '0s';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
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

  const MetricCard = ({ title, value, subtitle, color = 'blue' }) => (
    <div className={`bg-gradient-to-br from-${color}-500/10 to-${color}-600/10 rounded-xl p-6 border border-${color}-500/20`}>
      <h3 className="text-sm text-gray-400 mb-2">{title}</h3>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
    </div>
  );

  const UserRow = ({ user }) => (
    <tr 
      className="border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer transition-colors"
      onClick={() => setSelectedUser(user)}
    >
      <td className="py-3 px-4">
        <div className="font-medium text-white">{user.userId || user.id}</div>
      </td>
      <td className="py-3 px-4 text-gray-400">{user.totalSessions || 0}</td>
      <td className="py-3 px-4 text-gray-400">{user.totalQuizzes || 0}</td>
      <td className="py-3 px-4 text-gray-400">{user.totalScore || 0}</td>
      <td className="py-3 px-4 text-gray-400">{formatTimestamp(user.lastActive)}</td>
    </tr>
  );

  const EventItem = ({ event }) => (
    <div className="flex items-center justify-between py-2 px-3 hover:bg-gray-900/50 rounded">
      <div className="flex-1">
        <span className="text-sm font-medium text-white">{event.buttonName}</span>
        <span className="text-xs text-gray-500 ml-2">{event.context}</span>
      </div>
      <div className="text-xs text-gray-400">
        {formatTimestamp(event.timestamp)}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white">Loading analytics...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            Back to App
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800 px-6">
        <div className="flex space-x-6">
          {['overview', 'users', 'events'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-1 border-b-2 transition-colors capitalize ${
                activeTab === tab 
                  ? 'border-blue-500 text-blue-500' 
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard 
                title="Total Users" 
                value={stats.totalUsers}
                color="blue"
              />
              <MetricCard 
                title="Active Today" 
                value={stats.todayActive}
                subtitle="Unique users"
                color="green"
              />
              <MetricCard 
                title="Today's Sessions" 
                value={stats.totalSessions}
                color="purple"
              />
              <MetricCard 
                title="Avg Session Time" 
                value={formatDuration(stats.avgSessionTime)}
                color="amber"
              />
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-1">
                {recentEvents.slice(0, 10).map(event => (
                  <EventItem key={event.id} event={event} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-800">
              <h2 className="text-lg font-semibold">All Users</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-950">
                  <tr>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">User ID</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Sessions</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Quizzes</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Score</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Last Active</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <UserRow key={user.id} user={user} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="bg-gray-900 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">All Events</h2>
            <div className="space-y-1 max-h-[600px] overflow-y-auto">
              {recentEvents.map(event => (
                <EventItem key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* User Detail Modal */}
      {selectedUser && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedUser(null)}
        >
          <div 
            className="bg-gray-900 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4">User Details</h3>
            <div className="space-y-3">
              <div><span className="text-gray-400">User ID:</span> <span className="text-white">{selectedUser.userId || selectedUser.id}</span></div>
              <div><span className="text-gray-400">Total Sessions:</span> <span className="text-white">{selectedUser.totalSessions || 0}</span></div>
              <div><span className="text-gray-400">Total Quizzes:</span> <span className="text-white">{selectedUser.totalQuizzes || 0}</span></div>
              <div><span className="text-gray-400">Total Score:</span> <span className="text-white">{selectedUser.totalScore || 0}</span></div>
              <div><span className="text-gray-400">Joined:</span> <span className="text-white">{formatTimestamp(selectedUser.joinedDate)}</span></div>
              <div><span className="text-gray-400">Last Active:</span> <span className="text-white">{formatTimestamp(selectedUser.lastActive)}</span></div>
            </div>
            <button
              onClick={() => setSelectedUser(null)}
              className="mt-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}