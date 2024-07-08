import { BlogDefList } from "@/lib/definitions/blog.ts";
import { kAppRootPaths } from "@/lib/definitions/system.ts";
import Link from "next/link";
import utilstyles from "../../styles/util.module.css";
import { cn } from "../utils.ts";
import { BlogDefComponent } from "./blog-def-item.tsx";
import styles from "./blog.module.css";

export interface BlogDefListProps {
  blogDefList: BlogDefList;
}

export default function BlogDefListComponent(props: BlogDefListProps) {
  const { blogDefList } = props;
  const href = `${kAppRootPaths.blogs}`;

  return (
    <div className={cn(utilstyles.section, utilstyles["main-width"])}>
      <Link href={href}>
        <h3 className={utilstyles["section-title"]}>Blogs</h3>
      </Link>
      {blogDefList.map((blogDef) => (
        <BlogDefComponent
          key={blogDef.pathname}
          blogDef={blogDef}
          className={styles.item}
        />
      ))}
    </div>
  );
}
