'use client'

import Link from 'next/link'
import type { CaseStudy } from '@/lib/types'
import { useState } from 'react'

interface WorkIndexRowProps {
  study: CaseStudy
  index: number
}

export default function WorkIndexRow({ study, index }: WorkIndexRowProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/work/${study.slug}`}>
      <div
        className="group border-b border-line py-8 transition-all duration-300 hover:bg-paper cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="container-wide grid grid-cols-12 gap-4 items-center">
          {/* Number */}
          <div className="col-span-2 sm:col-span-1">
            <div className="font-mono text-lg font-semibold text-muted group-hover:text-accent transition-colors">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>

          {/* Title and format tag */}
          <div className="col-span-10 sm:col-span-5">
            <div className="flex items-center gap-3">
              <h3 className="text-lg sm:text-xl font-display font-semibold group-hover:text-accent transition-colors">
                {study.title}
              </h3>
              <span className="inline-block px-2 py-1 text-xs font-mono font-semibold text-accent bg-accent/10 rounded">
                {study.format === 'showcase' ? 'Visual Showcase' : 'Case Study'}
              </span>
            </div>
          </div>

          {/* Meta */}
          <div className="col-span-12 sm:col-span-3 text-xs font-mono text-muted">
            <div>{study.facts.role}</div>
            <div>{study.facts.timeline}</div>
          </div>

          {/* Description */}
          <div className="col-span-12 sm:col-span-3 text-sm text-muted line-clamp-2">
            {study.description ?? study.outcome.summary.split('.')[0]}
          </div>
        </div>
      </div>
    </Link>
  )
}
