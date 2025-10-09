import { readFileSync } from "fs";
import { normalize } from "path";
import { BlogTypeList } from "../definitions/blog.ts";
import { kConstants } from "../definitions/system.ts";

export async function getBlogTypeList() {
  const filepath = normalize(
    `${kConstants.blogsFolder}/${kConstants.blogsDefFilename}`
  );
  const filepathURL = kConstants.getURL(filepath);

  // During build time, read from local files
  if (typeof filepathURL === "string" && filepathURL.startsWith("/")) {
    const blogTypeList = JSON.parse(readFileSync(filepathURL, "utf-8"));
    return blogTypeList as BlogTypeList;
  }

  // During runtime, fetch from URL
  const response = await fetch(filepathURL, {
    cache: "no-cache",
  });
  const blogTypeList = await response.json();

  return blogTypeList as BlogTypeList;
}
