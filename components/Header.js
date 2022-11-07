import Link from "next/link";
import styles from "../styles/header.module.css";
import Clock from "./Clock";

export default function Header() {
  return (
    <div className={styles["header"]}>
      <div className={styles["home-link-container"]}>
        <Link href="/">Home</Link>
      </div>
      <Clock />
    </div>
  );
}
