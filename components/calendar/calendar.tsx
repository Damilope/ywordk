"use client";

import { kAppRootPaths } from "@/lib/definitions/system.ts";
import { useState } from "react";
import utilstyles from "../../styles/util.module.css";
import Breadcrumbs from "../contexts/breadcrumbs.tsx";
import { cn } from "../utils.ts";
import { Dates, DatesSkeleton } from "./dates.tsx";
import { getMonthName, SelectMonth } from "./select-month.tsx";
import { SelectYear } from "./select-year.tsx";
export function Calendar() {
  const [year, setYear] = useState(() => new Date().getFullYear().toString());
  const [month, setMonth] = useState(() =>
    getMonthName(new Date(Number(year), 0, 1).getMonth())
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: kAppRootPaths.home },
          { name: "Calendar", href: kAppRootPaths.calendar },
        ]}
      />
      <div
        className={cn(
          utilstyles.section,
          utilstyles["main-width"],
          "flex flex-col gap-4"
        )}
      >
        <div className="flex gap-2">
          <SelectYear
            value={year}
            onChange={(value) => {
              setYear(value);
              setMonth(getMonthName(new Date(Number(value), 0, 1).getMonth()));
            }}
            className="w-[100px]"
          />
          <SelectMonth
            value={month}
            onChange={(value) => setMonth(value)}
            className="w-[120px]"
            disabled={!year}
          />
        </div>
        {year && month ? (
          <Dates year={year} month={month} />
        ) : (
          <DatesSkeleton />
        )}
      </div>
    </>
  );
}
