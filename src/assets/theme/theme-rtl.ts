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
import '@mui/material/styles';


// @mui material components
import { createTheme } from "@mui/material/styles";

// Soft UI Dashboard React base styles
import colors from "./base/colors.ts";
import breakpoints from "./base/breakpoints.ts";
import typography from './base/typography.ts';
import boxShadows from './base/boxShadows.ts';
import borders from "./base/borders.ts";
import globals from "./base/globals.ts";

// Soft UI Dashboard React helper functions
import boxShadow from './functions/boxShadow.ts';

import hexToRgb from './functions/hexToRgb.ts';
import linearGradient from './functions/linearGradient.ts';
import pxToRem from './functions/pxToRem.ts';
import rgba from "./functions/rgba.ts";

// Soft UI Dashboard React components base styles for @mui material components
import sidenav from "./components/sidenav.ts";

import list from "./components/list/index.ts";
import listItem from "./components/list/listItem.ts";
import listItemText from "./components/list/listItemText.ts";
import card from "./components/card/index.ts";
import cardMedia from "./components/card/cardMedia.ts";
import cardContent from "./components/card/cardContent.ts";
import button from "./components/button/index.ts";
import iconButton from "./components/iconButton.ts";

import inputBase from "./components/form/inputBase.ts";
import menu from "./components/menu/index.ts";
import menuItem from "./components/menu/menuItem.ts";
import switchButton from "./components/form/switchButton.ts";
import divider from "./components/divider.ts";
import tableContainer from "./components/table/tableContainer.ts";
import tableHead from "./components/table/tableHead.ts";
import tableCell from "./components/table/tableCell.ts";
import linearProgress from "./components/linearProgress.ts";
import breadcrumbs from "./components/breadcrumbs.ts";
import slider from './components/slider.ts';
import avatar from "./components/avatar.ts";
import tooltip from "./components/tooltip.ts";
import appBar from "./components/appBar.ts";
import tabs from "./components/tabs/index.ts";
import tab from "./components/tabs/tab.ts";
import stepper from "./components/stepper/index.ts";
import step from "./components/stepper/step.ts";
import stepConnector from "./components/stepper/stepConnector.ts";
import stepLabel from "./components/stepper/stepLabel.ts";
import stepIcon from "./components/stepper/stepIcon.ts";
import select from "./components/form/select.ts";
import formControlLabel from "./components/form/formControlLabel.ts";
import formLabel from "./components/form/formLabel.ts";
import checkbox from "./components/form/checkbox.ts";
import radio from "./components/form/radio.ts";
import autocomplete from "./components/form/autocomplete.ts";
import input from "./components/form/input.ts";
import container from "./components/container.ts";
import popover from "./components/popover.ts";
import buttonBase from "./components/buttonBase.ts";
import icon from "./components/icon.ts";
import svgIcon from "./components/svgIcon.ts";
//import link from "./components/link";
// import rgba from 'assets/theme/functions/rgba';

export const Sizes = {
    xxs: typography.size.xxs,
    xs: typography.size.xs,
    sm: typography.size.sm,
    md: typography.size.md,
    lg: typography.size.lg,
    xl: typography.size.xl,
};

declare module '@mui/material/styles' {
    interface PaletteColor {
        focus?: string;
    }

