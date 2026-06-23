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
      <SectionWrapper className="pt-32 sm:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="eyebrow">Product / UI-UX Designer</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold leading-tight">
              I design clear, usable interfaces for complex products.
            </h1>
            <p className="text-lg text-muted max-w-prose leading-relaxed">
              I'm a product designer working on SaaS dashboards at Actin Technologies, Pune. I graduated from NIFT Bhopal in 2026 with a B.Des in Product Experience Design.
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
            Currently designing SaaS dashboards at <span className="font-semibold">Actin Technologies, Pune</span>
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
          <h2 className="font-display text-3xl font-semibold">Selected work</h2>
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
          <p className="text-xs text-muted mt-8 italic">
            Note: Replace brackets [X of Y] and [N] with real numbers from your alpha testing, or reword as "informal feedback from [N] users".
          </p>
        </SectionWrapper>
      )}

      {/* About teaser */}
      <SectionWrapper>
        <div className="max-w-prose space-y-6">
          <h2 className="font-display text-3xl font-semibold">About</h2>
          <div className="space-y-4 text-lg text-muted leading-relaxed">
            <p>
              I'm early-career, hungry to solve real problems, and I care about how things feel to use. I started with drafting and CAD, moved into product design, and discovered I love the moment when clarity clicks and a complex interface becomes intuitive.
            </p>
            <p>
              At NIFT Bhopal I learned to think like a researcher before a designer. At Actin Technologies I've been designing fintech dashboards end to end, from user interviews to prototypes that users actually test.
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
              href="https://linkedin.com/in/architrai"
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
