import BlogContent from "@/components/blog/Blog.tsx";
import { useBlogContentInfo } from "@/lib/hooks/useBlogContent.ts";
import { Metadata } from "next";

export interface BlogFilePageProps {
  params: {
    pathname: string;
    filename: string;
  };
}

export async function generateMetadata(
  props: BlogFilePageProps
): Promise<Metadata> {
  const { pathname, filename } = props.params;
  const { item } = await useBlogContentInfo(pathname, filename);

  return {
    title: item?.title,
    description: item?.description,
    authors: [{ name: "Abayomi Akintomide" }],
    twitter: {
      title: item?.title,
      description: item?.description,
      creator: "@ywordk",
    },
  };
}

export default function BlogFilePage(props: BlogFilePageProps) {
  const { params } = props;

  return <BlogContent {...params} />;
}
