// src/components/home/FeatureCallout.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Code2, Rocket, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    label: "Clean Code",
    description: "Readable, maintainable, and well‑tested.",
  },
  {
    icon: Rocket,
    label: "Scalable",
    description: "Built to grow with your business.",
  },
  {
    icon: Shield,
    label: "Reliable",
    description: "Robust and production‑ready.",
  },
  {
    icon: Zap,
    label: "Fast Delivery",
    description: "Agile development, on time.",
  },
];

const fadeUpScroll = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5 },
  },
});

export default function FeatureCallout() {
  return (
    <section className="relative bg-background py-16">
      {/* Subtle glow and separator */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-[#7C3AED]/20 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        {/* Tiny feature cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScroll(0)}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={fadeUpScroll(0.05 * (index + 1))}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="group rounded-xl border border-border/10 bg-surface/30 p-4 text-center transition-all hover:border-[#7C3AED]/30 hover:bg-surface/60 hover:shadow-primary"
              >
                <Icon className="mx-auto h-6 w-6 text-[#7C3AED] transition-colors group-hover:text-[#8B5CF6]" />
                <p className="mt-1.5 text-xs font-medium text-foreground">
                  {item.label}
                </p>
                <p className="mt-0.5 text-[10px] text-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScroll(0.1)}
          className="flex justify-center mt-8"
        >
          <div className="rounded-full bg-[#7C3AED]/10 p-4">
            <Sparkles className="h-8 w-8 text-[#7C3AED]" strokeWidth={1.5} />
          </div>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScroll(0.15)}
          className="mt-6 text-3xl font-bold text-foreground sm:text-4xl"
        >
          I turn complex problems into{" "}
          <span className="bg-linear-to-r from-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">
            simple, elegant solutions
          </span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScroll(0.2)}
          className="mt-4 text-lg text-muted"
        >
          With deep expertise in Django, Laravel, React, and Telegram bots,
          I craft software that’s reliable, scalable, and a joy to use.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScroll(0.3)}
          className="mt-6"
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-1 text-sm font-medium text-[#7C3AED] transition-colors hover:text-[#8B5CF6]"
          >
            Learn more about my approach
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}