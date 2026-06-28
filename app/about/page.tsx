import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SectionWrapper from '@/components/SectionWrapper'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About - Archit Rai',
  description: 'UX/UI and product designer completing a B.Des at the National Institute of Fashion Technology.',
}

export default function AboutPage() {
  const experience = [
    {
      company: 'Actin Technologies Pvt Ltd',
      role: 'UX/UI Intern',
      dates: 'Dec 2025 - Apr 2026',
      type: 'On Site',
    },
    {
      company: 'Leo IT Services',
      role: 'UX/UI Intern',
      dates: 'Jun 2025 - Jul 2025',
      type: 'On Site',
    },
    {
      company: 'WapVenture',
      role: 'Graphic Designer',
      dates: 'May 2023 - Aug 2023',
      type: 'Remote',
    },
    {
      company: 'The Feminist Times',
      role: 'Freelance Video Editor',
      dates: 'Mar 2023 - May 2023',
      type: 'Remote',
    },
  ]

  const tools = [
    'Figma',
    'Illustrator',
    'Photoshop',
    'InDesign',
    'Premiere Pro',
    'Procreate',
    'Fusion360',
    'AutoCAD',
    'Blender',
    'Claude',
    'ChatGPT',
    'Gemini',
    'Figma Make',
    'Google Stitch',
  ]

  return (
    <div className="min-h-screen bg-paper">
      <Nav />

      {/* Back link */}
      <SectionWrapper className="pt-24 sm:pt-28 pb-0">
        <Link href="/" className="btn-text text-sm inline-flex items-center gap-2">
          <span aria-hidden="true">&larr;</span> Back to home
        </Link>
      </SectionWrapper>

      {/* Header */}
      <SectionWrapper className="pt-8">
        <h1 className="font-display text-4xl sm:text-5xl font-semibold">About</h1>
        <p className="text-xl text-muted max-w-prose mt-8">
          I'm a product designer focused on building clear, usable interfaces for complex products.
        </p>
      </SectionWrapper>

      {/* Work Experience */}
      <SectionWrapper className="bg-black">
        <div className="space-y-8">
          <h2 className="font-display text-2xl font-semibold text-white">Work Experience</h2>
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6"
              >
                <div className="sm:col-span-2">
                  <h3 className="text-lg font-semibold text-white">{job.company}</h3>
                  <p className="text-sm text-gray-400 mt-1">{job.role}</p>
                </div>
                <div className="sm:text-right">
                  <p className="font-mono text-sm text-gray-400">{job.dates}</p>
                  <p className="font-mono text-xs text-gray-500 mt-1">{job.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Main content */}
      <SectionWrapper>
        <div className="max-w-prose space-y-8 text-lg leading-relaxed text-muted">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">The Background</h2>
            <p>
              My focus is UX/UI and product design — research-led flows, clean visual systems, and interfaces that hold up under real use. I'm completing my B.Des in Product Experience Design at the National Institute of Fashion Technology, expected in 2026, where the program taught me to think like a researcher before a designer. Before that, I freelanced as a graphic designer and video editor, and spent time with CAD and 3D modeling, work that sharpened how I think spatially and solve for constraints.
            </p>
            <p>
              I completed a UX/UI design internship at Actin Technologies in Pune, working on SaaS dashboard products end to end: interviewing users, building personas, mapping journeys, sketching flows, designing high-fidelity interfaces in Figma, and running alpha tests to watch people actually use what I designed.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">What I Care About</h2>
            <p>
              I'm drawn to problems that feel like puzzles: how do you make the complex feel simple. A good interface doesn't need to be flashy, it needs to answer the question a user came with, in the time it takes to glance. I'm skeptical of cleverness for its own sake. I'd rather ask the hard questions before I design, and test with real users before I call anything done.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">What's Next</h2>
            <p>
              I'm looking for a UX/UI or Product Designer role where I can keep learning, contribute from day one, and collaborate closely with people who care about getting the details right. Fintech, real estate tech, and tools are where I'd love to dig in first, but I'm always up for a good problem.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Tools section */}
      <SectionWrapper className="bg-surface border-y border-line">
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-semibold">Tools</h2>
          <p className="text-lg text-muted max-w-prose leading-relaxed">
            I design in Figma and prototype there too. I'm comfortable in Illustrator and Photoshop for visual design, and InDesign for layouts. For motion, I use Premiere Pro, and I still sketch on Procreate when I want to think with a pencil instead of a cursor. For 3D and product design work, I use Fusion360, AutoCAD, and Blender. For rapid iteration and exploring ideas quickly, I also use AI tools like Claude, ChatGPT, Gemini, Figma Make, and Google Stitch.
          </p>
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
          <h2 className="font-display text-2xl font-semibold">Let's Talk</h2>
          <p className="text-base text-muted max-w-prose">
            If you're hiring, interested in my work, or want to chat about design, feel free to reach out. I read every message.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:architrai2810@gmail.com" className="btn-primary">
              Email
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
