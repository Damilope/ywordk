import assert from "assert";
import { stat, writeFile } from "fs/promises";
import { globby } from "globby";
import { isString } from "lodash-es";
import { basename, extname } from "path";
import { read } from "to-vfile";
import { matter } from "vfile-matter";
import { BlogEntry } from "../definitions/blog.ts";

async function extractBlogEntryStats(
  filepath: string
): Promise<Pick<BlogEntry, "createdAt" | "lastUpdatedAt" | "filename">> {
  const stats = await stat(filepath);
  return {
    filename: basename(filepath, extname(filepath)),
    createdAt: stats.birthtime.toISOString(),
    lastUpdatedAt: stats.mtime.toISOString(),
  };
}

async function extractMatterFromFile(filepath: string) {
  const file = await read(filepath);
  matter(file);
  return file.data.matter as any;
}

async function extractBlogEntry(filepath: string): Promise<BlogEntry> {
  const [matter, stats] = await Promise.all([
    extractMatterFromFile(filepath),
    extractBlogEntryStats(filepath),
  ]);

  assert.ok(isString(matter.title), `title is required in ${filepath}`);

  return {
    ...stats,
    title: matter.title,
    description: matter.description,
    pinned: matter.pinned,
  };
}

export async function extractMatter(params: { src: string; dest: string }) {
  const { src, dest } = params;
  const files = await globby(["**/*.{md,mdx}"], { cwd: src, absolute: true });
  const matterList = await Promise.all(files.map(extractBlogEntry));

  await writeFile(
    dest,
    JSON.stringify(matterList, /** replacer */ null, /** space */ 2),
    /** encoding */ "utf-8"
  );
}
