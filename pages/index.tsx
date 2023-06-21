import SimpleFimidaraBackedBlogList from "@/components/SimpleFimidaraBackedBlogList";
import { appRootPaths, systemConstants } from "@/lib/definitions/system";
import { cx } from "@emotion/css";
import Head from "next/head";
import Link from "next/link";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Layout from "../components/Layout";
import List from "../components/List";
import utilStyles from "../styles/util.module.css";

export default function Home() {
  // const leftNode = (
  //   <div>
  //     <img
  //       src={"righteousnes-by-faith-book-cover.jpeg"}
  //       className={utilStyles["home-image"]}
  //     />
  //   </div>
  // );

  return (
    <>
      <Head>
        <title>Abayomi Akintomide&apos;s personal website</title>
        <meta
          name="description"
          content="Abayomi Akintomide's personal website"
        />
      </Head>
      <div>
        <Layout centerNodeClassName={utilStyles["main-width"]}>
          <Header />
          <div className={utilStyles.section}>
            <h1 className={cx(utilStyles.title)}>
              Abayomi <br />
              Akintomide
            </h1>
            <p className={utilStyles["secondary-text"]}>
              Hi there, I&apos;m Abayomi, son of God. I love spending time with
              God, studying Scripture, programming & engineering software,
              design, writing, thinking... I also love spending time with &
              being around friends, the sometime menial tasks, calling my mom
              after the blue moon 😭...
            </p>
          </div>
          <div className={utilStyles["section"]}>
            <h3 className={utilStyles["section-title"]}>Books</h3>
            <List
              items={[
                <Link key="rbf" href="/books/rbf">
                  Righteousness by Faith
                </Link>,
              ]}
            />
          </div>
          <div className={utilStyles["section"]}>
            <h3 className={utilStyles["section-title"]}>Projects</h3>
            <List
              items={[
                <div key="softkave">
                  <a
                    target="_blank"
                    href="https://www.softkave.com"
                    rel="noreferrer"
                  >
                    Softkave
                  </a>
                  <span className={utilStyles["secondary-text"]}>
                    {" "}
                    — A real-time chat and task management app.
                  </span>
                </div>,
                <div>
                  <a
                    key="fimidara"
                    target="_blank"
                    href="https://www.fimidara.com"
                    rel="noreferrer"
                  >
                    Fimidara
                  </a>
                  <span className={utilStyles["secondary-text"]}>
                    {" "}
                    — A file storage service for developers.
                  </span>
                </div>,
              ]}
            />
          </div>
          <div className={utilStyles["section"]}>
            <h3 className={utilStyles["section-title"]}>Faith Blog</h3>
            <SimpleFimidaraBackedBlogList
              showMoreHref={appRootPaths.faithBlogList}
              filepath={systemConstants.faithBlogListFilepath}
              getBlogHref={(blog) => appRootPaths.faithBlog(blog.filename)}
            />
          </div>
          <div className={utilStyles["section"]}>
            <h3 className={utilStyles["section-title"]}>OverEngineered Blog</h3>
            <SimpleFimidaraBackedBlogList
              showMoreHref={appRootPaths.overengineeredBlogList}
              filepath={systemConstants.overengineeredBlogListFilepath}
              getBlogHref={(blog) =>
                appRootPaths.overengineeredBlog(blog.filename)
              }
            />
          </div>
          <div className={utilStyles.section}>
            <Contact />
          </div>
        </Layout>
      </div>
    </>
  );
}
