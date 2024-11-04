import { extractMatter } from "../lib/matter/extractMatter.ts";

const blogs = [
  {
    src: "public/blogs/faith",
    dest: "public/blogs/faith/blog-item-list.json",
  },
  {
    src: "public/blogs/overengineered",
    dest: "public/blogs/overengineered/blog-item-list.json",
  },
] as const;

async function main() {
  for (const { src, dest } of blogs) {
    await extractMatter({ src, dest });
  }
}

main().catch(console.error.bind(console));
