import { BlogType } from "@/lib/definitions/blog.ts";
import { kAppPaths } from "@/lib/definitions/paths.ts";
import Link from "next/link";
import { StyleableComponentProps } from "../types";
import styles from "./blog.module.css";

export interface BlogTypeProps extends StyleableComponentProps {
  blogType: BlogType;
}

export function BlogTypeComponent(props: BlogTypeProps) {
  const { blogType, className, style } = props;
  const href = kAppPaths.blogType(blogType.pathname);

  return (
    <div className={className} style={style}>
      <Link href={href}>
        <h4 className={styles.itemTitle}>{blogType.title}</h4>
      </Link>
      {blogType.description && (
        <div className="text-sm text-muted-foreground">
          {blogType.description}
        </div>
      )}
    </div>
  );
}
