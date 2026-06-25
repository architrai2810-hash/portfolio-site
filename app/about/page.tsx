import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SectionWrapper from '@/components/SectionWrapper'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About - Archit Rai',
  description: 'Product designer, NIFT Bhopal 2026, working on SaaS dashboards at Actin Technologies.',
}

export default function AboutPage() {
  const tools = [
    'Figma',
    'Illustrator',
    'Photoshop',
    'InDesign',
    'Premiere Pro',
    'Fusion360',
    'AutoCAD',
    'Blender',
  ]

  return (
    <div className="min-h-screen bg-paper">
      <Nav />

      {/* Back link */}
      <SectionWrapper className="pt-24 sm:pt-28 pb-0">
        <Link href="/" className="btn-text text-sm">
          Back to home
        </Link>
      </SectionWrapper>

      {/* Header */}
      <SectionWrapper className="space-y-8 pt-8">
        <h1 className="font-display text-4xl sm:text-5xl font-semibold">About</h1>
        <p className="text-xl text-muted max-w-prose">
          I'm a product designer focused on building clear, usable interfaces for complex products.
        </p>
      </SectionWrapper>

      {/* Main content */}
      <SectionWrapper>
        <div className="max-w-prose space-y-8 text-lg leading-relaxed text-muted">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">The background</h2>
            <p>
              I graduated from NIFT Bhopal in 2026 with a B.Des in Product Experience Design. The program taught me to think like a researcher before a designer. Before the degree, I spent time with CAD and 3D modeling, which taught me to think spatially and solve for constraints.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">Right now</h2>
            <p>
              I'm interning at Actin Technologies in Pune, working on SaaS dashboard products end to end. I've been interviewing users, building personas, mapping their journeys, sketching flows, and designing high-fidelity interfaces in Figma. I've also run alpha tests and watched people actually use what I designed, which is the part that sticks with me.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">What I care about</h2>
            <p>
              I'm drawn to problems that feel like puzzles: how do you make the complex feel simple. I love fintech and SaaS because they sit at that edge. A good dashboard doesn't need to be beautiful, it needs to answer the question your user came with, in the time it takes to glance. I'm skeptical of cleverness for its own sake. I believe in asking hard questions before I design, and I believe in testing with real users.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">Tools</h2>
            <p>
              I design in Figma and prototype there too. I'm comfortable in Illustrator and Photoshop for visual design, and InDesign for layouts. For motion, I use Premiere Pro. For 3D and product design work, I use Fusion360, AutoCAD, and Blender.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">What's next</h2>
            <p>
              I'm open to UI-UX and Product Designer roles, ideally where I can do end-to-end design: research, flows, high-fidelity UI, and work with developers who care about quality. I'm most interested in fintech, real estate tech, and tools.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Tools section */}
      <SectionWrapper className="bg-surface border-y border-line">
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-semibold">Tools</h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <div
                key={tool}
                className="px-4 py-2 bg-paper rounded border border-line text-sm font-mono text-muted"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact section */}
      <SectionWrapper id="contact" className="space-y-8">
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-semibold">Let's talk</h2>
          <p className="text-base text-muted max-w-prose">
            If you're hiring, interested in my work, or want to chat about design, feel free to reach out. I read every message.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:architrai2810@gmail.com" className="btn-primary">
              architrai2810@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/archit-rai/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn
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
      </SectionWrapper>

      <Footer />
    </div>
  )
}
