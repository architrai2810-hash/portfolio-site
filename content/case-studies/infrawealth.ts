import type { CaseStudy } from '@/lib/types'

export const infrawealth: CaseStudy = {
  slug: 'infrawealth',
  title: 'InfraWealth',
  subtitle: 'Real estate investing, as simple as buying a stock.',
  meta: {
    role: 'Product Designer',
    year: '2026',
    type: '4-week concept project',
  },
  facts: {
    role: 'Product Designer',
    timeline: '4 weeks',
    approach: 'Interviews, Persona, Journey, User Flow, UI Design, Prototype, Alpha Testing.',
  },
  description: 'A mobile app that helps first-time investors evaluate and invest in real estate with confidence.',
  landscape:
    'Apps made stocks and mutual funds simple, transparent and broker-free. Real estate never made that leap and stays offline, opaque and broker-led, with information scattered everywhere. For people who manage money digitally, property feels out of reach, not for lack of interest or capital, but because the experience feels intimidating and a decade behind. That gap, high aspiration and low accessibility, is what InfraWealth explores.',
  problem:
    'First-time investors can\'t easily tell if a property is a worthwhile investment, so they hesitate or lean on brokers they don\'t fully trust.',
  persona: {
    name: 'Ankit Sharma',
    age: 30,
    role: 'Senior IT Professional',
    location: 'Bengaluru',
    quote:
      'I can analyse a stock in five minutes. With property, I don\'t even know what I\'m supposed to be looking at.',
    intro:
      'A confident equity investor who manages stocks and mutual funds entirely through apps, but sees real estate as a closed, broker-dependent world he can\'t navigate on his own.',
    goals: [
      'Grow long-term wealth beyond stocks and mutual funds',
      'Evaluate properties on his own, without depending on a broker',
      'Understand ROI in the same clear terms his fintech apps already give him',
    ],
    frustrations: [
      'Property information is scattered and never adds up to a clear picture',
      'Every broker tells him something different',
      'No simple way to compare two properties side by side',
      'A constant fear of making one costly, irreversible mistake',
    ],
    behaviour: [
      'Digital-first and comfortable managing money entirely online',
      'Researches heavily before committing to any decision',
      'Expects the speed, clarity and transparency of a fintech app',
    ],
  },
  journey: {
    stages: [
      {
        name: 'Discover',
        doing: 'Browses portals with no starting point',
        feeling: 'Curious, optimistic',
        pain: 'Too many options, no starting point',
        gap: 'No guided entry for first-timers',
        opportunity: 'Structured home with top-rated and nearby listings',
        emotion: 4.2,
      },
      {
        name: 'Research',
        doing: 'Talks to brokers, cross-checks sites',
        feeling: 'Skeptical',
        pain: 'Conflicting information',
        gap: 'No single place for consistent info',
        opportunity: 'Centralised, consistently structured listings',
        emotion: 2.8,
      },
      {
        name: 'Evaluate',
        doing: 'Compares properties, calculates ROI manually',
        feeling: 'Overwhelmed, anxious',
        pain: 'No common metrics, scattered data',
        gap: 'No visual way to assess ROI',
        opportunity: 'Stats block with a filterable ROI graph',
        emotion: 1.2,
      },
      {
        name: 'Invest',
        doing: 'Commits through a broker, signs paperwork',
        feeling: 'Hesitant, fearful',
        pain: 'High stakes, lack of transparency',
        gap: 'No step-by-step flow',
        opportunity: 'Guided flow with wallet visibility and a clear summary',
        emotion: 1.5,
      },
      {
        name: 'Track',
        doing: 'Calls broker or checks builder sites',
        feeling: 'Uncertain, disconnected',
        pain: 'No visibility into performance',
        gap: 'No live view of returns',
        opportunity: 'Portfolio dashboard with property-wise ROI',
        emotion: 3.2,
      },
    ],
    takeaway:
      'Emotion falls sharply after Discover, bottoms out at Evaluate, and stays low through Invest before recovering at Track. The steepest drop sits between Research and Invest, where confidence is lowest and the stakes are highest.',
  },
  insights: [
    {
      title: 'Cognitive Overload (Discover, Research)',
      body: 'Scattered, unstructured options overwhelm users from the start.',
    },
    {
      title: 'Information Fragmentation (Research)',
      body: 'With data spread everywhere, users fall back on brokers.',
    },
    {
      title: 'No Standardised Evaluation (Evaluate)',
      body: 'Without common metrics, comparing properties is near impossible.',
    },
    {
      title: 'Decision Paralysis (Invest)',
      body: 'Opaque processes and paperwork freeze users at commitment.',
    },
    {
      title: 'Mental Model Gap (Track)',
      body: 'Users expect the fintech-style visibility they already know.',
    },
  ],
  flow: {
    note: 'Eight screens, five decisions. The five decisions map directly to the five journey stages.',
    steps: [
      {
        n: 1,
        name: 'Launch Screen',
        stage: 'Entry',
        keyDecision: 'App name, CTA and microcopy only.',
        why: 'A minimal first screen, no friction into onboarding.',
        image: '/case-studies/infrawealth/01-launch.png',
      },
      {
        n: 2,
        name: 'Onboarding',
        stage: 'Setup',
        keyDecision: 'Labelled fields with placeholder examples.',
        why: 'Examples cut errors and keep sign-up smooth.',
        image: '/case-studies/infrawealth/02-onboarding.png',
      },
      {
        n: 3,
        name: 'Home Screen, Investments at a Glance',
        stage: 'Discover',
        keyDecision: 'Top-rated property, nearby listings and a recent-investment snapshot.',
        why: 'The full picture in one screen at login.',
        image: '/case-studies/infrawealth/03-home.png',
      },
      {
        n: 4,
        name: 'Property Details',
        stage: 'Evaluate / Track',
        keyDecision: 'A brief introduction and investment stats: a consolidated number block and a filterable graph.',
        why: 'An instant read on returns and the trend over time.',
        image: '/case-studies/infrawealth/04-property-details.png',
      },
      {
        n: 5,
        name: 'My Wallet',
        stage: 'Invest',
        keyDecision: 'Balance, quick actions and transaction history.',
        why: 'All finances in one place, no hunting.',
        image: '/case-studies/infrawealth/05-wallet.png',
      },
      {
        n: 6,
        name: 'My Portfolio',
        stage: 'Track',
        keyDecision: 'Total value, timestamp, ROI graph and a property-wise breakdown of returns.',
        why: 'The user can track performance and spot underperformers at a glance.',
        image: '/case-studies/infrawealth/06-portfolio.png',
      },
      {
        n: 7,
        name: 'Wishlist',
        stage: 'Discover',
        keyDecision: 'A two-column card grid with two primary actions, Remove and Details.',
        why: 'Light and scannable, drill in only when ready.',
        image: '/case-studies/infrawealth/07-wishlist.png',
      },
      {
        n: 8,
        name: 'Invest into a Property',
        stage: 'Evaluate / Invest',
        keyDecision: 'The screen mirrors Property Details and adds Remove and Invest.',
        why: 'Everything needed in one tap, which supports a confident call.',
        image: '/case-studies/infrawealth/08-invest.png',
      },
    ],
  },
  prototype: {
    figmaUrl: 'https://www.figma.com/proto/5vFvDOvmdYhIX3RiYdyrnO/My-InfraWealth?node-id=196-273&t=kdn78j0P0mW6WNab-1',
  },
  outcome: {
    summary:
      'Alpha testing focused on whether first-time investors could move from discover to invest on their own, and whether they felt more confident doing it.',
    stats: [
      {
        value: '7 of 9',
        label: 'testers completed discover-to-invest without help',
      },
      {
        value: '8 of 9',
        label: 'testers reported higher confidence reviewing an investment',
      },
    ],
  },
  learnings: [
    'Trust is the deciding factor in high-value decisions, and clarity matters more than features.',
    'Pairing a number with a visual gave more confidence than either one alone.',
    'Familiar fintech patterns cut the learning curve in a new domain.',
  ],
  hero: '/case-studies/infrawealth/heroo.png',
  thumbnail: '/case-studies/infrawealth/thumbnail.png',
}
