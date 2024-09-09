import { ElementType } from "react";
import { Typography } from "@mui/material";
import { OwnerStateSoftTypography } from "../../../types/components/SoftTypography";
import { SoftTypographyRoot } from "./SoftTypographyRoot";

interface TypographyProps extends React.ComponentProps<typeof Typography> {
    ownerState?: OwnerStateSoftTypography;
    children?: React.ReactNode;
    component?: ElementType; //Permita que la propiedad del componente sea cualquier etiqueta HTML válida o componente React
    href?: string;
}

const SoftTypography : React.FC<TypographyProps> = ({ownerState, children, ...rest}) => {
    return (
        <SoftTypographyRoot
        ownerState={{...ownerState}}
        {...rest}
        >
            {children}
        </SoftTypographyRoot>
    )
};

export default SoftTypography;
/**
 * ejemplo usando forwardRef
 * const SoftTypography = forwardRef<HTMLDivElement,TypographyProps>(({ ownerState, children, ...rest },ref) => {
    return(
        <SoftTypographyRoot
        {...rest}
        ref={ref}
        ownerState={{ ...ownerState }}
        >
        {children}
        </SoftTypographyRoot>
    )
});
export default SoftTypography

 */