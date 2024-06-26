import { useErrorNode } from "@/hooks/useErrorNode.tsx";
import { useRequest } from "ahooks";
import { getFimidaraEndpoints } from "../lib/api/fimidaraEndpoints";
import PageLoading from "./PageLoading";
import PageMessage from "./PageMessage";
import BlogContent from "./blog/Blog";

export interface IFimidaraBackedBlogProps {
  filepath: string;
}

export default function FimidaraBackedBlog(props: IFimidaraBackedBlogProps) {
  const { filepath } = props;
  const blogHook = useBlog(filepath);
  const errorNode = useErrorNode(blogHook.error);

  if (errorNode) {
    return <PageMessage message={errorNode} />;
  } else if (blogHook.loading || !blogHook.data) {
    return <PageLoading />;
  }

  return <BlogContent text={blogHook.data} />;
}

function useBlog(filepath: string) {
  async function getBlog() {
    const result = await getFimidaraEndpoints().files.readFile({
      body: { filepath },
    });
    return await result.body.text();
  }

  const blogHook = useRequest(getBlog);
  return blogHook;
}
