import { BlogEntry, BlogType } from "@/lib/definitions/blog.ts";
import { kAppRootPaths } from "@/lib/definitions/system.ts";
import { formatDate } from "@/lib/utils/dateFns.ts";
import { Pin } from "lucide-react";
import Link from "next/link";
import { StyleableComponentProps } from "../types";

export interface BlogItemProps extends StyleableComponentProps {
  blogItemDef: BlogEntry;
  blogType: BlogType;
}

export function BlogItem(props: BlogItemProps) {
  const { blogType, blogItemDef, className, style } = props;
  const href = `${kAppRootPaths.blogs}/${blogType.pathname}/${blogItemDef.filename}`;
  const published = `Published ${formatDate(blogItemDef.createdAt)}`;
  const lastUpdated =
    blogItemDef.lastUpdatedAt !== blogItemDef.createdAt
      ? `Last updated ${formatDate(blogItemDef.createdAt)}`
      : "";

  return (
    <div className={className} style={style}>
      <div className="flex items-center space-x-2">
        {blogItemDef.pinned && (
          <Pin className="w-4 h-4 text-muted-foreground" />
        )}
        <Link href={href}>{blogItemDef.title}</Link>
      </div>
      {blogItemDef.description && (
        <div className="text-sm text-muted-foreground">
          {blogItemDef.description}
        </div>
      )}
      <div className="text-sm text-muted-foreground">
        {published}
        {lastUpdated ? (
          <>
            <span>&nbsp;—&nbsp;</span>
            {lastUpdated}
          </>
        ) : null}
      </div>
    </div>
  );
}
