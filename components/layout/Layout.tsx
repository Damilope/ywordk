import { StyleableComponentProps } from "../types";
import { cn } from "../utils.ts";
import styles from "./layout.module.css";

export interface LayoutProps extends StyleableComponentProps {
  leftNode?: React.ReactNode;
  rightNode?: React.ReactNode;
  children?: React.ReactNode;
  leftNodePositionOnMobile?: "start" | "hidden";
  rightNodePositionOnMobile?: "end" | "hidden";
  leftNodeClassName?: string;
  leftNodeStyle?: React.CSSProperties;
  rightNodeClassName?: string;
  rightNodeStyle?: React.CSSProperties;
  centerNodeClassName?: string;
  centerNodeStyle?: React.CSSProperties;
}

export default function Layout(props: LayoutProps) {
  const {
    leftNode,
    rightNode,
    leftNodeClassName,
    leftNodePositionOnMobile,
    leftNodeStyle,
    rightNodeClassName,
    rightNodePositionOnMobile,
    rightNodeStyle,
    centerNodeClassName,
    centerNodeStyle,
    children,
    style,
    className,
  } = props;

  return (
    <div className={cn(styles.root, className)} style={style}>
      <div
        className={cn(
          leftNodePositionOnMobile === "hidden" && styles.hideNodeOnMobile,
          leftNodeClassName
        )}
        style={leftNodeStyle}
      >
        {leftNode}
      </div>
      <div style={centerNodeStyle} className={centerNodeClassName}>
        {children}
      </div>
      <div
        className={cn(
          rightNodePositionOnMobile === "hidden" && styles.hideNodeOnMobile,
          rightNodeClassName
        )}
        style={rightNodeStyle}
      >
        {rightNode}
      </div>
    </div>
  );
}
