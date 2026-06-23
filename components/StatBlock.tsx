import type { CaseStudyStat } from '@/lib/types'

interface StatBlockProps {
  stats: CaseStudyStat[]
  title?: string
}

export default function StatBlock({ stats, title }: StatBlockProps) {
  return (
    <div className="space-y-6">
      {title && (
        <h3 className="font-display text-2xl font-semibold">{title}</h3>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="space-y-3">
            <div className="font-mono text-4xl font-bold text-accent">{stat.value}</div>
            <p className="text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
