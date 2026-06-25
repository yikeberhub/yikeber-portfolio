// src/app/projects/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Code2, FolderGit2, Terminal, Database } from "lucide-react";
import { projects, Project } from "@/data/projects";

const fadeUpScroll = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, },
  },
});

const categories = [
  { label: "All", value: "all", icon: Sparkles },
  { label: "Full Stack", value: "fullstack", icon: Code2 },
  { label: "Backend", value: "backend", icon: Database },
  { label: "Telegram", value: "telegram", icon: Terminal },
  { label: "Automation", value: "automation", icon: FolderGit2 },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative bg-background min-h-screen pt-32 pb-20">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/5 blur-[140px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#7C3AED]/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpScroll(0)}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/10 bg-white/5 px-4 py-1.5 text-sm text-[#8B5CF6]">
            <FolderGit2 size={14} />
            My Work
          </div>
          <h1 className="mt-6 text-4xl font-bold text-foreground sm:text-5xl">Projects</h1>
          <p className="mt-3 max-w-2xl mx-auto text-muted">
            A collection of projects I've built with passion and dedication.
            Each one solves a real-world problem.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpScroll(0.1)}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            const Icon = cat.icon;
            return (
              <motion.button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#7C3AED] text-foreground shadow-lg shadow-[#7C3AED]/25"
                    : "border border-border/10 bg-transparent text-muted hover:border-[#7C3AED]/30 hover:text-foreground"
                }`}
              >
                <Icon size={14} />
                {cat.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpScroll(0.2)}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUpScroll(0.1 + index * 0.05)}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: "0 0 40px rgba(124,58,237,0.12)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="group relative overflow-hidden rounded-xl border border-border/5 bg-surface transition-all hover:border-[#7C3AED]/30 hover:bg-surface/80"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.featured && (
          <div className="absolute top-3 left-3 rounded-full bg-[#7C3AED] px-3 py-1 text-[10px] font-semibold text-foreground">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-[#7C3AED]">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{project.description}</p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/5 bg-white/5 px-2.5 py-0.5 text-[10px] text-gray-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[10px] text-gray-500">+{project.tags.length - 3}</span>
          )}
        </div>

        {/* Links */}
        <div className="mt-4 flex items-center gap-4">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-[#7C3AED] transition-colors hover:text-[#8B5CF6]"
          >
            View Details
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 transition-colors hover:text-[#7C3AED]"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}