import { css } from "@emotion/css";
import { StyleableComponentProps } from "./types";

const classes = {
  contactRoot: css({
    display: "flex",
  }),
  left: css({
    flex: 1,
  }),
  right: css({
    flex: 4,
  }),
};

export default function Contact(props: StyleableComponentProps) {
  const { style, className } = props;

  return (
    <div style={style} className={className}>
      <div>You can reach me at:</div>
      <ContactItem
        title="Twitter"
        content="@ywordk"
        href="https://twitter.com/ywordk"
      />
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
    <div className={classes.contactRoot}>
      <div className={classes.left}>{title}</div>
      <span>&nbsp;—&nbsp;</span>
      <div className={classes.right}>
        <a href={href} target="_blank" rel="noreferrer">
          {content}
        </a>
      </div>
    </div>
  );
}
