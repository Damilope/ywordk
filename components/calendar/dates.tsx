import { cn } from "@/lib/utils.ts";
import { getDaysInMonth } from "date-fns";
import { range } from "lodash-es";
import { useMemo } from "react";
import { getMonthIndex } from "./select-month.tsx";

export interface DatesProps {
  year: string;
  month: string;
  className?: string;
}

export function Dates({ year, month, className }: DatesProps) {
  const daysInMonth = useMemo(() => {
    return getDaysInMonth(new Date(Number(year), getMonthIndex(month)));
  }, [year, month]);
  const days = useMemo(() => {
    return range(1, daysInMonth + 1);
  }, [daysInMonth]);
  const today = useMemo(() => {
    const now = new Date();
    return now.getFullYear() === Number(year) &&
      now.getMonth() === getMonthIndex(month)
      ? now.getDate()
      : undefined;
  }, [year, month]);

  return (
    <div className={cn("grid grid-cols-7 gap-2", className)}>
      {days.map((day) => (
        <div
          key={day}
          className={cn(
            "flex items-center justify-center rounded-sm p-2 bg-muted text-muted-foreground h-16",
            day === today && "bg-primary text-primary-foreground"
          )}
        >
          {day}
        </div>
      ))}
    </div>
  );
}

export function DatesSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-7 gap-2", className)}>
      {range(1, 31).map((day) => (
        <div
          key={day}
          className="flex items-center justify-center bg-muted"
        ></div>
      ))}
    </div>
  );
}
