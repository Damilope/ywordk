import Header from "@/components/Header.tsx";
import Contact from "@/components/contact/Contact.tsx";
import Layout from "@/components/layout/Layout.tsx";
import type { Metadata } from "next";
// import { Work_Sans as FontSans } from "next/font/google";
import { cn } from "@/components/utils.ts";
import { Space_Grotesk as FontSans } from "next/font/google";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/util.module.css";
import "./globals.css";

const font = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ywordk",
  description: "Personal website for Abayomi Akintomide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.variable, styles.body)}>
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
