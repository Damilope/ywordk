import Header from "@/components/Header.tsx";
import Contact from "@/components/contact/Contact.tsx";
import Layout from "@/components/layout/Layout.tsx";
import { cx } from "@emotion/css";
import type { Metadata } from "next";
import { Work_Sans as FontSans } from "next/font/google";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/util.module.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ywordk",
  description: "Personal website for Abayomi Akintomide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cx(fontSans.variable, styles.body)}>
        <Layout centerNodeClassName={utilStyles["main-width"]}>
          <Header />
          {children}
          <div className={utilStyles.section}>
            <Contact />
          </div>
        </Layout>
      </body>
    </html>
  );
}
