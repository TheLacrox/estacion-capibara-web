export interface ServerSeoSection {
  title: string;
  paragraphs: string[];
  points?: string[];
}

export interface ServerSeoGame {
  name: string;
  description: string;
  free: boolean;
  features: Record<string, boolean>;
  highlighted?: boolean;
}

export interface ServerSeoGamesBlock {
  heading: string;
  intro: string;
  columns: { key: string; label: string }[];
  entries: ServerSeoGame[];
}

export interface ServerSeoPageData {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  searchQueries: string[];
  eyebrow: string;
  sections: ServerSeoSection[];
  games?: ServerSeoGamesBlock;
  faqs: { question: string; answer: string }[];
  wikiLinks: { label: string; href: string }[];
  relatedPages: { label: string; href: string; description: string }[];
}
