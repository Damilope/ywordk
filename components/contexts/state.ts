"use client";

import { createContext } from "react";

export interface StateContextValues {
  breadcrumbs?: Array<{ name: string; href: string }>;
}

export interface StateContextType extends StateContextValues {
  set(state: Partial<StateContextValues>): void;
}

const StateContext = createContext<StateContextType | null>(null);

export { StateContext };
