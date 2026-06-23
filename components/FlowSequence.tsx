import Image from 'next/image'
import type { CaseStudyFlow } from '@/lib/types'

interface FlowSequenceProps {
  flow: CaseStudyFlow
}

export default function FlowSequence({ flow }: FlowSequenceProps) {
  const { note, steps } = flow

  return (
    <div className="space-y-8">
      {/* Note */}
      <div className="bg-paper rounded-lg border border-line p-6">
        <p className="text-sm text-muted italic">{note}</p>
      </div>

      {/* Flow Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div key={step.n} className="space-y-4">
            {/* Step number and name */}
            <div className="space-y-2">
              <div className="font-mono text-2xl font-bold text-accent">{String(step.n).padStart(2, '0')}</div>
              <h4 className="font-display text-lg font-semibold">{step.name}</h4>
              {step.stage && (
                <div className="text-xs font-mono text-muted uppercase tracking-wider">{step.stage}</div>
              )}
            </div>

            {/* Image placeholder */}
            <div className="relative bg-paper rounded-lg border border-line aspect-[9/19.5] overflow-hidden">
              {step.image ? (
                <Image
                  src={step.image}
                  alt={step.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-xs text-muted">Screen {step.n}</span>
                </div>
              )}
            </div>

            {/* Decision and Why */}
            <div className="space-y-3 text-sm">
              <div>
                <div className="font-mono text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                  Key Decision
                </div>
                <p className="leading-relaxed">{step.keyDecision}</p>
              </div>
              <div>
                <div className="font-mono text-xs font-semibold text-muted uppercase tracking-wider mb-2">Why</div>
                <p className="leading-relaxed text-muted">{step.why}</p>
              </div>
            </div>

            {/* Connector arrow for non-last items */}
            {idx < steps.length - 1 && (
              <div className="text-center py-4 hidden sm:block lg:hidden">
                <div className="text-2xl text-muted">↓</div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Connection visual on larger screens */}
      <div className="hidden lg:block relative h-16 my-8">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <line x1="12.5%" y1="0" x2="12.5%" y2="100%" stroke="#E3E6EB" strokeWidth="2" />
          <line x1="37.5%" y1="0" x2="37.5%" y2="100%" stroke="#E3E6EB" strokeWidth="2" />
          <line x1="62.5%" y1="0" x2="62.5%" y2="100%" stroke="#E3E6EB" strokeWidth="2" />
          <line x1="87.5%" y1="0" x2="87.5%" y2="100%" stroke="#E3E6EB" strokeWidth="2" />
        </svg>
      </div>
    </div>
  )
}
