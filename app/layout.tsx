import Header from "@/components/Header.tsx";
import Contact from "@/components/contact/Contact.tsx";
import { StateProvider } from "@/components/contexts/provider.tsx";
import Layout from "@/components/layout/Layout.tsx";
import { cn } from "@/components/utils.ts";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Source_Code_Pro } from "next/font/google";
import utilStyles from "../styles/util.module.css";
import "./globals.css";

const defaultFont = Bricolage_Grotesque({
  weight: "variable",
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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/github-dark.min.css"
          // precedence="default"
        />
      </head>
      <body className={cn(defaultFont.variable, codeFont.variable)}>
        <StateProvider>
          <Layout centerNodeClassName={utilStyles["main-width"]}>
            <Header />
            {children}
            <div className={utilStyles.section}>
              <Contact />
            </div>
          </Layout>
        </StateProvider>
      </body>
    </html>
  );
}
