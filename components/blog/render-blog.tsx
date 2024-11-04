import { BlogEntry, BlogType } from "@/lib/definitions/blog.ts";
import { kAppPaths } from "@/lib/definitions/paths.ts";
import { kAppRootPaths } from "@/lib/definitions/system.ts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Head from "next/head";
import rehypeHighlight from "rehype-highlight";
import utilstyles from "../../styles/util.module.css";
import Breadcrumbs from "../contexts/breadcrumbs.tsx";

export interface RenderBlogContentProps {
  content: string;
  item: BlogEntry | undefined;
  def: BlogType;
}

export default function RenderBlogContent(props: RenderBlogContentProps) {
  const { content, def, item } = props;

  return (
    <div className={utilstyles.section}>
      <Breadcrumbs
        items={[
          { name: "Home", href: kAppRootPaths.home },
          { name: "Blogs", href: kAppRootPaths.blogs },
          { name: def.title, href: kAppPaths.blogType(def.pathname) },
        ]}
      />
      <Head>
        <title>{item?.title}</title>
      </Head>
      <MDXRemote
        source={content}
        options={{
          parseFrontmatter: true,
          mdxOptions: {
            rehypePlugins: [rehypeHighlight],
          },
        }}
      />
    </div>
  );
}
