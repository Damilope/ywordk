import { ClockList } from "@/components/clock/clock-list.tsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ywordk | Clocks",
  description: "Clocks",
};

export default function ClockPage() {
  return <ClockList />;
}
