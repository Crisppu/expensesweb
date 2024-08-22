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
import SoftBoxRoot from './SoftBoxRoot';
    interface OwnerState {
        variant?:  "contained" | "outlined"; // Solo estos dos valores son permitidos
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
        // Aquí puedes añadir otras propiedades que quieras pasar a SoftBox
        // Por ejemplo: className?: string;
        width?: string;
        display?: string;
    }

const SoftBox: React.FC<SoftBoxProps> = ({ownerState,children, ...reset}) => {
    return (
        <SoftBoxRoot
        ownerState={{...ownerState}}
        {...reset}
        >
            {children}
        </SoftBoxRoot>
    );
};

export default SoftBox;


// import { forwardRef } from "react";

// // prop-types is a library for typechecking of props
// import PropTypes from "prop-types";
//import SoftBoxRoot from 'components/SoftBox/SoftBoxRoot';

// // Custom styles for SoftBox

// const SoftBox = forwardRef(
//   ({ variant, bgColor, color, opacity, borderRadius, shadow, ...rest }, ref) => (
//     <SoftBoxRoot
//       {...rest}
//       ref={ref}
//       ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow }}
//     />
//   )
// );

// // Setting default values for the props of SoftBox
// SoftBox.defaultProps = {
//   variant: "contained",
//   bgColor: "transparent",
//   color: "dark",
//   opacity: 1,
//   borderRadius: "none",
//   shadow: "none",
// };

// // Typechecking props for the SoftBox
// SoftBox.propTypes = {
//   variant: PropTypes.oneOf(["contained", "gradient"]),
//   bgColor: PropTypes.string,
//   color: PropTypes.string,
//   opacity: PropTypes.number,
//   borderRadius: PropTypes.string,
//   shadow: PropTypes.string,
// };

// export default SoftBox;
