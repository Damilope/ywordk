import assert from "assert";
import { normalize } from "path";
import { BlogEntryList } from "../definitions/blog.ts";
import { kConstants } from "../definitions/system.ts";
import { useBlogTypeList } from "./useBlogTypeList.ts";

export async function useBlogType(pathname: string) {
  const blogTypeList = await useBlogTypeList();
  const blogType = blogTypeList.find(
    (blogType) => blogType.pathname.toLowerCase() === pathname.toLowerCase()
  );
  assert(blogType, `Blog at path /${pathname} not found`);

  return { blogType };
}

export async function useBlogTypeAndItems(pathname: string) {
  const { blogType } = await useBlogType(pathname);

  const filepath = normalize(
    `${kConstants.blogsFolder}/${blogType.pathname}/${kConstants.blogsItemListFilename}`
  );
  const filepathURL = kConstants.getURL(filepath);

  // TODO: set an appropriate cache policy
  const response = await fetch(filepathURL, {
    cache: "no-cache",
  });
  const blogItemsList = (await response.json()) as BlogEntryList;
  blogItemsList.sort((a, b) => {
    const aTime = new Date(a.createdAt).getTime();
    const bTime = new Date(b.createdAt).getTime();
    const aPinned = a.pinned ? 1 : 0;
    const bPinned = b.pinned ? 1 : 0;

    if (aPinned < bPinned) return 1;
    if (aPinned > bPinned) return -1;
    if (aTime < bTime) return 1;
    if (aTime > bTime) return -1;
    return 0;
  });

  return { def: blogType, items: blogItemsList };
}
