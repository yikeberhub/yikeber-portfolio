// src/components/layout/Footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GithubIcon,
  LinkedinIcon,
  TelegramIcon,
  MailIcon,
} from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/yikeberhub", icon: GithubIcon, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/yikeber-misganaw-735887261/",
    icon: LinkedinIcon,
    label: "LinkedIn",
  },
  { href: "https://t.me/just_du1t", icon: TelegramIcon, label: "Telegram" },
  { href: "mailto:yikeber50@gmail.com", icon: MailIcon, label: "Email" },
];

// ✅ Make sure this is `export default`
export default function Footer() {
  return (
    <footer className="relative border-t border-border/5 bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#7C3AED]/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Link href="/" className="flex items-center gap-2">
            <Logo variant="compact" showText={true} />
          </Link>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-muted transition-colors  hover:text-forground"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

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
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/10 text-muted transition-colors hover:border-[#7C3AED]/50 hover:text-[#7C3AED]"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border/5 pt-6 text-xs text-gray-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Yikeber Misganaw. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}