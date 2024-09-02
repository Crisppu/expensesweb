import React from 'react'
import SoftTypography from '../SoftTypography';
import { SoftProgressRoot } from './SoftProgressRoot';
interface SoftProgressProps {
    variant?: string;
    color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | undefined;
    value?: number;
    label?: string;
    href?: string;
}
const SoftProgress: React.FC<SoftProgressProps> = ({variant,color,value,label, ...rest}) => {
    //console.log(variant,color,value,label);
    return (
        <>
            {label && (
                <SoftTypography
                variant="button"
                ownerState={{
                    color:color,
                    fontWeight:"medium",

                }}
                {...rest}
                >
                    {value}%
                </SoftTypography>
            )}
             <SoftProgressRoot
            {...rest}
            variant="determinate"
            value={value}
            ownerState={{ color, value, variant }}
            />
        </>
    )
}

export default SoftProgress;