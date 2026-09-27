import {
  Target, TrendingUp, BookOpen, Briefcase, Bot, Award,
  Calendar, ArrowRight, Clock, Star, Zap, ChevronRight,
  BarChart3, Users, CheckCircle2, Flame
} from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { label: 'Courses Completed', value: '12', change: '+3 this month', icon: BookOpen, color: 'text-primary-600 bg-primary-50 dark:bg-primary-900/30 dark:text-primary-400' },
  { label: 'Skills Acquired', value: '24', change: '+5 this month', icon: Zap, color: 'text-accent-600 bg-accent-50 dark:bg-accent-900/30 dark:text-accent-400' },
  { label: 'Projects Built', value: '6', change: '+1 this week', icon: BarChart3, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-400' },
  { label: 'Day Streak', value: '15', change: 'Keep it up!', icon: Flame, color: 'text-orange-600 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-400' },
]

const recommendedCourses = [
  { title: 'Advanced React & Next.js', provider: 'Udemy', duration: '28 hrs', rating: 4.8, enrolled: '12.4k', tag: 'Trending', image: '🔵' },
  { title: 'System Design Fundamentals', provider: 'Coursera', duration: '20 hrs', rating: 4.7, enrolled: '8.2k', tag: 'Recommended', image: '🟣' },
  { title: 'Data Structures in Java', provider: 'GeeksforGeeks', duration: '35 hrs', rating: 4.6, enrolled: '22.1k', tag: 'Popular', image: '🟢' },
]

const upcomingEvents = [
  { title: 'Google Summer of Code Info Session', date: 'Oct 5, 2026', type: 'Webinar', status: 'Registered' },
  { title: 'HackIndia 2026 — National Hackathon', date: 'Oct 12-14', type: 'Hackathon', status: 'Apply Now' },
  { title: 'Resume Building Workshop', date: 'Oct 8', type: 'Workshop', status: 'Open' },
]

const recentAchievements = [
  { title: 'Fast Learner', desc: 'Completed 5 courses in one month', icon: '🏅' },
  { title: 'Code Warrior', desc: 'Solved 50 DSA problems', icon: '⚔️' },
  { title: 'Team Player', desc: 'Joined 3 hackathon teams', icon: '🤝' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="card p-6 bg-gradient-to-r from-primary-600 to-accent-600 text-white border-0 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/20" />
          <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white/10" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-primary-100 text-sm font-medium">Good morning,</p>
            <h1 className="text-2xl font-bold font-display mt-1">Welcome back, Deepesh! 👋</h1>
            <p className="text-primary-100 mt-2 text-sm max-w-lg">
              You're on a 15-day streak! Your roadmap to Full-Stack Developer is 42% complete. Keep going!
            </p>
          </div>
          <Link to="/ai-buddy" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 hover:bg-white/30 text-white font-medium rounded-xl transition-all backdrop-blur-sm border border-white/20">
            <Bot className="w-4 h-4" /> Ask AI Buddy
          </Link>
        </div>
      </div>

      {/* Career Goal + Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="card p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary-50 dark:bg-primary-900/30">
                <Target className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h2 className="font-semibold text-surface-800 dark:text-surface-200">Career Goal</h2>
                <p className="text-sm text-surface-500">Full-Stack Developer</p>
              </div>
            </div>
            <Link to="/roadmap" className="btn-ghost text-sm text-primary-600">
              View Roadmap <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-surface-600 dark:text-surface-400">Overall Progress</span>
              <span className="font-semibold text-primary-600">42%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: '42%' }} />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { label: 'Frontend', progress: 68, color: 'from-blue-500 to-cyan-400' },
                { label: 'Backend', progress: 35, color: 'from-purple-500 to-pink-400' },
                { label: 'DevOps', progress: 15, color: 'from-orange-500 to-amber-400' },
              ].map(skill => (
                <div key={skill.label} className="text-center">
                  <p className="text-xs font-medium text-surface-500 mb-1.5">{skill.label}</p>
                  <div className="progress-bar h-1.5">
                    <div className={`h-full bg-gradient-to-r ${skill.color} rounded-full`} style={{ width: `${skill.progress}%` }} />
                  </div>
                  <p className="text-xs font-semibold text-surface-700 dark:text-surface-300 mt-1">{skill.progress}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick AI Buddy */}
        <div className="card p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-xl bg-accent-50 dark:bg-accent-900/30">
                <Bot className="w-5 h-5 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="font-semibold text-surface-800 dark:text-surface-200">AI Buddy</h3>
            </div>
            <p className="text-sm text-surface-500 mb-4">Get instant help with career advice, course selection, or interview prep.</p>
            <div className="space-y-2">
              {['What should I learn next?', 'Help me with my resume', 'Suggest internships'].map(q => (
                <button key={q} className="w-full text-left text-sm px-3 py-2 rounded-lg bg-surface-50 dark:bg-surface-800 hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-600 dark:text-surface-400 transition-colors">
                  {q}
                </button>
              ))}
            </div>
          </div>
          <Link to="/ai-buddy" className="btn-primary mt-4 text-sm w-full justify-center">
            Open AI Buddy <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className="card card-hover p-4">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-xl ${s.color}`}>
                <s.icon className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-bold text-surface-800 dark:text-surface-100">{s.value}</p>
            <p className="text-sm text-surface-500 mt-0.5">{s.label}</p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">{s.change}</p>
          </div>
        ))}
      </div>

      {/* Recommended Courses + Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Courses */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold font-display text-surface-800 dark:text-surface-200">Recommended Courses</h2>
            <Link to="/courses" className="text-sm text-primary-600 font-medium hover:underline">View all</Link>
          </div>
          <div className="space-y-3">
            {recommendedCourses.map(course => (
              <div key={course.title} className="card card-hover p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-100 dark:bg-surface-700 flex items-center justify-center text-xl">
                  {course.image}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-surface-800 dark:text-surface-200 truncate">{course.title}</h3>
                  <p className="text-xs text-surface-500 mt-0.5">{course.provider} &bull; {course.duration}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-xs font-medium text-surface-600 dark:text-surface-400">{course.rating}</span>
                    <span className="text-xs text-surface-400">{course.enrolled} enrolled</span>
                  </div>
                </div>
                <span className="badge-primary text-[10px]">{course.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Events */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold font-display text-surface-800 dark:text-surface-200">Upcoming Events</h2>
            <Link to="/hackathons" className="text-sm text-primary-600 font-medium hover:underline">View all</Link>
          </div>
          <div className="space-y-3">
            {upcomingEvents.map(event => (
              <div key={event.title} className="card card-hover p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-surface-800 dark:text-surface-200">{event.title}</h3>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="flex items-center gap-1 text-xs text-surface-500">
                        <Calendar className="w-3 h-3" /> {event.date}
                      </span>
                      <span className="badge-accent text-[10px]">{event.type}</span>
                    </div>
                  </div>
                  <button className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                    event.status === 'Registered'
                      ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                      : 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 hover:bg-primary-100'
                  }`}>
                    {event.status}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold font-display text-surface-800 dark:text-surface-200">Recent Achievements</h2>
          <Link to="/profile" className="text-sm text-primary-600 font-medium hover:underline">View all</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {recentAchievements.map(a => (
            <div key={a.title} className="card card-hover p-4 text-center">
              <div className="text-3xl mb-2">{a.icon}</div>
              <h3 className="text-sm font-semibold text-surface-800 dark:text-surface-200">{a.title}</h3>
              <p className="text-xs text-surface-500 mt-1">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
