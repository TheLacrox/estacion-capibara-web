interface QuickAnswerProps {
  children: React.ReactNode;
  /** Tailwind accent classes for the border/label; defaults to hazard yellow. */
  borderClass?: string;
  textClass?: string;
}

/**
 * Answer-first box under the hero: a 1-2 sentence direct answer to the
 * query the page targets, before any narrative content.
 */
export function QuickAnswer({
  children,
  borderClass = "border-hazard-yellow/40",
  textClass = "text-hazard-yellow",
}: QuickAnswerProps) {
  return (
    <div className={`mb-8 rounded-sm border-l-2 bg-hull-panel p-5 ${borderClass}`}>
      <p className={`mb-2 font-mono text-xs uppercase tracking-[0.2em] ${textClass}`}>
        Respuesta rápida
      </p>
      <p className="text-sm leading-relaxed text-text-primary">{children}</p>
    </div>
  );
}
