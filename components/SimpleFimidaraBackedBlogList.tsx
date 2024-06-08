import { useLoadBlogList } from "@/hooks/useBlogList.tsx";
import { useErrorNode } from "@/hooks/useErrorNode.tsx";
import { IBlogInfo } from "../lib/definitions/types";
import utilstyles from "../styles/util.module.css";
import SimpleBlogList from "./SimpleBlogList";

export interface ISimpleFimidaraBackedBlogListProps {
  filepath: string;
  showMoreHref: string;
  getBlogHref: (bloginfo: IBlogInfo) => string;
}

export default function SimpleFimidaraBackedBlogList(
  props: ISimpleFimidaraBackedBlogListProps
) {
  const { filepath, showMoreHref, getBlogHref } = props;
  const blogsHook = useLoadBlogList(filepath);
  const errorNode = useErrorNode(blogsHook.error);

  if (errorNode) {
    return <div className={utilstyles["secondary-text"]}>{errorNode}</div>;
  } else if (blogsHook.loading || !blogsHook.data) {
    return <div className={utilstyles["secondary-text"]}>Loading...</div>;
  } else if (blogsHook.data.length === 0) {
    return (
      <div className={utilstyles["secondary-text"]}>
        No blogs yet, come back later.
      </div>
    );
  }

  return (
    <SimpleBlogList
      blogList={blogsHook.data}
      showMoreHref={showMoreHref}
      getBlogHref={getBlogHref}
    />
  );
}
