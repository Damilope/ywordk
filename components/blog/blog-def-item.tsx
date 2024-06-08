import { BlogDef } from "@/lib/definitions/blog.ts";
import { kAppRootPaths } from "@/lib/definitions/system.ts";
import Link from "next/link";
import utilstyles from "../../styles/util.module.css";
import { StyleableComponentProps } from "../types";
import styles from "./blog.module.css";

export interface BlogDefProps extends StyleableComponentProps {
  blogDef: BlogDef;
}

export function BlogDefComponent(props: BlogDefProps) {
  const { blogDef, className, style } = props;
  const href = `${kAppRootPaths.blogs}/${blogDef.pathname}`;

  return (
    <div className={className} style={style}>
      <Link href={href}>
        <h4 className={styles.itemTitle}>{blogDef.title}</h4>
      </Link>
      {blogDef.description && (
        <div className={utilstyles["secondary-text"]}>
          {blogDef.description}
        </div>
      )}
    </div>
  );
}
