import { css, cx } from "@emotion/css";
import Link from "next/link";
import { IBlogInfo } from "../lib/definitions/types";
import { formatDate } from "../lib/utils/dateFns";
import utilstyles from "../styles/util.module.css";
import Contact from "./Contact";
import Header from "./Header";
import Layout from "./Layout";
import { StyleableComponentProps } from "./types";

export interface IBlogListProps {
  title: string;
  blogList: IBlogInfo[];
  getBlogHref: (bloginfo: IBlogInfo) => string;
}

const classes = {
  item: css({
    margin: "8px 0px",
  }),
};

export default function BlogList(props: IBlogListProps) {
  const { blogList, title, getBlogHref } = props;

  return (
    <Layout>
      <Header />
      <div className={cx(utilstyles.section, utilstyles["main-width"])}>
        <h3 className={utilstyles["section-title"]}>{title}</h3>
        {blogList.map((blog) => (
          <BlogItem
            key={blog.filename}
            bloginfo={blog}
            href={getBlogHref(blog)}
            className={classes.item}
          />
        ))}
      </div>
      <Contact className={utilstyles["section"]} />
    </Layout>
  );
}

interface IBlogItemProps extends StyleableComponentProps {
  bloginfo: IBlogInfo;
  href: string;
}

function BlogItem(props: IBlogItemProps) {
  const { bloginfo, href, className, style } = props;

  return (
    <div className={className} style={style}>
      <Link href={href}>{bloginfo.title}</Link>
      {bloginfo.description && (
        <div className={utilstyles["secondary-text"]}>
          {bloginfo.description}
        </div>
      )}
      <div className={utilstyles["secondary-text"]}>
        Published {formatDate(bloginfo.createdAt)}
      </div>
    </div>
  );
}
