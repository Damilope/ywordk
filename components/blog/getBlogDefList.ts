import { BlogDefList } from "@/lib/definitions/blog.ts";
import { kConstants } from "@/lib/definitions/system.ts";
import { normalize } from "path/posix";

// let blogDefList: BlogDefList | undefined;

export async function getBlogDefList() {
  // if (blogDefList) {
  //   return blogDefList;
  // }

  const filepath = normalize(
    `${kConstants.blogsFolder}/${kConstants.blogsDefFilename}`
  );
  const filepathURL = new URL(filepath, kConstants.serverURL);
  // TODO: set an appropriate cache policy
  const response = await fetch(filepathURL, { cache: "no-cache" });
  const blogDefList = await response.json();

  return blogDefList as BlogDefList;
}
