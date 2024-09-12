import { Theme } from '@mui/material/styles';
import { CSSProperties } from 'react';
import { Sizes } from '../../../assets/theme/theme-rtl';

type NavbarStyles = {
  boxShadow: CSSProperties['boxShadow'];
  backdropFilter: CSSProperties['backdropFilter'];
  backgroundColor: CSSProperties['backgroundColor'];
  color?: () => "txt" | "white" | "black" | "dark" | "light" | "primary" | "secondary" | "info" | "success" | "warning" | "error" | "transparent" | string;
  top: CSSProperties['top'];
  minHeight: CSSProperties['minHeight'];
  display: CSSProperties['display'];
  alignItems: CSSProperties['alignItems'];
  borderRadius: CSSProperties['borderRadius'];
  paddingTop: CSSProperties['paddingTop'];
  paddingBottom: CSSProperties['paddingBottom'];
  paddingRight: CSSProperties['paddingRight'];
  paddingLeft: CSSProperties['paddingLeft'];
  '& > *': {
    transition: CSSProperties['transition'];
  };
  '& .MuiToolbar-root': {
    display: CSSProperties['display'];
    justifyContent: CSSProperties['justifyContent'];
    alignItems: CSSProperties['alignItems'];
    [key: string]: unknown; // Allows for responsive breakpoints and other dynamic keys
  };
};


export function navbar(theme : Theme, ownerState:{transparentNavbar:boolean,absolute:boolean,light:boolean}):NavbarStyles {
    const { palette, boxShadows, functions, transitions, breakpoints, borders } = theme;
    const { transparentNavbar, absolute, light } = ownerState;
    const { dark, white, text, transparent } = palette;
    const { navbarBoxShadow } = boxShadows;
    const { rgba, pxToRem } = functions;
    const { borderRadius } = borders;
    return {
      boxShadow: transparentNavbar || absolute ? "none" : navbarBoxShadow,
      backdropFilter: transparentNavbar || absolute ? "none" : `saturate(200%) blur(${pxToRem(30)})`,
      backgroundColor:
        transparentNavbar || absolute ? `${transparent.main} !important` : rgba(white.main, 0.8),
      color: () => {
        let color:string;

        if (light) {
          color = white.main;
        } else if (transparentNavbar) {
          color = text.main;
        } else {
          color = dark.main;
        }
        return color;
      },
      top: absolute ? 0 : pxToRem(12),
      minHeight: pxToRem(75),
      display: "grid",
      alignItems: "center",
      borderRadius: borderRadius.xl,
      paddingTop: pxToRem(8),
      paddingBottom: pxToRem(8),
      paddingRight: absolute ? pxToRem(8) : 0,
      paddingLeft: absolute ? pxToRem(16) : 0,

      "& > *": {
        transition: transitions.create("all", {
          easing: transitions.easing.easeInOut,
          duration: transitions.duration.standard,
        }),
      },

      "& .MuiToolbar-root": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
  
        [breakpoints.up("sm")]: {
          minHeight: "auto",
          padding: `${pxToRem(4)} ${pxToRem(16)}`,
        },
      },
    };
}
export const navbarContainer = ({ breakpoints }:Theme):CSSProperties => ({
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    // pt: 0.5,
    // pb: 0.5,
    [breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: "0",
      paddingBottom: "0",
    },
});

export const navbarRow = ({ breakpoints }:Theme, { isMini }:{isMini:boolean}):CSSProperties => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",

    [breakpoints.up("md")]: {
      justifyContent: isMini ? "space-between" : "stretch",
      width: isMini ? "100%" : "max-content",
    },
    [breakpoints.up("xl")]: {
      justifyContent: "stretch !important",
      width: "max-content !important",
    },
});
//ahora se usa makeStyles para trabajar con "& .material-icons, .material-icons-round"

type NavbarIconButton = {
  [key: string]: unknown; // Allows for responsive breakpoints and other dynamic keys
};
export const navbarIconButton = ({breakpoints}:Theme):NavbarIconButton =>({
  // px: 0.75,
  paddingLeft: '0.75rem',
  paddingRight: '0.75rem',

  "& .material-icons, .material-icons-round": {
    fontSize: `${Sizes.md} !important`,
  },

  "& .MuiTypography-root": {
    display: "none",

    [breakpoints.up("sm")]: {
      display: "inline-block",
      lineHeight: 1.2,
      ml: 0.5,
    },
  },
})

export const navbarMobileMenu = ({ breakpoints }:Theme):CSSProperties => ({
  display:"inline-block",
  lineHeight: 1.2,
  [breakpoints.up("xl")]: {
    display: "none",
  }
});