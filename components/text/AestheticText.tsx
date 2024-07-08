import { StyleableComponentProps } from "../types";
import { cn } from "../utils.ts";
import styles from "./text.module.css";

export interface AestheticTextProps extends StyleableComponentProps {
  focusText: string;
  underline?: boolean;
  children: React.ReactNode;
}

export default function AestheticText(props: AestheticTextProps) {
  const { focusText, children, style, className, underline } = props;
  return (
    <span className={className} style={style}>
      <span className={cn(styles.focusText, underline && styles.underline)}>
        {focusText}{" "}
      </span>
      {children}
    </span>
  );
}
