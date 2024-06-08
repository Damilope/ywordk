import { kConstants } from "@/lib/definitions/system.ts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { normalize } from "path";

// TODO: use a TTL map so cached data can refresh
const blogContentMap = new Map<string, string>();

async function getBlogContent(pathname: string, filename: string) {
  const filepath = normalize(
    `${kConstants.blogsFolder}/${pathname}/${filename}.mdx`
  );

  const filepathURL = new URL(filepath, kConstants.serverURL);
  // TODO: set an appropriate cache policy
  const response = await fetch(filepathURL, { cache: "no-cache" });
  const content = await response.text();

  return content;
}

export interface BlogContentProps {
  pathname: string;
  filename: string;
}

export default async function BlogContent(props: BlogContentProps) {
  const { pathname, filename } = props;
  const content = await getBlogContent(pathname, filename);

  return <MDXRemote source={content} />;
}
