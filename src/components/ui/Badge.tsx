import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export function Badge({ children, color, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider",
        className
      )}
      style={{
        borderColor: color || "var(--color-grid-line)",
        color: color || "var(--color-text-muted)",
        backgroundColor: color
          ? `color-mix(in srgb, ${color} 10%, transparent)`
          : undefined,
      }}
    >
      {children}
    </span>
  );
}
