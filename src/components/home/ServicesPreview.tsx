// src/components/home/ServicesPreview.tsx
"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import * as Icons from "lucide-react";

// Map icon strings to Lucide components
const iconMap: Record<string, any> = {
  Send: Icons.Send,
  Cpu: Icons.Cpu,
  Database: Icons.Database,
  Layout: Icons.Layout,
  // add more if needed
};

const fadeUpScroll = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5 },
  },
});

export default function ServicesPreview() {
  return (
    <section className="relative bg-linear-to-b from-surface to-background py-20">
      {/* Subtle line separator at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#7C3AED]/20 to-transparent" />

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
            My Services
          </h2>
          <p className="mt-2 text-muted">
            What I can do to help you grow your business.
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-[#7C3AED] to-[#8B5CF6]" />
        </motion.div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Icons.HelpCircle;
            return (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUpScroll(index * 0.1)}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(124,58,237,0.15)",
                  borderColor: "rgba(124,58,237,0.4)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group relative rounded-xl border border-border/10 bg-surface/50 p-6 backdrop-blur-sm transition-all hover:border-[#7C3AED]/30 hover:bg-surface hover:shadow-primary"
              >
                {/* Hover inner glow */}
                <div className="absolute inset-0 -z-10 rounded-xl bg-linear-to-br from-[#7C3AED]/0 via-[#7C3AED]/0 to-[#7C3AED]/0 transition-all group-hover:from-[#7C3AED]/5 group-hover:to-[#8B5CF6]/5" />

                {/* Icon with ring */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7C3AED]/10 transition-all group-hover:bg-[#7C3AED]/20 group-hover:scale-105">
                  <Icon className="h-7 w-7 text-[#7C3AED] transition-colors group-hover:text-[#8B5CF6]" />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-semibold text-foreground transition-colors group-hover:text-[#7C3AED]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-muted transition-colors group-hover:text-foreground/80">
                  {service.description}
                </p>

                {/* Tech stack snippet */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.technologies?.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border/10 bg-background/50 px-2.5 py-0.5 text-[10px] text-muted transition-colors group-hover:border-[#7C3AED]/20 group-hover:text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Subtle "Learn more" link */}
                <div className="mt-5 flex items-center gap-1 text-sm font-medium text-[#7C3AED] opacity-0 transition-all group-hover:opacity-100">
                  Learn more
                  <Icons.ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}