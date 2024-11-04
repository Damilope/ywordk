import { useBlogContent } from "@/lib/hooks/useBlogContent.ts";
import RenderBlogContent from "./render-blog.tsx";

export interface FetchBlogContentProps {
  pathname: string;
  filename: string;
}

export default async function FetchBlogContent(props: FetchBlogContentProps) {
  const { pathname, filename } = props;
  const { content, item, def } = await useBlogContent(pathname, filename);

  return <RenderBlogContent content={content} item={item} def={def} />;
}
