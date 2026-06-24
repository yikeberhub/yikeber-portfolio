// src/app/page.tsx
import Hero  from '@/components/home/Hero'
import { CredibilitySection } from '@/components/home/CredibilitySection'
import { ProcessSteps } from '@/components/home/ProcessSteps'
import { CaseStudyLayout } from '@/components/home/CaseStudyLayout'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { ExperienceEntry } from '@/components/home/ExperienceEntry'
import { CtaBand } from '@/components/home/CtaBand'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <Hero />

      {/* Credibility Section */}
      <CredibilitySection />

      {/* Core Expertise */}
      <ProcessSteps />

      {/* Featured Project (Case Study) */}
      <CaseStudyLayout />

      {/* Services Preview */}
      <ServicesPreview />

      {/* Experience Highlights */}
      <ExperienceEntry />

      {/* Final CTA */}
      <CtaBand />
    </div>
  )
}