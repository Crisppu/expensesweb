import { Dispatch } from "react";
type ActionType =
  | { type: "MINI_SIDENAV"; value: boolean }
  | { type: "TRANSPARENT_SIDENAV"; value: boolean }
  | { type: "SIDENAV_COLOR"; value: string }
  | { type: "TRANSPARENT_NAVBAR"; value: boolean }
  | { type: "FIXED_NAVBAR"; value: boolean }
  | { type: "OPEN_CONFIGURATOR"; value: boolean }
  | { type: "DIRECTION"; value: string }
  | { type: "LAYOUT"; value: string };


export const setMiniSidenav = (dispatch: Dispatch<ActionType>, value: boolean) => {
  dispatch({ type: "MINI_SIDENAV", value });
};

export const setTransparentSidenav = (dispatch: Dispatch<ActionType>, value: boolean) => {
  dispatch({ type: "TRANSPARENT_SIDENAV", value });
};

export const setSidenavColor = (dispatch: Dispatch<ActionType>, value: string) => {
  dispatch({ type: "SIDENAV_COLOR", value });
};

export const setTransparentNavbar = (dispatch: Dispatch<ActionType>, value: boolean) => {
  dispatch({ type: "TRANSPARENT_NAVBAR", value });
};

export const setFixedNavbar = (dispatch: Dispatch<ActionType>, value: boolean) => {
  dispatch({ type: "FIXED_NAVBAR", value });
};

export const setOpenConfigurator = (dispatch: Dispatch<ActionType>, value: boolean) => {
  dispatch({ type: "OPEN_CONFIGURATOR", value });
};

export const setDirection = (dispatch: Dispatch<ActionType>, value: string) => {
  dispatch({ type: "DIRECTION", value });
};

export const setLayout = (dispatch: Dispatch<ActionType>, value: string) => {
  dispatch({ type: "LAYOUT", value });
};
