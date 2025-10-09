import { getBlogTypeList } from "@/lib/hooks/useBlogTypeList.ts";
import BlogTypeListComponent from "./blog-type-list.tsx";

export async function FetchedBlogTypeList() {
  const blogTypeList = await getBlogTypeList();

  return <BlogTypeListComponent blogTypeList={blogTypeList} />;
}
