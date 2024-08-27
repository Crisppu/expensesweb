//definicmos los tipos de todos los estados
export type StateType = {
    miniSidenav: boolean;
    transparentSidenav: boolean;
    sidenavColor: string;
    transparentNavbar: boolean;
    fixedNavbar: boolean;
    openConfigurator: boolean;
    direction: string;
    layout: string;
  };
  //definimos los tipos todas las acciones
  export type ActionType =
  | { type: "MINI_SIDENAV"; value: boolean }
  | { type: "TRANSPARENT_SIDENAV"; value: boolean }
  | { type: "SIDENAV_COLOR"; value: string }
  | { type: "TRANSPARENT_NAVBAR"; value: boolean }
  | { type: "FIXED_NAVBAR"; value: boolean }
  | { type: "OPEN_CONFIGURATOR"; value: boolean }
  | { type: "DIRECTION"; value: string }
  | { type: "LAYOUT"; value: string };

  export type SoftUIContextType = [
    state: StateType,
    dispatch: React.Dispatch<ActionType>
  ]