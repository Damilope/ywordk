import { ProjectItemDef } from "@/lib/definitions/project.ts";
import utilStyles from "../../styles/util.module.css";
import { StyleableComponentProps } from "../types";

export interface ProjectItemProps extends StyleableComponentProps {
  projectItemDef: ProjectItemDef;
}

export function ProjectItem(props: ProjectItemProps) {
  const { projectItemDef, className, style } = props;

  return (
    <div className={className} style={style}>
      <a target="_blank" href={projectItemDef.href} rel="noreferrer">
        {projectItemDef.title}
      </a>
      {projectItemDef.description && (
        <span className={utilStyles["secondary-text"]}>
          {" "}
          — {projectItemDef.description}
        </span>
      )}
    </div>
  );
}
