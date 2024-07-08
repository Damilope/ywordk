import { BookItemDef } from "@/lib/definitions/book.ts";
import { kAppRootPaths } from "@/lib/definitions/system.ts";
import Link from "next/link";
import utilstyles from "../../styles/util.module.css";
import { cn } from "../utils.ts";
import { BookItem } from "./book-item.tsx";
import styles from "./book.module.css";

export interface BookItemListProps {
  bookList: BookItemDef[];
}

export default function BookItemList(props: BookItemListProps) {
  const { bookList } = props;
  const href = `${kAppRootPaths.books}`;

  return (
    <div className={cn(utilstyles.section, utilstyles["main-width"])}>
      <Link href={href}>
        <h3 className={utilstyles["section-title"]}>Books</h3>
      </Link>
      {bookList.map((book) => (
        <BookItem
          key={book.filename}
          bookItemDef={book}
          className={styles.item}
        />
      ))}
    </div>
  );
}
