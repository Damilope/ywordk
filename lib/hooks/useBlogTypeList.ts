import { normalize } from "path";
import { BlogTypeList } from "../definitions/blog.ts";
import { kConstants } from "../definitions/system.ts";

export async function useBlogTypeList() {
  const filepath = normalize(
    `${kConstants.blogsFolder}/${kConstants.blogsDefFilename}`
  );
  const filepathURL = kConstants.getURL(filepath);

  // TODO: set an appropriate cache policy
  const response = await fetch(filepathURL, {
    // cache: "no-cache"
  });
  const blogTypeList = await response.json();

  return blogTypeList as BlogTypeList;
}