    interface SimplePaletteColorOptions {
        focus?: string;
    }
    interface TypeText {
        main: string;
        focus: string;
    }
    interface Palette{
        //text:TypeText;
        // Añadir `transparent` como una propiedad opcional
        transparent: {main: string;};
        white: { main: string; focus: string;};
        black: {
            light: string;
            main: string;
            focus: string;
        };
        light: { main: string; focus: string;};
        dark: {main: string; focus: string;};
        gradients: {
            primary: {
                main: string;
                state: string;
            };
            secondary: {
                main: string;
                state: string;
            };
            info: {
                main: string;
                state: string;
            };
            success: {
                main: string;
                state: string;
            };
            warning: {
              main: string;
              state: string;
            };
            error: {
                main: string;
                state: string;
            };
            light: {
                main: string;
                state: string;
            };
            dark: {
                main: string;
                state: string;
            };
        }
        alertColors: {
            primary: {
              main: string;
              state: string;
              border: string;
            };
            secondary: {
              main: string;
              state: string;
              border: string;
            };
            info: {
              main: string;
              state: string;
              border: string;
            };
            success: {
              main: string;
              state: string;
              border: string;
            };
            warning: {
              main: string;
              state: string;
              border: string;
            };
            error: {
              main: string;
              state: string;
              border: string;
            };
            light: {
              main: string;
              state: string;
              border: string;
            };
            dark: {
              main: string;
              state: string;
              border: string;
            };
        };
        badgeColors: {
            primary: {
              background: string;
              text: string;
            };
            secondary: {
              background: string;
              text: string;
            };
            info: {
              background: string;
              text: string;
            };
            success: {
              background: string;
              text: string;
            };
            warning: {
              background: string;
              text: string;
            };
            error: {
              background: string;
              text: string;
            };
            light: {
              background: string;
              text: string;
            };
            dark: {
              background: string;
              text: string;
            };
        };
        inputColors: {
            borderColor: {
              main: string;
              focus: string;
            };
            boxShadow: string;
            error: string;
            success: string;
        };
        sliderColors: {
            thumb: {
              borderColor: string;
            };
        };
        circleSliderColors: {
            background: string;
        };
        tabs: {
            indicator: {
              boxShadow: string;
            };
        };

    }
    // allow configuration using `createTheme`
    interface PaletteOptions {
        transparent?: {main?: string;};
        white?: { main?: string; focus?: string;};
        black?: {
            light?: string;
            main?: string;
            focus?: string;
        };
        light?:{ main?: string; focus?: string;};
        dark?:{main?: string; focus?: string;};
        gradients?:{
            primary?: {
                main?: string;
                state?: string;
            };
            secondary?: {
                main?: string;
                state?: string;
            };
            info?: {
                main?: string;
                state?: string;
            };
            success?: {
                main?: string;
                state?: string;
            };
            warning?: {
                main?: string;
                state?: string;
            };
            error?: {
                main?: string;
                state?: string;
            };
            light?: {
                main?: string;
                state?: string;
            };
            dark?: {
                main?: string;
                state?: string;
            };
        };
        socialMediaColors?: {
            facebook?: {
              main?: string;
              dark?: string;
            };
            twitter?: {
              main?: string;
              dark?: string;
            };
            instagram?: {
              main?: string;
              dark?: string;
            };
            linkedin?: {
              main?: string;
              dark?: string;
            };
            pinterest?: {
              main?: string;
              dark?: string;
            };
            youtube?: {
              main?: string;
              dark?: string;
            };
            vimeo?: {
              main?: string;
              dark?: string;
            };
            slack?: {
              main?: string;
              dark?: string;
            };
            dribbble?: {
              main?: string;
              dark?: string;
            };
            github?: {
              main?: string;
              dark?: string;
            };
            reddit?: {
              main?: string;
              dark?: string;
            };
            tumblr?: {
              main?: string;
              dark?: string;
            };
        };
        alertColors?: {
            primary?: {
              main?: string;
              state?: string;
              border?: string;
            };
            secondary?: {
              main?: string;
              state?: string;
              border?: string;
            };
            info?: {
              main?: string;
              state?: string;
              border?: string;
            };
            success?: {
              main?: string;
              state?: string;
              border?: string;
            };
            warning?: {
              main?: string;
              state?: string;
              border?: string;
            };
            error?: {
              main?: string;
              state?: string;
              border?: string;
            };
            light?: {
              main?: string;
              state?: string;
              border?: string;
            };
            dark?: {
              main?: string;
              state?: string;
              border?: string;
            };
        };
        badgeColors?: {
            primary?: {
              background?: string;
              text?: string;
            };
            secondary?: {
              background?: string;
              text?: string;
            };
            info?: {
              background?: string;
              text?: string;
            };
            success?: {
              background?: string;
              text?: string;
            };
            warning?: {
              background?: string;
              text?: string;
            };
            error?: {
              background?: string;
              text?: string;
            };
            light?: {
              background?: string;
              text?: string;
            };
            dark?: {
              background?: string;
              text?: string;
            };
        };
        inputColors?: {
            borderColor?: {
              main?: string;
              focus?: string;
            };
            boxShadow?: string;
            error?: string;
            success?: string;
        };
        sliderColors?: {
            thumb?: {
              borderColor?: string;
            };
        };
        circleSliderColors: {
            background: string;
        };
        tabs: {
            indicator: {
              boxShadow: string;
            };
        };

    }
    interface Typography{
        fontFamily: string;
        fontWeightLight: number;
        fontWeightRegular: number;
        fontWeightMedium: number;
        fontWeightBold: number;
    }
    interface TypographyOptions {
        fontFamily?: string;
        fontWeightLight?: number;
        fontWeightRegular?: number;
        fontWeightMedium?: number;
        fontWeightBold?: number;
    }
    interface Theme {
        boxShadows: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
            inset: string;
            navbarBoxShadow: string;
            buttonBoxShadow: {
                main: string;
                stateOf: string;
                stateOfNotHover: string;
            };
            inputBoxShadow: {
                focus: string;
                error: string;
                success: string;
            };
            sliderBoxShadow: {
                thumb: string;
            };
            tabsBoxShadow: {
                indicator: string;
            };
        };
        borders: {
            borderColor: string;
            borderWidth: {
                0:number;
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
            };
            borderRadius: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                xxl: string;
                section: string;
            };
        }
        functions: {
          boxShadow: (
            offset: [number, number],
            radius:[number, number],
            color: string,
            opacity: number,
            inset: string
          ) => string;
          hexToRgb: (hex: string) => string;
          linearGradient: (color: string, colorState: string) => string;
          pxToRem: (number: number, baseNumber?: number) => string;
          rgba: (color: string, opacity: number) => string;
        }
    }
    interface ThemeOptions {
        boxShadows?: {
            xs?: string;
            sm?: string;
            md?: string;
            lg?: string;
            xl?: string;
            xxl?: string;
            inset?: string;
            navbarBoxShadow?: string;
            buttonBoxShadow?: {
                main?: string;
                stateOf?: string;
                stateOfNotHover?: string;
            };
            inputBoxShadow?: {
                focus?: string;
                error?: string;
                success?: string;
            };
            sliderBoxShadow?: {
                thumb?: string;
            };
            tabsBoxShadow?: {
                indicator?: string;
            };
        }
        borders?: {
            borderColor?: string;
            borderWidth?: {
                0?: number;

                1?: string;
                2?: string;
                3?: string;
                4?: string;
                5?: string;
            };
            borderRadius?: {
                xs?: string;
                sm?: string;
                md?: string;
                lg?: string;
                xl?: string;
                xxl?: string;
                section?: string;
            };
        }
        functions?: {
          boxShadow?: (
            offset: [number, number],
            radius: [number, number],
            color: string,
            opacity: number,
            inset?: string
          ) => string;
          hexToRgb?: (hex: string) => string;
          linearGradient?: ( color: string, colorState: string) => string;
          pxToRem?: (number: number, baseNumber?: number) => string;
          rgba?: (color: string, opacity: number) => string;
        };
    }

}


