import assert from "assert";
import { readFileSync } from "fs";
import { normalize } from "path";
import { BlogEntryList } from "../definitions/blog.ts";
import { kConstants } from "../definitions/system.ts";
import { getBlogTypeList } from "./useBlogTypeList.ts";

export async function getBlogType(pathname: string) {
  const blogTypeList = await getBlogTypeList();
  const blogType = blogTypeList.find(
    (blogType) => blogType.pathname.toLowerCase() === pathname.toLowerCase()
  );
  assert.ok(blogType, `Blog at path /${pathname} not found`);

  return { blogType };
}

export async function getBlogTypeAndItems(pathname: string) {
  const { blogType } = await getBlogType(pathname);

  const filepath = normalize(
    `${kConstants.blogsFolder}/${blogType.pathname}/${kConstants.blogsItemListFilename}`
  );
  const filepathURL = kConstants.getURL(filepath);

  // During build time, read from local files
  if (typeof filepathURL === "string" && filepathURL.startsWith("/")) {
    const blogItemsList = JSON.parse(
      readFileSync(filepathURL, "utf-8")
    ) as BlogEntryList;
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

  // During runtime, fetch from URL
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
