import Header from "@/components/Header.tsx";
import Contact from "@/components/contact/Contact.tsx";
import Layout from "@/components/layout/Layout.tsx";
import type { Metadata } from "next";
// import { Work_Sans as FontSans } from "next/font/google";
import { cn } from "@/components/utils.ts";
import { Source_Code_Pro, Space_Grotesk } from "next/font/google";
import utilStyles from "../styles/util.module.css";
import "./globals.css";

const defaultFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-default",
});
const codeFont = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-code",
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
      <body className={cn(defaultFont.variable, codeFont.variable)}>
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
