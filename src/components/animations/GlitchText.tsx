"use client";

import { cn } from "@/lib/cn";

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GlitchText({ children, className }: GlitchTextProps) {
  return (
    <span
      className={cn("relative inline-block", className)}
      aria-label={typeof children === "string" ? children : undefined}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute inset-0 text-alert-red opacity-0 hover:opacity-70 transition-opacity"
        style={{ clipPath: "inset(20% 0 60% 0)", transform: "translate(-2px)" }}
        aria-hidden
      >
        {children}
      </span>
      <span
        className="absolute inset-0 text-neon-cyan opacity-0 hover:opacity-70 transition-opacity"
        style={{ clipPath: "inset(60% 0 10% 0)", transform: "translate(2px)" }}
        aria-hidden
      >
        {children}
      </span>
    </span>
  );
}
