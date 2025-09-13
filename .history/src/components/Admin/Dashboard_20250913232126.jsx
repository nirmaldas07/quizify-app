// src/components/Admin/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalSessions: 0,
    totalEvents: 0
  });

  useEffect(() => {
    fetchBasicStats();
  }, []);

  const fetchBasicStats = async () => {
    try {
      // Get user stats
      const usersSnapshot = await getDocs(collection(db, 'user_stats'));
      const totalUsers = usersSnapshot.size;

      // Get sessions
      const sessionsSnapshot = await getDocs(collection(db, 'sessions'));
      const totalSessions = sessionsSnapshot.size;

      // Get events
      const eventsSnapshot = await getDocs(collection(db, 'events'));
      const totalEvents = eventsSnapshot.size;

      setStats({
        totalUsers,
        totalSessions,
        totalEvents
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-900 p-6 rounded-lg">
          <h2 className="text-xl">Total Users</h2>
          <p className="text-3xl font-bold">{stats.totalUsers}</p>
        </div>
        
        <div className="bg-green-900 p-6 rounded-lg">
          <h2 className="text-xl">Total Sessions</h2>
          <p className="text-3xl font-bold">{stats.totalSessions}</p>
        </div>
        
        <div className="bg-purple-900 p-6 rounded-lg">
          <h2 className="text-xl">Total Events</h2>
          <p className="text-3xl font-bold">{stats.totalEvents}</p>
        </div>
      </div>

      <button
        onClick={() => navigate('/')}
        className="mt-6 px-4 py-2 bg-gray-800 rounded"
      >
        Back to App
      </button>
    </div>
  );
}