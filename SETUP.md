# Setup guide

This is your personal UX portfolio site. Follow these steps to get it running locally, then customize it with your work.

## Step 1: Install Node.js

If you don't have Node.js installed:

1. Go to https://nodejs.org/
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the defaults
4. Verify installation: open a terminal/PowerShell and run `node -v` and `npm -v`

## Step 2: Install dependencies

Open a terminal in the `portfolio-site` directory and run:

```bash
npm install
```

This downloads all the packages your site needs (Next.js, Tailwind, Framer Motion, etc.). It takes 2-3 minutes.

## Step 3: Start the dev server

```bash
npm run dev
```

You'll see:
```
> portfolio-site@1.0.0 dev
> next dev

  ▲ Next.js 15.1.3
  - Local:        http://localhost:3000
  - Environments: .env.local

Ready in 2.3s
```

Open your browser to **http://localhost:3000**. You should see your portfolio with the InfraWealth case study.

Press `Ctrl+C` in the terminal to stop the server.

## Step 4: Customize content

### Update your info
Edit the text in these files:

- **Hero text**: `app/page.tsx` (search for "I design clear")
- **About page**: `app/about/page.tsx`
- **Email & links**: `components/Nav.tsx`, `components/Footer.tsx`

### Update the case study data

Edit `/content/case-studies/infrawealth.ts`:

1. Replace the InfraWealth content with your project details
2. Fill in real numbers in the `outcome.stats` section
3. Update the persona, journey, and flow data

### Add images

Replace the placeholder SVGs in `/public/case-studies/infrawealth/` with real images from Figma:

1. Export from Figma as PNG (phone screens should be ~393×850px)
2. Save them with the same filenames:
   - `hero.svg` → `hero.png`
   - `01-launch.svg` → `01-launch.png`
   - (etc. for all 8 screens and thumbnail)

The code will automatically use them. No code changes needed.

## Step 5: Add more case studies

Once you have more projects:

1. Copy `/content/case-studies/infrawealth.ts` to a new file, e.g., `myproject.ts`
2. Update all the fields (title, slug, content, etc.)
3. In `/lib/case-studies.ts`, import and add it to the `caseStudies` array:
   ```typescript
   import { myProject } from '@/content/case-studies/myproject'
   
   export const caseStudies: CaseStudy[] = [infrawealth, myProject]
   ```
4. Create `/public/case-studies/myproject/` folder
5. Add your images there

The new case study automatically appears on the home page and at `/work/myproject`.

## Step 6: Deploy

### Option A: Vercel (recommended)

1. Push your code to GitHub (create a free account if needed)
2. Go to https://vercel.com/
3. Sign up with GitHub
4. Import this repository
5. Vercel auto-deploys on every push

Your site goes live instantly. No config needed.

### Option B: Other hosts

After running `npm run build`, the `.next` folder is ready to deploy to Netlify, Railway, Render, or any Node.js host. Follow their docs for deployment.

## Common edits

### Change the accent blue
Edit `tailwind.config.ts`:
```typescript
'--accent: #2E5BFF' // change this hex code
```

### Change fonts
Edit `app/layout.tsx` to import different Google Fonts or Fontshare families.

### Change the max width
Edit `tailwind.config.ts`:
```typescript
maxWidth: {
  container: '1200px', // adjust here
}
```

### Disable animations
Edit `app/globals.css` and remove Framer Motion from components if you want a simpler feel.

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Changes not showing?**
Stop the dev server (`Ctrl+C`) and restart it. Sometimes Tailwind needs a fresh build.

**Images not showing?**
- Check filename matches the data file exactly
- Make sure the file is in the right folder (`/public/case-studies/[slug]/`)
- Try refreshing the browser

**Build fails?**
```bash
rm -rf .next
npm run build
```

## What's where

- **Pages**: `app/` folder
- **Components**: `components/` folder (reusable parts)
- **Data**: `content/case-studies/` folder (case study content as TypeScript)
- **Styles**: `tailwind.config.ts` (colors, spacing, fonts)
- **Images**: `public/case-studies/` folder

## Next

- [ ] Replace email address everywhere
- [ ] Update LinkedIn and Behance links
- [ ] Swap placeholder images for real ones
- [ ] Update InfraWealth case study with real content
- [ ] Add your second case study
- [ ] Deploy to Vercel
- [ ] Share the link

Good luck! Your portfolio is a direct reflection of your design thinking. Make it yours.
