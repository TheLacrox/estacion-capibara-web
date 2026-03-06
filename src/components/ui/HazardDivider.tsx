import { cn } from "@/lib/cn";

interface HazardDividerProps {
  className?: string;
}

export function HazardDivider({ className }: HazardDividerProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="hazard-stripe h-2" />
      <div className="h-0.5 bg-hazard-orange" />
    </div>
  );
}
