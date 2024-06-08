import { FetchedBlogDefList } from "@/components/blog/fetched-blog-def-list.tsx";
import { FetchedBookItemList } from "@/components/book/fetched-book-item-list.tsx";
import { FetchedProjectItemList } from "@/components/project/fetched-project-item-list.tsx";
import { cx } from "@emotion/css";
import Head from "next/head";
import utilStyles from "../styles/util.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal website for Abayomi Akintomide</title>
        <meta
          name="description"
          content="Personal website for Abayomi Akintomide"
        />
      </Head>
      <div>
        <div className={utilStyles.section}>
          <h1 className={cx(utilStyles.title)}>
            Abayomi <br />
            Akintomide
          </h1>
          <p className={utilStyles["secondary-text"]}>
            Hi there, I&apos;m Abayomi, son of God. I love spending time with
            God, studying Scripture, programming & engineering software, design,
            writing, thinking... I also love spending time with & being around
            friends, the sometime menial tasks, calling my mom after the blue
            moon 😭...
          </p>
        </div>
        <FetchedBookItemList />
        <FetchedBlogDefList />
        <FetchedProjectItemList />
      </div>
    </>
  );
}
