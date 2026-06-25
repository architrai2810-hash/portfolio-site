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
      <SectionWrapper className="pt-24 sm:pt-32">
        <Link href="/#work" className="btn-text text-sm">
          Back to all work
        </Link>
      </SectionWrapper>

      {/* Header */}
      <SectionWrapper className="space-y-8">
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
        <SectionWrapper>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-line bg-surface">
            <Image
              src={study.hero}
              alt={study.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </SectionWrapper>
      )}

      {/* Landscape */}
      <SectionWrapper>
        <div className="max-w-prose space-y-4">
          <h2 className="font-display text-2xl font-semibold">The landscape</h2>
          <p className="text-lg leading-relaxed text-muted">{study.landscape}</p>
        </div>
      </SectionWrapper>

      {/* Problem */}
      <SectionWrapper className="bg-surface border-y border-line">
        <div className="max-w-prose space-y-4">
          <h2 className="font-display text-2xl font-semibold">The problem</h2>
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
      <SectionWrapper>
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-semibold">User journey map</h2>
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
          <h2 className="font-display text-2xl font-semibold">User flow and solution</h2>
          <FlowSequence flow={study.flow} />
        </div>
      </SectionWrapper>

      {/* Prototype */}
      {study.prototype && (
        <SectionWrapper className="bg-surface border-y border-line">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-semibold">Prototype</h2>
              {study.prototype.figmaUrl && (
                <a
                  href={study.prototype.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  View the interactive Figma prototype
                </a>
              )}
            </div>
            {study.prototype.gif && (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-line bg-paper">
                <Image
                  src={study.prototype.gif}
                  alt="Prototype GIF"
                  fill
                  className="object-cover"
                />
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
          <p className="text-xs text-muted italic max-w-prose pt-4">
            Replace brackets [X of Y] and [N] with real numbers from your alpha testing, or reword as "informal feedback from [N] users".
          </p>
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
            <Link href={`/work/${nextStudy.slug}`} className="btn-primary">
              Next project: {nextStudy.title}
            </Link>
          ) : (
            <Link href="/#work" className="btn-primary">
              Back to all work
            </Link>
          )}
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  )
}
