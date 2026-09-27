import { useState } from 'react'
import { Search, Bell, Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import clsx from 'clsx'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [searchFocused, setSearchFocused] = useState(false)
  const [showNotifs, setShowNotifs] = useState(false)

  const notifications = [
    { id: 1, text: 'New course recommendation: Advanced React Patterns', time: '2m ago', unread: true },
    { id: 2, text: 'Your mentor session starts in 30 minutes', time: '28m ago', unread: true },
    { id: 3, text: 'You earned the "Fast Learner" badge!', time: '1h ago', unread: false },
    { id: 4, text: 'New internship match: Frontend Dev at Razorpay', time: '3h ago', unread: false },
  ]

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/90 dark:bg-surface-900/90 backdrop-blur-md border-b border-surface-200 dark:border-surface-700 flex items-center justify-between px-6">
      <div className={clsx('relative flex items-center transition-all duration-300', searchFocused ? 'w-96' : 'w-72')}>
        <Search className="absolute left-3 w-4 h-4 text-surface-400" />
        <input
          type="text"
          placeholder="Search courses, mentors, jobs..."
          className="input-field pl-10 py-2 text-sm"
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />
      </div>

      <div className="flex items-center gap-2">
        <button onClick={toggleTheme} className="p-2 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-500 transition-colors" aria-label="Toggle theme">
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <div className="relative">
          <button onClick={() => setShowNotifs(!showNotifs)} className="relative p-2 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-500 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
          </button>
          {showNotifs && (
            <div className="absolute right-0 top-full mt-2 w-80 card p-0 shadow-soft-lg animate-slide-up">
              <div className="p-4 border-b border-surface-100 dark:border-surface-700 flex justify-between items-center">
                <h3 className="font-semibold text-sm">Notifications</h3>
                <button className="text-xs text-primary-600 font-medium">Mark all read</button>
              </div>
              <div className="max-h-72 overflow-y-auto">
                {notifications.map(n => (
                  <div key={n.id} className={clsx('px-4 py-3 border-b border-surface-50 dark:border-surface-800 hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-colors cursor-pointer', n.unread && 'bg-primary-50/40 dark:bg-primary-900/10')}>
                    <p className="text-sm text-surface-700 dark:text-surface-300">{n.text}</p>
                    <p className="text-xs text-surface-400 mt-1">{n.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 ml-2 pl-3 border-l border-surface-200 dark:border-surface-700">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-surface-800 dark:text-surface-200">Deepesh S.</p>
            <p className="text-xs text-surface-400">B.Tech CS &bull; 3rd Year</p>
          </div>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:shadow-md transition-shadow">DS</div>
        </div>
      </div>
    </header>
  )
}
