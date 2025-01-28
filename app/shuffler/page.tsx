import { Shuffler } from "@/components/shuffler/shuffler";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ywordk - shuffler",
  description: "A simple shuffler.",
};

export default function Page() {
  return <Shuffler />;
}
