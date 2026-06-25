// src/components/home/FeaturedProjects.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";
import { GithubIcon } from "@/components/ui/icons";

const featured = projects.filter((p) => p.featured).slice(0, 3);

const fadeUpScroll = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5 },
  },
});

export default function FeaturedProjects() {
  const [first, ...rest] = featured;

  return (
    <section className="relative bg-linear-to-b from-background to-surface py-20">
      {/* Subtle line separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#7C3AED]/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScroll(0)}
          className="flex items-center justify-between"
        >
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#7C3AED]" />
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Featured Projects
              </h2>
            </div>
            <p className="mt-2 text-muted">
              A selection of projects I've built with passion and dedication.
            </p>
          </div>
          <Link
            href="/projects"
            className="group hidden items-center gap-1 text-sm font-medium text-[#7C3AED] transition-colors hover:text-[#8B5CF6] sm:inline-flex"
          >
            View all
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>

        {/* Introduction Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScroll(0.05)}
          className="mt-8 max-w-3xl"
        >
          <p className="text-lg leading-relaxed text-muted">
            Each project below represents a real‑world challenge I've solved,
            from full‑stack web apps to Telegram bots and automation systems.
            I focus on clean architecture, performance, and user experience.
          </p>
        </motion.div>

        {/* Hero Project – Large featured card (first one) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpScroll(0.1)}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="group relative mt-12 overflow-hidden rounded-2xl border border-border/10 bg-surface shadow-lg transition-all hover:border-[#7C3AED]/30 hover:shadow-primary"
        >
          <div className="grid md:grid-cols-[1.4fr_1fr]">
            {/* Image with gradient overlay */}
            <div className="relative aspect-video md:aspect-auto md:h-full">
              <Image
                src={first.image}
                alt={first.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-r from-surface via-transparent to-transparent md:bg-linear-to-l" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-6 md:p-8">
              <div className="mb-3 inline-flex w-fit rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-3 py-1 text-xs font-medium text-[#7C3AED]">
                Featured Project
              </div>
              <h3 className="text-2xl font-bold text-foreground transition-colors group-hover:text-[#7C3AED]">
                {first.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{first.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {first.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/10 bg-background/50 px-3 py-1 text-xs text-muted transition-colors group-hover:border-[#7C3AED]/20 group-hover:text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href={`/projects/${first.id}`}
                  className="group/link inline-flex items-center gap-1 text-sm font-medium text-[#7C3AED] transition-colors hover:text-[#8B5CF6]"
                >
                  View case study
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </Link>
                {first.github && (
                  <a
                    href={first.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-[#7C3AED]"
                  >
                    <GithubIcon className="h-4 w-4" /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Remaining projects – Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpScroll(0.2 + index * 0.1)}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 0 40px rgba(124,58,237,0.12)",
                borderColor: "rgba(124,58,237,0.3)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative overflow-hidden rounded-2xl border border-border/10 bg-surface shadow-sm transition-all hover:bg-surface/80 hover:shadow-primary"
            >
              {/* Image with gradient overlay on hover */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-[#7C3AED]">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/10 bg-background/50 px-2.5 py-0.5 text-[10px] text-muted transition-colors group-hover:border-[#7C3AED]/20 group-hover:text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] text-muted/60">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <Link
                    href={`/projects/${project.id}`}
                    className="group/link inline-flex items-center gap-1 text-sm font-medium text-[#7C3AED] transition-colors hover:text-[#8B5CF6]"
                  >
                    Read more
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition-colors hover:text-[#7C3AED]"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile "View all" link */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScroll(0.5)}
          className="mt-10 text-center sm:hidden"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#7C3AED] transition-colors hover:text-[#8B5CF6]"
          >
            View all projects
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}