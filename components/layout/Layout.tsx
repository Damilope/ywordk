import { cx } from "@emotion/css";
import { StyleableComponentProps } from "../types";
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
    <div className={cx(styles.root, className)} style={style}>
      <div
        className={cx(
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
        className={cx(
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
