import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SectionWrapper from '@/components/SectionWrapper'
import PersonaCard from '@/components/PersonaCard'
import JourneyMap from '@/components/JourneyMap'
import FlowSequence from '@/components/FlowSequence'
import StatBlock from '@/components/StatBlock'
import { getCaseStudyBySlug, getAllCaseStudySlugs, caseStudies } from '@/lib/case-studies'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)

  if (!study) {
    return {}
  }

  return {
    title: `${study.title} - Archit Rai`,
    description: study.subtitle,
  }
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({
    slug,
  }))
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)

  if (!study) {
    notFound()
  }

  const currentIndex = caseStudies.findIndex((s) => s.slug === slug)
  const nextStudy = caseStudies[currentIndex + 1]

  return (
    <div className="min-h-screen bg-paper">
      <Nav />

      {/* Back link */}
      <SectionWrapper className="pt-24 sm:pt-28 pb-0">
        <Link href="/#work" className="btn-text text-sm inline-flex items-center gap-2">
          <span aria-hidden="true">&larr;</span> Back to all work
        </Link>
      </SectionWrapper>

      {/* Header */}
      <SectionWrapper className="space-y-8 pt-8">
        <div className="space-y-4">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold">{study.title}</h1>
          <p className="text-xl text-muted max-w-prose">{study.subtitle}</p>
        </div>

        {/* Meta row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-line">
          <div>
            <div className="font-mono text-xs font-semibold text-muted uppercase tracking-wider mb-2">
              Role
            </div>
            <p className="text-base">{study.facts.role}</p>
          </div>
          <div>
            <div className="font-mono text-xs font-semibold text-muted uppercase tracking-wider mb-2">
              Timeline
            </div>
            <p className="text-base">{study.facts.timeline}</p>
          </div>
          <div>
            <div className="font-mono text-xs font-semibold text-muted uppercase tracking-wider mb-2">
              Approach
            </div>
            <p className="text-base text-sm">{study.facts.approach}</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Hero image */}
      {study.hero && (
        <SectionWrapper className="pt-0">
          <div className="relative w-full rounded-lg overflow-hidden border border-line bg-surface">
            <Image
              src={study.hero}
              alt={study.title}
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
              quality={95}
            />
          </div>
        </SectionWrapper>
      )}

      {/* Landscape */}
      <SectionWrapper className="pt-0">
        <div className="max-w-prose space-y-4">
          <h2 className="font-display text-2xl font-semibold">The Landscape</h2>
          <p className="text-lg leading-relaxed text-muted">{study.landscape}</p>
        </div>
      </SectionWrapper>

      {/* Problem */}
      <SectionWrapper className="bg-surface border-y border-line">
        <div className="max-w-prose space-y-4">
          <h2 className="font-display text-2xl font-semibold">The Problem</h2>
          <p className="text-lg font-semibold leading-relaxed text-accent">{study.problem}</p>
        </div>
      </SectionWrapper>

      {/* Persona */}
      <SectionWrapper>
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-semibold">Persona</h2>
          <PersonaCard persona={study.persona} />
        </div>
      </SectionWrapper>

      {/* Journey map */}
      <SectionWrapper className="pt-0">
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-semibold">User Journey Map</h2>
          <JourneyMap journey={study.journey} />
        </div>
      </SectionWrapper>

      {/* Insights */}
      <SectionWrapper className="bg-surface border-y border-line">
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-semibold">Insights</h2>
          <div className="space-y-4">
            {study.insights.map((insight, idx) => (
              <div key={idx} className="space-y-2">
                <div className="font-semibold text-base">{insight.title}</div>
                <p className="text-muted leading-relaxed">{insight.body}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Flow sequence */}
      <SectionWrapper>
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-semibold">User Flow And Solution</h2>
          <FlowSequence flow={study.flow} screenOrientation={study.screenOrientation} />
        </div>
      </SectionWrapper>

      {/* Prototype */}
      {study.prototype?.figmaUrl && (
        <SectionWrapper className="bg-black">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-white">Prototype</h2>
              <a
                href={study.prototype.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Open in Figma
              </a>
            </div>
            {/* Device frame: iPhone for mobile, MacBook for desktop */}
            {study.screenOrientation === 'desktop' ? (
              <div className="relative mx-auto" style={{ maxWidth: '950px' }}>
                {/* Lid: aluminum edge + black bezel, narrower than the base so the base reads as wider */}
                <div className="relative mx-auto" style={{ width: '93%' }}>
                  {/* Aluminum edge frame, visibly thicker than the black bezel inside it */}
                  <div className="relative rounded-2xl p-1.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
                    {/* Black bezel */}
                    <div className="relative rounded-xl bg-black p-3">
                      {/* Camera notch */}
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-zinc-800 ring-1 ring-white/10 z-10" />
                      {/* Content area */}
                      <div className="relative w-full rounded-sm overflow-hidden bg-black" style={{ aspectRatio: '1440/1024' }}>
                        <iframe
                          src={`${study.prototype.figmaUrl.replace('www.figma.com/proto', 'embed.figma.com/proto')}&embed-host=share&hide-ui=1&hotspot-hints=0&scaling=scale-down-width`}
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Hinge */}
                <div className="mx-auto h-2 bg-gradient-to-b from-zinc-700 to-zinc-600" style={{ width: '93%' }} />
                {/* MacBook base / keyboard deck: thicker and wider than the screen */}
                <div className="relative h-9 rounded-b-[1.25rem] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 shadow-[0_12px_30px_rgba(0,0,0,0.3)]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-1.5 rounded-b bg-gray-400/70" />
                </div>
              </div>
            ) : (
              <div className="relative mx-auto" style={{ maxWidth: '320px' }}>
                {/* iPhone 16 device frame, matching Figma's Present mode */}
                <div className="relative rounded-[2.75rem] p-2 border-2 border-white/70 bg-black shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                  {/* Screen */}
                  <div className="relative w-full aspect-[9/19.5] rounded-[2.25rem] overflow-hidden bg-black">
                    <iframe
                      src={`${study.prototype.figmaUrl.replace('www.figma.com/proto', 'embed.figma.com/proto')}&embed-host=share&hide-ui=1&hotspot-hints=0&scaling=scale-down-width`}
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
                    {/* Home indicator */}
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/60 rounded-full z-10" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </SectionWrapper>
      )}

      {/* Outcome */}
      <SectionWrapper>
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-semibold">Outcome</h2>
          <p className="text-base text-muted max-w-prose leading-relaxed">{study.outcome.summary}</p>
          <StatBlock stats={study.outcome.stats} />
        </div>
      </SectionWrapper>

      {/* Learnings */}
      <SectionWrapper className="bg-surface border-y border-line">
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-semibold">Learnings</h2>
          <ol className="space-y-4">
            {study.learnings.map((learning, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="font-mono font-semibold text-accent flex-shrink-0">
                  {idx + 1}.
                </span>
                <span className="text-base text-muted leading-relaxed">{learning}</span>
              </li>
            ))}
          </ol>
        </div>
      </SectionWrapper>

      {/* Footer CTA */}
      <SectionWrapper className="py-12">
        <div className="flex flex-col items-center justify-center gap-4">
          {nextStudy ? (
            <Link href={`/work/${nextStudy.slug}`} className="btn-primary inline-flex items-center gap-2">
              Next project: {nextStudy.title} <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : (
            <Link href="/#work" className="btn-primary inline-flex items-center gap-2">
              <span aria-hidden="true">&larr;</span> Back to all work
            </Link>
          )}
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  )
}
