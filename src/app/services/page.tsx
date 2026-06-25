// src/app/services/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Code2,
  Send,
  Cpu,
  Database,
  Layout,
} from "lucide-react";
import { services } from "@/data/services";

// Map icon strings to Lucide components
const iconMap: Record<string, any> = {
  Send: Send,
  Cpu: Cpu,
  Database: Database,
  Layout: Layout,
};

const fadeUpScroll = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, },
  },
});

export default function ServicesPage() {
  return (
    <section className="relative bg-background min-h-screen pt-32 pb-20">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/5 blur-[140px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#7C3AED]/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpScroll(0)}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/10 bg-white/5 px-4 py-1.5 text-sm text-[#8B5CF6]">
            <Sparkles size={14} />
            What I Offer
          </span>
          <h1 className="mt-6 text-4xl font-bold text-foreground sm:text-5xl">
            My Services
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-muted">
            I help businesses build scalable, reliable, and high-performance
            digital solutions that drive growth and streamline operations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 space-y-12">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <motion.div
                key={service.id}
                initial="hidden"
                animate="visible"
                variants={fadeUpScroll(0.1 + index * 0.1)}
                className="group relative"
              >
                {/* Subtle background glow on hover */}
                <div className="absolute -inset-4 -z-10 rounded-2xl bg-linear-to-r from-[#7C3AED]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
                  {/* Left: Icon + Title */}
                  <div className="flex items-start gap-4 lg:block">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/10">
                      <Icon className="h-6 w-6 text-[#7C3AED]" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-foreground group-hover:text-[#7C3AED] transition-colors">
                        {service.title}
                      </h2>
                      <p className="mt-1 text-sm text-muted lg:hidden">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div>
                    <p className="hidden text-sm text-muted lg:block">
                      {service.description}
                    </p>
                    <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Features */}
                    <div className="mt-4 grid gap-1.5 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-[#7C3AED] shrink-0"
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border/5 bg-white/5 px-3 py-1 text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Separator line between services */}
                {index < services.length - 1 && (
                  <div className="mt-8 border-t border-border/5" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Me Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpScroll(0.5)}
          className="mt-20 rounded-xl border border-border/5 bg-white/5 p-8 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-semibold text-foreground text-center">
            Why Choose Me?
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Technical Excellence",
                description:
                  "I write clean, maintainable code that follows best practices and industry standards.",
              },
              {
                title: "Clear Communication",
                description:
                  "I keep you informed throughout the process, ensuring we're always aligned.",
              },
              {
                title: "Reliable Delivery",
                description:
                  "I deliver on time, with thorough testing and deployment support.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                animate="visible"
                variants={fadeUpScroll(0.05 * (index + 1))}
                className="text-center"
              >
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpScroll(0.6)}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold text-foreground">
            Ready to build something amazing?
          </h3>
          <p className="mt-2 text-muted">
            Let's discuss your project and how I can help you achieve your goals.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#7C3AED] px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[#8B5CF6]"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-border/10 px-6 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-[#7C3AED]/30 hover:text-foreground"
            >
              View My Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}