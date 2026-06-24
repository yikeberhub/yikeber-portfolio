// src/components/home/TrustStrip.tsx
"use client";

import { motion } from "framer-motion";
import { Briefcase, Sparkles, Star, CheckCircle } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "3+", icon: Briefcase },
  { label: "Projects Delivered", value: "10+", icon: Sparkles },
  { label: "Technologies", value: "5+", icon: Star },
  { label: "Client Satisfaction", value: "100%", icon: CheckCircle },
];

const fadeUpScroll = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  },
});

export default function TrustStrip() {
  return (
    <section className="relative bg-gradient-to-b from-[#030712] to-[#0B1120] py-10">
      {/* Subtle glow behind the strip */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-[1px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map(({ label, value, icon: Icon }, index) => (
            <motion.div
              key={label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpScroll(index * 0.1)}
              whileHover={{
                y: -6,
                scale: 1.03,
                boxShadow: "0 0 40px rgba(124,58,237,0.15)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-[#7C3AED]/30 hover:bg-white/10"
            >
              {/* Inner glow on hover */}
              <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-[#7C3AED]/0 via-[#7C3AED]/0 to-[#7C3AED]/0 transition-all group-hover:from-[#7C3AED]/5 group-hover:to-[#8B5CF6]/5" />

              {/* Icon + value in a row */}
              <div className="flex items-center justify-center gap-3">
                <Icon className="h-6 w-6 text-[#7C3AED] transition-colors group-hover:text-[#8B5CF6]" strokeWidth={1.8} />
                <span className="text-3xl font-bold text-white transition-colors group-hover:text-[#7C3AED]">
                  {value}
                </span>
              </div>

              {/* Label below */}
              <span className="mt-2 block text-center text-sm text-gray-400 transition-colors group-hover:text-gray-300">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}