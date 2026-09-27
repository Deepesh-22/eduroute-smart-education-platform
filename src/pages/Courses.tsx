import { useState } from 'react'
import { Search, Filter, Star, Clock, Users, BookOpen, ChevronDown, ExternalLink, Play } from 'lucide-react'
import clsx from 'clsx'

const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'Data Science', 'Mobile', 'System Design']
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced']

const courses = [
  { id: 1, title: 'Advanced React & Next.js Masterclass', provider: 'Udemy', instructor: 'Maximilian S.', duration: '28 hrs', rating: 4.8, enrolled: '12.4k', level: 'Advanced', category: 'Frontend', progress: 65, status: 'In Progress', image: '🔵' },
  { id: 2, title: 'Node.js, Express & MongoDB Bootcamp', provider: 'Coursera', instructor: 'Jonas S.', duration: '42 hrs', rating: 4.9, enrolled: '18.7k', level: 'Intermediate', category: 'Backend', progress: 100, status: 'Completed', image: '🟢' },
  { id: 3, title: 'System Design for Interviews', provider: 'educative.io', instructor: 'Alex Xu', duration: '20 hrs', rating: 4.7, enrolled: '8.2k', level: 'Advanced', category: 'System Design', progress: 0, status: 'Not Started', image: '🟣' },
  { id: 4, title: 'Docker & Kubernetes: Complete Guide', provider: 'Udemy', instructor: 'Stephen G.', duration: '22 hrs', rating: 4.6, enrolled: '15.3k', level: 'Intermediate', category: 'DevOps', progress: 30, status: 'In Progress', image: '🟠' },
  { id: 5, title: 'Python for Data Science & ML', provider: 'Coursera', instructor: 'Andrew Ng', duration: '55 hrs', rating: 4.9, enrolled: '42.1k', level: 'Beginner', category: 'Data Science', progress: 0, status: 'Recommended', image: '🟡' },
  { id: 6, title: 'React Native — Mobile Development', provider: 'Udemy', instructor: 'William C.', duration: '35 hrs', rating: 4.5, enrolled: '9.8k', level: 'Intermediate', category: 'Mobile', progress: 0, status: 'Not Started', image: '🟤' },
]

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = courses.filter(c =>
    (activeCategory === 'All' || c.category === activeCategory) &&
    (c.title.toLowerCase().includes(search.toLowerCase()) || c.provider.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold font-display text-surface-800 dark:text-surface-100">Courses</h1>
        <p className="text-sm text-surface-500 mt-1">Curated courses aligned with your career roadmap</p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
          <input
            type="text" placeholder="Search courses by title or provider..."
            className="input-field pl-10" value={search} onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={clsx('px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all',
                activeCategory === cat
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 hover:bg-surface-200 dark:hover:bg-surface-700'
              )}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Total Enrolled', value: '18', icon: BookOpen },
          { label: 'Completed', value: '12', icon: Star },
          { label: 'In Progress', value: '4', icon: Play },
          { label: 'Hours Learned', value: '286', icon: Clock },
        ].map(s => (
          <div key={s.label} className="card p-3 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/30">
              <s.icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-surface-800 dark:text-surface-200">{s.value}</p>
              <p className="text-xs text-surface-500">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map(course => (
          <div key={course.id} className="card card-hover p-5 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-surface-100 dark:bg-surface-700 flex items-center justify-center text-lg">
                {course.image}
              </div>
              <span className={clsx('badge text-[10px]', {
                'badge-success': course.status === 'Completed',
                'badge-primary': course.status === 'In Progress',
                'badge-accent': course.status === 'Recommended',
                'bg-surface-100 dark:bg-surface-700 text-surface-500': course.status === 'Not Started',
              })}>
                {course.status}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-surface-800 dark:text-surface-200 mb-1 line-clamp-2">{course.title}</h3>
            <p className="text-xs text-surface-500 mb-3">{course.provider} &bull; {course.instructor}</p>
            <div className="flex items-center gap-3 text-xs text-surface-500 mb-3">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
              <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-400 fill-amber-400" />{course.rating}</span>
              <span className="flex items-center gap-1"><Users className="w-3 h-3" />{course.enrolled}</span>
            </div>
            {course.progress > 0 && course.progress < 100 && (
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-surface-500">Progress</span>
                  <span className="font-semibold text-primary-600">{course.progress}%</span>
                </div>
                <div className="progress-bar"><div className="progress-bar-fill" style={{ width: `${course.progress}%` }} /></div>
              </div>
            )}
            <div className="mt-auto flex items-center gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-surface-100 dark:bg-surface-700 text-surface-500 font-medium">{course.level}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-surface-100 dark:bg-surface-700 text-surface-500 font-medium">{course.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
