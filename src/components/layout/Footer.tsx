// src/components/layout/Footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, TelegramIcon, MailIcon } from "@/components/ui/icons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/yourhandle", icon: GithubIcon, label: "GitHub" },
  { href: "https://linkedin.com/in/yourhandle", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://t.me/yikeber_dev", icon: TelegramIcon, label: "Telegram" },
  { href: "mailto:yikebermisganaw.dev@gmail.com", icon: MailIcon, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#030712]">
      {/* Subtle glow separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7C3AED]/10 text-sm font-bold text-[#7C3AED]">
              YM
            </span>
            <span className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
              Yikeber Misganaw
            </span>
          </Link>

          {/* Navigation links */}
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socials.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -2, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-colors hover:border-[#7C3AED]/50 hover:text-[#7C3AED]"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-white/5 pt-6 text-xs text-gray-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Yikeber Misganaw. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}