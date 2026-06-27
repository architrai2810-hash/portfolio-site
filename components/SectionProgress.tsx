'use client'

import { useEffect, useState } from 'react'

interface SectionProgressProps {
  sectionCount: number
}

export default function SectionProgress({ sectionCount }: SectionProgressProps) {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections with data-section attribute
      const sections = document.querySelectorAll('[data-section]')
      let current = 0

      sections.forEach((section, index) => {
        const element = section as HTMLElement
        const rect = element.getBoundingClientRect()

        // If section is more than 25% into the viewport
        if (rect.top < window.innerHeight * 0.75) {
          current = index
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
      {Array.from({ length: sectionCount }).map((_, index) => (
        <div
          key={index}
          className={`transition-all duration-300 h-1 bg-accent ${
            index === activeSection ? 'w-8' : 'w-4'
          } ${index <= activeSection ? 'opacity-100' : 'opacity-40'}`}
        />
      ))}
    </div>
  )
}
