export interface ProjectItemDef {
  key: string;
  href: string;
  title: string;
  // TODO: short description and description md?
  description?: string;
  /** filename with ext */
  // descriptionMd?: string;
  urls?: Array<{
    name: string;
    url: string;
  }>;
}

export type ProjectItemDefList = ProjectItemDef[];
