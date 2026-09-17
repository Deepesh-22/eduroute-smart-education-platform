import { useState } from 'react'
import { Search, Bell, Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import clsx from 'clsx'

interface HeaderProps {
  sidebarCollapsed?: boolean
}

export default function Header({ sidebarCollapsed }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()
  const [searchFocused, setSearchFocused] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  const notifications = [
    { id: 1, text: 'New course recommendation: Advanced React Patterns', time: '2m ago', unread: true },
    { id: 2, text: 'Your mentor session is in 30 minutes', time: '28m ago', unread: true },
    { id: 3, text: 'Congrats! You earned the "Fast Learner" badge', time: '1h ago', unread: false },
    { id: 4, text: 'New internship match: Frontend Developer at Razorpay', time: '3h ago', unread: false },
  ]

  const unreadCount = notifications.filter(n => n.unread).length

  return (
    <header
      className={clsx(
        'sticky top-0 z-30 h-16 bg-white/80 dark:bg-surface-900/80 backdrop-blur-xl border-b border-surface-200 dark:border-surface-700 flex items-center justify-between px-6 transition-all duration-300',
        sidebarCollapsed ? 'ml-[72px]' : 'ml-64'
      )}
    >
      {/* Search */}
      <div className={clsx(
        'relative flex items-center transition-all duration-300',
        searchFocused ? 'w-96' : 'w-72'
      )}>
        <Search className="absolute left-3 w-4 h-4 text-surface-400" />
        <input
          type="text"
          placeholder="Search courses, mentors, jobs..."
          className="w-full pl-10 pr-4 py-2 bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-xl text-sm placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all duration-200"
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />
        <kbd className="absolute right-3 hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-surface-200 dark:bg-surface-700 rounded text-[10px] font-medium text-surface-400">
          ⌘K
        </kbd>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        {/* Dark mode toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-500 dark:text-surface-400 transition-all duration-200"
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-500 dark:text-surface-400 transition-all duration-200"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-80 card p-0 shadow-soft-lg animate-slide-up">
              <div className="p-4 border-b border-surface-100 dark:border-surface-700">
                <h3 className="font-semibold text-sm">Notifications</h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map(n => (
                  <div key={n.id} className={clsx(
                    'px-4 py-3 border-b border-surface-50 dark:border-surface-800 hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-colors cursor-pointer',
                    n.unread && 'bg-primary-50/50 dark:bg-primary-900/10'
                  )}>
                    <p className="text-sm text-surface-700 dark:text-surface-300">{n.text}</p>
                    <p className="text-xs text-surface-400 mt-1">{n.time}</p>
                  </div>
                ))}
              </div>
              <div className="p-3 text-center">
                <button className="text-sm text-primary-600 dark:text-primary-400 font-medium hover:underline">View all notifications</button>
              </div>
            </div>
          )}
        </div>

        {/* User avatar */}
        <div className="flex items-center gap-3 ml-2 pl-3 border-l border-surface-200 dark:border-surface-700">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-surface-800 dark:text-surface-200">Deepesh S.</p>
            <p className="text-xs text-surface-400">B.Tech CS • 3rd Year</p>
          </div>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
            DS
          </div>
        </div>
      </div>
    </header>
  )
}
