import { BlogEntry, BlogType } from "@/lib/definitions/blog.ts";
import { kAppPaths } from "@/lib/definitions/paths.ts";
import { kAppRootPaths } from "@/lib/definitions/system.ts";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Head from "next/head";
import Link from "next/link";
import rehypeHighlight from "rehype-highlight";
import utilstyles from "../../styles/util.module.css";
import Breadcrumbs from "../contexts/breadcrumbs.tsx";
import { Button } from "../ui/button.tsx";
import { cn } from "../utils.ts";

interface RenderBlogNavButtonsProps {
  def: BlogType;
  prev?: BlogEntry;
  next?: BlogEntry;
}

interface RenderBlogNavButtonProps {
  href: string;
  title: string;
  direction: "left" | "right";
  className?: string;
}

export interface RenderBlogContentProps extends RenderBlogNavButtonsProps {
  content: string;
  item: BlogEntry | undefined;
  def: BlogType;
}

function RenderBlogNavButton(props: RenderBlogNavButtonProps) {
  const { direction, title, href, className } = props;

  return (
    <div className={className}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={href}>
              <Button
                variant="link"
                className={cn(className, {
                  "pl-0": direction === "left",
                  "pr-0": direction === "right",
                })}
              >
                {direction === "left" && <ChevronLeft />}
                {direction === "left" ? "Previous" : "Next"}
                {direction === "right" && <ChevronRight />}
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

function RenderBlogNavButtons(props: RenderBlogNavButtonsProps) {
  const { prev, next, def } = props;

  const prevHref = prev ? kAppPaths.blogItem(def.pathname, prev.filename) : "";
  const nextHref = next ? kAppPaths.blogItem(def.pathname, next.filename) : "";

  return (
    <div className="flex mt-8 justify-between">
      {prev ? (
        <RenderBlogNavButton
          href={prevHref}
          title={prev.title}
          direction="left"
          className="justify-self-start"
        />
      ) : (
        <div />
      )}
      {next && (
        <RenderBlogNavButton
          href={nextHref}
          title={next.title}
          direction="right"
          className="justify-self-end"
        />
      )}
    </div>
  );
}

export default function RenderBlogContent(props: RenderBlogContentProps) {
  const { content, def, item } = props;

  return (
    <div className={utilstyles.section}>
      <Breadcrumbs
        items={[
          { name: "Home", href: kAppRootPaths.home },
          { name: "Blogs", href: kAppRootPaths.blogs },
          { name: def.title, href: kAppPaths.blogType(def.pathname) },
        ]}
      />
      <Head>
        <title>{item?.title}</title>
      </Head>
      <MDXRemote
        source={content}
        options={{
          parseFrontmatter: true,
          mdxOptions: {
            rehypePlugins: [rehypeHighlight],
          },
        }}
      />

      <RenderBlogNavButtons {...props} />
    </div>
  );
}
