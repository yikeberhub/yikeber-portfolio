// src/app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Award,
  Code2,
  Layout,
  Server,
  Bot,
  ArrowRight,
  MapPin,
  Calendar,
  Star,
  Mail,
  Phone,
  MapPin as MapPinIcon,
  Clock,
} from "lucide-react";
import { aboutData } from "@/data/about";

// Import custom icons from ui/icons
import {
  GithubIcon,
  LinkedinIcon,
  TelegramIcon,
  MailIcon,
} from "@/components/ui/icons";

const iconMap: Record<string, React.ElementType> = {
  Database: Server,
  Layout: Layout,
  Server: Server,
  Bot: Bot,
};

const socialIconMap: Record<string, React.ElementType> = {
  Github: GithubIcon,
  LinkedIn: LinkedinIcon,
  Telegram: TelegramIcon,
  Mail: MailIcon,
};

const fadeUpScroll = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5},
  },
});

export default function AboutPage() {
  return (
    <section className="relative bg-background min-h-screen pt-32 pb-20">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/5 blur-[140px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#7C3AED]/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpScroll(0)}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/10 bg-white/5 px-4 py-1.5 text-sm text-[#8B5CF6]">
            <Sparkles size={14} />
            About Me
          </span>
          <h1 className="mt-6 text-4xl font-bold text-foreground sm:text-5xl">
            Know Me Better
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-muted">
            {aboutData.bio}
          </p>
        </motion.div>

        {/* Bio + Photo – with Hero-style photo treatment */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpScroll(0.1)}
          >
            <h2 className="text-2xl font-semibold text-foreground">My Story</h2>
            <div className="mt-4 space-y-4 text-muted leading-relaxed">
              {aboutData.bioFull.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Photo with Hero-style treatment */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpScroll(0.2)}
            className="relative flex items-center justify-center"
          >
            {/* Dot grid – like Hero */}
            <div
              aria-hidden
              className="absolute inset-0 -z-5 rounded-lg bg-dot-grid"
              style={{ transform: 'scale(1.15)' }}
            />

            {/* Glow behind portrait – like Hero */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-125 w-125 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-[80px]" />
              <div className="absolute inset-[10%] rounded-full bg-white/15 blur-[60px]" />
              <div className="absolute inset-0 rounded-full bg-[#7C3AED]/10 blur-[100px]" />
              <div className="absolute inset-[30%] rounded-full bg-[#8B5CF6]/10 blur-[70px]" />
            </div>

            {/* Rim light – like Hero */}
            <div className="absolute left-1/2 top-1/2 -z-5 h-150 w-150 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 rounded-full bg-linear-to-tr from-[#7C3AED]/20 via-[#8B5CF6]/15 to-blue-500/20 blur-[80px]" />
              <div className="absolute inset-[20%] rounded-full bg-linear-to-br from-[#7C3AED]/30 via-[#8B5CF6]/20 to-transparent blur-[60px]" />
              <div className="absolute inset-[40%] rounded-full bg-[#7C3AED]/20 blur-2xl" />
            </div>

            {/* The person – no background, just the image */}
            <motion.div
              whileHover={{
                scale: 1.04,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="relative aspect-4/5 w-full max-w-105"
            >
              <Image
                src={aboutData.photo}
                alt={aboutData.name}
                fill
                priority
                className="object-contain drop-shadow-2xl drop-shadow-purple-600/30"
              />
            </motion.div>

            {/* Availability badge – like Hero */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.3, type: "spring", stiffness: 300 }}
              className="absolute -bottom-2 -right-2 z-20 rounded-full bg-[#7C3AED] p-2 shadow-lg shadow-purple-600/50 ring-2 ring-white/30"
            >
              <div className="h-2 w-2 rounded-full bg-[#22C55E]" />
            </motion.div>
          </motion.div>
        </div>

        {/* Personal Info */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpScroll(0.25)}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              icon: Mail,
              label: "Email",
              value: aboutData.personal.email,
              href: `mailto:${aboutData.personal.email}`,
            },
            {
              icon: Phone,
              label: "Phone",
              value: aboutData.personal.phone,
              href: `tel:${aboutData.personal.phone.replace(/\s/g, "")}`,
            },
            {
              icon: MapPinIcon,
              label: "Location",
              value: aboutData.personal.country,
              href: "#",
            },
            {
              icon: Clock,
              label: "Timezone",
              value: aboutData.personal.timezone,
              href: "#",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href !== "#" ? "_blank" : undefined}
                rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                initial="hidden"
                animate="visible"
                variants={fadeUpScroll(0.05 * (index + 1))}
                className="flex items-center gap-3 rounded-lg border border-border/5 bg-white/5 px-4 py-3 transition-colors hover:border-[#7C3AED]/30 hover:bg-white/10"
              >
                <Icon className="h-5 w-5 text-[#7C3AED] shrink-0" />
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-sm text-foreground">{item.value}</p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpScroll(0.3)}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <span className="text-sm text-gray-500">Connect with me:</span>
          {aboutData.social.map((social, index) => {
            const Icon = socialIconMap[social.icon] || MailIcon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial="hidden"
                animate="visible"
                variants={fadeUpScroll(0.05 * (index + 1))}
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/10 text-muted transition-colors hover:border-[#7C3AED]/50 hover:text-[#7C3AED]"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Education & Recognition */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpScroll(0.35)}
          className="mt-16 grid gap-12 md:grid-cols-2"
        >
          <div>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-[#7C3AED]" />
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>
            <div className="mt-4 pl-9 border-l border-border/10">
              <h4 className="text-lg font-medium text-foreground">
                {aboutData.education.degree}
              </h4>
              <p className="text-sm text-[#7C3AED] font-medium">
                Field: {aboutData.education.field}
              </p>
              <p className="text-muted">{aboutData.education.institution}</p>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {aboutData.education.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {aboutData.education.year}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">
                {aboutData.education.description}
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-[#7C3AED]" />
              <h3 className="text-xl font-semibold text-foreground">Recognition</h3>
            </div>
            <div className="mt-4 pl-9 border-l border-border/10">
              <h4 className="text-lg font-medium text-foreground">
                Full Year Project Recognition
              </h4>
              <p className="text-sm text-muted">
                Best 3rd Projects in Software Engineering Department
              </p>
              <p className="text-sm text-gray-500">2023</p>
            </div>
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpScroll(0.4)}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#7C3AED]/5 to-transparent rounded-2xl blur-sm" />
          <div className="flex items-start gap-4">
            <Star className="h-6 w-6 text-[#7C3AED] shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-foreground">My Philosophy</h2>
              <p className="mt-2 text-muted leading-relaxed">
                {aboutData.philosophy}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpScroll(0.5)}
          className="mt-20"
        >
          <div className="flex items-center gap-3">
            <Code2 className="h-6 w-6 text-[#7C3AED]" />
            <h2 className="text-2xl font-semibold text-foreground">Skills & Technologies</h2>
          </div>
          <p className="mt-2 text-muted">
            Technologies I work with regularly to build modern solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {aboutData.skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial="hidden"
                animate="visible"
                variants={fadeUpScroll(0.05 * (groupIndex + 1))}
                className="w-full"
              >
                <div className="flex flex-wrap items-center gap-3 py-2">
                  <span className="text-sm font-medium text-[#7C3AED] min-w-25">
                    {skillGroup.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 transition-all hover:border-[#7C3AED]/30 hover:bg-[#7C3AED]/10 hover:text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                {groupIndex < aboutData.skills.length - 1 && (
                  <div className="border-b border-border/5 my-2" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpScroll(0.6)}
          className="mt-20"
        >
          <h2 className="text-xl font-semibold text-foreground">Fun Facts</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {aboutData.funFacts.map((fact, index) => (
              <motion.span
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeUpScroll(0.05 * (index + 1))}
                className="inline-flex items-center gap-2 rounded-full border border-border/5 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-[#7C3AED]/30 hover:bg-[#7C3AED]/10"
              >
                <span className="text-lg">{fact.split(" ")[0]}</span>
                <span>{fact.slice(fact.indexOf(" ") + 1)}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpScroll(0.7)}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold text-foreground">
            Want to work together?
          </h3>
          <p className="mt-2 text-muted">
            I am always open to discussing new projects and opportunities.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#7C3AED] px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[#8B5CF6]"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-border/10 px-6 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-[#7C3AED]/30 hover:text-foreground"
            >
              View My Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}