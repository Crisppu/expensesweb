import { LinearProgress , LinearProgressProps} from '@mui/material';
import { styled } from '@mui/material/styles';


//SoftProgressRoot
interface OwnerState{
    variant?: string;
    color?: string;
    value?: number;
    textTransform?:"capitalize" | "uppercase" | "lowercase" ;
    verticalAlign?:"baseline" | "center" | "top" ;
    fontWeight?:"light" | "regular" | "medium" | "bold" ;
    opacity?:number;
    textGradient?:string;
}
interface ProgressProps extends LinearProgressProps {
    ownerState: OwnerState;
    href?: string;
}

export const SoftProgressRoot = styled(LinearProgress)<ProgressProps>
(({theme, ownerState}) =>{
    const {palette, typography,functions} = theme;
    const {color, textTransform, verticalAlign, fontWeight, opacity, textGradient} = ownerState;

    const {gradients, transparent} = palette;
    const {fontWeightLight, fontWeightRegular, fontWeightMedium, fontWeightBold} = typography;
    const {linearGradient} = functions;
    //fontWeight styles
    const fontWeights = {
        light: fontWeightLight,
        regular: fontWeightRegular,
        medium: fontWeightMedium,
        bold: fontWeightBold,
    };
    const gradientsStyles =()=>({
        backgroundImage:
        color !== "inherit" && color !== "text" && color !== "white" && gradients[color as keyof typeof gradients]
        ? linearGradient(gradients[color as keyof typeof gradients].main, gradients[color as keyof typeof gradients].state):
        linearGradient(gradients.dark.main, gradients.dark.state),
        display:"inline-block",
        WebkitBackgroundClip:"text",
        WebkitTextFillColor:transparent.main,
        zIndex:1
    })

    let positionValue ;
    if(textGradient){
        positionValue = "relative";
    }
    return ({
        opacity,
        textTransform,
        verticalAlign,
        textDecoration:"none",
        color: color === "inherit" || !palette[color as keyof typeof palette] ? "inherit" : (palette[color as keyof typeof palette] as {main:string}).main ,
        fontWeight:fontWeights[fontWeight as keyof typeof fontWeight] && fontWeights[fontWeight as keyof typeof fontWeights],
        ...(textGradient && gradientsStyles()),
       positionValue,
    });

});
