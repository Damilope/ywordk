import FimidaraBackedBlogList from "@/components/FimidaraBackedBlogList";
import { appRootPaths, systemConstants } from "@/lib/definitions/system";

export default function OverEngineeredBlogListPage() {
  return (
    <FimidaraBackedBlogList
      title="OverEngineered Blog"
      filepath={systemConstants.overengineeredBlogListFilepath}
      getBlogHref={(blog) => appRootPaths.overengineeredBlog(blog.filename)}
    />
  );
}
