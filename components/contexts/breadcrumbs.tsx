"use client";

import { useSetPageBreadcrumbs } from "./useBreadcrumbs.tsx";

export interface BreadcrumbsProps {
  items: Array<{ name: string; href: string }>;
}

export default function Breadcrumbs(props: BreadcrumbsProps) {
  const { items } = props;
  useSetPageBreadcrumbs(items);

  return null;
}
