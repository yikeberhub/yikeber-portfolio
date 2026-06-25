// src/components/home/CredibilitySection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  Calendar,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const fadeUpScroll = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5 },
  },
});

const education = {
  title: "BSc in Software Engineering",
  period: "2021 – 2025",
  description:
    "Graduated from Bahir Dar University with a strong foundation in software engineering principles, system design, database systems, algorithms, and full-stack application development.",
};

const recognition = {
  title: "3rd Place Final Year Project Award",
  period: "2025",
  description:
    "Awarded 3rd Place in the Software Engineering Faculty Final Year Project Competition for Balemuya, a location-based service marketplace connecting customers with verified professionals through real-time matching and booking workflows.",
};

export default function CredibilitySection() {
  return (
    <section className="relative bg-linear-to-b from-[rgb(var(--color-bg))] to-[rgb(var(--color-surface))] py-20">
      {/* Subtle glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-[#7C3AED]/20 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/5 blur-[140px]" />
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
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Education & Recognition
          </h2>
          <p className="mt-2 text-muted">
            The academic foundation and achievements behind the platforms and
            systems I build today.
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-[#7C3AED] to-[#8B5CF6]" />
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
              <div className="mt-2 h-full w-px bg-linear-to-b from-[#7C3AED]/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {education.title}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full border border-border/10 bg-surface/50 px-3 py-0.5 text-xs text-muted">
                  <Calendar size={12} />
                  {education.period}
                </span>
              </div>
              <p className="mt-2 max-w-xl text-muted">
                {education.description}
              </p>
            </div>
          </motion.div>

          {/* Recognition + Certificate */}
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
            </div>

            {/* Content */}
            <div className="flex-1 pb-4">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {recognition.title}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full border border-border/10 bg-surface/50 px-3 py-0.5 text-xs text-muted">
                  <Calendar size={12} />
                  {recognition.period}
                </span>
              </div>
              <p className="mt-2 max-w-xl text-muted">
                {recognition.description}
              </p>

              {/* 🏆 Certificate Card */}
              <motion.div
                variants={fadeUpScroll(0.25)}
                className="mt-4 rounded-xl border border-[#7C3AED]/20 bg-[#7C3AED]/5 p-4 transition-all hover:border-[#7C3AED]/40"
              >
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  {/* Certificate Thumbnail */}
                  <div className="relative w-full max-w-[120px] overflow-hidden rounded-lg border border-border/10 shadow-md">
                    <Image
                      src="/certificates/balemuya-certificate.png"
                      alt="Balemuya Certificate - 3rd Place"
                      width={120}
                      height={85}
                      className="h-auto w-full object-cover"
                    />
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-1.5">
                      <Award className="h-4 w-4 text-[#7C3AED]" />
                      <span className="text-sm font-medium text-foreground">
                        3rd Place - Software Engineering Competition
                      </span>
                    </div>
                    <p className="text-xs text-muted">
                      Awarded for Balemuya project • Bahir Dar University, 2025
                    </p>
                    <a
                      href="/certificates/balemuya-certificate.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-[#7C3AED] transition-colors hover:text-[#8B5CF6]"
                    >
                      View Certificate <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
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