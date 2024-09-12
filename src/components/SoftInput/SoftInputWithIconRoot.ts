import { Box } from "@mui/material"; //si me da error poner /Box
import { styled } from "@mui/material/styles";

interface SoftInputWithIconRootProps extends React.ComponentProps<typeof Box> {
    ownerState?: {
        size?: 'small' | 'medium' | 'large' | string;
        icon?: {
            component: React.ElementType;
            direction: 'left' | 'right'| "none";
        }
        error: boolean;
        success: boolean;
        disabled: boolean;
        placeholder?: string;
    };

}
export const SoftInputWithIconRoot = styled(Box)<SoftInputWithIconRootProps>(({ownerState, theme }) =>{
    const { palette, functions, borders } = theme;

    const { inputColors, grey, white } = palette;
    const { pxToRem } = functions;
    const { borderRadius, borderWidth } = borders;

    let borderColorValue = inputColors.borderColor.main;
    if(ownerState?.error){
        borderColorValue = inputColors.error;
    }else if(ownerState?.success){
        borderColorValue = inputColors.success;
    }

    return{
        display:"flex",
        alignItems:"center",
        backgroundColor:ownerState?.disabled ? grey[200] : white.main,
        border:`${borderWidth[1]} solid`,
        borderRadius:borderRadius.md,
        borderColor: borderColorValue,
        "& .MuiInputBase-input": {
            height: pxToRem(20),
        },
    }
});