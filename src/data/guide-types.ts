export interface GuideTreeNode {
  id: string;
  slug: string;
  title: string;
  children: GuideTreeNode[];
}

export interface GuidePage {
  id: string;
  slug: string;
  title: string;
  content: string;
  parentSlug: string | null;
  breadcrumb: { slug: string; title: string }[];
  childSlugs: string[];
}

export interface GuideMeta {
  title: string;
  slug: string;
}
