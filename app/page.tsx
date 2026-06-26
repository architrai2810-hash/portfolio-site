import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SectionWrapper from '@/components/SectionWrapper'
import WorkIndexRow from '@/components/WorkIndexRow'
import StatBlock from '@/components/StatBlock'
import { caseStudies } from '@/lib/case-studies'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />

      {/* Hero */}
      <SectionWrapper className="pt-28 sm:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="eyebrow">Product / UI-UX Designer</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold leading-tight">
              I design clear, usable interfaces for complex products.
            </h1>
            <p className="text-lg text-muted max-w-prose leading-relaxed">
              I'm a product designer focused on UI/UX, completing my B.Des in Product Experience Design at the National Institute of Fashion Technology.
            </p>
            <div className="flex gap-4 pt-4">
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
            </div>
          </div>

          {/* Hero visual placeholder */}
          <div className="relative aspect-square lg:aspect-auto lg:h-96 rounded-lg overflow-hidden border border-line bg-paper">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted">Hero visual</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Trust strip */}
      <SectionWrapper className="py-8">
        <div className="space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
          <div className="text-sm text-muted">
            Recently interned in UI/UX at <span className="font-semibold">Actin Technologies, Pune</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Figma',
              'Illustrator',
              'Photoshop',
              'InDesign',
              'Blender',
            ].map((tool) => (
              <span key={tool} className="text-xs font-mono text-muted">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Selected work */}
      <SectionWrapper id="work">
        <div className="space-y-8">
          <h2 className="font-display text-3xl font-semibold">Selected Work</h2>
          <div className="space-y-1">
            {caseStudies.map((study, idx) => (
              <WorkIndexRow key={study.slug} study={study} index={idx} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Outcome stats */}
      {caseStudies.length > 0 && (
        <SectionWrapper className="bg-surface border-y border-line">
          <StatBlock
            stats={caseStudies[0].outcome.stats}
            title="What testing showed"
          />
        </SectionWrapper>
      )}

      {/* About teaser */}
      <SectionWrapper>
        <div className="max-w-prose space-y-6">
          <h2 className="font-display text-3xl font-semibold">About</h2>
          <div className="space-y-4 text-lg text-muted leading-relaxed">
            <p>
              I'm early-career, hungry to solve real problems, and I care about how things feel to use. My focus is UI/UX and product design, sharpened by an earlier path through drafting, CAD, and visual design.
            </p>
            <p>
              At the National Institute of Fashion Technology, I learned to think like a researcher before a designer. I completed a UI/UX design internship at Actin Technologies, designing fintech dashboards end to end, from user interviews to prototypes that users actually test.
            </p>
            <p>
              I'm drawn to problems in fintech, real estate, and tools. I work in Figma, and I'm comfortable in Illustrator, Photoshop, Blender, and Fusion360.
            </p>
            <div className="pt-4">
              <a href="/about" className="btn-text">
                More about me
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Closing CTA */}
      <SectionWrapper className="bg-surface border-y border-line">
        <div className="space-y-8">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold max-w-prose">
            Open to UI-UX and Product Designer roles.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:architrai2810@gmail.com" className="btn-primary">
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/archit-rai/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  )
}
