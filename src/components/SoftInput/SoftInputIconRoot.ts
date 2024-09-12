import  Icon  from "@mui/material/Icon";
import { styled } from "@mui/material/styles";
import { Sizes } from "../../assets/theme/theme-rtl";


interface SoftInputIconRootProps extends React.ComponentProps<typeof Icon> {
    ownerState?: {
        size: 'small' | 'medium' | 'large' | string;
    };
}
export const SoftInputIconRoot= styled(Icon)<SoftInputIconRootProps>(({ownerState, theme }) =>{
    const { typography } = theme;
    const { fontWeightBold} = typography;
    let ss;
    if(ownerState?.size ==="small"){
        ss=Sizes.sm
    }
    return{
        fontWeight: fontWeightBold,
        fontSize: ss
    }
});