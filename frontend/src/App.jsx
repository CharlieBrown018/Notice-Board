import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import BulletinBoard from './components/layout/BulletinBoard';
import Home from './pages/Home';
import Tasks from './pages/Tasks';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[--color-cork]">
        <Navbar />
        <BulletinBoard>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </BulletinBoard>
      </div>
    </Router>
  );
}

export default App;