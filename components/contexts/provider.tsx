"use client";

import { FC, useState } from "react";
import { StateContext, StateContextValues } from "./state.ts";

export interface StateProviderProps {
  children: React.ReactNode;
}

export const StateProvider: FC<StateProviderProps> = ({ children }) => {
  const [state, setState] = useState<StateContextValues>({});
  const set = (newState: Partial<StateContextValues>) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <StateContext.Provider value={{ ...state, set }}>
      {children}
    </StateContext.Provider>
  );
};
