// src/components/home/CredibilitySection.tsx
import { Card } from '@/components/ui/Card'

export function CredibilitySection() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Proven Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800 p-6">
            <p className="text-gray-300">
              Architected a Telegram marketplace that scaled to 10k+ active users.
            </p>
          </Card>
          <Card className="bg-gray-800 p-6">
            <p className="text-gray-300">
              Designed an AI support flow platform with 95% user satisfaction.
            </p>
          </Card>
          <Card className="bg-gray-800 p-6">
            <p className="text-gray-300">
              Built an e-commerce platform that reduced onboarding time by 70%.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}