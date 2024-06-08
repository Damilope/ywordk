import { BlogDef, BlogItemDefList } from "@/lib/definitions/blog.ts";
import { kConstants } from "@/lib/definitions/system.ts";
import assert from "assert";
import { normalize } from "path/posix";
import BlogItemList from "./blog-item-list.tsx";
import { getBlogDefList } from "./getBlogDefList.ts";

// TODO: use a TTL map so cached data can refresh
const blogItemsMap = new Map<
  string,
  { def: BlogDef; items: BlogItemDefList }
>();

async function getBlogDef(pathname: string) {
  // if (blogItemsMap.has(pathname.toLowerCase())) {
  //   return blogItemsMap.get(pathname.toLowerCase())!;
  // }

  const blogDefList = await getBlogDefList();
  const blogDef = blogDefList.find(
    (blogDef) => blogDef.pathname.toLowerCase() === pathname.toLowerCase()
  );
  assert(blogDef, `Blog at path /${pathname} not found`);

  // const filepath = normalize(
  //   `${kConstants.blogsFolder}/${blogDef.pathname}/${kConstants.blogsItemListFilename}`
  // );
  // const blogItemDefList: BlogItemDefList = await readJSON(filepath);
  // blogItemsMap.set(pathname.toLowerCase(), {
  //   def: blogDef,
  //   items: blogItemDefList,
  // });
  // return blogItemsMap.get(pathname.toLowerCase())!;

  const filepath = normalize(
    `${kConstants.blogsFolder}/${blogDef.pathname}/${kConstants.blogsItemListFilename}`
  );
  const filepathURL = new URL(filepath, kConstants.serverURL);
  // TODO: set an appropriate cache policy
  const response = await fetch(filepathURL, { cache: "no-cache" });
  const blogItemsList = await response.json();

  return { def: blogDef, items: blogItemsList as BlogItemDefList };
}

export interface FetchedBlogItemDefListProps {
  pathname: string;
}

export async function FetchedBlogItemDefList(
  props: FetchedBlogItemDefListProps
) {
  const { pathname } = props;
  const { def, items } = await getBlogDef(pathname);

  return <BlogItemList blogDef={def} blogList={items} />;
}
