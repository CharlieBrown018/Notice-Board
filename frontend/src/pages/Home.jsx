import WelcomeNote from '../components/home/WelcomeNote';
import StatsCard from '../components/home/StatsCard';
import { useEffect, useState } from 'react';
import api from '../services/api';

const Home = () => {
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      const tasks = await api.getTasks();
      setStats({
        total: tasks.length,
        completed: tasks.filter(t => t.status === 'DONE').length,
        pending: tasks.filter(t => t.status !== 'DONE').length
      });
    };
    fetchStats();
  }, []);

  return (
    <div className="p-8">
      <WelcomeNote />

      <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
        <StatsCard title="Total Tasks" value={stats.total} />
        <StatsCard title="Completed" value={stats.completed} />
        <StatsCard title="Pending" value={stats.pending} />
      </div>
    </div>
  );
};

export default Home;