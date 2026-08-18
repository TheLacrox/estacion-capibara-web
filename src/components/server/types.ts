import type { LucideIcon } from "lucide-react";

export interface ServerPageFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  wikiHref?: string;
  wikiLabel?: string;
}

export interface ShowcaseJob {
  id: string;
  name: string;
  salary?: number;
  startingBalance?: number;
}

export interface ShowcaseDepartment {
  id: string;
  name: string;
  color: string;
  icon: LucideIcon;
  description: string;
  jobs: ShowcaseJob[];
}
