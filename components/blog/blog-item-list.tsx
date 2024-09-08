import { BlogEntry, BlogType } from "@/lib/definitions/blog.ts";
import { useMemo } from "react";
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

  const sortedItems = useMemo(
    () =>
      blogList.sort(
        (a, b) =>
          new Date(b.lastUpdatedAt).valueOf() -
          new Date(a.lastUpdatedAt).valueOf()
      ),
    [blogList]
  );

  return (
    <div className={cn(utilstyles.section, utilstyles["main-width"])}>
      <h3 className={utilstyles["section-title"]}>{blogType.title}</h3>
      {sortedItems.map((blog) => (
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
