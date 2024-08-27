import { Typography } from "@mui/material";
import { OwnerStateSoftTypography } from "../../../types/components/SoftTypography";
import { SoftTypographyRoot } from "./SoftTypographyRoot";


interface TypographyProps extends React.ComponentProps<typeof Typography> {
    ownerState?: OwnerStateSoftTypography;
    children?: React.ReactNode;
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
}

export default SoftTypography