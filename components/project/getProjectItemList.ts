import { ProjectItemDefList } from "@/lib/definitions/project.ts";
import { kConstants } from "@/lib/definitions/system.ts";
import { readFileSync } from "fs";
import { normalize } from "path/posix";

export async function getProjectDefList() {
  const filepath = normalize(
    `${kConstants.projectsFolder}/${kConstants.projectsItemListFilename}`
  );
  const filepathURL = kConstants.getURL(filepath);

  // During build time, read from local files
  if (typeof filepathURL === "string" && filepathURL.startsWith("/")) {
    const projectDefList = JSON.parse(readFileSync(filepathURL, "utf-8"));
    return projectDefList as ProjectItemDefList;
  }

  // During runtime, fetch from URL
  const response = await fetch(filepathURL, {
    cache: "no-cache",
  });
  const projectDefList = await response.json();

  return projectDefList as ProjectItemDefList;
}
