export interface ServerSeoSection {
  title: string;
  paragraphs: string[];
  points?: string[];
}

export interface ServerSeoGame {
  name: string;
  description: string;
  /** Internal path (e.g. "/scp/") linked from the ItemList JSON-LD entry. */
  url?: string;
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
  /** ISO date (YYYY-MM-DD) the landing page was first published. */
  datePublished?: string;
  /** 1-2 sentence direct answer to the page's target query, shown under the hero. */
  quickAnswer?: string;
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
