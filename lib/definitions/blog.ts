export interface BlogDef {
  title: string;
  pathname: string;
  description?: string;
}

export interface BlogItemDef {
  /** filename without ext */
  filename: string;
  createdAt: string;
  lastUpdatedAt: string;
  title: string;
  description?: string;
}

export type BlogDefList = BlogDef[];
export type BlogItemDefList = BlogItemDef[];
