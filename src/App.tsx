import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Dashboard from './pages/Dashboard'
import CareerRoadmap from './pages/CareerRoadmap'
import Courses from './pages/Courses'
import Projects from './pages/Projects'
import DSA from './pages/DSA'
import Internships from './pages/Internships'
import Opportunities from './pages/Opportunities'
import AIBuddy from './pages/AIBuddy'
import Mentors from './pages/Mentors'
import Hackathons from './pages/Hackathons'
import Resources from './pages/Resources'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Onboarding from './pages/Onboarding'
import Admin from './pages/Admin'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/*" element={
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/roadmap" element={<CareerRoadmap />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/dsa" element={<DSA />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/ai-buddy" element={<AIBuddy />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Layout>
      } />
    </Routes>
  )
}
