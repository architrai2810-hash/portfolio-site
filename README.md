# Archit Rai Portfolio

A clean, scannable UX portfolio built with Next.js, TypeScript, and Tailwind CSS. Designed for hiring managers and recruiters to understand your work in under 90 seconds.

## Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Motion**: Framer Motion
- **Image Optimization**: Sharp
- **Hosting**: Vercel (zero-config deployment)

## Quick start

### Prerequisites
- Node.js 18+ (download from https://nodejs.org/)
- npm (comes with Node.js)

### Installation

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Visit `http://localhost:3000` to see your site.

### Build for production

```bash
npm run build
npm start
```

## Project structure

```
portfolio-site/
├── app/                        # Next.js App Router pages
│   ├── page.tsx               # Home page
│   ├── about/page.tsx         # About page
│   ├── work/[slug]/page.tsx   # Dynamic case study pages
│   ├── layout.tsx             # Root layout with fonts, meta
│   └── globals.css            # Global styles and tokens
├── components/                # Reusable React components
│   ├── Nav.tsx               # Sticky navigation
│   ├── Footer.tsx            # Multi-column footer
│   ├── WorkIndexRow.tsx      # Signature work index row
│   ├── PersonaCard.tsx       # User persona layout
│   ├── JourneyMap.tsx        # Interactive journey map
│   ├── FlowSequence.tsx      # 8-screen user flow layout
│   └── StatBlock.tsx         # Outcome statistics display
├── content/case-studies/      # Case study data (NOT JSX)
│   └── infrawealth.ts        # InfraWealth case study data
├── lib/
│   ├── types.ts              # TypeScript types for case studies
│   └── case-studies.ts       # Case study data index
├── public/                    # Static assets
│   ├── favicon.svg
│   └── case-studies/
│       └── infrawealth/      # All InfraWealth images
└── tailwind.config.ts        # Tailwind tokens and config
```

## Design tokens

Colors (defined in Tailwind config and CSS variables):
- `--ink: #14161A` (near-black text)
- `--paper: #F6F7F9` (cool off-white)
- `--surface: #FFFFFF` (cards)
- `--muted: #5A6270` (secondary text)
- `--line: #E3E6EB` (borders)
- `--accent: #2E5BFF` (electric blue, CTAs only)

Typography (loaded from Google Fonts + Fontshare):
- Display: "General Sans" (headlines)
- Body: "Inter" (running text)
- Mono: "JetBrains Mono" (data, stats, labels)

## Adding a new case study

1. **Create the data file** in `/content/case-studies/[slug].ts`:

```typescript
import type { CaseStudy } from '@/lib/types'

export const myProject: CaseStudy = {
  slug: 'my-project',
  title: 'My Project',
  subtitle: 'One-line description.',
  meta: {
    role: 'Product Designer',
    year: '2026',
    type: 'Project type',
  },
  // ... fill in all required fields (see infrawealth.ts for full example)
}
```

2. **Add to the index** in `/lib/case-studies.ts`:

```typescript
import { myProject } from '@/content/case-studies/my-project'

export const caseStudies: CaseStudy[] = [infrawealth, myProject]
```

3. **Add images** to `/public/case-studies/[slug]/`:
   - `hero.svg` (full-width hero)
   - `thumbnail.svg` (16:9 work index thumbnail)
   - `01-launch.svg` through `08-*.svg` (phone screens)
   - Any additional supporting images

4. **Update the links** in `app/page.tsx` or `components/Nav.tsx` if needed for new sections.

The site automatically:
- Renders the new case study at `/work/[slug]`
- Adds it to the work index on the home page
- Generates static pages at build time

## Key features

### Signature work index
Full-width rows showing project number, title, metadata, outcome, and hover-scale thumbnail. Clean, scannable, no cards.

### Interactive journey map
5-stage user journey with emotion curve line chart, filterable rows (Doing, Feeling, Pain, Gap, Opportunity), and visual takeaway.

### User flow sequence
8 screens presented as a connected grid showing Key Decision and Why for each step. Responsive: stacks on mobile, grid on desktop.

### Persona card
Clean layout with quote, intro, three columns (Goals, Frustrations, Behaviour). Respects the data, no invented personas.

### Outcome stats
Big mono numbers paired with short labels. Includes editable placeholders for alpha testing data (do not ship with fake numbers).

### Responsive & accessible
- Mobile-first design, stacks gracefully
- Semantic HTML with proper heading hierarchy
- Visible focus states on all interactive elements
- `prefers-reduced-motion` respected (disables Framer Motion)
- Alt text on all images
- Optimized fonts, no layout shift

## Editing content

### Home page
Edit `/app/page.tsx` to change:
- Hero positioning line and support text
- Trust strip (current role + tools)
- About teaser copy and section links

### About page
Edit `/app/about/page.tsx` for bio, tools list, and contact links.

### Navigation & footer
Edit `/components/Nav.tsx` and `/components/Footer.tsx` for links and contact info.

### Case study data
Edit the TypeScript object in `/content/case-studies/[slug].ts`. Do NOT edit the components; they render directly from data. All content changes flow automatically.

## Deployment

### Vercel (recommended, zero config)

```bash
# Push to GitHub (or connect your repo via Vercel dashboard)
git push origin main

# Vercel auto-deploys on push
```

### Other hosts
The site is a standard Next.js export. After running `npm run build`, the `.next` folder is ready to deploy to any Node.js host (Netlify, Railway, Render, etc.).

## Performance

- Images are lazy-loaded below the fold
- Fonts are pre-connected and font-display set to swap (no CLS)
- No external scripts beyond analytics (if added)
- Static site generation (SSG) for all pages at build time
- Responsive SVG placeholders (no large PNGs)

## SEO

- Per-page meta titles and descriptions
- Open Graph tags for social sharing
- Semantic HTML structure
- Mobile-friendly, fast Core Web Vitals

## Accessibility checklist

- [x] Keyboard navigation and focus states
- [x] Color contrast (WCAG AA)
- [x] Semantic heading hierarchy
- [x] Alt text on all images
- [x] `prefers-reduced-motion` support
- [x] Form labels and ARIA where needed
- [x] No auto-playing media

## Git & versioning

The project is not initialized as a git repo. To start version control:

```bash
git init
git add .
git commit -m "Initial commit: portfolio site with InfraWealth case study"
```

## Troubleshooting

### Images not loading
Ensure image files are in `/public/case-studies/[slug]/` with exact filenames from the case study data (e.g., `01-launch.svg`).

### Fonts not loading
Check that you have internet access (fonts load from Google Fonts and Fontshare). In offline mode, fallbacks apply.

### Build fails
- Run `npm install` again to ensure dependencies are installed
- Check Node version: `node -v` (should be 18+)
- Clear cache: `rm -rf .next node_modules && npm install`

## Next steps

1. Replace placeholder images with real Figma exports (same filenames, no code changes needed)
2. Update LinkedIn and Behance URLs in components/Nav.tsx and app/about/page.tsx
3. Update email address (currently architrai2810@gmail.com) everywhere
4. Add 2–3 more case studies using the same data structure
5. Deploy to Vercel or your hosting provider

---

**Need help?** Every component is documented in the code. Start with the data file (`infrawealth.ts`) to understand the structure, then check the corresponding component (e.g., `JourneyMap.tsx`) to see how it renders.
