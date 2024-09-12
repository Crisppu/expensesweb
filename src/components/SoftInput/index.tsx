import { forwardRef } from "react";
import { SoftInputWithIconRoot } from "./SoftInputWithIconRoot";
import { SoftInputIconBoxRoot } from "./SoftInputIconBoxRoot";
import { SoftInputIconRoot } from "./SoftInputIconRoot";
import { SvgIconProps } from "@mui/material";
import { SoftInputRoot } from "./SoftInputRoot";
import { useSoftUIController } from "../../context/SoftUIContextHook";

interface SoftInputProps {
    size?:'small' | 'medium' | 'large' |string;
    icon:{
        component:React.ComponentType<SvgIconProps>;
        direction?:'left' | 'right'|"none";
    }
    error?:boolean;
    success?:boolean;
    disabled?:boolean;
    placeholder?:string;
}

const SoftInput= forwardRef<HTMLElement,SoftInputProps>(({size="medium",icon,error =false,success =false,disabled =false, ...rest},ref) => {
    const [controller] = useSoftUIController();
    const { direction } = controller;
    const iconDirection = icon.direction;
    let Template ;
    if(icon.component && icon.direction === "left"){
        Template = ()=>(
            <SoftInputWithIconRoot ref={ref} ownerState={{error,success,disabled}}>
                <SoftInputIconBoxRoot ownerState={{size:size}}>
                    <SoftInputIconRoot fontSize="small" ownerState={{size:size}}>
                        <icon.component></icon.component>
                    </SoftInputIconRoot>
                </SoftInputIconBoxRoot>
                <SoftInputRoot
                {...rest}
                ownerState={{ size, error, success, iconDirection, direction, disabled }}
                />
            </SoftInputWithIconRoot>
        )
    }else if(icon.component && icon.direction === "right"){
        Template = ()=>(
            <SoftInputWithIconRoot ref={ref} ownerState={{ error, success, disabled }}>
                <SoftInputRoot
                {...rest}
                ownerState={{ size, error, success, iconDirection, direction, disabled }}
                />
                <SoftInputIconBoxRoot ownerState={{ size }}>
                <SoftInputIconRoot fontSize="small" ownerState={{ size }}>
                    <icon.component></icon.component>
                </SoftInputIconRoot>
                </SoftInputIconBoxRoot>
            </SoftInputWithIconRoot>
        )
    }else{
        Template = ()=>(
            <SoftInputRoot {...rest} ref={ref} ownerState={{ size, error, success, disabled }} />

        )
    }
    return(
        <>
            <Template></Template>
        </>
    )
});
export default SoftInput;