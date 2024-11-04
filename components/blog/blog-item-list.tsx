import { BlogEntry, BlogType } from "@/lib/definitions/blog.ts";
import utilstyles from "../../styles/util.module.css";
import { cn } from "../utils.ts";
import { BlogItem } from "./blog-item.tsx";
import styles from "./blog.module.css";

export interface BlogItemListProps {
  blogType: BlogType;
  blogList: BlogEntry[];
}

export default function BlogItemList(props: BlogItemListProps) {
  const { blogList, blogType } = props;

  return (
    <div className={cn(utilstyles.section, utilstyles["main-width"])}>
      <h3 className={utilstyles["section-title"]}>{blogType.title}</h3>
      {blogList.map((blog) => (
        <BlogItem
          key={blog.filename}
          blogItemDef={blog}
          blogType={blogType}
          className={styles.item}
        />
      ))}
    </div>
  );
}
