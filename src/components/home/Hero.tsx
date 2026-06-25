// src/components/home/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText,GithubIcon, LinkedinIcon, TelegramIcon, MailIcon } from "@/components/ui/icons";

const socials = [
  { href: "https://github.com/yikeberhub", icon: GithubIcon, label: "GitHub" },
  { href: "https://linkedin.com/in/yikeber-misganaw-735887261", target: "_blance", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://t.me/just_du1t", icon: TelegramIcon, label: "Telegram" },
  { href: "mailto:yikeber50@gmail.com", icon: MailIcon, label: "Email" },
];

// Tech stack for animated tags
const techStack = [
  "Django", "Laravel", "Next.js", "React", 
  "PostgreSQL", "Redis", "Docker", "AWS",
  "Python", "PHP", "TypeScript", "Tailwind"
];

// Animation variants
const fadeUpScroll = (delay: number = 0) => ({
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

      {/* Animated Tech Tags – Background Decoration */}
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
          {techStack.slice().reverse().map((tech, i) => (
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

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        
        {/* Left column */}
        <div className="flex flex-col items-start">
          <motion.span
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUpScroll(0.1)}
            className="mb-6 inline-flex items-center rounded-full border border-border/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8B5CF6]"
          >
            Software Engineer
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUpScroll(0.2)}
            className="text-[40px] font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[52px]"
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
            className="mt-4 text-2xl font-semibold leading-snug text-foreground sm:text-[28px]"
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
            className="mt-5 max-w-130 text-base leading-relaxed text-muted"
          >
            I design and develop modern, reliable and high-performance digital
            solutions that solve real world problems and drive business growth.
          </motion.p>

          {/* CTAs – with CV download */}
          <motion.div
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUpScroll(0.5)}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.div
              whileHover={{ 
                y: -4, 
                scale: 1.04,
                boxShadow: "0 0 40px rgba(124,58,237,0.4)"
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-lg bg-[#7C3AED] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/25 transition-colors hover:bg-[#8B5CF6]"
              >
                View My Work
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ 
                y: -4, 
                scale: 1.04,
                boxShadow: "0 0 30px rgba(124,58,237,0.2)"
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-white/30 hover:bg-white/5"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* CV Download Button */}
            <motion.div
              whileHover={{ 
                y: -4, 
                scale: 1.04,
                boxShadow: "0 0 30px rgba(124,58,237,0.15)"
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a
                href="/cv/yikeber-misganaw-cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-[#7C3AED]/30 px-6 py-3 text-sm font-medium text-[#7C3AED] transition-colors hover:bg-[#7C3AED]/10"
              >
                <FileText />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUpScroll(0.6)}
            className="mt-7 flex items-center gap-4"
          >
            {socials.map(({ href, icon: Icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ 
                  y: -4, 
                  scale: 1.15,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border/10 text-muted transition-colors hover:border-[#7C3AED]/50 hover:text-[#7C3AED]"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right column: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-105"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-5 rounded-lg bg-dot-grid"
            style={{ transform: 'scale(1.15)' }}
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 h-125 w-125 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="absolute inset-0 rounded-full bg-white/10 blur-[80px]" />
            <div className="absolute inset-[10%] rounded-full bg-white/15 blur-[60px]" />
            <div className="absolute inset-0 rounded-full bg-[#7C3AED]/10 blur-[100px]" />
            <div className="absolute inset-[30%] rounded-full bg-[#8B5CF6]/10 blur-[70px]" />
          </div>
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-5 h-150 w-150 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-[#7C3AED]/20 via-[#8B5CF6]/15 to-blue-500/20 blur-[80px]" />
            <div className="absolute inset-[20%] rounded-full bg-linear-to-br from-[#7C3AED]/30 via-[#8B5CF6]/20 to-transparent blur-[60px]" />
            <div className="absolute inset-[40%] rounded-full bg-[#7C3AED]/20 blur-2xl" />
          </div>
          <motion.div
            whileHover={{ 
              scale: 1.04,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="relative aspect-4/5 w-full"
          >
            <Image
              src="/images/about/portrait.png"
              alt="Yikeber Misganaw — Software Engineer"
              fill
              priority
              className="object-contain drop-shadow-2xl drop-shadow-purple-600/30"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.8, duration: 0.3, type: "spring", stiffness: 300 }}
            className="absolute -bottom-2 -right-2 z-20 rounded-full bg-[#7C3AED] p-2 shadow-lg shadow-purple-600/50 ring-2 ring-white/30"
          >
            <div className="h-2 w-2 rounded-full bg-[#22C55E]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Add CSS for marquee animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
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