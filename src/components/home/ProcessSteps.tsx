// src/components/home/ProcessSteps.tsx
"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Discovery",
    description: "We discuss your goals, challenges, and requirements.",
  },
  {
    number: 2,
    title: "Design",
    description: "I create a blueprint and architecture for your solution.",
  },
  {
    number: 3,
    title: "Development",
    description: "I build and iterate using modern technologies.",
  },
  {
    number: 4,
    title: "Launch & Support",
    description: "Deploy, monitor, and provide ongoing support.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-[#030712]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">My Process</h2>
          <p className="mt-2 text-gray-400">
            How I turn ideas into reality.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7C3AED]/10 text-xl font-bold text-[#7C3AED]">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-16 top-6 h-[2px] w-[calc(100%-64px)] bg-gradient-to-r from-[#7C3AED]/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}