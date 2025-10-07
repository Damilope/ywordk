"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { range } from "lodash-es";

interface YearItem {
  value: string;
  label: string;
}

const minYear = 1900;
const maxYear = 2100;
const years: YearItem[] = range(minYear, maxYear).map((year) => ({
  value: year.toString(),
  label: year.toString(),
}));

function isYear(value: string): boolean {
  return /^[1-9]\d{3}$/.test(value);
}

function isUncoveredYear(value: string): boolean {
  return isYear(value) && (Number(value) < minYear || Number(value) > maxYear);
}

export interface SelectYearProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SelectYear({ value, onChange, className }: SelectYearProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const searchIsUncoveredYear = React.useMemo(
    () => isUncoveredYear(search),
    [search]
  );
  const valueIsUncoveredYear = React.useMemo(
    () => isUncoveredYear(value),
    [value]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[200px] justify-between", className)}
        >
          {value ?? "Year"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Search year..."
            className="h-9"
            value={search}
            onValueChange={(value) => setSearch(value)}
          />
          <CommandList>
            <CommandEmpty>No year found.</CommandEmpty>
            <CommandGroup>
              {searchIsUncoveredYear && (
                <CommandItem
                  key={search}
                  value={search}
                  onSelect={() => {
                    onChange(search);
                    setOpen(false);
                    setSearch("");
                  }}
                >
                  {search}
                </CommandItem>
              )}
              {valueIsUncoveredYear && (
                <CommandItem
                  key={value}
                  value={value}
                  onSelect={() => {
                    onChange("");
                    setOpen(false);
                  }}
                >
                  {value}
                  <Check className={"ml-auto opacity-100"} />
                </CommandItem>
              )}
              {years.map((year) => (
                <CommandItem
                  key={year.value}
                  value={year.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {year.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === year.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
