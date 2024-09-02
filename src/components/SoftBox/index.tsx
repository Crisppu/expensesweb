/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// src/App.tsx
import React from 'react';
import { SoftBoxRoot } from './SoftBoxRoot';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';


    interface OwnerState {
        variant?:  string; // Solo estos dos valores son permitidos
        bgColor?: string;
        color?: string;
        opacity?: number;
        borderRadius?: string;
        shadow?: string;
    }
    // Define el tipo de las props para el componente SoftBox
    interface SoftBoxProps {
        ownerState?: OwnerState;
        children?: React.ReactNode;
        key?: string;
        // Aquí puedes añadir otras propiedades que quieras pasar a SoftBox
        className?: string;
        width?: string;
        display?: string;
        justifyContent?: string;
        alignItems?: string;
        color?: string;
        component?: React.ElementType;
        px?: number;
        lineHeight?: number;
        fontSize?: string;
        sx?: SxProps<Theme>;
        mb?: number;
        py?:number;
        mx?: number;
        bgColor?:string;
        variant?:  string;
        p?:number;
        pt?:number;
        height?:string;
        borderRadius?:string;
        shadow?:string;
        ml?:number;
        marginLeft?:string;
        flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
        src?: string;
        alt?: string;
        position?: "absolute" | "relative" | "fixed" | "sticky";
        left?: number;
        mr?:number;
        mt?:number;
        padding?:string;
        pr?:number;

    }

const SoftBox: React.FC<SoftBoxProps> = ({sx,ownerState, children, ...rest}) => {
    return (
        <SoftBoxRoot
        // width={width}
        // display={display}
        // justifyContent={justifyContent}
        // alignItems={alignItems}
        sx={sx}
        ownerState={{
            ...ownerState,
        }}
        // px={px}
        {...rest}
        >
            {children}
        </SoftBoxRoot>
    );
};

export default SoftBox;