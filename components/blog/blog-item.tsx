import { BlogEntry, BlogType } from "@/lib/definitions/blog.ts";
import { kAppRootPaths } from "@/lib/definitions/system.ts";
import { formatDate } from "@/lib/utils/dateFns.ts";
import { Pin } from "lucide-react";
import Link from "next/link";
import utilstyles from "../../styles/util.module.css";
import { StyleableComponentProps } from "../types";
import { cn } from "../utils.ts";
import styles from "./blog.module.css";

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
        {blogItemDef.pinned && <Pin className="w-4 h-4" />}
        <Link href={href}>{blogItemDef.title}</Link>
      </div>
      {blogItemDef.description && (
        <div className={utilstyles["secondary-text"]}>
          {blogItemDef.description}
        </div>
      )}
      <div
        className={cn(utilstyles["secondary-text"], styles.itemPublishedDate)}
      >
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
