import { kConstants } from "../definitions/system.ts";
import { useBlogTypeAndItems } from "./useBlogType.ts";

export async function useBlogContentInfo(pathname: string, filename: string) {
  const { items, def } = await useBlogTypeAndItems(pathname);
  const item = items.find((item) => item.filename === filename);

  return { item, def };
}

export async function useBlogContent(pathname: string, filename: string) {
  const filepath = kConstants.blogsFile(pathname, filename);
  const filepathURL = kConstants.getURL(filepath);

  // TODO: set an appropriate cache policy
  const response = await fetch(filepathURL, {
    cache: "no-cache",
  });
  const content = await response.text();

  const { item, def } = await useBlogContentInfo(pathname, filename);
  return { content, item, def };
}
