// src/components/home/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TelegramIcon, MailIcon } from "@/components/ui/icons";
import { Briefcase, Sparkles, Star } from "lucide-react";

const socials = [
  { href: "https://github.com/yourhandle", icon: GithubIcon, label: "GitHub" },
  { href: "https://linkedin.com/in/yourhandle", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://t.me/yikeber_dev", icon: TelegramIcon, label: "Telegram" },
  { href: "mailto:yikebermisganaw.dev@gmail.com", icon: MailIcon, label: "Email" },
];
const stats = [
  { label: "Years Experience", value: "3+", icon: Briefcase },
  { label: "Projects Delivered", value: "10+", icon: Sparkles },
  { label: "Technologies", value: "5+", icon: Star },
  { label: "Client Satisfaction", value: "100%", icon: Star },
];


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full bg-indigo-600/20 blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        {/* ---------- Left column: copy ---------- */}
        <div className="flex flex-col items-start">
          {/* Eyebrow / status pill */}
          <span className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-300">
            Software Engineer
          </span>

          {/* Headline */}
          <h1 className="text-[40px] font-bold leading-[1.1] tracking-tight text-zinc-50 sm:text-5xl lg:text-[52px]">
            Hi, I&apos;m{" "}
            <span className="text-indigo-400">Yikeber Misganaw</span>
          </h1>

          <p className="mt-4 text-2xl font-semibold leading-snug text-zinc-100 sm:text-[28px]">
            I build scalable{" "}
            <span className="text-indigo-400">web applications, Telegram bots</span>{" "}
            &amp; automation systems.
          </p>

          {/* Supporting paragraph */}
          <p className="mt-5 max-w-[520px] text-base leading-relaxed text-zinc-400">
            I design and develop modern, reliable and high-performance digital
            solutions that solve real world problems and drive business growth.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400 active:scale-[0.98]"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-white/30 hover:bg-white/5"
            >
              Contact Me
            </Link>
          </div>

          {/* Social row */}
          <div className="mt-7 flex items-center gap-4">
            {socials.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-indigo-400/50 hover:text-indigo-400"
              >
             <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>

          {/* Stats strip */}
          <div className="mt-12 grid w-full grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex flex-col gap-2">
                <Icon size={16} strokeWidth={1.8} className="text-indigo-400" />
                <span className="text-xl font-bold text-zinc-50">{value}</span>
                <span className="text-xs leading-snug text-zinc-500">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Right column: portrait ---------- */}
        <div className="relative mx-auto w-full max-w-[420px]">
          {/* Dot-grid texture */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px]"
          />
          {/* Glow behind portrait */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/30 blur-[80px]"
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/about/portrait.jpg"
              alt="Yikeber Misganaw — Software Engineer"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}