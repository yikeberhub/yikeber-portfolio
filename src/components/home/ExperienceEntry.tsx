// src/components/home/ExperienceEntry.tsx
import { TimelineItem } from '@/components/ui/TimelineItem'

export function ExperienceEntry() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience Highlights</h2>
        <div className="space-y-8">
          <TimelineItem>
            <h3 className="text-xl font-semibold mb-2">2023</h3>
            <p className="text-gray-300">
              Architected an e-commerce platform with 50k+ monthly active users.
            </p>
          </TimelineItem>
          <TimelineItem>
            <h3 className="text-xl font-semibold mb-2">2022</h3>
            <p className="text-gray-300">
              Designed a Telegram bot system for a SaaS startup.
            </p>
          </TimelineItem>
          <TimelineItem>
            <h3 className="text-xl font-semibold mb-2">2021</h3>
            <p className="text-gray-300">
              Built an AI support flow platform with 95% user satisfaction.
            </p>
          </TimelineItem>
        </div>
      </div>
    </section>
  )
}// src/components/home/ServicesPreview.tsx
import { Card } from '@/components/ui/Card'

export function ServicesPreview() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gray-800 p-6">
            <h3 className="text-xl font-semibold mb-2">Full-stack SaaS Development</h3>
            <p className="text-gray-300">
              Build scalable products from concept to launch.
            </p>
          </Card>
          <Card className="bg-gray-800 p-6">
            <h3 className="text-xl font-semibold mb-2">Telegram Automation Systems</h3>
            <p className="text-gray-300">
              Design bots and platforms for enterprise use.
            </p>
          </Card>
          <Card className="bg-gray-800 p-6">
            <h3 className="text-xl font-semibold mb-2">API Integration & Design</h3>
            <p className="text-gray-300">
              Create seamless integrations for your business.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}