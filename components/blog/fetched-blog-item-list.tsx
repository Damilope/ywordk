import { useBlogTypeAndItems } from "@/lib/hooks/useBlogType.ts";
import Breadcrumbs from "../contexts/breadcrumbs.tsx";
import BlogItemList from "./blog-item-list.tsx";
import { kAppRootPaths } from "@/lib/definitions/system.ts";

export interface FetchedBlogItemDefListProps {
  pathname: string;
}

export async function FetchedBlogItemDefList(
  props: FetchedBlogItemDefListProps
) {
  const { pathname } = props;
  const { def, items } = await useBlogTypeAndItems(pathname);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: kAppRootPaths.home },
          { name: "Blogs", href: kAppRootPaths.blogs },
        ]}
      />
      <BlogItemList blogType={def} blogList={items} />
    </>
  );
}
