// src/components/home/TrustStrip.tsx
"use client";

import { motion } from "framer-motion";
import { Briefcase, Sparkles, Star, CheckCircle } from "lucide-react";

const stats = [
  { label: "Years Building Software", value: "4+", icon: Briefcase },
  { label: "Projects Built", value: "10+", icon: Sparkles },
  { label: "Platforms Developed", value: "5+", icon: Star },
  { label: "Technologies Used", value: "10+", icon: CheckCircle },
];

const fadeUpScroll = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5 },
  },
});

export default function TrustStrip() {
  return (
    <section className="relative bg-linear-to-b from-background to-surface py-16">
      {/* Subtle glow and separator */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-[#7C3AED]/20 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScroll(0)}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Building Software That Solves Real Problems
          </h2>
          <p className="mt-2 text-muted">
            A snapshot of the platforms, automation systems, and applications I
            have built throughout my software engineering journey.
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-[#7C3AED] to-[#8B5CF6]" />
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map(({ label, value, icon: Icon }, index) => (
            <motion.div
              key={label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpScroll(0.1 + index * 0.05)}
              whileHover={{
                y: -6,
                scale: 1.03,
                boxShadow: "0 0 40px rgba(124,58,237,0.15)",
                borderColor: "rgba(124,58,237,0.4)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative rounded-xl border border-border/10 bg-surface/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-surface/80 hover:shadow-primary"
            >
              {/* Inner glow on hover */}
              <div className="absolute inset-0 -z-10 rounded-xl bg-linear-to-br from-[#7C3AED]/0 via-[#7C3AED]/0 to-[#7C3AED]/0 transition-all duration-300 group-hover:from-[#7C3AED]/5 group-hover:to-[#8B5CF6]/5" />

              {/* Icon + value in a row */}
              <div className="flex items-center justify-center gap-3">
                <Icon
                  className="h-7 w-7 text-[#7C3AED] transition-colors duration-300 group-hover:text-[#8B5CF6]"
                  strokeWidth={1.8}
                />
                <span className="text-4xl font-bold text-foreground transition-colors duration-300 group-hover:text-[#7C3AED]">
                  {value}
                </span>
              </div>

              {/* Label below */}
              <span className="mt-2 block text-center text-sm text-muted transition-colors duration-300 group-hover:text-foreground/80">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}