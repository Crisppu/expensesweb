import React, { useEffect } from 'react'
import SoftBox from '../../../components/SoftBox';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { useSoftUIController } from '../../../context/SoftUIContextHook';
import { setLayout } from '../../../context/SoftUIReducer';
import { useLocation } from 'react-router-dom';
interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({children}) => {
    const [state, dispatch] = useSoftUIController();
    const { miniSidenav } = state;
    const { pathname } = useLocation();

    useEffect(() => {
       setLayout(dispatch, "dashboard");
    },[dispatch, pathname]);
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
    return (
        <SoftBox
            sx={styles}
        >
            {children}
        </SoftBox>
    )
}

export default DashboardLayout;
