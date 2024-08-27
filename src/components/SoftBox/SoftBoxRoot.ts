import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
interface OwnerState {
  variant?:  string;
  bgColor?: string;
  color?: string;
  opacity?: number;
  borderRadius?: string;
  shadow?: string;
}
interface BoxProps extends React.ComponentProps<typeof Box> {
  ownerState: OwnerState;

}


export const SoftBoxRoot = styled(Box)<BoxProps>(({ownerState, theme }) =>{
    const { variant, bgColor, color, opacity, borderRadius, shadow } = ownerState;
    const { palette, functions, borders, boxShadows } = theme;
    const { gradients, grey, white } = palette;
    const { linearGradient } = functions;
    const { borderRadius: radius } = borders;


    const greyColors = {
        "grey-100": grey[100],
        "grey-200": grey[200],
        "grey-300": grey[300],
        "grey-400": grey[400],
        "grey-500": grey[500],
        "grey-600": grey[600],
        "grey-700": grey[700],
        "grey-800": grey[800],
        "grey-900": grey[900],
    };

    const validGradients = [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
    ];

    const validColors = [
        "transparent",
        "white",
        "black",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
        "text",
        "grey-100",
        "grey-200",
        "grey-300",
        "grey-400",
        "grey-500",
        "grey-600",
        "grey-700",
        "grey-800",
        "grey-900",
    ];
    const validBorderRadius = ["xs", "sm", "md", "lg", "xl", "xxl", "section"];
    const validBoxShadows = ["xs", "sm", "md", "lg", "xl", "xxl", "inset"];

    // background value
    let backgroundValue = bgColor as keyof typeof palette;

    if (variant === "gradient") {
        if (validGradients.find((el) => el === bgColor)) {
            backgroundValue = linearGradient(gradients[bgColor as keyof typeof gradients].main, gradients[bgColor as keyof typeof gradients].state) as keyof typeof palette;
        } else {
            backgroundValue = white.main as keyof typeof palette;
        }
    } else if (validColors.find((el) => el === bgColor)) {
        if(palette[backgroundValue]){
            const r = palette[backgroundValue] as { main: string } ;
            backgroundValue = r.main as keyof typeof palette;
        }else{
            backgroundValue = greyColors[bgColor as keyof typeof greyColors] as keyof typeof palette;
        }
    }
    // color value
    const colorKey = color as keyof typeof theme.palette;
    const colorValue = theme.palette[colorKey] as {main:string};
    let otro = colorValue?.main;

    if (validColors.find((el) => el === color)) {
        //si el color no esta dentro validColors, entonces busca en el objeto de greyColors
        if(!theme.palette[colorKey]){
            otro = greyColors[color as keyof typeof greyColors];
            // console.log('entro')
        }
    }

    // borderRadius value
    let borderRadiusValue = borderRadius as keyof typeof borders.borderRadius;

    if (validBorderRadius.find((el) => el === borderRadius)) {
        /* da el mismo resultado
        const r = radius[borderRadiusValue] as string;
        borderRadiusValue = r as keyof typeof borders.borderRadius;
        */
        borderRadiusValue = radius[borderRadiusValue] as keyof typeof borders.borderRadius;
    }


    // boxShadow value
    let boxShadowValue = shadow as keyof typeof boxShadows;

    if (validBoxShadows.find((el) => el === shadow)) {
        boxShadowValue = boxShadows[boxShadowValue] as keyof typeof boxShadows;
    }

    // console.log(otro, backgroundValue, borderRadiusValue,boxShadowValue)
    return {
        opacity,
        background: backgroundValue,
        color: otro,
        borderRadius: borderRadiusValue,
        boxShadow: boxShadowValue,
    };
});