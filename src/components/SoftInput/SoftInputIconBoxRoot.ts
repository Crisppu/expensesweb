import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

interface SoftInputIconBoxRootProps extends React.ComponentProps<typeof Box> {
    ownerState: {
        size?: 'small' | 'medium' | 'large' | string;
    };
}

export const SoftInputIconBoxRoot = styled(Box)<SoftInputIconBoxRootProps>(({ownerState, theme }) =>{
    const { palette, functions } = theme;
    const { size } = ownerState;
    const { dark } = palette;
    const { pxToRem } = functions;
    return{
        lineHeight: 0,
        padding: size === "small" ? `${pxToRem(4)} ${pxToRem(10)}` : `${pxToRem(8)} ${pxToRem(10)}`,
        width: pxToRem(39),
        height: "100%",
        color: dark.main,
    }
});