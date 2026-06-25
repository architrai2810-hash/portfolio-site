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
  meta: CaseStudyMeta
  facts: CaseStudyFacts
  landscape: string
  problem: string
  persona: CaseStudyPersona
  journey: CaseStudyJourney
  insights: CaseStudyInsight[]
  flow: CaseStudyFlow
  prototype: CaseStudyPrototype
  outcome: CaseStudyOutcome
  learnings: string[]
  hero?: string
  thumbnail?: string
}
