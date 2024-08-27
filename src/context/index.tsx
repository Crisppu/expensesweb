/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  This file is used for controlling the global states of the components,
  you can customize the states for the different components here.
*/

import { createContext, useReducer, useMemo, ReactNode } from "react";
import { SoftUIContextType, StateType } from "./SoftUITypes";
import { reducer } from "./SoftUIReducer";

// The Soft UI Dashboard PRO Material main context

export const SoftUI = createContext<SoftUIContextType | null>(null);

// Setting custom name for the context which is visible on react dev tools
SoftUI.displayName = "SoftUIContext";

// Soft UI Dashboard React context provider
type SoftUIControllerProviderProps = {
  children: ReactNode;
};

export function SoftUIControllerProvider({ children }: SoftUIControllerProviderProps): JSX.Element {
  const initialState: StateType = {
    miniSidenav: false,
    transparentSidenav: true,
    sidenavColor: "info",
    transparentNavbar: true,
    fixedNavbar: true,
    openConfigurator: false,
    direction: "ltr",
    layout: "dashboard",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo<SoftUIContextType>(() => [state, dispatch], [state, dispatch]);

  return <SoftUI.Provider value={value}> {children} </SoftUI.Provider>;
}




