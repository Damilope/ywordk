"use client";

import { kAppRootPaths } from "@/lib/definitions/system.ts";
import { PlusIcon } from "lucide-react";
import moment from "moment-timezone";
import { useEffect, useState } from "react";
import utilstyles from "../../styles/util.module.css";
import Breadcrumbs from "../contexts/breadcrumbs.tsx";
import { Button } from "../ui/button.tsx";
import { Separator } from "../ui/separator.tsx";
import { cn } from "../utils.ts";
import { ClockItem } from "./clock-item.tsx";

export function ClockList() {
  const [clocks, setClocks] = useState<string[]>(() => [moment.tz.guess()]);
  const [time, setTime] = useState<Date>(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => new Date(time.getTime() + 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: kAppRootPaths.home },
          { name: "Clocks", href: kAppRootPaths.clocks },
        ]}
      />
      <div
        className={cn(
          utilstyles.section,
          utilstyles["main-width"],
          "flex flex-col gap-8"
        )}
      >
        <h2 className="text-2xl font-bold m-0">Clocks</h2>
        <Button
          variant="outline"
          onClick={() => setClocks([...clocks, moment.tz.guess()])}
          className="mr-auto"
        >
          <PlusIcon className="w-4 h-4" />
          Add
        </Button>
        <div className="flex flex-col gap-4">
          {clocks.map((timezone, index) => (
            <>
              <ClockItem
                key={index}
                timezone={timezone}
                onChange={(timezone) =>
                  setClocks(clocks.map((_, i) => (i === index ? timezone : _)))
                }
                onRemove={() => setClocks(clocks.filter((_, i) => i !== index))}
                canRemove={clocks.length > 1}
                time={time}
              />
              {index < clocks.length - 1 && <Separator />}
            </>
          ))}
        </div>
      </div>
    </>
  );
}
