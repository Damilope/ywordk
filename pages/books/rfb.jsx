import { getFetchFileURL } from "fimidara";
import Head from "next/head";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import { cx } from "../../lib/cx";
import styles from "../../styles/rfb.module.css";
import utilStyles from "../../styles/util.module.css";

export default function RFBBookPage() {
  return (
    <>
      <Head>
        <title>Righteousness by Faith Book</title>
        <meta
          name="description"
          content="Page for the Righteousness by Faith book by Abayomi Akintomide"
        />
      </Head>
      <main className={utilStyles.main}>
        <Header />
        <h1 className={cx(utilStyles.title, utilStyles.section)}>
          Righteousness <br />
          by Faith
          <div className={styles.writer}>Written by Abayomi Akintomide</div>
        </h1>
        <div className={cx(styles["download-link-container"])}>
          <a
            href={getFetchFileURL("/ywordk/rfb/Righteousness by Faith-01.pdf")}
            target="_blank"
          >
            Download book in pdf
          </a>
        </div>
        <p className={cx(styles["forward-text"])}>
          There is a lot our Lord and Saviour Jesus Christ paid for on our
          behalf through His death and sufferings on the cross, and I earnestly
          believe the key to enjoying these benefits is an understanding of the
          Righteousness He has procured for us, and a firm foundation and
          relationship with God built on this Righteousness which comes by
          Faith.
          <br />
          <br />
          Righteousness by Faith starts with God’s mercy and grace found only in
          Christ. God designed it in such a way that He is not just being
          merciful in calling us righteous, He is also just in justifying us
          (Romans 3:26). You should know today, that you are forever loved and
          accepted in Christ. But you may say, what of my sins and
          transgressions, what of my wrong doings? Beloved, your sins are washed
          in the blood of the lamb, our Lord Jesus, and you are also continually
          being washed in His blood so that you are ever without blemish before
          our righteous Abba, forever.
          <br />
          <br />
          This book is written to teach readers to know what righteousness is,
          how it is attained, the benefits, and how to embrace a
          no-strings-attached authentic relationship with God. Through the
          redemption found in the Lord Jesus, God today righteously passes over
          your sins as He did for the Israelites in the land of Egypt when the
          destroyer passed over every house with the blood on it’s lintel and
          side posts (Exodus 12:23).
        </p>
        <div className={utilStyles.section}>
          <Contact />
        </div>
      </main>
    </>
  );
}
