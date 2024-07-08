import { StyleableComponentProps } from "../types";
import styles from "./contact.module.css";

export default function Contact(props: StyleableComponentProps) {
  const { style, className } = props;

  return (
    <div style={style} className={className}>
      <div>You can reach me at:</div>
      <ContactItem title="X" content="@ywordk" href="https://x.com/ywordk" />
      <ContactItem
        title="Email"
        content="ywordk@gmail.com"
        href="mailto:ywordk@gmail.com"
      />
      <ContactItem
        title="LinkedIn"
        content="Abayomi Akintomide"
        href="https://www.linkedin.com/in/akintomide-abayomi-05/"
      />
    </div>
  );
}

interface ContactItemProps {
  title: string;
  content: string;
  href: string;
}

function ContactItem(props: ContactItemProps) {
  const { title, content, href } = props;

  return (
    <div className={styles.contactRoot}>
      <div className={styles.left}>{title}</div>
      <span>&nbsp;—&nbsp;</span>
      <div className={styles.right}>
        <a href={href} target="_blank" rel="noreferrer">
          {content}
        </a>
      </div>
    </div>
  );
}
