import type { CaseStudy } from '@/lib/types'

export const weupdaters: CaseStudy = {
  slug: 'weupdaters',
  title: 'WeUpdaters',
  subtitle: 'Landing page redesign',
  format: 'showcase',
  screenOrientation: 'desktop',
  meta: {
    role: 'UI Designer',
    year: '2026',
    type: 'Visual Showcase · 2-week internship project',
  },
  facts: {
    role: 'UI Designer',
    timeline: '2 weeks',
    approach: 'Figma, Blender',
  },
  dek: 'A focused redesign that gives a digital-services company the clarity, credibility and modern feel its landing page was missing.',
  prototype: {
    figmaUrl: 'https://www.figma.com/proto/dBIvyKne2RzQeIoKfKoGni/WeUpdaters?node-id=293-366&t=YL9hGq3ZH5nEjETr-1',
  },
  links: [
    {
      label: 'Live preview',
      href: 'https://weupdaters.com',
    },
    {
      label: 'Figma file',
      href: 'https://www.figma.com/file/dBIvyKne2RzQeIoKfKoGni/WeUpdaters',
    },
  ],
  overview:
    'WeUpdaters is a digital-solutions company offering IT and web services. Its existing landing page worked as a basic brochure but did little to position the company as modern or credible, and it never moved visitors toward getting in touch. This is a visual showcase rather than a full case study. It is a focused redesign of the landing page, explored across several iterations, that pushes a bolder and more structured visual direction while keeping a clear path to conversion.',
  startingPoint: {
    intro: 'The original page had three problems working against it at once:',
    problems: [
      'No clear structure or content hierarchy, so visitors had to hunt for what mattered.',
      'A dated visual identity that undersold the quality of work the company actually delivers.',
      'No real guidance toward a next step, so interest rarely turned into contact.',
    ],
    close: 'The redesign set out to fix all three without losing the company\'s straightforward, no-nonsense feel.',
  },
  iterations: {
    intro:
      'The final layout was the last in a series of explorations. Each one tested a different answer to the same question: how does this page look modern and capable while staying easy to read and act on.',
    steps: [
      {
        title: 'Warm Wash, Coil Centrepiece',
        body: 'A dark olive-gold background with a blue 3D coil as the hero. It set the left-aligned hero and the "Crafting Digital Solutions" headline, but the low-contrast type made the message hard to read.',
        image: '/case-studies/weupdaters/iteration-01.png',
      },
      {
        title: 'Centered And Informative',
        body: 'A symmetrical layout over a circuit-globe visual, with a new headline and a three-step process band. More informative, but the centering and extra copy pulled focus away from the message.',
        image: '/case-studies/weupdaters/iteration-02.png',
      },
      {
        title: 'Bold 3D, Hidden Nav',
        body: 'A striking orange AI-chip centrepiece with a vertical portfolio rail. Visually strong, but the headline sat low over a busy image and lost legibility, and the navigation collapsed into a hamburger.',
        image: '/case-studies/weupdaters/iteration-03.png',
      },
      {
        title: 'Asymmetric Rebalance',
        body: 'An image-left, text-right split that felt calmer and clearer, with the portfolio simplified into a horizontal strip.',
        image: '/case-studies/weupdaters/iteration-04.png',
      },
      {
        title: 'Structured Grid',
        body: 'A divided navigation bar and an editorial grid. High-contrast, left-aligned type finally made the headline read at a glance, and small detailing added polish.',
        image: '/case-studies/weupdaters/iteration-05.png',
      },
      {
        title: 'The Resolved Direction',
        body: 'The grid and divided navigation from the fifth iteration, paired with the original "Crafting Digital Solutions" headline at full contrast and the strongest 3D centrepiece.',
        image: '/case-studies/weupdaters/iteration-06.png',
        resolved: true,
      },
    ],
    close:
      'Across the iterations, three decisions settled: a structured grid with divided navigation, high-contrast typography that keeps the message legible, and a single bold 3D centrepiece instead of a busy background.',
  },
  designDirection:
    'The resolved direction leans into a dark, near-black canvas with high-contrast typography and generous spacing, anchored by a single 3D centrepiece that gives the page depth and a sense of technical craft. The intent was simple: make the page feel as current and capable as the digital work the company sells, so the design itself becomes part of the pitch.',
  highlights: [
    {
      title: 'Modern visual identity',
      description: 'A clean, structured and contemporary interface that aligns the brand with the digital work it delivers.',
    },
    {
      title: 'Clear content hierarchy',
      description: 'Content reorganised into distinct sections so visitors can scan services, proof and contact details without friction.',
    },
    {
      title: 'Stronger calls to action',
      description: 'CTAs made more visible and placed at the moments a visitor is most ready to act, instead of being buried in the layout.',
    },
    {
      title: 'Interactive 3D and depth',
      description: 'A rotating 3D element and layered visuals add motion and dimension that hold attention and signal technical capability.',
    },
  ],
  principles: [
    {
      title: 'Clarity',
      description: 'organise information so the page is easy to scan.',
    },
    {
      title: 'Credibility',
      description: 'a modern, trustworthy look that earns confidence at first glance.',
    },
  ],
  result:
    'The redesigned landing page communicates the company\'s value far more clearly, reads as noticeably more modern and credible, and gives visitors an obvious path toward making contact.',
  reflection: [
    'A strong first impression does much of the work in building trust on a landing page.',
    'Structure and hierarchy carry as much weight as visual styling, often more.',
    'A landing page works best when every design choice serves a clear business goal, here, getting visitors to reach out.',
  ],
  outcome: {
    summary: 'A visual showcase of the landing page redesign across various iterations.',
    stats: [],
  },
  hero: '/case-studies/weupdaters/hero-final.png',
  thumbnail: '/case-studies/weupdaters/thumbnail.png',
}
