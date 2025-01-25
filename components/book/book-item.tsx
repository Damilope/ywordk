import { BookItemDef } from "@/lib/definitions/book.ts";
import { kAppRootPaths } from "@/lib/definitions/system.ts";
import { formatDate } from "@/lib/utils/dateFns.ts";
import Link from "next/link";
import { StyleableComponentProps } from "../types";

export interface BookItemProps extends StyleableComponentProps {
  bookItemDef: BookItemDef;
}

export function BookItem(props: BookItemProps) {
  const { bookItemDef, className, style } = props;
  const href = `${kAppRootPaths.books}/${bookItemDef.key}`;
  const published = `Published ${formatDate(bookItemDef.createdAt)}`;
  const lastUpdated =
    bookItemDef.lastUpdatedAt !== bookItemDef.createdAt
      ? `Last updated ${formatDate(bookItemDef.createdAt)}`
      : "";

  // TODO: add short description and download button
  return (
    <div className={className} style={style}>
      <Link href={href}>{bookItemDef.title}</Link>
      {bookItemDef.description && (
        <div className="text-sm text-muted-foreground">
          {bookItemDef.description}
        </div>
      )}
      <div className="text-sm text-muted-foreground">
        {published}
        {lastUpdated ? (
          <>
            <span>&nbsp;—&nbsp;</span>
            {lastUpdated}
          </>
        ) : null}
      </div>
    </div>
  );
}
