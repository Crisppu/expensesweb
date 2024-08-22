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

import { createContext, useContext, useReducer, useMemo, ReactNode, Dispatch } from "react";

// The Soft UI Dashboard PRO Material main context
type StateType = {
  miniSidenav: boolean;
  transparentSidenav: boolean;
  sidenavColor: string;
  transparentNavbar: boolean;
  fixedNavbar: boolean;
  openConfigurator: boolean;
  direction: string;
  layout: string;
};

type ActionType =
  | { type: "MINI_SIDENAV"; value: boolean }
  | { type: "TRANSPARENT_SIDENAV"; value: boolean }
  | { type: "SIDENAV_COLOR"; value: string }
  | { type: "TRANSPARENT_NAVBAR"; value: boolean }
  | { type: "FIXED_NAVBAR"; value: boolean }
  | { type: "OPEN_CONFIGURATOR"; value: boolean }
  | { type: "DIRECTION"; value: string }
  | { type: "LAYOUT"; value: string };

const SoftUI = createContext<{ state: StateType; dispatch: Dispatch<ActionType> } | null>(null);

// Setting custom name for the context which is visible on react dev tools
SoftUI.displayName = "SoftUIContext";

// Soft UI Dashboard React reducer
function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "MINI_SIDENAV":
      return { ...state, miniSidenav: action.value };
    case "TRANSPARENT_SIDENAV":
      return { ...state, transparentSidenav: action.value };
    case "SIDENAV_COLOR":
      return { ...state, sidenavColor: action.value };
    case "TRANSPARENT_NAVBAR":
      return { ...state, transparentNavbar: action.value };
    case "FIXED_NAVBAR":
      return { ...state, fixedNavbar: action.value };
    case "OPEN_CONFIGURATOR":
      return { ...state, openConfigurator: action.value };
    case "DIRECTION":
      return { ...state, direction: action.value };
    case "LAYOUT":
      return { ...state, layout: action.value };
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}

// Soft UI Dashboard React context provider
type SoftUIControllerProviderProps = {
  children: ReactNode;
};

function SoftUIControllerProvider({ children }: SoftUIControllerProviderProps): JSX.Element {
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

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <SoftUI.Provider value={value}> {children} </SoftUI.Provider>;
}

// Soft UI Dashboard React custom hook for using context
function useSoftUIController() {
  const context = useContext(SoftUI);

  if (!context) {
    throw new Error("useSoftUIController should be used inside the SoftUIControllerProvider.");
  }

  return context;
}

// Context module functions
// const setMiniSidenav = (dispatch: Dispatch<ActionType>, value: boolean) =>
//   dispatch({ type: "MINI_SIDENAV", value });

// const setTransparentSidenav = (dispatch: Dispatch<ActionType>, value: boolean) =>
//   dispatch({ type: "TRANSPARENT_SIDENAV", value });

// const setSidenavColor = (dispatch: Dispatch<ActionType>, value: string) =>
//   dispatch({ type: "SIDENAV_COLOR", value });

// const setTransparentNavbar = (dispatch: Dispatch<ActionType>, value: boolean) =>
//   dispatch({ type: "TRANSPARENT_NAVBAR", value });

// const setFixedNavbar = (dispatch: Dispatch<ActionType>, value: boolean) =>
//   dispatch({ type: "FIXED_NAVBAR", value });

// const setOpenConfigurator = (dispatch: Dispatch<ActionType>, value: boolean) =>
//   dispatch({ type: "OPEN_CONFIGURATOR", value });

// const setDirection = (dispatch: Dispatch<ActionType>, value: string) =>
//   dispatch({ type: "DIRECTION", value });

// const setLayout = (dispatch: Dispatch<ActionType>, value: string) =>
//   dispatch({ type: "LAYOUT", value });

export {
  SoftUIControllerProvider,
  useSoftUIController,
};

