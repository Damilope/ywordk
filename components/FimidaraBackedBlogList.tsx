import { useLoadBlogList } from "@/hooks/useBlogList.tsx";
import { useErrorNode } from "@/hooks/useErrorNode.tsx";
import { IBlogInfo } from "../lib/definitions/types";
import PageLoading from "./PageLoading";
import PageMessage from "./PageMessage";
import BlogItemList from "./blog/blog-item-list";

export interface IFimidaraBackedBlogListProps {
  title: string;
  filepath: string;
  getBlogHref: (bloginfo: IBlogInfo) => string;
}

export default function FimidaraBackedBlogList(
  props: IFimidaraBackedBlogListProps
) {
  const { filepath, title, getBlogHref } = props;
  const blogsHook = useLoadBlogList(filepath);
  const errorNode = useErrorNode(blogsHook.error);

  if (errorNode) {
    return <PageMessage message={errorNode} />;
  } else if (blogsHook.loading || !blogsHook.data) {
    return <PageLoading />;
  } else if (blogsHook.data.length === 0) {
    return <PageMessage message="No blogs yet, come back later." />;
  }

  return (
    <BlogItemList
      title={title}
      blogList={blogsHook.data}
      getBlogHref={getBlogHref}
    />
  );
}
