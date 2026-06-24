// src/components/home/CaseStudyLayout.tsx
export function CaseStudyLayout() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Telegram Marketplace Platform</h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-2">Problem</h3>
            <p className="text-gray-300">
              Users needed a secure, scalable platform for buying/selling digital goods.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Solution</h3>
            <p className="text-gray-300">
              Designed a Telegram-based marketplace with API integrations and automated moderation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Architecture</h3>
            <p className="text-gray-300">
              Microservices architecture for scalability, Telegram bot API for real-time communication.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Secure marketplace</li>
              <li>Automated moderation</li>
              <li>API integrations</li>
              <li>Real-time notifications</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Engineering Challenges</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Balancing scalability with performance</li>
              <li>Ensuring secure transactions</li>
              <li>Handling high user volume</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Outcome</h3>
            <p className="text-gray-300">
              Served 10k+ active users, reduced onboarding time by 70%, increased transaction volume by 200%.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}