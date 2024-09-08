import { BlogTypeList } from "@/lib/definitions/blog.ts";
import { kAppRootPaths } from "@/lib/definitions/system.ts";
import Link from "next/link";
import utilstyles from "../../styles/util.module.css";
import { cn } from "../utils.ts";
import { BlogTypeComponent } from "./blog-type-item.tsx";
import styles from "./blog.module.css";

export interface BlogTypeListProps {
  blogTypeList: BlogTypeList;
}

export default function BlogTypeListComponent(props: BlogTypeListProps) {
  const { blogTypeList } = props;
  const href = `${kAppRootPaths.blogs}`;

  return (
    <div className={cn(utilstyles.section, utilstyles["main-width"])}>
      <Link href={href}>
        <h3 className={utilstyles["section-title"]}>Blogs</h3>
      </Link>
      {blogTypeList.map((blogType) => (
        <BlogTypeComponent
          key={blogType.pathname}
          blogType={blogType}
          className={styles.item}
        />
      ))}
    </div>
  );
}
