import Link from "next/link";
import { IBlogInfo } from "../lib/definitions/types";
import utilstyles from "../styles/util.module.css";
import List from "./List";

export interface ISimpleBlogListProps {
  blogList: IBlogInfo[];
  showMoreHref: string;
  getBlogHref: (bloginfo: IBlogInfo) => string;
}

export default function SimpleBlogList(props: ISimpleBlogListProps) {
  const { blogList, showMoreHref, getBlogHref } = props;

  // Show only the top 5
  const truncatedBlogList = blogList.slice(0, 5);
  const itemsNodelist = truncatedBlogList.map((blog) => (
    <div>
      <Link href={getBlogHref(blog)}>{blog.title}</Link>
      {blog.description && (
        <span className={utilstyles["secondary-text"]}>
          &nbsp;—&nbsp;{blog.description}
        </span>
      )}
    </div>
  ));

  if (truncatedBlogList.length < blogList.length) {
    itemsNodelist.push(<Link href={showMoreHref}>Show more</Link>);
  }

  return <List items={itemsNodelist} />;
}
