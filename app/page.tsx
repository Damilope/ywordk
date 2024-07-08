"use server";

import { FetchedBlogDefList } from "@/components/blog/fetched-blog-def-list.tsx";
import { FetchedBookItemList } from "@/components/book/fetched-book-item-list.tsx";
import { FetchedProjectItemList } from "@/components/project/fetched-project-item-list.tsx";
import { cn } from "@/components/utils.ts";
import { Metadata, ResolvingMetadata } from "next";
import utilStyles from "../styles/util.module.css";

type Props = {};

export async function generateMetadata(
  {}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "ywordk",
    description: "Personal website for Abayomi Akintomide",
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

export default async function Home({}: Props) {
  return (
    <main>
      <div className={utilStyles.section}>
        <h1 className={cn(utilStyles.title)}>
          Abayomi <br />
          Akintomide
        </h1>
        <p className={utilStyles["secondary-text"]}>
          Hi there, I&apos;m Abayomi, son of God. I love spending time with God,
          studying Scripture, programming & engineering software, design,
          writing, thinking... I also love spending time with & being around
          friends, the sometime menial tasks, calling my mom after the blue moon
          😭...
        </p>
      </div>
      <FetchedBookItemList />
      <FetchedBlogDefList />
      <FetchedProjectItemList />
    </main>
  );
}
