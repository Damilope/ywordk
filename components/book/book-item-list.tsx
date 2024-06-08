import { cx } from "@emotion/css";
import utilstyles from "../../styles/util.module.css";
import styles from "./book.module.css";
import { BookItemDef } from "@/lib/definitions/book.ts";
import { BookItem } from "./book-item.tsx";

export interface BookItemListProps {
  bookList: BookItemDef[];
}

export default function BookItemList(props: BookItemListProps) {
  const { bookList } = props;

  return (
    <div className={cx(utilstyles.section, utilstyles["main-width"])}>
      <h3 className={utilstyles["section-title"]}>Books</h3>
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
