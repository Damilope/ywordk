import { BookItemDefList } from "@/lib/definitions/book.ts";
import { kConstants } from "@/lib/definitions/system.ts";
import { readFileSync } from "fs";
import { normalize } from "path/posix";

export async function getBookDefList() {
  const filepath = normalize(
    `${kConstants.booksFolder}/${kConstants.booksItemListFilename}`
  );
  const filepathURL = kConstants.getURL(filepath);

  // During build time, read from local files
  if (typeof filepathURL === "string" && filepathURL.startsWith("/")) {
    const bookDefList = JSON.parse(readFileSync(filepathURL, "utf-8"));
    return bookDefList as BookItemDefList;
  }

  // During runtime, fetch from URL
  const response = await fetch(filepathURL, {
    cache: "no-cache",
  });
  const bookDefList = await response.json();

  return bookDefList as BookItemDefList;
}
