// src/components/home/FeatureCallout.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const fadeUpScroll = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  },
});

export default function FeatureCallout() {
  return (
    <section className="relative bg-[#030712] py-16">
      {/* Subtle glow behind */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScroll(0)}
          className="flex justify-center"
        >
          <div className="rounded-full bg-[#7C3AED]/10 p-4">
            <Sparkles className="h-8 w-8 text-[#7C3AED]" strokeWidth={1.5} />
          </div>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScroll(0.1)}
          className="mt-6 text-3xl font-bold text-white sm:text-4xl"
        >
          I turn complex problems into{" "}
          <span className="bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">
            simple, elegant solutions
          </span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScroll(0.2)}
          className="mt-4 text-lg text-gray-400"
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