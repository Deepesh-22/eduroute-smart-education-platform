import { useState } from 'react'
import { FolderKanban, ExternalLink, Github, Star, Clock, CheckCircle2, Circle, ArrowRight } from 'lucide-react'
import clsx from 'clsx'

const filters = ['All', 'Completed', 'In Progress', 'Planned']

const projects = [
  { id: 1, title: 'Portfolio Website', desc: 'Personal portfolio with blog, project showcase, and contact form built with Next.js and Tailwind CSS.', tech: ['Next.js', 'Tailwind', 'MDX'], difficulty: 'Beginner', status: 'Completed', stars: 12, link: '#' },
  { id: 2, title: 'E-Commerce REST API', desc: 'Full-featured REST API with authentication, product management, cart, orders, and payment integration.', tech: ['Node.js', 'Express', 'MongoDB', 'Stripe'], difficulty: 'Intermediate', status: 'Completed', stars: 8, link: '#' },
  { id: 3, title: 'Real-Time Chat Application', desc: 'WebSocket-based chat app with rooms, typing indicators, message history, and file sharing.', tech: ['React', 'Socket.io', 'Redis', 'PostgreSQL'], difficulty: 'Intermediate', status: 'In Progress', progress: 60, link: '#' },
  { id: 4, title: 'DevOps CI/CD Pipeline', desc: 'Automated build, test, and deployment pipeline with Docker containers and Kubernetes orchestration.', tech: ['Docker', 'K8s', 'GitHub Actions', 'AWS'], difficulty: 'Advanced', status: 'Planned', link: '#' },
  { id: 5, title: 'AI-Powered Study Planner', desc: 'Smart study planner that uses AI to generate personalized study schedules based on learning goals.', tech: ['React', 'Python', 'FastAPI', 'OpenAI'], difficulty: 'Advanced', status: 'Planned', link: '#' },
  { id: 6, title: 'Task Management Dashboard', desc: 'Kanban-style project management tool with drag-and-drop, team collaboration, and analytics.', tech: ['React', 'TypeScript', 'Prisma', 'PostgreSQL'], difficulty: 'Intermediate', status: 'Completed', stars: 15, link: '#' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered = projects.filter(p => activeFilter === 'All' || p.status === activeFilter)

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-display text-surface-800 dark:text-surface-100">Projects</h1>
          <p className="text-sm text-surface-500 mt-1">Build real-world projects to strengthen your portfolio</p>
        </div>
        <button className="btn-primary text-sm"><FolderKanban className="w-4 h-4" /> New Project</button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {filters.map(f => (
          <button key={f} onClick={() => setActiveFilter(f)}
            className={clsx('px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all',
              activeFilter === f ? 'bg-primary-600 text-white' : 'bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 hover:bg-surface-200 dark:hover:bg-surface-700'
            )}>{f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map(project => (
          <div key={project.id} className="card card-hover p-5 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <span className={clsx('badge text-[10px]', {
                'badge-success': project.status === 'Completed',
                'badge-primary': project.status === 'In Progress',
                'bg-surface-100 dark:bg-surface-700 text-surface-500': project.status === 'Planned',
              })}>{project.status}</span>
              <span className={clsx('text-[10px] px-2 py-0.5 rounded-md font-medium', {
                'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600': project.difficulty === 'Beginner',
                'bg-amber-50 dark:bg-amber-900/30 text-amber-600': project.difficulty === 'Intermediate',
                'bg-red-50 dark:bg-red-900/30 text-red-600': project.difficulty === 'Advanced',
              })}>{project.difficulty}</span>
            </div>
            <h3 className="text-sm font-semibold text-surface-800 dark:text-surface-200 mb-1">{project.title}</h3>
            <p className="text-xs text-surface-500 mb-3 line-clamp-2">{project.desc}</p>

            {project.progress !== undefined && (
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-surface-500">Progress</span>
                  <span className="font-semibold text-primary-600">{project.progress}%</span>
                </div>
                <div className="progress-bar"><div className="progress-bar-fill" style={{ width: `${project.progress}%` }} /></div>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tech.map(t => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-medium">{t}</span>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between">
              {project.stars !== undefined && (
                <span className="flex items-center gap-1 text-xs text-surface-500"><Star className="w-3 h-3 text-amber-400 fill-amber-400" />{project.stars}</span>
              )}
              <button className="text-xs font-medium text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1">
                {project.status === 'Completed' ? 'View' : project.status === 'In Progress' ? 'Continue' : 'Start'} <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
