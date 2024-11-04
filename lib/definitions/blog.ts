export interface BlogType {
  title: string;
  pathname: string;
  description?: string;
}

export interface BlogEntry {
  /** filename without ext */
  filename: string;
  createdAt: string;
  lastUpdatedAt: string;
  title: string;
  description?: string;
  pinned?: boolean;
}

export type BlogTypeList = BlogType[];
export type BlogEntryList = BlogEntry[];
