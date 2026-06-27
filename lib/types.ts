export interface CaseStudyJourneyStage {
  name: string
  doing: string
  feeling: string
  pain: string
  gap: string
  opportunity: string
  emotion: number
}

export interface CaseStudyJourney {
  stages: CaseStudyJourneyStage[]
  takeaway: string
}

export interface CaseStudyPersona {
  name: string
  age: number
  role: string
  location: string
  quote: string
  intro?: string
  goals: string[]
  frustrations: string[]
  behaviour: string[]
}

export interface CaseStudyInsight {
  title: string
  body: string
}

export interface CaseStudyFlowStep {
  n: number
  name: string
  stage?: string
  keyDecision: string
  why: string
  image?: string
}

export interface CaseStudyFlow {
  note: string
  steps: CaseStudyFlowStep[]
}

export interface CaseStudyPrototype {
  figmaUrl?: string
}

export interface CaseStudyStat {
  value: string
  label: string
}

export interface CaseStudyOutcome {
  summary: string
  stats: CaseStudyStat[]
}

export interface CaseStudyMeta {
  role: string
  year: string
  type: string
}

export interface CaseStudyFacts {
  role: string
  timeline: string
  approach: string
}

export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  format?: 'case-study' | 'showcase'
  meta: CaseStudyMeta
  facts: CaseStudyFacts
  landscape?: string
  problem?: string
  persona?: CaseStudyPersona
  journey?: CaseStudyJourney
  insights?: CaseStudyInsight[]
  flow?: CaseStudyFlow
  prototype?: CaseStudyPrototype
  outcome: CaseStudyOutcome
  learnings?: string[]
  hero?: string
  thumbnail?: string
  screenOrientation?: 'mobile' | 'desktop'
  dek?: string
  links?: { label: string; href: string }[]
  overview?: string
  startingPoint?: {
    intro: string
    problems: string[]
    close: string
  }
  iterations?: {
    intro: string
    steps: {
      title: string
      body: string
      image: string
      resolved?: boolean
    }[]
    close: string
  }
  designDirection?: string
  highlights?: { title: string; description: string }[]
  principles?: { title: string; description: string }[]
  result?: string
  reflection?: string[]
}
