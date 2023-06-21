import { css, cx } from "@emotion/css";
import { StyleableComponentProps } from "./types";

export interface AestheticTextProps extends StyleableComponentProps {
  focusText: string;
  underline?: boolean;
  children: React.ReactNode;
}

const classes = {
  focusText: css({
    fontWeight: "bold",
  }),
  underline: css({
    textDecoration: "underline",
  }),
};

export default function AestheticText(props: AestheticTextProps) {
  const { focusText, children, style, className, underline } = props;
  return (
    <span className={className} style={style}>
      <span className={cx(classes.focusText, underline && classes.underline)}>
        {focusText}
      </span>{" "}
      {children}
    </span>
  );
}
