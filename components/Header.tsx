"use client";

import { kAppRootPaths } from "@/lib/definitions/system.ts";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import styles from "../styles/header.module.css";
import { useBreadcrumbs } from "./contexts/useBreadcrumbs.tsx";
import { StyleableComponentProps } from "./types";
import { cn } from "./utils.ts";

export default function Header(props: StyleableComponentProps) {
  const { style, className } = props;
  const breadcrumbs = useBreadcrumbs() || [
    { name: "Home", href: kAppRootPaths.home },
  ];

  return (
    <div className={cn(className, styles["header"])} style={style}>
      <div className={cn(styles["home-link-container"], "flex items-center")}>
        {breadcrumbs.map((breadcrumb, index) => (
          <div key={breadcrumb.href} className="flex items-center space-x-2">
            {index > 0 && <ChevronRight className="w-4 h-4" />}
            <Link href={breadcrumb.href}>{breadcrumb.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
