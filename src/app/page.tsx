// src/app/page.tsx
import Hero from '@/components/home/Hero';
import TrustStrip from '@/components/home/TrustStrip';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import CredibilitySection from '@/components/home/CredibilitySection';
import ProcessSteps from '@/components/home/ProcessSteps';
import ServicesPreview from '@/components/home/ServicesPreview';
import CtaBand from '@/components/home/CtaBand';
import FeatureCallout from '@/components/home/FeatureCallout';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <Hero />

      

      {/* trustStrip Section */}
      <TrustStrip />
      <FeatureCallout />         
      <FeaturedProjects />
      <ServicesPreview />
      <ProcessSteps />
      <CredibilitySection />
      <CtaBand />
    </div>
  )
}