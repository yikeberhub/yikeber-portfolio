// src/components/home/CtaBand.tsx
import { Button } from '@/components/ui/Button'

export function CtaBand() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s build your next product</h2>
        <p className="text-gray-300 mb-8">
          I design and build software that solves real business problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" size="lg">
            Contact me
          </Button>
          <Button variant="secondary" size="lg">
            View my work
          </Button>
        </div>
      </div>
    </section>
  )
}