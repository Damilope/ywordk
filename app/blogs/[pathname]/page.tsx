import { FetchedBlogItemDefList } from "@/components/blog/fetched-blog-item-list.tsx";

export interface BlogDefPageProps {
  params: {
    pathname: string;
  };
}

export default function BlogDefPage(props: BlogDefPageProps) {
  const { params } = props;
  const { pathname } = params;

  return <FetchedBlogItemDefList pathname={pathname} />;
}
