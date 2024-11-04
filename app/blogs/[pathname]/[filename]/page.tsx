import FetchBlogContent from "@/components/blog/fetch-blog";
import { useBlogContentInfo } from "@/lib/hooks/useBlogContent.ts";
import { Metadata } from "next";

export interface BlogFilePageProps {
  params: {
    pathname: string;
    filename: string;
  };
}

const getBlogContentInfo = useBlogContentInfo;

export async function generateMetadata(
  props: BlogFilePageProps
): Promise<Metadata> {
  const { pathname, filename } = props.params;
  const { item } = await getBlogContentInfo(pathname, filename);

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

  return <FetchBlogContent {...params} />;
}
