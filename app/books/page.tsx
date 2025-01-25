import { FetchedBookItemList } from "@/components/book/fetched-book-item-list.tsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ywordk | Books",
  description: "Books",
};

export default async function BooksPage() {
  return <FetchedBookItemList />;
}
