import { ProjectItemDef } from "@/lib/definitions/project.ts";
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
        <div className="text-sm text-muted-foreground">
          {projectItemDef.description}
        </div>
      )}
    </div>
  );
}
