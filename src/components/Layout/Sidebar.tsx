import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, Map, BookOpen, Briefcase, Bot, Users,
  Trophy, User, Settings, ChevronLeft, ChevronRight,
  GraduationCap, Sparkles, Calendar, FolderKanban, Code2, Library
} from 'lucide-react'
import clsx from 'clsx'

const navSections = [
  {
    title: 'Main',
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, path: '/' },
      { label: 'Career Roadmap', icon: Map, path: '/roadmap' },
    ]
  },
  {
    title: 'Learn',
    items: [
      { label: 'Courses', icon: BookOpen, path: '/courses' },
      { label: 'Projects', icon: FolderKanban, path: '/projects' },
      { label: 'DSA Practice', icon: Code2, path: '/dsa' },
      { label: 'Resources', icon: Library, path: '/resources' },
    ]
  },
  {
    title: 'Career',
    items: [
      { label: 'Internships & Jobs', icon: Briefcase, path: '/internships' },
      { label: 'Opportunities', icon: Trophy, path: '/opportunities' },
      { label: 'Hackathons', icon: Calendar, path: '/hackathons' },
    ]
  },
  {
    title: 'Connect',
    items: [
      { label: 'AI Buddy', icon: Bot, path: '/ai-buddy', accent: true },
      { label: 'Mentors', icon: Users, path: '/mentors' },
    ]
  },
  {
    title: 'Account',
    items: [
      { label: 'Profile', icon: User, path: '/profile' },
      { label: 'Settings', icon: Settings, path: '/settings' },
    ]
  },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  return (
    <aside
      className={clsx(
        'fixed left-0 top-0 h-screen bg-white dark:bg-surface-900 border-r border-surface-200 dark:border-surface-700 flex flex-col transition-all duration-300 z-40',
        collapsed ? 'w-[72px]' : 'w-[252px]'
      )}
    >
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

      <nav className="flex-1 px-3 py-3 overflow-y-auto space-y-4">
        {navSections.map((section) => (
          <div key={section.title}>
            {!collapsed && (
              <p className="px-3 mb-1.5 text-[11px] font-semibold text-surface-400 dark:text-surface-500 uppercase tracking-wider">
                {section.title}
              </p>
            )}
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={clsx(
                      'flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 group relative',
                      isActive
                        ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                        : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-200',
                      item.accent && !isActive && 'text-accent-600 dark:text-accent-400'
                    )}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-primary-600 rounded-r-full" />
                    )}
                    <item.icon className={clsx(
                      'w-[18px] h-[18px] flex-shrink-0',
                      isActive ? 'text-primary-600 dark:text-primary-400' : '',
                      item.accent && !isActive ? 'text-accent-500' : ''
                    )} />
                    {!collapsed && <span className="truncate">{item.label}</span>}
                    {!collapsed && item.accent && (
                      <Sparkles className="w-3 h-3 text-accent-400 ml-auto" />
                    )}
                  </NavLink>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="px-3 py-3 border-t border-surface-100 dark:border-surface-800">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-surface-400 hover:text-surface-600 dark:hover:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-800 transition-all duration-200 text-sm"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <><ChevronLeft className="w-4 h-4" /><span className="text-xs">Collapse</span></>}
        </button>
      </div>
    </aside>
  )
}
