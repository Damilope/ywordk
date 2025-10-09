import { readFileSync } from "fs";
import { kConstants } from "../definitions/system.ts";
import { getBlogTypeAndItems } from "./useBlogType.ts";

export async function getBlogContentInfo(pathname: string, filename: string) {
  const { items, def } = await getBlogTypeAndItems(pathname);
  const itemIndex = items.findIndex((item) => item.filename === filename);
  const item = items[itemIndex];
  const prev = items[itemIndex - 1];
  const next = items[itemIndex + 1];

  return { item, def, prev, next };
}

export async function getBlogContent(pathname: string, filename: string) {
  const filepath = kConstants.blogsFile(pathname, filename);
  const filepathURL = kConstants.getURL(filepath);

  // During build time, read from local files
  if (typeof filepathURL === "string" && filepathURL.startsWith("/")) {
    const content = readFileSync(filepathURL, "utf-8");
    const { item, def, next, prev } = await getBlogContentInfo(
      pathname,
      filename
    );
    return { content, item, def, next, prev };
  }

  // During runtime, fetch from URL
  const response = await fetch(filepathURL, {
    cache: "no-cache",
  });
  const content = await response.text();

  const { item, def, next, prev } = await getBlogContentInfo(
    pathname,
    filename
  );
  return { content, item, def, next, prev };
}
