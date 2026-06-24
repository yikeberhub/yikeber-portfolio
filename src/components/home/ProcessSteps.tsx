// src/components/home/ProcessSteps.tsx
import { TimelineItem } from '@/components/ui/TimelineItem'

export function ProcessSteps() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">How I Solve Business Problems</h2>
        <div className="space-y-8">
          <TimelineItem>
            <h3 className="text-xl font-semibold mb-2">Collaborate with stakeholders</h3>
            <p className="text-gray-300">
              Define business goals and user needs to align with real-world challenges.
            </p>
          </TimelineItem>
          <TimelineItem>
            <h3 className="text-xl font-semibold mb-2">Build MVPs</h3>
            <p className="text-gray-300">
              Validate assumptions quickly and iterate based on feedback.
            </p>
          </TimelineItem>
          <TimelineItem>
            <h3 className="text-xl font-semibold mb-2">Engineer scalable systems</h3>
            <p className="text-gray-300">
              Design systems that grow with your business and handle high demand.
            </p>
          </TimelineItem>
        </div>
      </div>
    </section>
  )
}