'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/80 backdrop-blur-md border-b border-line/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-display font-semibold text-lg">
          Archit Rai
        </Link>

        {/* Center Links */}
        <div className="hidden sm:flex items-center gap-8">
          <a href="#work" className="text-sm text-muted hover:text-ink transition-colors">
            Work
          </a>
          <Link href="/about" className="text-sm text-muted hover:text-ink transition-colors">
            About
          </Link>
          <a href="#contact" className="text-sm text-muted hover:text-ink transition-colors">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="mailto:architrai2810@gmail.com"
          className="btn-primary text-xs sm:text-sm"
        >
          Get in touch
        </a>
      </div>
    </nav>
  )
}