const theme = createTheme({
    direction: "rtl",
    breakpoints: { ...breakpoints },
    palette: {
      // Propiedades principales de PaletteOptions:
      primary:{
        main: colors.primary.main,
        focus: colors.primary.focus,
      },
      secondary:{
        main: colors.secondary.main,
        focus: colors.secondary.focus,
      },
      error:{
        main: colors.error.main,
        focus: colors.error.focus,
      },
      warning:{
        main: colors.warning.main,
        focus: colors.warning.focus,
      },
      info:{
        main: colors.info.main,
        focus: colors.info.focus,
      },
      success:{
        main: colors.success.main,
        focus: colors.success.focus,
      },
      background: {
        default: colors.background.default,
      },
      text: {
        main: colors.text.main,
        focus: colors.text.focus,
      },
      // Propiedades adicionales de PaletteOptions(se configuran de forma opcional):
      transparent: {
        main: colors.transparent.main,
      },
      white: {
        main: colors.white.main,
        focus: colors.white.focus,
      },
      black: {
        light: colors.black.light,
        main: colors.black.main,
        focus: colors.black.focus,
      },
      light: {
        main: colors.light.main,
        focus: colors.light.focus,

      },
      dark: {
        main: colors.dark.main,
        focus: colors.dark.focus,
      },
      grey: {
        100: colors.grey[100],
        200: colors.grey[200],
        300: colors.grey[300],
        400: colors.grey[400],
        500: colors.grey[500],
        600: colors.grey[600],
        700: colors.grey[700],
        800: colors.grey[800],
        900: colors.grey[900],
      },
        gradients: {
            dark: {
                main: colors.gradients.dark.main,
                state: colors.gradients.dark.state,
            },
            error: {
                main: colors.gradients.error.main,
                state: colors.gradients.error.state,
            },
            info: {
                main: colors.gradients.info.main,
                state: colors.gradients.info.state,
            },
            light: {
                main: colors.gradients.light.main,
                state: colors.gradients.light.state,
            },
            primary: {
                main: colors.gradients.primary.main,
                state: colors.gradients.primary.state,
            },
            secondary: {
                main: colors.gradients.secondary.main,
                state: colors.gradients.secondary.state,
            },
            success: {
                main: colors.gradients.success.main,
                state: colors.gradients.success.state,
            },
            warning: {
                main: colors.gradients.warning.main,
                state: colors.gradients.warning.state,
            },
        },
        socialMediaColors: {
            facebook: {
                main: colors.socialMediaColors.facebook.main,
                dark: colors.socialMediaColors.facebook.dark,
            },
            twitter: {
                main: colors.socialMediaColors.twitter.main,
                dark: colors.socialMediaColors.twitter.dark,
            },
            instagram: {
                main: colors.socialMediaColors.instagram.main,
                dark: colors.socialMediaColors.instagram.dark,
            },
            linkedin: {
                main: colors.socialMediaColors.linkedin.main,
                dark: colors.socialMediaColors.linkedin.dark,
            },
            pinterest: {
                main: colors.socialMediaColors.pinterest.main,
                dark: colors.socialMediaColors.pinterest.dark,
            },
            youtube: {
                main: colors.socialMediaColors.youtube.main,
                dark: colors.socialMediaColors.youtube.dark,
            },
            vimeo: {
                main: colors.socialMediaColors.vimeo.main,
                dark: colors.socialMediaColors.vimeo.dark,
            },
            slack: {
                main: colors.socialMediaColors.slack.main,
                dark: colors.socialMediaColors.slack.dark,
            },
            dribbble: {
                main: colors.socialMediaColors.dribbble.main,
                dark: colors.socialMediaColors.dribbble.dark,
            },
            github: {
                main: colors.socialMediaColors.github.main,
                dark: colors.socialMediaColors.github.dark,
            },
            reddit: {
                main: colors.socialMediaColors.reddit.main,
                dark: colors.socialMediaColors.reddit.dark,
            },
            tumblr: {
                main: colors.socialMediaColors.tumblr.main,
                dark: colors.socialMediaColors.tumblr.dark,
            },
        },
        alertColors: {
            primary: {
                main: colors.alertColors.primary.main,
                state: colors.alertColors.primary.state,
                border: colors.alertColors.primary.border,
            },
            secondary: {
                main: colors.alertColors.secondary.main,
                state: colors.alertColors.secondary.state,
                border: colors.alertColors.secondary.border,
            },
            info: {
                main: colors.alertColors.info.main,
                state: colors.alertColors.info.state,
                border: colors.alertColors.info.border,
            },
            success: {
                main: colors.alertColors.success.main,
                state: colors.alertColors.success.state,
                border: colors.alertColors.success.border,
            },
            warning: {
                main: colors.alertColors.warning.main,
                state: colors.alertColors.warning.state,
                border: colors.alertColors.warning.border,
            },
            error: {
                main: colors.alertColors.error.main,
                state: colors.alertColors.error.state,
                border: colors.alertColors.error.border,
            },
            light: {
                main: colors.alertColors.light.main,
                state: colors.alertColors.light.state,
                border: colors.alertColors.light.border,
            },
            dark: {
                main: colors.alertColors.dark.main,
                state: colors.alertColors.dark.state,
                border: colors.alertColors.dark.border,
            },
        },
        badgeColors: {
            primary: {
                background: colors.badgeColors.primary.background,
                text: colors.badgeColors.primary.text,
            },
            secondary: {
                background: colors.badgeColors.secondary.background,
                text: colors.badgeColors.secondary.text,
            },
            info: {
                background: colors.badgeColors.info.background,
                text: colors.badgeColors.info.text,
            },
            success: {
                background: colors.badgeColors.success.background,
                text: colors.badgeColors.success.text,
            },
            warning: {
                background: colors.badgeColors.warning.background,
                text: colors.badgeColors.warning.text,
            },
            error: {
                background: colors.badgeColors.error.background,
                text: colors.badgeColors.error.text,
            },
            light: {
                background: colors.badgeColors.light.background,
                text: colors.badgeColors.light.text,
            },
            dark: {
                background: colors.badgeColors.dark.background,
                text: colors.badgeColors.dark.text,
            },
        },
        inputColors: {
            borderColor: {
              main: colors.inputColors.borderColor.main,
              focus: colors.inputColors.borderColor.focus,
            },
            boxShadow: colors.inputColors.boxShadow,
            error: colors.inputColors.error,
            success: colors.inputColors.success,
        },
        sliderColors: {
            thumb: {
              borderColor: colors.sliderColors.thumb.borderColor,
            },
        },
        circleSliderColors: {
            background: colors.circleSliderColors.background,
        },
        tabs: {
            indicator: {
              boxShadow: colors.tabs.indicator.boxShadow,
            },
        },
    },
    typography: {
        fontFamily: typography.fontFamily,
        fontWeightLight: typography.fontWeightLight,
        fontWeightRegular: typography.fontWeightRegular,
        fontWeightMedium: typography.fontWeightMedium,
        fontWeightBold: typography.fontWeightBold,
        h1: {
            fontSize: typography.h1.fontSize,
            lineHeight: typography.h1.lineHeight,
            fontFamily: typography.h1.fontFamily,
            color: typography.h1.color,
            fontWeight: typography.h1.fontWeight,
        },
        h2: {
            fontSize: typography.h2.fontSize,
            lineHeight: typography.h2.lineHeight,
            fontFamily: typography.h2.fontFamily,
            color: typography.h2.color,
            fontWeight: typography.h2.fontWeight,
        },
        h3: {
            fontSize: typography.h3.fontSize,
            lineHeight: typography.h3.lineHeight,
            fontFamily: typography.h3.fontFamily,
            color: typography.h3.color,
            fontWeight: typography.h3.fontWeight,
        },
        h4: {
            fontSize: typography.h4.fontSize,
            lineHeight: typography.h4.lineHeight,
            fontFamily: typography.h4.fontFamily,
            color: typography.h4.color,
            fontWeight: typography.h4.fontWeight,
        },
        h5: {
            fontSize: typography.h5.fontSize,
            lineHeight: typography.h5.lineHeight,
            fontFamily: typography.h5.fontFamily,
            color: typography.h5.color,
            fontWeight: typography.h5.fontWeight,
        },
        h6: {
            fontSize: typography.h6.fontSize,
            lineHeight: typography.h6.lineHeight,
            fontFamily: typography.h6.fontFamily,
            color: typography.h6.color,
            fontWeight: typography.h6.fontWeight,
        },
        subtitle1: {
            fontFamily: typography.subtitle1.fontFamily,
            fontSize: typography.subtitle1.fontSize,
            fontWeight: typography.subtitle1.fontWeight,
            lineHeight: typography.subtitle1.lineHeight,
        },
        subtitle2: {
            fontFamily: typography.subtitle2.fontFamily,
            fontSize: typography.subtitle2.fontSize,
            fontWeight: typography.subtitle2.fontWeight,
            lineHeight: typography.subtitle2.lineHeight,
        },
        body1: {
            fontFamily: typography.body1.fontFamily,
            fontSize: typography.body1.fontSize,
            fontWeight: typography.body1.fontWeight,
            lineHeight: typography.body1.lineHeight,
        },
        body2: {
            fontFamily: typography.body2.fontFamily,
            fontSize: typography.body2.fontSize,
            fontWeight: typography.body2.fontWeight,
            lineHeight: typography.body2.lineHeight,
        },
        button: {
            fontFamily: typography.button.fontFamily,
            fontSize: typography.button.fontSize,
            fontWeight: typography.button.fontWeight,
            lineHeight: typography.button.lineHeight,
        },
        caption: {
            fontFamily: typography.caption.fontFamily,
            fontSize: typography.caption.fontSize,
            fontWeight: typography.caption.fontWeight,
            lineHeight: typography.caption.lineHeight,
        },
        overline: {
            fontFamily: typography.overline.fontFamily,
        },
        // d1: {
        //     fontSize: typography.d1.fontSize,
        //     fontFamily: typography.d1.fontFamily,
        //     color: typography.d1.color,
        //     fontWeight: typography.d1.fontWeight,
        //     lineHeight: typography.d1.lineHeight,
        // },
        // d2: {
        //     fontSize: typography.d2.fontSize,
        //     fontFamily: typography.d2.fontFamily,
        //     color: typography.d2.color,
        //     fontWeight: typography.d2.fontWeight,
        //     lineHeight: typography.d2.lineHeight,
        // },
        // d3: {
        //     fontSize: typography.d3.fontSize,
        //     fontFamily: typography.d3.fontFamily,
        //     color: typography.d3.color,
        //     fontWeight: typography.d3.fontWeight,
        //     lineHeight: typography.d3.lineHeight,
        // },
        // d4: {
        //     fontSize: typography.d4.fontSize,
        //     fontFamily: typography.d4.fontFamily,
        //     color: typography.d4.color,
        //     fontWeight: typography.d4.fontWeight,
        //     lineHeight: typography.d4.lineHeight,
        // },
        // d5: {
        //     fontSize: typography.d5.fontSize,
        //     fontFamily: typography.d5.fontFamily,
        //     color: typography.d5.color,
        //     fontWeight: typography.d5.fontWeight,
        //     lineHeight: typography.d5.lineHeight,
        // },
        // d6: {
        //     fontSize: typography.d6.fontSize,
        //     fontFamily: typography.d6.fontFamily,
        //     color: typography.d6.color,
        //     fontWeight: typography.d6.fontWeight,
        //     lineHeight: typography.d6.lineHeight,
        // },
        // size: {
        //     xxs: typography.size.xxs,
        //     xs: typography.size.xs,
        //     sm: typography.size.sm,
        //     md: typography.size.md,
        //     lg: typography.size.lg,
        //     xl: typography.size.xl,
        // },
        // lineHeight: {
        //     sm: typography.lineHeight.sm,
        //     md: typography.lineHeight.md,
        //     lg: typography.lineHeight.lg,
        // },
    },
    boxShadows: {
        xs: boxShadows.xs,
        sm: boxShadows.sm,
        md: boxShadows.md,
        lg: boxShadows.lg,
        xl: boxShadows.xl,
        xxl: boxShadows.xxl,
        inset: boxShadows.inset,
        navbarBoxShadow: boxShadows.navbarBoxShadow,
        buttonBoxShadow: {
            main: boxShadows.buttonBoxShadow.main,
            stateOf: boxShadows.buttonBoxShadow.stateOf,
            stateOfNotHover: boxShadows.buttonBoxShadow.stateOfNotHover,
        },
        inputBoxShadow: {
            focus: boxShadows.inputBoxShadow.focus,
            error: boxShadows.inputBoxShadow.error,
            success: boxShadows.inputBoxShadow.success,
        },
        sliderBoxShadow:{
            thumb: boxShadows.sliderBoxShadow.thumb,
        },
        tabsBoxShadow: {
            indicator: boxShadows.tabsBoxShadow.indicator,
        },
    },
    borders: {
        borderColor: borders.borderColor,
        borderWidth: {
            0: borders.borderWidth[0],
            1: borders.borderWidth[1],
            2: borders.borderWidth[2],
            3: borders.borderWidth[3],
            4: borders.borderWidth[4],
            5: borders.borderWidth[5],
        },
        borderRadius: {
            xs: borders.borderRadius.xs,
            sm: borders.borderRadius.sm,
            md: borders.borderRadius.md,
            lg: borders.borderRadius.lg,
            xl: borders.borderRadius.xl,
            xxl: borders.borderRadius.xxl,
            section: borders.borderRadius.section,
        },
    },
    functions: {
      boxShadow,
      hexToRgb,
      linearGradient,
      pxToRem,
      rgba,
    },
        components: {
        MuiCssBaseline: {
            styleOverrides: {
                ...globals,
                ...container,
            },
        },
        MuiDrawer: { ...sidenav },
        MuiList: { ...list },
        MuiListItem: { ...listItem },
        MuiListItemText: { ...listItemText },
        MuiCard: {
            styleOverrides: { root:{
                ...card,
                flexDirection: "column",
                position: "relative",
                wordWrap: "break-word",
            } },
        },
        MuiCardMedia: { ...cardMedia },
        MuiCardContent: { ...cardContent },
        MuiButton: {
            defaultProps: { ...button.defaultProps },
            styleOverrides: {
                root: { ...button.styleOverrides.root,
                    textAlign: "center",
                    textTransform: "uppercase",
                    userSelect: "none",
                },
                contained: { ...button.styleOverrides.contained },
                outlined: { ...button.styleOverrides.outlined },
                text: { ...button.styleOverrides.text },
                textSizeSmall: { ...button.styleOverrides.textSizeSmall },
                textSizeLarge: { ...button.styleOverrides.textSizeLarge },
                textPrimary: { ...button.styleOverrides.textPrimary },
                textSecondary: { ...button.styleOverrides.textSecondary },
            },
        },
        MuiIconButton: { ...iconButton },
        MuiInputBase: { ...inputBase,},

        MuiMenu: {
            defaultProps: {
                disableAutoFocusItem: true
            },
            styleOverrides: {
                paper: {
                    minWidth: pxToRem(160),
                    textAlign: "left",
                    ...menu
                },
            },
        },
        MuiMenuItem: { ...menuItem },
        MuiSwitch: { ...switchButton },
        MuiDivider: { ...divider },
        MuiTableContainer: { ...tableContainer },
        MuiTableHead: { ...tableHead },
        MuiTableCell: { ...tableCell },
        MuiLinearProgress: {
            styleOverrides: {
                ...linearProgress,
                root:{
                    position:"relative"
                },
                bar:{
                    position:"absolute"
                }
            }
        },
        MuiBreadcrumbs: { ...breadcrumbs },

        MuiSlider: {
            styleOverrides: {
                root:{...slider.styleOverrides.root},
                rail:{...slider.styleOverrides.rail},
                track:{position:"relative",
                    ...slider.styleOverrides.track
                },
                thumb:{...slider.styleOverrides.thumb}

            }
        },
        MuiAvatar: { ...avatar },
         MuiTooltip: { ...tooltip },
        MuiAppBar: {
            defaultProps: {
                color: "transparent",
            },
            ...appBar
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    position: "relative",
                    ...tabs.styleOverrides.root
                },
                flexContainer:{
                    position:'relative',
                    ...tabs.styleOverrides.flexContainer
                },
                fixed:{
                    ...tabs.styleOverrides.fixed
                },
                vertical:{
                    ...tabs.styleOverrides.vertical
                },
                indicator:{
                    ...tabs.styleOverrides.indicator
                },
            }
        },
        MuiTab: {
            styleOverrides: {
                root:{
                    ...tab.styleOverrides.root,
                    flexDirection: "column",
                    textAlign: "center",
                    textTransform: "none",
                },
                labelIcon:{
                    ...tab.styleOverrides.labelIcon
                }
            }
        },
        MuiStepper: { ...stepper },
        MuiStep: { ...step },
        MuiStepConnector: { ...stepConnector },
        MuiStepLabel: { ...stepLabel },
        MuiStepIcon: { ...stepIcon },
        MuiSelect: { ...select },
        MuiFormControlLabel: { ...formControlLabel },
        MuiFormLabel: { ...formLabel },
        MuiCheckbox: { ...checkbox },
        MuiRadio: { ...radio },

        MuiAutocomplete: {
            styleOverrides: {
                popper:{
                    ...autocomplete.styleOverrides.popper,
                    textAlign: "left",
                },
                paper:{
                    ...autocomplete.styleOverrides.paper
                },
                option:{
                    ...autocomplete.styleOverrides.option
                },
                noOptions:{
                    ...autocomplete.styleOverrides.noOptions
                },
                groupLabel:{
                    ...autocomplete.styleOverrides.groupLabel
                },
                loading:{
                    ...autocomplete.styleOverrides.loading
                },
                tag:{
                    ...autocomplete.styleOverrides.tag
                }
            }
        },
        MuiInput: { ...input },
        MuiOutlinedInput: { ...input },
        MuiFilledInput: { ...input },
        MuiPopover: { ...popover },
        MuiButtonBase: { ...buttonBase },
        MuiIcon: {
            defaultProps:{
                ...icon.defaultProps,
                fontSize: "inherit",
            },
            styleOverrides:{
                fontSizeInherit:{
                    ...icon.styleOverrides.fontSizeInherit
                },
                fontSizeSmall:{
                    ...icon.styleOverrides.fontSizeSmall
                },
                fontSizeLarge:{
                    ...icon.styleOverrides.fontSizeLarge
                },
            }
        },
        MuiSvgIcon: {
            defaultProps: {
                fontSize: "inherit",
            },
            ...svgIcon
        },
        MuiLink: {
            defaultProps: {
                underline: "none",
                color: "inherit",
            },
        },
    }
});


export default theme;