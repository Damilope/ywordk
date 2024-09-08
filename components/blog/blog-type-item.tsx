import { BlogType } from "@/lib/definitions/blog.ts";
import { kAppRootPaths } from "@/lib/definitions/system.ts";
import Link from "next/link";
import utilstyles from "../../styles/util.module.css";
import { StyleableComponentProps } from "../types";
import styles from "./blog.module.css";

export interface BlogTypeProps extends StyleableComponentProps {
  blogType: BlogType;
}

export function BlogTypeComponent(props: BlogTypeProps) {
  const { blogType, className, style } = props;
  const href = `${kAppRootPaths.blogs}/${blogType.pathname}`;

  return (
    <div className={className} style={style}>
      <Link href={href}>
        <h4 className={styles.itemTitle}>{blogType.title}</h4>
      </Link>
      {blogType.description && (
        <div className={utilstyles["secondary-text"]}>
          {blogType.description}
        </div>
      )}
    </div>
  );
}
