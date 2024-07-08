import { BookItemDef } from "@/lib/definitions/book.ts";
import { kAppRootPaths, kConstants } from "@/lib/definitions/system.ts";
import assert from "assert";
import { MDXRemote } from "next-mdx-remote/rsc";
import fetch from "node-fetch";
import { normalize } from "path";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import utilstyles from "../../styles/util.module.css";
import { cn } from "../utils.ts";
import styles from "./book.module.css";
import { getBookDefList } from "./getBookItemList.ts";

// TODO: use a TTL map so cached data can refresh
const bookContentMap = new Map<string, string>();

async function getBookDescription(
  book: BookItemDef
): Promise<string | undefined> {
  if (book.description) {
    return book.description;
  }

  if (book.descriptionMd) {
    const filepath = normalize(
      `${kConstants.booksFolder}/${book.key}/${book.descriptionMd}`
    );
    const filepathURL = kConstants.getURL(filepath);
    // TODO: set an appropriate cache policy
    const response = await fetch(filepathURL, {
      // cache: "no-cache"
    });
    const content = await response.text();
    return content;
  }

  return undefined;
}

async function getBookContent(key: string) {
  const bookDefList = await getBookDefList();
  const bookDef = bookDefList.find(
    (bookDef) => bookDef.key.toLowerCase() === key.toLowerCase()
  );
  assert(bookDef, `Book at path /${key} not found`);

  return { def: bookDef, description: await getBookDescription(bookDef) };
}

export interface BookContentProps {
  id: string;
}

export default async function BookContent(props: BookContentProps) {
  const { id } = props;
  const { def, description } = await getBookContent(id);
  const href = `${kAppRootPaths.books}/${def.key}/${def.filename}`;

  return (
    <div>
      <h1 className={cn(utilstyles.title, utilstyles.section)}>{def.title}</h1>
      <div className={utilstyles.section}>
        <div className={cn(styles["download-link-container"])}>
          <a href={href} target="_blank" rel="noreferrer">
            <span className={styles.icon}>
              <HiOutlineDocumentDownload />
            </span>
            Download book in pdf
          </a>
        </div>
        {description && <MDXRemote source={description} />}
      </div>
    </div>
  );
}
