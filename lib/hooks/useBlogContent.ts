import { kConstants } from "../definitions/system.ts";
import { useBlogTypeAndItems } from "./useBlogType.ts";

export async function useBlogContentInfo(pathname: string, filename: string) {
  const { items, def } = await useBlogTypeAndItems(pathname);
  const itemIndex = items.findIndex((item) => item.filename === filename);
  const item = items[itemIndex];
  const prev = items[itemIndex - 1];
  const next = items[itemIndex + 1];

  return { item, def, prev, next };
}

export async function useBlogContent(pathname: string, filename: string) {
  const filepath = kConstants.blogsFile(pathname, filename);
  const filepathURL = kConstants.getURL(filepath);

  // TODO: set an appropriate cache policy
  const response = await fetch(filepathURL, {
    cache: "no-cache",
  });
  const content = await response.text();

  const { item, def, next, prev } = await useBlogContentInfo(
    pathname,
    filename
  );
  return { content, item, def, next, prev };
}
