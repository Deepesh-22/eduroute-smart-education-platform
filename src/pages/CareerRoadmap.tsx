import { Target, BookOpen, Code2, FolderKanban, Briefcase, Award, Building2, CheckCircle2, Circle, ArrowDown, ChevronRight } from 'lucide-react'
import clsx from 'clsx'

const roadmapSteps = [
  {
    id: 1, title: 'Career Goal', subtitle: 'Full-Stack Developer', icon: Target,
    status: 'completed' as const,
    details: 'Target: Full-Stack Developer at a top-tier product company',
    items: ['Frontend Development', 'Backend Development', 'DevOps & Deployment']
  },
  {
    id: 2, title: 'Core Skills', subtitle: '18 of 24 skills acquired', icon: Code2,
    status: 'in-progress' as const, progress: 75,
    details: 'Building foundational and advanced technical skills',
    items: ['HTML/CSS/JS ✓', 'React.js ✓', 'Node.js ✓', 'TypeScript — In Progress', 'PostgreSQL — Up Next', 'Docker — Up Next']
  },
  {
    id: 3, title: 'Courses & Learning', subtitle: '12 of 20 courses done', icon: BookOpen,
    status: 'in-progress' as const, progress: 60,
    details: 'Structured courses from top platforms',
    items: ['Advanced React & Next.js — In Progress', 'System Design Fundamentals — Up Next', 'Node.js Masterclass ✓']
  },
  {
    id: 4, title: 'Projects', subtitle: '6 of 10 projects built', icon: FolderKanban,
    status: 'in-progress' as const, progress: 60,
    details: 'Real-world projects that demonstrate your skills',
    items: ['Portfolio Website ✓', 'E-commerce API ✓', 'Chat Application — In Progress', 'DevOps Pipeline — Planned']
  },
  {
    id: 5, title: 'Internships', subtitle: '1 of 2 completed', icon: Briefcase,
    status: 'in-progress' as const, progress: 50,
    details: 'Gain industry experience through internships',
    items: ['Frontend Intern at TechStartup ✓ (3 months)', 'Full-Stack Intern — Seeking (Summer 2027)']
  },
  {
    id: 6, title: 'Certifications', subtitle: '2 of 4 earned', icon: Award,
    status: 'in-progress' as const, progress: 50,
    details: 'Industry-recognized certifications',
    items: ['AWS Cloud Practitioner ✓', 'Meta React Developer ✓', 'Google Cloud Associate — Planned', 'MongoDB Developer — Planned']
  },
  {
    id: 7, title: 'Job Ready', subtitle: 'Target: June 2027', icon: Building2,
    status: 'upcoming' as const,
    details: 'Full-time position at a product company',
    items: ['Resume & Portfolio prepared', 'Mock interviews completed', 'Job applications submitted', 'Offer accepted']
  },
]

function getStatusStyles(status: 'completed' | 'in-progress' | 'upcoming') {
  switch (status) {
    case 'completed': return { bg: 'bg-emerald-50 dark:bg-emerald-900/20', border: 'border-emerald-200 dark:border-emerald-800', icon: 'text-emerald-600 dark:text-emerald-400', line: 'bg-emerald-400' }
    case 'in-progress': return { bg: 'bg-primary-50 dark:bg-primary-900/20', border: 'border-primary-200 dark:border-primary-800', icon: 'text-primary-600 dark:text-primary-400', line: 'bg-primary-400' }
    case 'upcoming': return { bg: 'bg-surface-50 dark:bg-surface-800', border: 'border-surface-200 dark:border-surface-700', icon: 'text-surface-400', line: 'bg-surface-300 dark:bg-surface-600' }
  }
}

export default function CareerRoadmap() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-display text-surface-800 dark:text-surface-100">Career Roadmap</h1>
          <p className="text-sm text-surface-500 mt-1">Your personalized path to becoming a Full-Stack Developer</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold text-surface-800 dark:text-surface-200">42% Complete</p>
            <p className="text-xs text-surface-400">Estimated: June 2027</p>
          </div>
          <div className="w-12 h-12 rounded-full border-[3px] border-primary-500 flex items-center justify-center">
            <span className="text-sm font-bold text-primary-600 dark:text-primary-400">42%</span>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="relative">
        {roadmapSteps.map((step, index) => {
          const styles = getStatusStyles(step.status)
          const isLast = index === roadmapSteps.length - 1

          return (
            <div key={step.id} className="relative flex gap-6 pb-8">
              {/* Vertical line */}
              {!isLast && (
                <div className="absolute left-6 top-14 bottom-0 w-0.5">
                  <div className={clsx('w-full h-full', styles.line)} />
                </div>
              )}

              {/* Step icon */}
              <div className={clsx(
                'relative z-10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border-2 transition-all',
                styles.bg, styles.border
              )}>
                {step.status === 'completed' ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                ) : (
                  <step.icon className={clsx('w-5 h-5', styles.icon)} />
                )}
              </div>

              {/* Step card */}
              <div className={clsx('flex-1 card p-5 border', styles.border)}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-surface-800 dark:text-surface-200">{step.title}</h3>
                      <span className={clsx('badge text-[10px]', {
                        'badge-success': step.status === 'completed',
                        'badge-primary': step.status === 'in-progress',
                        'bg-surface-100 dark:bg-surface-700 text-surface-500': step.status === 'upcoming',
                      })}>
                        {step.status === 'completed' ? 'Completed' : step.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                      </span>
                    </div>
                    <p className="text-sm text-surface-500 mt-0.5">{step.subtitle}</p>
                  </div>
                  {step.progress !== undefined && (
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">{step.progress}%</span>
                  )}
                </div>

                <p className="text-sm text-surface-500 mb-3">{step.details}</p>

                {step.progress !== undefined && (
                  <div className="progress-bar mb-3">
                    <div className="progress-bar-fill" style={{ width: `${step.progress}%` }} />
                  </div>
                )}

                <div className="space-y-1.5">
                  {step.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      {item.includes('✓') ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      ) : (
                        <Circle className="w-3.5 h-3.5 text-surface-300 dark:text-surface-600 flex-shrink-0" />
                      )}
                      <span className={clsx(
                        item.includes('✓') ? 'text-surface-500 line-through' : 'text-surface-700 dark:text-surface-300'
                      )}>
                        {item.replace(' ✓', '')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
