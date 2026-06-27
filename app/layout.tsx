import type { Metadata } from 'next'
import './globals.css'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'Archit Rai - Product & UI-UX Designer',
  description:
    'Product and UI-UX designer focused on clear, usable interfaces for complex products. View my work in fintech and SaaS.',
  openGraph: {
    title: 'Archit Rai - Product & UI-UX Designer',
    description: 'Product and UI-UX designer. SaaS and fintech portfolio.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link href="https://api.fontshare.com/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-paper text-ink font-body">
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
