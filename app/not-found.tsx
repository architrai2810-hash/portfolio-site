import Link from 'next/link'
import SectionWrapper from '@/components/SectionWrapper'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />

      <SectionWrapper className="pt-32 text-center space-y-6">
        <h1 className="font-display text-6xl font-semibold text-accent">404</h1>
        <p className="text-2xl font-semibold">Page not found</p>
        <p className="text-muted text-lg max-w-prose mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-primary inline-flex items-center gap-2">
          <span aria-hidden="true">&larr;</span> Back to home
        </Link>
      </SectionWrapper>

      <Footer />
    </div>
  )
}
