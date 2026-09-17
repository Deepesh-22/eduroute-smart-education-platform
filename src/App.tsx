import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Dashboard from './pages/Dashboard'
import CareerRoadmap from './pages/CareerRoadmap'
import Courses from './pages/Courses'
import Internships from './pages/Internships'
import AIBuddy from './pages/AIBuddy'
import Mentors from './pages/Mentors'
import Hackathons from './pages/Hackathons'
import Leaderboard from './pages/Leaderboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Login from './pages/Login'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/roadmap" element={<CareerRoadmap />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/ai-buddy" element={<AIBuddy />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      } />
    </Routes>
  )
}
