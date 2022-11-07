import Head from "next/head";
import Link from "next/link";
import Contact from "../components/Contact";
import Header from "../components/Header";
import List from "../components/List";
import { cx } from "../lib/cx";
import utilStyles from "../styles/util.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abayomi Akintomide&apos;s personal website</title>
        <meta
          name="description"
          content="Abayomi Akintomide's personal website"
        />
      </Head>
      <main className={utilStyles.main}>
        <Header />
        <h1 className={cx(utilStyles.title, utilStyles.section)}>
          Abayomi <br />
          Akintomide
        </h1>
        <p className={utilStyles.section}>
          Hi, I&apos;m Abayomi, son of God. A bit about me <br />
          I write, and I code, and do much more <br />
          And as time passes, I&apos;ll add more.
          <br />
          But please, check out my book, and my projects.
        </p>
        <div className={utilStyles["section-02"]}>
          <h3 className={utilStyles["section-00"]}>Books</h3>
          <List
            items={[
              <Link key="rfb" href="/books/rfb">
                Righteousness by Faith
              </Link>,
            ]}
          />
        </div>
        <div className={utilStyles["section-02"]}>
          <h3 className={utilStyles["section-00"]}>Projects</h3>
          <List
            items={[
              <a
                key="softkave"
                target="_blank"
                href="https://www.softkave.com"
                rel="noreferrer"
              >
                Softkave
              </a>,
              <a
                key="fimidara"
                target="_blank"
                href="https://www.fimidara.com"
                rel="noreferrer"
              >
                Fimidara
              </a>,
            ]}
          />
        </div>
        <div className={utilStyles.section}>
          <Contact />
        </div>
      </main>
    </>
  );
}
