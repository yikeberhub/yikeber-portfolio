// src/components/layout/CtaBand.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="relative bg-surface py-16">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foregroundsm:text-4xl">
            Ready to build something{" "}
            <span className="bg-linear-to-r from-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">
              amazing together?
            </span>
          </h2>
          <p className="mt-3 text-muted">
            Let us discuss your project and turn your ideas into reality.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#7C3AED] px-8 py-3 text-sm font-semibold text-foregroundtransition-colors hover:bg-[#8B5CF6]"
            >
              Get in touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}