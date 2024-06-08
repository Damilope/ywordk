import { getProjectDefList } from "./getProjectItemList.ts";
import ProjectItemList from "./project-item-list.tsx";

export async function FetchedProjectItemList() {
  const projectDefList = await getProjectDefList();

  return <ProjectItemList projectList={projectDefList} />;
}
