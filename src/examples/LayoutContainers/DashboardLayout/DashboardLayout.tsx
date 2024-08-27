import React from 'react'
import SoftBox from '../../../components/SoftBox';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
interface DashboardLayoutProps {
    children: React.ReactNode;
}
const miniSidenav = true;
const styles: SxProps<Theme> = (theme) => ({
    p: 3,
    position: "relative",
    [theme.breakpoints.up("xl")]: {
        marginLeft: miniSidenav ? theme.functions.pxToRem(120) : theme.functions.pxToRem(274),
        transition: theme.transitions.create(["margin-left", "margin-right"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard,
        }),
    },
});
const DashboardLayout: React.FC<DashboardLayoutProps> = ({children}) => {
    return (
        <SoftBox
            sx={styles}
        >
            {children}
        </SoftBox>
    )
}

export default DashboardLayout;

/**
 * sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        position: "relative",

        [breakpoints.up("xl")]: {
          marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(["margin-left", "margin-right"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}
 */