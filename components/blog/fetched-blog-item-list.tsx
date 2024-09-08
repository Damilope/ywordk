import { useBlogTypeAndItems } from "@/lib/hooks/useBlogType.ts";
import BlogItemList from "./blog-item-list.tsx";

export interface FetchedBlogItemDefListProps {
  pathname: string;
}

export async function FetchedBlogItemDefList(
  props: FetchedBlogItemDefListProps
) {
  const { pathname } = props;
  const { def, items } = await useBlogTypeAndItems(pathname);

  return <BlogItemList blogType={def} blogList={items} />;
}
