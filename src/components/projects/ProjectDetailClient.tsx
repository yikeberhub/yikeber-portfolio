// src/components/projects/ProjectDetailClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Sparkles, Code2, Award } from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "@/components/ui/icons";

const fadeUpScroll = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5 },
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
        className="mb-6"
      >
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to Projects
        </Link>
      </motion.div>

      {/* Image – Full width, clean, no overlay */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpScroll(0.1)}
        className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border/10 bg-surface"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Title & Meta – Below image, clean and prominent */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpScroll(0.15)}
        className="mt-8"
      >
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {project.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/10 bg-surface px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpScroll(0.2)}
        className="mt-6 flex flex-wrap items-center gap-3"
      >
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#7C3AED] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#8B5CF6]"
          >
            <ExternalLink size={16} /> Preview Project
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border/10 bg-surface px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-[#7C3AED]/30 hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
        )}
      </motion.div>

      {/* Overview – Clean, no card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpScroll(0.25)}
        className="mt-10"
      >
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-[#7C3AED]" />
          <h2 className="text-lg font-semibold text-foreground">Overview</h2>
        </div>
        <div className="mt-3 border-l-2 border-[#7C3AED] pl-5">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {project.fullDescription || project.description}
          </p>
        </div>
      </motion.div>

      {/* 🏆 Certificate Section - Only for Balemuya Project */}
      {project.id === "balemuya" && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpScroll(0.3)}
          className="mt-10"
        >
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-[#7C3AED]" />
            <h2 className="text-lg font-semibold text-foreground">Certificate</h2>
          </div>
          <div className="mt-3 rounded-xl border border-[#7C3AED]/20 bg-[#7C3AED]/5 p-6">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
              {/* Certificate Image */}
              <div className="relative w-full max-w-[300px] overflow-hidden rounded-lg border border-border/10 shadow-lg">
                <Image
                  src="/certificates/balemuya-certificate.png"
                  alt="Balemuya Project Certificate - 3rd Place Software Engineering Competition"
                  width={300}
                  height={212}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Certificate Details */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-3 py-1 text-xs font-medium text-[#7C3AED]">
                  🏆 Award Winner
                </div>
                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  3rd Place - Final Year Software Engineering Project Competition
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Recognized among the Top 3 Projects in the Software Engineering
                  Faculty Final Year Project Competition for innovation and practical
                  impact.
                </p>
                <p className="mt-2 text-xs text-muted/60">2023 • Bahir Dar University</p>

                {/* View Certificate Button */}
                <a
                  href="/certificates/balemuya-certificate.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-[#7C3AED] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#8B5CF6]"
                >
                  <ExternalLink size={14} /> View Full Certificate
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tech Stack – Clean tags */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpScroll(0.35)}
        className="mt-10"
      >
        <h2 className="text-lg font-semibold text-foreground">Tech Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/10 bg-surface px-4 py-1.5 text-sm text-muted"
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
          variants={fadeUpScroll(0.4)}
          className="mt-10"
        >
          <h2 className="text-lg font-semibold text-foreground">Screenshots</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {project.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-lg border border-border/10 bg-surface"
              >
                <Image
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
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
        variants={fadeUpScroll(0.5)}
        className="mt-16 rounded-xl border border-border/10 bg-surface p-8 text-center"
      >
        <Sparkles className="mx-auto h-8 w-8 text-[#7C3AED]" />
        <h3 className="mt-3 text-xl font-semibold text-foreground">
          Interested in this project?
        </h3>
        <p className="mt-1 text-sm text-muted">
          I&apos;m always open to discussing my work and collaborations.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#7C3AED] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#8B5CF6]"
        >
          Let&apos;s Talk
        </Link>
      </motion.div>
    </>
  );
}