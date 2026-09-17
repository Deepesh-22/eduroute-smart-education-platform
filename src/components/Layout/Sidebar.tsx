import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, Map, BookOpen, Briefcase, Bot, Users,
  Trophy, Award, User, Settings, ChevronLeft, ChevronRight,
  GraduationCap, Sparkles, LogOut, Calendar
} from 'lucide-react'
import clsx from 'clsx'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { label: 'Career Roadmap', icon: Map, path: '/roadmap' },
  { label: 'Courses', icon: BookOpen, path: '/courses' },
  { label: 'Internships & Jobs', icon: Briefcase, path: '/internships' },
  { label: 'AI Buddy', icon: Bot, path: '/ai-buddy', accent: true },
  { label: 'Mentors', icon: Users, path: '/mentors' },
  { label: 'Hackathons & Events', icon: Calendar, path: '/hackathons' },
  { label: 'Leaderboard', icon: Trophy, path: '/leaderboard' },
  { label: 'Profile', icon: User, path: '/profile' },
  { label: 'Settings', icon: Settings, path: '/settings' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  return (
    <aside
      className={clsx(
        'fixed left-0 top-0 h-screen bg-white dark:bg-surface-900 border-r border-surface-200 dark:border-surface-700 flex flex-col transition-all duration-300 z-40',
        collapsed ? 'w-[72px]' : 'w-64'
      )}
    >
      {/* Brand */}
      <div className="flex items-center gap-3 px-4 h-16 border-b border-surface-100 dark:border-surface-800">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center flex-shrink-0">
          <GraduationCap className="w-5 h-5 text-white" />
        </div>
        {!collapsed && (
          <div className="animate-fade-in">
            <h1 className="text-base font-bold font-display gradient-text">EduRoute</h1>
            <p className="text-[10px] text-surface-400 font-medium -mt-0.5">Smart Career Platform</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative',
                isActive
                  ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                  : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-200',
                item.accent && !isActive && 'text-accent-600 dark:text-accent-400'
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-primary-600 rounded-r-full" />
              )}
              <item.icon className={clsx(
                'w-5 h-5 flex-shrink-0 transition-colors',
                isActive ? 'text-primary-600 dark:text-primary-400' : '',
                item.accent && !isActive ? 'text-accent-500' : ''
              )} />
              {!collapsed && (
                <span className="animate-fade-in truncate">{item.label}</span>
              )}
              {!collapsed && item.accent && (
                <Sparkles className="w-3.5 h-3.5 text-accent-400 ml-auto animate-pulse-soft" />
              )}
            </NavLink>
          )
        })}
      </nav>

      {/* Collapse toggle */}
      <div className="px-3 py-3 border-t border-surface-100 dark:border-surface-800">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-surface-400 hover:text-surface-600 dark:hover:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-800 transition-all duration-200 text-sm"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <><ChevronLeft className="w-4 h-4" /><span>Collapse</span></>}
        </button>
      </div>
    </aside>
  )
}
