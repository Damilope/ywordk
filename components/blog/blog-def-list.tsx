import { cx } from "@emotion/css";
import utilstyles from "../../styles/util.module.css";
import { BlogDefComponent } from "./blog-def-item.tsx";
import styles from "./blog.module.css";
import { BlogDefList } from "@/lib/definitions/blog.ts";

export interface BlogDefListProps {
  blogDefList: BlogDefList;
}

export default function BlogDefListComponent(props: BlogDefListProps) {
  const { blogDefList } = props;

  return (
    <div className={cx(utilstyles.section, utilstyles["main-width"])}>
      <h3 className={utilstyles["section-title"]}>Blogs</h3>
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
