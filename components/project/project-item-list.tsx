import { ProjectItemDef } from "@/lib/definitions/project.ts";
import { kAppRootPaths } from "@/lib/definitions/system.ts";
import Link from "next/link";
import utilstyles from "../../styles/util.module.css";
import { cn } from "../utils.ts";
import { ProjectItem } from "./project-item.tsx";
import styles from "./project.module.css";

export interface ProjectItemListProps {
  projectList: ProjectItemDef[];
}

export default function ProjectItemList(props: ProjectItemListProps) {
  const { projectList } = props;
  const href = `${kAppRootPaths.projects}`;

  return (
    <div className={cn(utilstyles.section, utilstyles["main-width"])}>
      <Link href={href}>
        <h3 className={utilstyles["section-title"]}>Projects</h3>
      </Link>
      {projectList.map((project) => (
        <ProjectItem
          key={project.key}
          projectItemDef={project}
          className={styles.item}
        />
      ))}
    </div>
  );
}
