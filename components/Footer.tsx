import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-line">
      <div className="container-wide py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-display font-semibold text-lg mb-2">Archit Rai</div>
            <p className="text-sm text-muted">Product & UI-UX Designer</p>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-semibold text-sm mb-4">Navigation</div>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-muted hover:text-ink transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#work" className="text-sm text-muted hover:text-ink transition-colors">
                  Work
                </a>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted hover:text-ink transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Let's Connect */}
          <div>
            <div className="font-semibold text-sm mb-4">Let's Connect</div>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://behance.net/architrai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-ink transition-colors"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/archit-rai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-ink transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:architrai2810@gmail.com"
                  className="text-sm text-muted hover:text-ink transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-line">
          <p className="text-xs text-muted">
            Designed and built in {currentYear}.
          </p>
        </div>
      </div>
    </footer>
  )
}
