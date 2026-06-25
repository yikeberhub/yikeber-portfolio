// src/components/home/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, GithubIcon, LinkedinIcon, TelegramIcon, MailIcon } from "@/components/ui/icons";

const socials = [
  { href: "https://github.com/yikeberhub", icon: GithubIcon, label: "GitHub" },
  {
    href: "https://linkedin.com/in/yikeber-misganaw-735887261",
    icon: LinkedinIcon,
    label: "LinkedIn",
  },
  { href: "https://t.me/just_du1t", icon: TelegramIcon, label: "Telegram" },
  { href: "mailto:yikeber50@gmail.com", icon: MailIcon, label: "Email" },
];

// Tech stack for animated tags
const techStack = [
  "Django",
  "Laravel",
  "Next.js",
  "React",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
  "Python",
  "PHP",
  "TypeScript",
  "Tailwind",
];

// Animation variants
const fadeUpScroll = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6 },
  },
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Hero Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-200 w-200 -translate-x-1/2 -translate-y-1/2 bg-hero-glow blur-[80px]"
      />

      {/* Animated Tech Tags */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute left-0 top-20 flex animate-marquee gap-8 whitespace-nowrap">
          {techStack.map((tech, i) => (
            <span
              key={`${tech}-1`}
              className="text-sm font-mono font-medium text-[#7C3AED]/20"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="absolute bottom-20 right-0 flex animate-marquee-reverse gap-8 whitespace-nowrap">
          {techStack
            .slice()
            .reverse()
            .map((tech, i) => (
              <span
                key={`${tech}-2`}
                className="text-sm font-mono font-medium text-[#8B5CF6]/15"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {tech}
              </span>
            ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Grid: Text | Photo */}
        <div className="grid grid-cols-[1.2fr_0.8fr] items-start gap-4 sm:gap-6 lg:items-center lg:gap-16">
          {/* Left column: Text */}
          <div className="flex flex-col items-start">
            <motion.span
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeUpScroll(0.1)}
              className="mb-3 inline-flex items-center rounded-full border border-border/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8B5CF6] sm:mb-6 sm:px-4 sm:py-1.5 sm:text-[11px]"
            >
              Software Engineer
            </motion.span>

            <motion.h1
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeUpScroll(0.2)}
              className="text-[24px] font-bold leading-[1.1] tracking-tight text-foreground sm:text-[40px] lg:text-[52px]"
            >
              Hi, I&apos;m{" "}
              <span className="bg-linear-to-r from-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">
                Yikeber Misganaw
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeUpScroll(0.3)}
              className="mt-2 text-base font-semibold leading-snug text-foreground sm:mt-4 sm:text-2xl lg:text-[28px]"
            >
              I build scalable{" "}
              <span className="text-[#7C3AED]">web applications, Telegram bots</span>{" "}
              &amp; automation systems.
            </motion.p>

            <motion.p
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeUpScroll(0.4)}
              className="mt-3 max-w-130 text-xs leading-relaxed text-muted sm:mt-5 sm:text-base"
            >
              I design and develop modern, reliable and high-performance digital
              solutions that solve real world problems and drive business growth.
            </motion.p>

            {/* CTAs - Desktop only (hidden on mobile) */}
            <motion.div
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeUpScroll(0.5)}
              className="mt-5 hidden flex-wrap items-center gap-3 sm:mt-8 sm:flex sm:gap-4"
            >
              <motion.div
                whileHover={{
                  y: -4,
                  scale: 1.04,
                  boxShadow: "0 0 40px rgba(124,58,237,0.4)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-lg bg-[#7C3AED] px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-purple-600/25 transition-colors hover:bg-[#8B5CF6] sm:px-6 sm:py-3 sm:text-sm"
                >
                  View My Work
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -4,
                  scale: 1.04,
                  boxShadow: "0 0 30px rgba(124,58,237,0.2)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-transparent px-5 py-2.5 text-xs font-semibold text-gray-300 transition-colors hover:border-white/30 hover:bg-white/5 sm:px-6 sm:py-3 sm:text-sm"
                >
                  Contact Me
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -4,
                  scale: 1.04,
                  boxShadow: "0 0 30px rgba(124,58,237,0.15)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <a
                  href="/cv/yikeber-misganaw-cv.pdf"
                  download
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#7C3AED]/30 px-5 py-2.5 text-xs font-medium text-[#7C3AED] transition-colors hover:bg-[#7C3AED]/10 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
                >
                  <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
                  Download CV
                </a>
              </motion.div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeUpScroll(0.6)}
              className="mt-4 flex items-center gap-3 sm:mt-7 sm:gap-4"
            >
              {socials.map(({ href, icon: Icon, label }) => (
                <motion.div
                  key={label}
                  whileHover={{
                    y: -4,
                    scale: 1.15,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-border/10 text-muted transition-colors hover:border-[#7C3AED]/50 hover:text-[#7C3AED] sm:h-9 sm:w-9"
                  >
                    <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[140px] sm:max-w-[200px] lg:max-w-[420px]"
          >
            {/* Dot grid background */}
            <div
              aria-hidden
              className="absolute inset-0 -z-5 rounded-lg bg-dot-grid"
              style={{ transform: "scale(1.15)" }}
            />

            {/* Glow behind portrait */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -z-10 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 sm:h-[250px] sm:w-[250px] lg:h-[500px] lg:w-[500px]"
            >
              <div className="absolute inset-0 rounded-full bg-white/10 blur-[80px]" />
              <div className="absolute inset-[10%] rounded-full bg-white/15 blur-[60px]" />
              <div className="absolute inset-0 rounded-full bg-[#7C3AED]/10 blur-[100px]" />
              <div className="absolute inset-[30%] rounded-full bg-[#8B5CF6]/10 blur-[70px]" />
            </div>

            {/* Rim light */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -z-5 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 sm:h-[300px] sm:w-[300px] lg:h-[600px] lg:w-[600px]"
            >
              <div className="absolute inset-0 rounded-full bg-linear-to-tr from-[#7C3AED]/20 via-[#8B5CF6]/15 to-blue-500/20 blur-[80px]" />
              <div className="absolute inset-[20%] rounded-full bg-linear-to-br from-[#7C3AED]/30 via-[#8B5CF6]/20 to-transparent blur-[60px]" />
              <div className="absolute inset-[40%] rounded-full bg-[#7C3AED]/20 blur-2xl" />
            </div>

            {/* Image container with smooth bottom edge */}
            <div className="relative aspect-4/5 w-full">
              <div className="absolute inset-0 rounded-xl shadow-2xl shadow-[#7C3AED]/10" />
              <Image
                src="/images/about/portrait.png"
                alt="Yikeber Misganaw — Software Engineer"
                fill
                priority
                className="object-contain drop-shadow-2xl drop-shadow-purple-600/30"
              />

              {/* Smooth bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-linear-to-t from-background via-background/80 to-transparent rounded-b-xl" />
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.8,
                duration: 0.3,
                type: "spring",
                stiffness: 300,
              }}
              className="absolute -bottom-2 -right-2 z-20 rounded-full bg-[#7C3AED] p-1 shadow-lg shadow-purple-600/50 ring-2 ring-white/30 sm:p-2"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[#22C55E] sm:h-2 sm:w-2" />
            </motion.div>
          </motion.div>
        </div>

        {/* CTAs - Mobile only (below the photo) */}
        <motion.div
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpScroll(0.5)}
          className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:hidden"
        >
          <motion.div
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg bg-[#7C3AED] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-purple-600/25 transition-colors hover:bg-[#8B5CF6]"
            >
              View My Work
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-transparent px-4 py-2 text-xs font-semibold text-gray-300 transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a
              href="/cv/yikeber-misganaw-cv.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#7C3AED]/30 px-4 py-2 text-xs font-medium text-[#7C3AED] transition-colors hover:bg-[#7C3AED]/10"
            >
              <FileText className="h-3 w-3" />
              CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS for marquee animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </section>
  );
}