import { BlogDef, BlogItemDef } from "@/lib/definitions/blog.ts";
import { kAppRootPaths } from "@/lib/definitions/system.ts";
import { formatDate } from "@/lib/utils/dateFns.ts";
import Link from "next/link";
import utilstyles from "../../styles/util.module.css";
import { StyleableComponentProps } from "../types";
import { cn } from "../utils.ts";
import styles from "./blog.module.css";

export interface BlogItemProps extends StyleableComponentProps {
  blogItemDef: BlogItemDef;
  blogDef: BlogDef;
}

export function BlogItem(props: BlogItemProps) {
  const { blogDef, blogItemDef, className, style } = props;
  const href = `${kAppRootPaths.blogs}/${blogDef.pathname}/${blogItemDef.filename}`;
  const published = `Published ${formatDate(blogItemDef.createdAt)}`;
  const lastUpdated =
    blogItemDef.lastUpdatedAt !== blogItemDef.createdAt
      ? `Last updated ${formatDate(blogItemDef.createdAt)}`
      : "";

  return (
    <div className={className} style={style}>
      <Link href={href}>{blogItemDef.title}</Link>
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
