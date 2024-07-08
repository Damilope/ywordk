import { ProjectItemDefList } from "@/lib/definitions/project.ts";
import { kConstants } from "@/lib/definitions/system.ts";
import fetch from "node-fetch";
import { normalize } from "path/posix";

// let projectDefList: ProjectDefList | undefined;

export async function getProjectDefList() {
  // if (projectDefList) {
  //   return projectDefList;
  // }

  const filepath = normalize(
    `${kConstants.projectsFolder}/${kConstants.projectsItemListFilename}`
  );
  const filepathURL = kConstants.getURL(filepath);
  // TODO: set an appropriate cache policy
  const response = await fetch(filepathURL, {
    // cache: "no-cache"
  });
  const projectDefList = await response.json();

  return projectDefList as ProjectItemDefList;
}
