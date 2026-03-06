"use client";

import { cn } from "@/lib/cn";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  glow?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", glow, children, href, onClick, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-heading font-bold uppercase tracking-wider transition-all duration-300 rounded-sm border-2";

    const variants = {
      primary:
        "bg-hazard-yellow text-space-void border-hazard-yellow hover:bg-hazard-orange hover:border-hazard-orange",
      outline:
        "bg-transparent text-text-primary border-text-muted hover:border-hazard-yellow hover:text-hazard-yellow",
      ghost:
        "bg-transparent text-text-muted border-transparent hover:text-text-primary hover:bg-hull-panel",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (href) {
        if (href.startsWith("#")) {
          e.preventDefault();
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: "smooth" });
        } else {
          window.open(href, "_blank", "noopener,noreferrer");
        }
      }
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          glow && variant === "primary" && "glow-yellow",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
