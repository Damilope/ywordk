import { useBlogTypeList } from "@/lib/hooks/useBlogTypeList.ts";
import BlogTypeListComponent from "./blog-type-list.tsx";

export async function FetchedBlogTypeList() {
  const blogTypeList = await useBlogTypeList();

  return <BlogTypeListComponent blogTypeList={blogTypeList} />;
}
