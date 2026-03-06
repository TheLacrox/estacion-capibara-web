"use client";

import { cn } from "@/lib/cn";

interface GlowTextProps {
  children: React.ReactNode;
  color?: "yellow" | "cyan" | "purple";
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
}

export function GlowText({
  children,
  color = "yellow",
  as: Tag = "span",
  className,
}: GlowTextProps) {
  const glowClasses = {
    yellow: "text-hazard-yellow text-glow-yellow",
    cyan: "text-neon-cyan text-glow-cyan",
    purple: "text-nebula-purple",
  };

  return (
    <Tag className={cn(glowClasses[color], className)}>{children}</Tag>
  );
}
