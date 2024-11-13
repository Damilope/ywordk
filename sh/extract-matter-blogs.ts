import { readdir } from "fs/promises";
import path from "path";
import { extractMatter } from "../lib/matter/extractMatter.ts";

interface ExtractBlogEntry {
  src: string;
  dest: string;
}

const kBlogsRoot = "public/blogs";

async function getChildrenBlogDirs() {
  const entries = await readdir(kBlogsRoot, { withFileTypes: true });
  return entries
    .map((entry): ExtractBlogEntry | null => {
      if (entry.isDirectory()) {
        const src = path.join(kBlogsRoot, entry.name);
        const dest = path.join(src, "blog-item-list.json");
        return { src, dest };
      }

      return null;
    })
    .filter((entry): entry is ExtractBlogEntry => entry !== null);
}

async function main() {
  const blogs = await getChildrenBlogDirs();

  for (const { src, dest } of blogs) {
    console.log(`Extracting matter from "${src}" to "${dest}"`);
    await extractMatter({ src, dest });
  }
}

main().catch(console.error.bind(console));
