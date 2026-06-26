import type { CaseStudy } from '@/lib/types'

export const uxverse: CaseStudy = {
  slug: 'uxverse',
  title: 'UXVerse',
  subtitle: 'Designing an event experience worth showing up for.',
  meta: {
    role: 'Product Designer',
    year: '2026',
    type: '2-week concept project',
  },
  facts: {
    role: 'Product Designer',
    timeline: '2 weeks',
    approach: 'Persona, Journey, User Flow, Interaction and UI Design, Prototype.',
  },
  landscape:
    'For most attendees, an event\'s website is the only touchpoint before deciding to show up, yet most are static brochures, a hero image, some dates and a register button. That leaves a lot unanswered, especially for students and early-career designers, who end up piecing together an impression from scattered posts and a few photos. The gap between sparking interest and earning a registration is what UXVerse explores.',
  problem:
    'Potential attendees can\'t easily tell what an event is, whether it\'s credible or whether it\'s meant for them, so interest fades before it turns into a registration.',
  persona: {
    name: 'Riya Patel',
    age: 24,
    role: 'Junior Product Designer',
    location: 'Ahmedabad',
    quote: 'I\'d love to go to a big design conference, but I can never tell if it\'s actually meant for someone at my level.',
    intro:
      'An early-career designer eager to grow through her first major design conference, but held back by event websites that never make it clear whether the event is credible, relevant or meant for someone like her.',
    goals: [
      'Attend her first major design conference to learn and meet people',
      'Be sure an event is worth the time, money and travel before committing',
      'Find events that genuinely welcome students and early-career designers',
    ],
    frustrations: [
      'Hard to tell what an event is really about from its website',
      'No easy way to judge whether an event is credible or worth attending',
      'Unsure whether she even belongs at a professional event',
    ],
    behaviour: [
      'Discovers events through Instagram, LinkedIn and word of mouth',
      'Researches heavily before committing to anything',
      'Comfortable online and expects a polished, modern web experience',
    ],
  },
  journey: {
    stages: [
      {
        name: 'Hear',
        doing: 'Hears about it from a friend or social post, with little context',
        feeling: 'Curious, intrigued',
        pain: 'No sense of what the event is or why it matters',
        gap: 'No single source explains the event',
        opportunity: 'A landing experience that makes the purpose clear in seconds',
        emotion: 4.0,
      },
      {
        name: 'Explore',
        doing: 'Googles it, scrolls old posts, asks around',
        feeling: 'Confused, skeptical',
        pain: 'Scattered info, nothing confirms credibility',
        gap: 'No consolidated, trustworthy place to see speakers, partners and past events',
        opportunity: 'Pages that build context and credibility in one visit',
        emotion: 2.5,
      },
      {
        name: 'Decide',
        doing: 'Weighs cost, travel and relevance to her stage',
        feeling: 'Hesitant, doubtful',
        pain: 'Can\'t tell if it\'s for someone early in their career',
        gap: 'No signal on who it\'s for or what attendees gain',
        opportunity: 'Clear messaging on the value and the intended audience',
        emotion: 1.0,
      },
      {
        name: 'Register',
        doing: 'Opens the form, fills in details, submits',
        feeling: 'Excited, committed',
        pain: 'Long, repetitive forms',
        gap: 'No short, low-effort path to register',
        opportunity: 'A short, simple registration process',
        emotion: 4.2,
      },
      {
        name: 'Anticipate',
        doing: 'Waits for the date, checks inbox and socials',
        feeling: 'Anticipating, restless',
        pain: 'No word back, unsure her spot is confirmed',
        gap: 'No confirmation after signing up',
        opportunity: 'An immediate confirmation, with further details to follow by email',
        emotion: 3.8,
      },
    ],
    takeaway:
      'Emotion falls from curiosity at Hear to its lowest at Decide, then lifts sharply once she commits at Register. The emotional low sits at Decide, so the design does its heaviest lifting through Explore and Decide, turning scattered impressions into enough clarity to commit.',
  },
  insights: [
    {
      title: 'First-Impression Gap (Hear)',
      body: 'Users arrive with no context and leave fast unless the purpose lands immediately.',
    },
    {
      title: 'Scattered Credibility (Explore)',
      body: 'Proof of the event lives spread across places and is never seen together.',
    },
    {
      title: 'Unclear Fit (Decide)',
      body: 'Nothing tells users who the event is for or what they\'ll gain.',
    },
    {
      title: 'Registration Friction (Register)',
      body: 'Long forms cause drop-off right at commitment.',
    },
    {
      title: 'Post-Sign-up Silence (Anticipate)',
      body: 'The experience goes quiet after registering, leaving users uneasy.',
    },
  ],
  flow: {
    note: 'Eleven screens across five phases.',
    steps: [
      {
        n: 1,
        name: 'Home',
        stage: 'Hear',
        keyDecision: 'Fixed nav and Register CTA above an illustration that captures the spirit of the event.',
        why: 'Visuals stand out over text, and the registration button always stays in reach.',
        image: '/case-studies/uxverse/01.png',
      },
      {
        n: 2,
        name: 'Countdown',
        stage: 'Hear',
        keyDecision: 'A tagline followed by a live countdown.',
        why: 'The countdown nudges users toward registration.',
        image: '/case-studies/uxverse/02.png',
      },
      {
        n: 3,
        name: 'Live Stats and Press Quote',
        stage: 'Explore',
        keyDecision: 'Stat cards, a press quote and a newsletter sign-up.',
        why: 'Social proof builds trust, and the newsletter keeps interested users in the loop.',
        image: '/case-studies/uxverse/03.png',
      },
      {
        n: 4,
        name: 'Footer',
        stage: 'Navigate',
        keyDecision: 'The footer is split into four key sections.',
        why: 'Grouping links helps the user find what they need quickly.',
        image: '/case-studies/uxverse/04.png',
      },
      {
        n: 5,
        name: 'About',
        stage: 'Explore / Decide',
        keyDecision: 'A bold tagline with a brief description of the venue and event details.',
        why: 'Keeping the copy brief means the user gets only what\'s relevant, not buried in detail.',
        image: '/case-studies/uxverse/05.png',
      },
      {
        n: 6,
        name: 'What Awaits You',
        stage: 'Decide',
        keyDecision: 'Offerings boxes and a \'Who Should Attend\' section.',
        why: 'A clear set of expectations helps users decide with confidence.',
        image: '/case-studies/uxverse/06.png',
      },
      {
        n: 7,
        name: 'Speakers',
        stage: 'Explore',
        keyDecision: 'A three-column grid with larger images for key names.',
        why: 'Scannable, and it helps the top speakers stand out.',
        image: '/case-studies/uxverse/07.png',
      },
      {
        n: 8,
        name: 'Partners',
        stage: 'Explore',
        keyDecision: 'A short intro followed by a logo carousel.',
        why: 'The intro frames who the partners are as a group, while large logos are recognised with ease.',
        image: '/case-studies/uxverse/08.png',
      },
      {
        n: 9,
        name: 'Media',
        stage: 'Explore',
        keyDecision: 'An asymmetric grid of last year\'s highlights.',
        why: 'Varying the card sizes draws attention to standout moments and gives an immersive feel.',
        image: '/case-studies/uxverse/09.png',
      },
      {
        n: 10,
        name: 'Registration',
        stage: 'Register',
        keyDecision: 'A bold heading leading into a three-field form with a student registration checkbox.',
        why: 'Quick for anyone to register, and inclusive of students.',
        image: '/case-studies/uxverse/10.png',
      },
      {
        n: 11,
        name: 'Confirmation',
        stage: 'Anticipate',
        keyDecision: 'Acknowledges the registration and informs the user about the email follow-up.',
        why: 'Reassures them the registration went through and that further details will follow by email.',
        image: '/case-studies/uxverse/11.png',
      },
    ],
  },
  prototype: {
    // TODO: Archit, paste the real UXVerse Figma prototype link here
    figmaUrl: 'https://www.figma.com/proto/PLACEHOLDER/UXVerse-Prototype',
  },
  outcome: {
    summary:
      'UXVerse did not go through a testing round, so these are the goals the flow was built to meet rather than measured results.',
    stats: [
      {
        value: 'Clarity',
        label: 'A visitor can tell what UXVerse is, who it\'s for and why it matters from the first screen.',
      },
      {
        value: 'Lower drop-off',
        label: 'A three-field form and instant confirmation cut the friction that usually ends registration.',
      },
    ],
  },
  learnings: [
    'Trust builds in layers, and a single screen rarely closes the gap between curiosity and commitment.',
    'Credibility comes from evidence, so showing real speakers, partners and past turnout convinces more than telling.',
    'People commit once an experience answers both "is this for me?" and "is this worth it?" before asking them to sign up.',
  ],
  hero: '/case-studies/uxverse/hero.png',
  thumbnail: '/case-studies/uxverse/thumbnail.png',
  screenOrientation: 'desktop',
}
