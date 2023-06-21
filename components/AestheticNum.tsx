import { css } from "@emotion/css";

const classes = {
  num: css({
    fontSize: "10px",
    marginRight: "4px",
    textAlign: "center",
    borderRadius: "50%",
    display: "inline-block",
    width: "16px",
    height: "16px",
    lineHeight: "16px",
    border: "1px solid rgba(38, 38, 38, 0.45)",
    fontWeight: 700,
  }),
};

export interface AestheticNumProps {
  children: React.ReactNode;
}

export default function AestheticNum(props: AestheticNumProps) {
  const { children } = props;
  return <span className={classes.num}>{children}</span>;
}
