import { format } from "date-fns";

export function formatDate(date: number | string | Date) {
  return format(new Date(date), "MMM d yyyy");
}
