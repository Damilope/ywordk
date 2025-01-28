import { TrashIcon } from "lucide-react";
import moment from "moment-timezone";
import { JetBrains_Mono } from "next/font/google";
import { Button } from "../ui/button.tsx";
import { cn } from "../utils.ts";
import { SelectTimeZone } from "./select-timezome.tsx";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export interface ClockItemProps {
  timezone: string;
  onChange: (timezone: string) => void;
  onRemove: () => void;
  canRemove: boolean;
  time: Date;
}

export function ClockItem({
  timezone,
  onChange,
  onRemove,
  canRemove,
  time,
}: ClockItemProps) {
  const tzTime = moment.tz(time, timezone);

  return (
    <div className={cn("flex flex-col gap-4")}>
      <div className="flex justify-between items-center">
        <SelectTimeZone value={timezone} onChange={onChange} />
        <Button
          variant="secondary"
          onClick={onRemove}
          className="ml-auto"
          size="icon"
          disabled={!canRemove}
        >
          <TrashIcon className="w-4 h-4" />
        </Button>
      </div>
      <div className={cn("text-2xl font-bold space-x-4", mono.className)}>
        <span>{tzTime.format("hh:mm:ss a")}</span>
        <span className="text-muted-foreground text-sm">
          {tzTime.format("Z z")}
        </span>
      </div>
    </div>
  );
}
