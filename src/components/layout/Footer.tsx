import Link from "next/link";
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
    <footer className="border-t border-border/10 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent">
              YM
            </span>
            <span className="text-sm font-medium text-muted">Yikeber Misganaw</span>
          </Link>

          {/* Nav links */}
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/10 text-muted transition hover:border-accent/50 hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-2 border-t border-border/10 pt-6 text-xs text-subtle md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Yikeber Misganaw. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}