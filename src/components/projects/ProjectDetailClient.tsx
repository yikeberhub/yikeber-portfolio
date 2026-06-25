// src/components/projects/ProjectDetailClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "@/components/ui/icons";

const fadeUpScroll = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5},
  },
});

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <>
      {/* Back Button */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpScroll(0)}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpScroll(0.1)}
        className="mt-6 relative aspect-video overflow-hidden rounded-xl border border-border/5"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Title & Meta */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpScroll(0.2)}
        className="mt-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
              {project.title}
            </h1>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/5 bg-white/5 px-3 py-1 text-xs text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border/10 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-[#7C3AED]/30 hover:text-foreground"
              >
                <GithubIcon/>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#7C3AED] px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[#8B5CF6]"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpScroll(0.3)}
        className="mt-8"
      >
        <h2 className="text-xl font-semibold text-foreground">Overview</h2>
        <p className="mt-3 text-muted leading-relaxed">
          {project.fullDescription || project.description}
        </p>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpScroll(0.4)}
        className="mt-8"
      >
        <h2 className="text-xl font-semibold text-foreground">Tech Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-border/5 bg-white/5 px-4 py-2 text-sm text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Screenshots (if available) */}
      {project.screenshots && project.screenshots.length > 0 && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpScroll(0.5)}
          className="mt-8"
        >
          <h2 className="text-xl font-semibold text-foreground">Screenshots</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {project.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-lg border border-border/5"
              >
                <Image
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* CTA */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpScroll(0.6)}
        className="mt-12 rounded-xl border border-border/5 bg-white/5 p-8 text-center backdrop-blur-sm"
      >
        <Sparkles className="mx-auto h-8 w-8 text-[#7C3AED]" />
        <h3 className="mt-3 text-xl font-semibold text-foreground">Interested in this project?</h3>
        <p className="mt-1 text-sm text-muted">
          I'm always open to discussing my work and collaborations.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#7C3AED] px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-[#8B5CF6]"
        >
          Let's Talk
        </Link>
      </motion.div>
    </>
  );
}