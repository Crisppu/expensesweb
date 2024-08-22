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
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
//import { Theme } from '@mui/material/styles';
// Define los tipos para `ownerState`
interface OwnerState {
  variant?:  "contained" | "outlined"; // Solo estos dos valores son permitidos
  bgColor?: string;
  color?: string;
  opacity?: number;
  borderRadius?: string;
  shadow?: string;
}
interface SoftBoxRootProps extends React.ComponentProps<typeof Box> {
  ownerState: OwnerState;
  // children: React.ReactNode;
}

// Estiliza el componente Box usando la función `styled`
const SoftBoxRoot = styled(Box)<SoftBoxRootProps>(
    ({ theme, ownerState }) => {
        // Desestructuramos las propiedades de `ownerState`
        const { variant, bgColor, color, opacity, borderRadius, shadow } = ownerState;
        console.log(variant);
        console.log(ownerState)
        console.log(theme)

        return {
            backgroundColor: bgColor || theme.palette.background.default,
            color: color || theme.palette.text.primary,
            opacity: opacity ?? 1,
            padding: theme.spacing(2),
            borderRadius: borderRadius || theme.shape.borderRadius,
            boxShadow: shadow ? theme.shadows[2] : 'none',
        };
    }
);

export default SoftBoxRoot;


// import Box from "@mui/material/Box";
// import { styled, Theme, CSSObject } from "@mui/material/styles";

// interface OwnerState {
//   variant?:  "contained" | "outlined"; // Solo estos dos valores son permitidos
//   bgColor?: string;
//   color?: string;
//   opacity?: number;
//   borderRadius?: string;
//   shadow?: string;
// }

// const StyledBox = styled(Box, { shouldForwardProp: (prop) => prop !== 'ownerState' })<{ ownerState?: OwnerState }>(({ theme, ownerState }) => {
//   const { palette, functions, borders, boxShadows } = theme;
//   const { variant, bgColor, color, opacity, borderRadius, shadow } = ownerState || {};

//   const { gradients, grey, white } = palette;
//   const { linearGradient } = functions;
//   const { borderRadius: radius } = borders;

//   const greyColors = {
//     "grey-100": grey[100],
//     "grey-200": grey[200],
//     "grey-300": grey[300],
//     "grey-400": grey[400],
//     "grey-500": grey[500],
//     "grey-600": grey[600],
//     "grey-700": grey[700],
//     "grey-800": grey[800],
//     "grey-900": grey[900],
//   };

//   const validGradients = [
//     "primary",
//     "secondary",
//     "info",
//     "success",
//     "warning",
//     "error",
//     "dark",
//     "light",
//   ];

//   const validColors = [
//     "transparent",
//     "white",
//     "black",
//     "primary",
//     "secondary",
//     "info",
//     "success",
//     "warning",
//     "error",
//     "light",
//     "dark",
//     "text",
//     "grey-100",
//     "grey-200",
//     "grey-300",
//     "grey-400",
//     "grey-500",
//     "grey-600",
//     "grey-700",
//     "grey-800",
//     "grey-900",
//   ];

//   const validBorderRadius = ["xs", "sm", "md", "lg", "xl", "xxl", "section"];
//   const validBoxShadows = ["xs", "sm", "md", "lg", "xl", "xxl", "inset"];

//   // background value
//   let backgroundValue = bgColor || "";

//   if (variant === "gradient") {
//     backgroundValue = validGradients.includes(bgColor || "")
//       ? linearGradient(gradients[bgColor as keyof typeof gradients].main, gradients[bgColor as keyof typeof gradients].state)
//       : white.main;
//   } else if (validColors.includes(bgColor || "")) {
//     backgroundValue = palette[bgColor as keyof typeof palette] ? palette[bgColor as keyof typeof palette].main : greyColors[bgColor as keyof typeof greyColors];
//   } else {
//     backgroundValue = bgColor || "";
//   }

//   // color value
//   let colorValue = color || "";

//   if (validColors.includes(color || "")) {
//     colorValue = palette[color as keyof typeof palette] ? palette[color as keyof typeof palette].main : greyColors[color as keyof typeof greyColors];
//   }

//   // borderRadius value
//   let borderRadiusValue = borderRadius || "";

//   if (validBorderRadius.includes(borderRadius || "")) {
//     borderRadiusValue = radius[borderRadius as keyof typeof radius];
//   }

//   // boxShadow value
//   let boxShadowValue = shadow || "";

//   if (validBoxShadows.includes(shadow || "")) {
//     boxShadowValue = boxShadows[shadow as keyof typeof boxShadows];
//   }

//   return {
//     opacity,
//     background: backgroundValue,
//     color: colorValue,
//     borderRadius: borderRadiusValue,
//     boxShadow: boxShadowValue,
//   } as CSSObject;
// });

// export default StyledBox;
