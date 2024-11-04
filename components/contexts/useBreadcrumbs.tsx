"use client";

import { useContext, useEffect } from "react";
import { StateContext, StateContextValues } from "./state.ts";

export function useBreadcrumbs() {
  const { breadcrumbs } = useContext(StateContext) || {};
  return breadcrumbs;
}

export function useSetPageBreadcrumbs(
  crumbs: StateContextValues["breadcrumbs"]
) {
  const { set } = useContext(StateContext) || {};

  useEffect(() => {
    set?.({ breadcrumbs: crumbs });

    return () => {
      set?.({ breadcrumbs: undefined });
    };
  }, [crumbs]);
}
