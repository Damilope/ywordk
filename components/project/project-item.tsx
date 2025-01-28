import { ProjectItemDef } from "@/lib/definitions/project.ts";
import { StyleableComponentProps } from "../types";
import { Separator } from "../ui/separator.tsx";

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
      {projectItemDef.urls && (
        <div className="flex gap-4 items-center">
          {projectItemDef.urls.map((url, index) => (
            <>
              <a
                key={url.name}
                href={url.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground"
              >
                {url.name}
              </a>
              {projectItemDef.urls &&
                index < projectItemDef.urls.length - 1 && (
                  <Separator orientation="vertical" className="h-4" />
                )}
            </>
          ))}
        </div>
      )}
    </div>
  );
}
