import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SectionWrapper from '@/components/SectionWrapper'
import WorkIndexRow from '@/components/WorkIndexRow'
import TypographicHero from '@/components/TypographicHero'
import { caseStudies } from '@/lib/case-studies'

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />

      {/* Hero */}
      <SectionWrapper className="pt-28 sm:pt-32 pb-0">
        <TypographicHero />
      </SectionWrapper>

      {/* Trust strip */}
      <SectionWrapper className="py-8">
        <div className="space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
          <div className="text-sm text-muted">
            Recently interned in UX/UI at <span className="font-semibold">Actin Technologies, Pune</span>
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

      {/* Featured work */}
      <SectionWrapper id="work">
        <div className="space-y-8">
          <h2 className="font-display text-3xl font-semibold">Featured Work</h2>
          <div className="space-y-1">
            {caseStudies.map((study, idx) => (
              <WorkIndexRow key={study.slug} study={study} index={idx} />
            ))}
          </div>
        </div>
      </SectionWrapper>


      {/* About teaser */}
      <SectionWrapper>
        <div className="max-w-prose space-y-6">
          <h2 className="font-display text-3xl font-semibold">About</h2>
          <div className="space-y-4 text-lg text-muted leading-relaxed">
            <p>
              I'm early-career, hungry to solve real problems, and I care about how things feel to use. My focus is UX/UI and product design: research-led flows, clean visual systems, and interfaces that hold up under real use.
            </p>
            <p>
              At the National Institute of Fashion Technology, I learned to think like a researcher before a designer. I completed a UX/UI design internship at Actin Technologies, designing SaaS dashboards end to end, from user interviews to working prototypes.
            </p>
            <p>
              I'm drawn to real problems wherever they show up. I work in Figma, and I'm comfortable in Illustrator, Photoshop, Blender, and Fusion360.
            </p>
            <div className="pt-4">
              <a href="/about" className="btn-text inline-flex items-center gap-2">
                More About Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Closing CTA */}
      <SectionWrapper className="bg-surface border-y border-line">
        <div className="space-y-8">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold max-w-prose">
            Open to UX/UI and Product Designer roles.
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
