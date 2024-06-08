export interface BookItemDef {
  key: string;
  /** filename with ext */
  filename: string;
  createdAt: string;
  lastUpdatedAt: string;
  title: string;
  // TODO: short description and description md?
  description?: string;
  /** filename with ext */
  descriptionMd?: string;
}

export type BookItemDefList = BookItemDef[];
