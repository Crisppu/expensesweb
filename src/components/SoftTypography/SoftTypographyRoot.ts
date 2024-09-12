import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { OwnerStateSoftTypography } from '../../../types/components/SoftTypography/index';

interface TypographyProps extends React.ComponentProps<typeof Typography> {
    ownerState:OwnerStateSoftTypography;
}
export const SoftTypographyRoot = styled(Typography)<TypographyProps>(({ theme, ownerState }) => {
    const { palette, typography, functions } = theme;
    const { color, textTransform, verticalAlign, fontWeight, opacity, textGradient } = ownerState;
  
    const { gradients, transparent } = palette;
    const { fontWeightLight, fontWeightRegular, fontWeightMedium, fontWeightBold } = typography;
    const { linearGradient } = functions;
  
    // fontWeight styles
    const fontWeights = {
      light: fontWeightLight,
      regular: fontWeightRegular,
      medium: fontWeightMedium,
      bold: fontWeightBold,
    };
     // styles for the typography with textGradient={true}
    const gradientStyles = () => ({
        backgroundImage:
        color !== "inherit" && color !== "text" && color !== "white" && gradients[color as keyof typeof gradients]
            ? linearGradient(gradients[color as keyof typeof gradients].main, gradients[color as keyof typeof gradients].state)
            : linearGradient(gradients.dark.main, gradients.dark.state),
        display: "inline-block",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: transparent.main,
        position: "relative",
        zIndex: 1,
    });
    //nota: the problem is ,hay que pasar por props el text color sino truena

    const colorKey = color as keyof typeof theme.palette;
    const mainColor = palette[colorKey] as {main:string};
    let res = mainColor.main;
    if(color === "inherit" || !palette[colorKey]){
        res = "inherit";
    }
    const validFontWeight = {
        fontWeight: fontWeights[fontWeight as keyof typeof fontWeights] && fontWeights[fontWeight as keyof typeof fontWeights] ,
        ...(textGradient && gradientStyles()),
    };

    return {
        color: res,
        fontWeight:validFontWeight.fontWeight,
        textTransform:textTransform,
        verticalAlign: verticalAlign,
        textGradient:textGradient,
        opacity: opacity,
        textDecoration: "none",
    };
})

