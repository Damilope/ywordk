import { useBlogContent } from "@/lib/hooks/useBlogContent.ts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Head from "next/head";
import utilstyles from "../../styles/util.module.css";

export interface BlogContentProps {
  pathname: string;
  filename: string;
}

export default async function BlogContent(props: BlogContentProps) {
  const { pathname, filename } = props;
  const { content, item } = await useBlogContent(pathname, filename);

  return (
    <div className={utilstyles.section}>
      <Head>
        <title>{item?.title}</title>
      </Head>
      <MDXRemote source={content} />
    </div>
  );
}
