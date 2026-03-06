"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";

interface TerminalTextProps {
  text: string;
  speed?: number;
  className?: string;
  startDelay?: number;
  onComplete?: () => void;
}

export function TerminalText({
  text,
  speed = 50,
  className,
  startDelay = 0,
  onComplete,
}: TerminalTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) {
      onComplete?.();
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, started, text, speed, onComplete]);

  return (
    <span className={cn("font-mono", className)}>
      {displayed}
      <span className="animate-pulse">_</span>
    </span>
  );
}
