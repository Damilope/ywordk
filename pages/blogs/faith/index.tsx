import FimidaraBackedBlogList from "@/components/FimidaraBackedBlogList";
import { appRootPaths, systemConstants } from "@/lib/definitions/system";

export default function FaithBlogListPage() {
  return (
    <FimidaraBackedBlogList
      title="Faith Blog"
      filepath={systemConstants.faithBlogListFilepath}
      getBlogHref={(blog) => appRootPaths.faithBlog(blog.filename)}
    />
  );
}
