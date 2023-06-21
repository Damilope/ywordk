import { cx } from "@emotion/css";
import { getFimidaraReadFileURL } from "fimidara";
import Head from "next/head";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import AestheticText from "../../components/AestheticText";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import styles from "../../styles/rbf.module.css";
import utilstyles from "../../styles/util.module.css";

export default function RBFBookPage() {
  return (
    <>
      <Head>
        <title>Righteousness by Faith Book</title>
        <meta
          name="description"
          content="Page for the Righteousness by Faith book by Abayomi Akintomide"
        />
      </Head>
      <Layout
        centerNodeClassName={cx(utilstyles.section, utilstyles["main-width"])}
      >
        <Header />
        <h1 className={cx(utilstyles.title, utilstyles.section)}>
          Righteousness <br />
          by Faith
        </h1>
        <div className={cx(styles["download-link-container"])}>
          <a
            href={getFimidaraReadFileURL({
              filepath: "ywordk/books/Righteousness by Faith.pdf",
            })}
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.icon}>
              <HiOutlineDocumentDownload />
            </span>
            Download book in pdf
          </a>
        </div>
        <div className={cx(styles["forward-text-container"])}>
          <p>
            There is a lot our Lord and Saviour Jesus Christ paid for on our
            behalf through His death and sufferings on the cross, and I
            earnestly believe the key to enjoying these benefits is an
            understanding of the Righteousness He has procured for us, and a
            firm foundation and relationship with God built on this
            Righteousness which comes by Faith.
            <br />
            <br />
            For those who do not believe in the Lord Jesus, know that God is not
            counting your sins against you because of that one sacrifice of
            Christ (2Cor 5:19). I beseech you, be reconciled unto God.
            <br />
            <br />
            <AestheticText focusText="Righteousness by Faith">
              {" "}
              starts with God&apos;s mercy and grace found only in Christ. God
              designed it in such a way that He is not just being merciful in
              calling us righteous, He is also just in justifying us (Romans
              3:26). You should know today, that you are forever loved and
              accepted in Christ. But you may say, what of my sins and
              transgressions, what of my wrong doings? Beloved, your sins are
              washed in the blood of the lamb, our Lord Jesus, and you are also
              continually being washed in His blood so that you are ever without
              blemish before our righteous Abba, forever (1Jn 1:7).
            </AestheticText>
            <br />
            <br />
            This book is written to teach readers to know what righteousness is,
            how it is attained, the benefits, and how to embrace a
            no-strings-attached authentic relationship with God. Through the
            redemption found in our Lord Jesus, God today righteously passes
            over your sins as He did for the Israelites in the land of Egypt
            when the destroyer passed over every house with the blood on
            it&apos;s lintel and side posts (Exodus 12:23).
          </p>
        </div>
        <div className={cx(styles["forward-text-container"])}>
          <p>
            <AestheticText focusText="Rom 3:26">
              {" "}
              To declare, I say, at this time his righteousness: that he might
              be just, and the justifier of him which believeth in Jesus.
            </AestheticText>
            <br />
            <br />
            <AestheticText focusText="Rom 3:23">
              {" "}
              For all have sinned, and come short of the glory of God; <br />{" "}
              Being justified freely by his grace through the redemption that is
              in Christ Jesus:
            </AestheticText>
            <br />
            <br />{" "}
            <AestheticText focusText="Exo 12:23">
              {" "}
              For the LORD will pass through to smite the Egyptians; and when he
              seeth the blood upon the lintel, and on the two side posts, the
              LORD will pass over the door, and will not suffer the destroyer to
              come in unto your houses to smite you.
            </AestheticText>
            <br />
            <br />{" "}
            <AestheticText focusText="2Co 5:19">
              {" "}
              that is, in Christ God was reconciling the world to himself, not
              counting their trespasses against them, and entrusting to us the
              message of reconciliation.
            </AestheticText>
          </p>
        </div>
        <Contact className={utilstyles.section} />
      </Layout>
    </>
  );
}
