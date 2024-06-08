import BlogDefListComponent from "./blog-def-list.tsx";
import { getBlogDefList } from "./getBlogDefList.ts";

export async function FetchedBlogDefList() {
  const blogDefList = await getBlogDefList();

  return <BlogDefListComponent blogDefList={blogDefList} />;
}
