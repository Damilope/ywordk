import { ProjectItemDef } from "@/lib/definitions/project.ts";
import { cx } from "@emotion/css";
import utilstyles from "../../styles/util.module.css";
import { ProjectItem } from "./project-item.tsx";
import styles from "./project.module.css";

export interface ProjectItemListProps {
  projectList: ProjectItemDef[];
}

export default function ProjectItemList(props: ProjectItemListProps) {
  const { projectList } = props;

  return (
    <div className={cx(utilstyles.section, utilstyles["main-width"])}>
      <h3 className={utilstyles["section-title"]}>Projects</h3>
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
