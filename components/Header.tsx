import { cx } from "@emotion/css";
import Link from "next/link";
import styles from "../styles/header.module.css";
import { StyleableComponentProps } from "./types";

export default function Header(props: StyleableComponentProps) {
  const { style, className } = props;
  return (
    <div className={cx(className, styles["header"])} style={style}>
      <div className={styles["home-link-container"]}>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
