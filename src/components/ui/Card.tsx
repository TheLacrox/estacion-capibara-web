"use client";

import { cn } from "@/lib/cn";
import { type HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glowColor?: string;
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, glowColor, hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-sm border border-grid-line bg-hull-panel p-6 transition-all duration-300",
          hover && "hover:border-hazard-yellow/50 hover:shadow-[0_0_30px_rgba(241,196,15,0.1)]",
          className
        )}
        style={
          glowColor
            ? ({ "--glow-color": glowColor } as React.CSSProperties)
            : undefined
        }
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
