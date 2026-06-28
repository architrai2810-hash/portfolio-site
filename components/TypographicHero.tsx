'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function TypographicHero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [])

  const headlineVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.07,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
  }

  const accentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.35,
        ease: 'easeOut',
      },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  }

  return (
    <div className="relative">
      {/* Faint structural grid backdrop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-4"
          preserveAspectRatio="none"
          viewBox="0 0 1200 600"
        >
          <defs>
            <mask id="grid-mask">
              <rect width="1200" height="600" fill="white" />
              <radialGradient id="fade" cx="50%" cy="30%">
                <stop offset="0%" stopColor="black" stopOpacity="1" />
                <stop offset="100%" stopColor="black" stopOpacity="0" />
              </radialGradient>
              <rect width="1200" height="600" fill="url(#fade)" />
            </mask>
          </defs>
          {/* Vertical column guides */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
            <line
              key={`v-${i}`}
              x1={i * 100 + 100}
              y1="0"
              x2={i * 100 + 100}
              y2="600"
              stroke="currentColor"
              strokeWidth="1"
              className="text-line"
              mask="url(#grid-mask)"
            />
          ))}
          {/* Baseline grid */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 50 + 50}
              x2="1200"
              y2={i * 50 + 50}
              stroke="currentColor"
              strokeWidth="1"
              className="text-line"
              opacity="0.5"
              mask="url(#grid-mask)"
            />
          ))}
        </svg>
      </div>

      {/* Grid fade animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={prefersReducedMotion ? { opacity: 0.04 } : { opacity: 0 }}
        animate={prefersReducedMotion ? { opacity: 0.04 } : { opacity: 0.04 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      />

      {/* Content */}
      <motion.div
        className="relative space-y-6"
        initial={prefersReducedMotion ? 'visible' : 'hidden'}
        animate="visible"
        variants={prefersReducedMotion ? {} : containerVariants}
      >
        {/* Eyebrow */}
        <motion.div
          className="eyebrow"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
          transition={
            prefersReducedMotion
              ? {}
              : { duration: 0.4, delay: 0.05, ease: 'easeOut' }
          }
        >
          Product / UX/UI Designer
        </motion.div>

        {/* Headline */}
        <h1 className="font-display font-semibold leading-[1.04] tracking-tight">
          <style>{`
            h1 {
              font-size: clamp(2.75rem, 7vw, 5.75rem);
              max-width: 90%;
            }
            @media (max-width: 640px) {
              h1 {
                max-width: 100%;
              }
            }
          `}</style>
          {['I design ', 'clear, usable', ' interfaces for ', 'complex products.'].map(
            (segment, i) => (
              <motion.span
                key={i}
                custom={i + 1}
                variants={headlineVariants}
                initial={prefersReducedMotion ? 'visible' : 'hidden'}
                animate={prefersReducedMotion ? 'visible' : 'visible'}
              >
                {segment === 'clear, usable' ? (
                  <motion.span
                    className="text-accent"
                    variants={accentVariants}
                    initial={prefersReducedMotion ? { opacity: 1 } : 'hidden'}
                    animate={prefersReducedMotion ? { opacity: 1 } : 'visible'}
                  >
                    {segment}
                  </motion.span>
                ) : (
                  segment
                )}
              </motion.span>
            ),
          )}
        </h1>

        {/* Support line */}
        <motion.p
          className="text-lg text-muted max-w-prose leading-relaxed"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
          transition={
            prefersReducedMotion ? {} : { duration: 0.4, delay: 0.4, ease: 'easeOut' }
          }
        >
          I'm a product designer focused on UX/UI, with a B.Des in Product Experience
          Design from the National Institute of Fashion Technology.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex gap-4 pt-4"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
          transition={
            prefersReducedMotion ? {} : { duration: 0.4, delay: 0.45, ease: 'easeOut' }
          }
        >
          <a href="#work" className="btn-primary">
            View work
          </a>
          <a
            href="https://behance.net/architrai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Behance
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}
