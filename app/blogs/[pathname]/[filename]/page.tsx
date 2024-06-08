import BlogContent from "@/components/blog/Blog.tsx";

export interface BlogFilePageProps {
  params: {
    pathname: string;
    filename: string;
  };
}

export default function BlogFilePage(props: BlogFilePageProps) {
  const { params } = props;

  return <BlogContent {...params} />;
}
