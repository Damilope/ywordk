import { Calendar } from "@/components/calendar/calendar.tsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ywordk | Calendar",
  description: "Calendar",
};

export default function CalendarPage() {
  return <Calendar />;
}
