import { css, cx } from "@emotion/css";
import { StyleableComponentProps } from "./types";

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

const kMobileWidth = 920; // px
const classes = {
  root: css({
    [`@media (min-width: ${kMobileWidth}px)`]: {
      display: "grid",
      gridTemplateColumns: "1fr 720px 1fr",
    },
    [`@media (max-width: ${kMobileWidth}px)`]: {
      display: "flex",
      flexDirection: "column",
    },
  }),
  hideNodeOnMobile: css({
    [`@media (max-width: ${kMobileWidth}px)`]: {
      display: "none",
    },
  }),
};

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
    <div className={cx(classes.root, className)} style={style}>
      <div
        className={cx(
          leftNodePositionOnMobile === "hidden" && classes.hideNodeOnMobile,
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
          rightNodePositionOnMobile === "hidden" && classes.hideNodeOnMobile,
          rightNodeClassName
        )}
        style={rightNodeStyle}
      >
        {rightNode}
      </div>
    </div>
  );
}
