import { ProjectItemDefList } from "@/lib/definitions/project.ts";
import { kConstants } from "@/lib/definitions/system.ts";
import { normalize } from "path/posix";

export async function getProjectDefList() {
  const filepath = normalize(
    `${kConstants.projectsFolder}/${kConstants.projectsItemListFilename}`
  );
  const filepathURL = kConstants.getURL(filepath);
  // TODO: set an appropriate cache policy
  const response = await fetch(filepathURL, {
    cache: "no-cache",
  });
  const projectDefList = await response.json();

  return projectDefList as ProjectItemDefList;
}
