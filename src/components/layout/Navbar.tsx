// src/components/layout/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import {ThemeToggle}  from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/10 bg-background/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo variant="default" showText={true} />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? "text-[#7C3AED]"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-lg bg-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-[#8B5CF6] md:inline-flex"
          >
  Let&apos;s Talk          
</Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/10 text-foreground md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-border/10 bg-surface px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block text-sm font-medium ${
                      active ? "text-[#7C3AED]" : "text-muted"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/contact"
                className="mt-2 inline-flex w-full justify-center rounded-lg bg-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-foreground"
              >
Let&apos;s Talk              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}