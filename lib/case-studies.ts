import type { CaseStudy } from './types'
import { infrawealth } from '@/content/case-studies/infrawealth'
import { uxverse } from '@/content/case-studies/uxverse'

export const caseStudies: CaseStudy[] = [infrawealth, uxverse]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug)
}
