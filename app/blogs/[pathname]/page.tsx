import { FetchedBlogItemDefList } from "@/components/blog/fetched-blog-item-list.tsx";
import { useBlogType } from "@/lib/hooks/useBlogType.ts";
import { Metadata } from "next";

export interface blogTypePageProps {
  params: {
    pathname: string;
  };
}

const getBlogType = useBlogType;

export async function generateMetadata(
  props: blogTypePageProps
): Promise<Metadata> {
  const { pathname } = props.params;
  const { blogType } = await getBlogType(pathname);

  return {
    title: blogType?.title,
    description: blogType?.description,
    authors: [{ name: "Abayomi Akintomide" }],
    twitter: {
      title: blogType?.title,
      description: blogType?.description,
      creator: "@ywordk",
    },
  };
}

export default function BlogTypePage(props: blogTypePageProps) {
  const { params } = props;
  const { pathname } = params;

  return <FetchedBlogItemDefList pathname={pathname} />;
}
