import styles from "./num.module.css";

export interface AestheticNumProps {
  children: React.ReactNode;
}

export default function AestheticNum(props: AestheticNumProps) {
  const { children } = props;
  return <span className={styles.num}>{children}</span>;
}
