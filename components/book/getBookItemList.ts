import { BookItemDefList } from "@/lib/definitions/book.ts";
import { kConstants } from "@/lib/definitions/system.ts";
import { normalize } from "path/posix";

// let bookDefList: BookDefList | undefined;

export async function getBookDefList() {
  // if (bookDefList) {
  //   return bookDefList;
  // }

  const filepath = normalize(
    `${kConstants.booksFolder}/${kConstants.booksItemListFilename}`
  );
  const filepathURL = new URL(filepath, kConstants.serverURL);
  // TODO: set an appropriate cache policy
  const response = await fetch(filepathURL, { cache: "no-cache" });
  const bookDefList = await response.json();

  return bookDefList as BookItemDefList;
}
