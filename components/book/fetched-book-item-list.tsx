import BookItemList from "./book-item-list.tsx";
import { getBookDefList } from "./getBookItemList.ts";

export async function FetchedBookItemList() {
  const bookDefList = await getBookDefList();

  return <BookItemList bookList={bookDefList} />;
}
