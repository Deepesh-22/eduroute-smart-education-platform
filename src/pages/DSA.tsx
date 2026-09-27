import { useState } from 'react'
import { Code2, CheckCircle2, Circle, ChevronRight, Trophy, Flame, Target, BarChart3 } from 'lucide-react'
import clsx from 'clsx'

const topics = [
  { name: 'Arrays & Strings', total: 40, solved: 32, easy: 15, medium: 12, hard: 5 },
  { name: 'Linked Lists', total: 20, solved: 14, easy: 8, medium: 4, hard: 2 },
  { name: 'Trees & Graphs', total: 35, solved: 18, easy: 10, medium: 5, hard: 3 },
  { name: 'Dynamic Programming', total: 30, solved: 8, easy: 5, medium: 2, hard: 1 },
  { name: 'Sorting & Searching', total: 25, solved: 20, easy: 12, medium: 6, hard: 2 },
  { name: 'Stack & Queue', total: 18, solved: 15, easy: 10, medium: 4, hard: 1 },
  { name: 'Recursion & Backtracking', total: 22, solved: 10, easy: 6, medium: 3, hard: 1 },
  { name: 'Bit Manipulation', total: 12, solved: 6, easy: 4, medium: 2, hard: 0 },
]

const recentProblems = [
  { title: 'Two Sum', difficulty: 'Easy', status: 'Solved', time: '12 min' },
  { title: 'LRU Cache', difficulty: 'Medium', status: 'Solved', time: '35 min' },
  { title: 'Merge K Sorted Lists', difficulty: 'Hard', status: 'Attempted', time: '45 min' },
  { title: 'Valid Parentheses', difficulty: 'Easy', status: 'Solved', time: '8 min' },
  { title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', status: 'Solved', time: '20 min' },
]

export default function DSA() {
  const totalSolved = topics.reduce((s, t) => s + t.solved, 0)
  const totalProblems = topics.reduce((s, t) => s + t.total, 0)

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold font-display text-surface-800 dark:text-surface-100">DSA Practice</h1>
        <p className="text-sm text-surface-500 mt-1">Master data structures and algorithms for technical interviews</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Problems Solved', value: totalSolved, total: totalProblems, icon: Target, color: 'text-primary-600 bg-primary-50 dark:bg-primary-900/30' },
          { label: 'Day Streak', value: '15', icon: Flame, color: 'text-orange-600 bg-orange-50 dark:bg-orange-900/30' },
          { label: 'Contest Rating', value: '1420', icon: Trophy, color: 'text-amber-600 bg-amber-50 dark:bg-amber-900/30' },
          { label: 'Acceptance Rate', value: '78%', icon: BarChart3, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30' },
        ].map(s => (
          <div key={s.label} className="card p-4">
            <div className={`p-2 rounded-xl ${s.color} w-fit mb-2`}>
              <s.icon className="w-4 h-4" />
            </div>
            <p className="text-2xl font-bold text-surface-800 dark:text-surface-200">
              {s.value}{s.total ? <span className="text-sm font-normal text-surface-400">/{s.total}</span> : ''}
            </p>
            <p className="text-xs text-surface-500 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Topics */}
        <div className="lg:col-span-2 space-y-3">
          <h2 className="text-lg font-semibold font-display text-surface-800 dark:text-surface-200">Topics</h2>
          {topics.map(topic => (
            <div key={topic.name} className="card card-hover p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-surface-800 dark:text-surface-200">{topic.name}</h3>
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">{topic.solved}/{topic.total}</span>
              </div>
              <div className="progress-bar mb-2">
                <div className="progress-bar-fill" style={{ width: `${(topic.solved / topic.total) * 100}%` }} />
              </div>
              <div className="flex gap-3 text-xs">
                <span className="text-emerald-600">Easy: {topic.easy}</span>
                <span className="text-amber-600">Medium: {topic.medium}</span>
                <span className="text-red-500">Hard: {topic.hard}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-lg font-semibold font-display text-surface-800 dark:text-surface-200 mb-3">Recent Problems</h2>
          <div className="space-y-2">
            {recentProblems.map((p, i) => (
              <div key={i} className="card p-3 flex items-center gap-3">
                {p.status === 'Solved' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                ) : (
                  <Circle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-surface-800 dark:text-surface-200 truncate">{p.title}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className={clsx('text-[10px] font-medium', {
                      'text-emerald-600': p.difficulty === 'Easy',
                      'text-amber-600': p.difficulty === 'Medium',
                      'text-red-500': p.difficulty === 'Hard',
                    })}>{p.difficulty}</span>
                    <span className="text-[10px] text-surface-400">{p.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
