import { Dispatch } from "react";
import { ActionType, StateType } from "./SoftUITypes";
// Soft UI Dashboard React reducer
export function reducer(state: StateType, action: ActionType) : StateType {
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
