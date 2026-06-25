'use client'

import type { CaseStudyJourney } from '@/lib/types'

interface JourneyMapProps {
  journey: CaseStudyJourney
}

export default function JourneyMap({ journey }: JourneyMapProps) {
  const { stages, takeaway } = journey
  const maxEmotion = Math.max(...stages.map((s) => s.emotion))
  const minEmotion = Math.min(...stages.map((s) => s.emotion))
  const emotionRange = maxEmotion - minEmotion

  // Generate SVG path for emotion curve
  const emotionPoints = stages.map((stage, idx) => {
    const x = (idx / (stages.length - 1)) * 100
    const y = 100 - ((stage.emotion - minEmotion) / emotionRange) * 80
    return `${x},${y}`
  })
  const pathD = `M ${emotionPoints.join(' L ')}`

  const rows = [
    { label: 'Doing', key: 'doing' as const },
    { label: 'Feeling', key: 'feeling' as const },
    { label: 'Pain', key: 'pain' as const },
    { label: 'Gap', key: 'gap' as const },
    { label: 'Opportunity', key: 'opportunity' as const },
  ]

  return (
    <div className="space-y-8">
      {/* Emotion Curve Chart */}
      <div className="bg-surface rounded-lg border border-line overflow-x-auto">
        <svg viewBox="0 0 100 130" className="w-full h-96 min-w-max" style={{ display: 'block', padding: '2rem' }}>
          {/* Grid */}
          <defs>
            <linearGradient id="emotionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2E5BFF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#2E5BFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Emotion curve fill */}
          <path
            d={`${pathD} L 100,100 L 0,100 Z`}
            fill="url(#emotionGradient)"
          />

          {/* Emotion curve line */}
          <path
            d={pathD}
            stroke="#2E5BFF"
            strokeWidth="2"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />

          {/* Stage markers */}
          {stages.map((stage, idx) => {
            const x = (idx / (stages.length - 1)) * 100
            const y = 100 - ((stage.emotion - minEmotion) / emotionRange) * 80
            return (
              <g key={idx}>
                <circle cx={x} cy={y} r="1.5" fill="#2E5BFF" vectorEffect="non-scaling-stroke" />
                <text
                  x={x}
                  y="115"
                  textAnchor="middle"
                  fontSize="3"
                  fill="#5A6270"
                  vectorEffect="non-scaling-stroke"
                >
                  {stage.name}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      {/* Journey Table */}
      <div className="space-y-4">
        {rows.map((row) => (
          <div key={row.key} className="bg-surface rounded-lg border border-line overflow-hidden">
            {/* Row label */}
            <div className="px-6 py-3 bg-paper border-b border-line">
              <div className="font-mono text-xs font-semibold text-muted uppercase tracking-wider">
                {row.label}
              </div>
            </div>

            {/* Stage columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              {stages.map((stage, idx) => (
                <div
                  key={idx}
                  className={`px-6 py-4 text-sm ${
                    idx < stages.length - 1 ? 'border-b sm:border-b-0 lg:border-b-0 sm:border-r' : ''
                  } border-line`}
                >
                  <p className="leading-relaxed">{stage[row.key]}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Takeaway */}
      <div className="bg-paper rounded-lg border border-line p-8">
        <p className="text-base leading-relaxed text-ink">{takeaway}</p>
      </div>
    </div>
  )
}
