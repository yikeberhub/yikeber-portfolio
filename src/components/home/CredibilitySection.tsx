// src/components/home/CredibilitySection.tsx
"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const fadeUpScroll = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  },
});

const education = {
  title: "BSc in Software Engineering",
  period: "2016 – 2020",
  description:
    "Graduated with a focus on artificial intelligence, data structures, algorithms, and system design.",
};

const recognition = {
  title: "Top 3 Projects in Software Engineering Department",
  period: "2023",
  description:
    "Full Year Project Recognition for outstanding contribution and innovation.",
};

export default function CredibilitySection() {
  return (
    <section className="relative bg-gradient-to-b from-[#030712] to-[#0B1120] py-20">
      {/* Subtle glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/5 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScroll(0)}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            My Background
          </h2>
          <p className="mt-2 text-gray-400">
            A foundation built on education and recognition.
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6]" />
        </motion.div>

        {/* Timeline-style items */}
        <div className="mt-12 space-y-10">
          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpScroll(0.1)}
            className="relative flex gap-6 sm:gap-8"
          >
            {/* Icon + vertical line */}
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7C3AED]/10">
                <GraduationCap className="h-6 w-6 text-[#7C3AED]" />
              </div>
              <div className="mt-2 h-full w-px bg-gradient-to-b from-[#7C3AED]/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-xl font-semibold text-white">
                  {education.title}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/5 bg-white/5 px-3 py-0.5 text-xs text-gray-400">
                  <Calendar size={12} />
                  {education.period}
                </span>
              </div>
              <p className="mt-2 max-w-xl text-gray-400">
                {education.description}
              </p>
            </div>
          </motion.div>

          {/* Recognition */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpScroll(0.2)}
            className="relative flex gap-6 sm:gap-8"
          >
            {/* Icon */}
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7C3AED]/10">
                <Award className="h-6 w-6 text-[#7C3AED]" />
              </div>
              {/* No line after the last item */}
            </div>

            {/* Content */}
            <div className="flex-1 pb-4">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-xl font-semibold text-white">
                  {recognition.title}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/5 bg-white/5 px-3 py-0.5 text-xs text-gray-400">
                  <Calendar size={12} />
                  {recognition.period}
                </span>
              </div>
              <p className="mt-2 max-w-xl text-gray-400">
                {recognition.description}
              </p>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpScroll(0.3)}
            className="flex justify-center pt-6"
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-1 text-sm font-medium text-[#7C3AED] transition-colors hover:text-[#8B5CF6]"
            >
              Learn more about my journey
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}