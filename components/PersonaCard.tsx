import type { CaseStudyPersona } from '@/lib/types'

interface PersonaCardProps {
  persona: CaseStudyPersona
}

export default function PersonaCard({ persona }: PersonaCardProps) {
  return (
    <div className="bg-surface rounded-lg border border-line p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="font-display text-2xl font-semibold mb-2">{persona.name}</div>
        <div className="text-sm text-muted font-mono">
          {persona.age} · {persona.role} · {persona.location}
        </div>
      </div>

      {/* Quote */}
      <blockquote className="mb-8 border-l-4 border-accent pl-4 italic text-lg text-muted">
        "{persona.quote}"
      </blockquote>

      {/* Three Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Goals */}
        <div>
          <div className="font-mono text-xs font-semibold text-muted uppercase tracking-wider mb-4">Goals</div>
          <ul className="space-y-2">
            {persona.goals.map((goal, idx) => (
              <li key={idx} className="text-sm text-ink leading-relaxed">
                · {goal}
              </li>
            ))}
          </ul>
        </div>

        {/* Frustrations */}
        <div>
          <div className="font-mono text-xs font-semibold text-muted uppercase tracking-wider mb-4">
            Frustrations
          </div>
          <ul className="space-y-2">
            {persona.frustrations.map((frustration, idx) => (
              <li key={idx} className="text-sm text-ink leading-relaxed">
                · {frustration}
              </li>
            ))}
          </ul>
        </div>

        {/* Behaviour */}
        <div>
          <div className="font-mono text-xs font-semibold text-muted uppercase tracking-wider mb-4">Behaviour</div>
          <ul className="space-y-2">
            {persona.behaviour.map((behaviour, idx) => (
              <li key={idx} className="text-sm text-ink leading-relaxed">
                · {behaviour}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
