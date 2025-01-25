import { FetchedProjectItemList } from "@/components/project/fetched-project-item-list.tsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ywordk | Projects",
  description: "Projects",
};

export default async function ProjectsPage() {
  return <FetchedProjectItemList />;
}
