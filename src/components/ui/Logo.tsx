// src/components/ui/Logo.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface LogoProps {
  variant?: "default" | "compact" | "full";
  className?: string;
  showText?: boolean;
}

export function Logo({
  variant = "default",
  className = "",
  showText = true,
}: LogoProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const size = variant === "compact" ? 28 : variant === "full" ? 40 : 32;
  const textSize =
    variant === "compact"
      ? "text-xs"
      : variant === "full"
      ? "text-base"
      : "text-sm";

  // Choose logo variant based on theme
  const logoSrc = mounted && theme === "light" 
    ? "/logo.svg" // Light mode logo (or use a different one)
    : "/logo.svg"; // Dark mode logo

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center gap-2 ${className}`}
    >
      <div className="relative flex items-center justify-center">
        <Image
          src={logoSrc}
          alt="Yikeber Misganaw"
          width={size}
          height={size}
          className="h-auto w-auto"
          priority
        />
      </div>
      {showText && (
        <span className={`${textSize} font-medium text-foreground`}>
          Yikeber<span className="text-[#7C3AED]">.</span>
        </span>
      )}
    </motion.div>
  );
}