import { BlogDef, BlogItemDef } from "@/lib/definitions/blog.ts";
import utilstyles from "../../styles/util.module.css";
import { cn } from "../utils.ts";
import { BlogItem } from "./blog-item.tsx";
import styles from "./blog.module.css";

export interface BlogItemListProps {
  blogDef: BlogDef;
  blogList: BlogItemDef[];
}

export default function BlogItemList(props: BlogItemListProps) {
  const { blogList, blogDef } = props;

  return (
    <div className={cn(utilstyles.section, utilstyles["main-width"])}>
      <h3 className={utilstyles["section-title"]}>{blogDef.title}</h3>
      {blogList.map((blog) => (
        <BlogItem
          key={blog.filename}
          blogItemDef={blog}
          blogDef={blogDef}
          className={styles.item}
        />
      ))}
    </div>
  );
}
