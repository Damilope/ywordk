import { BookItemDefList } from "@/lib/definitions/book.ts";
import { kConstants } from "@/lib/definitions/system.ts";
import { normalize } from "path/posix";

export async function getBookDefList() {
  const filepath = normalize(
    `${kConstants.booksFolder}/${kConstants.booksItemListFilename}`
  );
  const filepathURL = kConstants.getURL(filepath);
  // TODO: set an appropriate cache policy
  const response = await fetch(filepathURL, {
    cache: "no-cache",
  });
  const bookDefList = await response.json();

  return bookDefList as BookItemDefList;
}
