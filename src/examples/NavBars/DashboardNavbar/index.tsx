import { AppBar, IconButton, Menu, Toolbar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSoftUIController } from '../../../context/SoftUIContextHook';
import { navbar, navbarContainer, navbarIconButton, navbarMobileMenu, navbarRow, } from './styles';
import SoftBox from '../../../components/SoftBox';
import { Link, useLocation } from 'react-router-dom';
//icon home de material ui
import HomeIcon from '@mui/icons-material/Home';
//icon search de material ui
import SearchIcon from '@mui/icons-material/Search';
//icon account_circle de material ui
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//icon menu de material ui
import MenuIcon from '@mui/icons-material/Menu';
//icon menu_open de material ui
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
//icon settings de material ui
import SettingsIcon from '@mui/icons-material/Settings';
//icon notifications de material ui
import NotificationsIcon from '@mui/icons-material/Notifications';

import Breadcrumbs from '../../Breadcrumbs';
import SoftInput from '../../../components/SoftInput';
import SoftTypography from '../../../components/SoftTypography';
import { setMiniSidenav, setOpenConfigurator, setTransparentNavbar } from '../../../context/SoftUIReducer';
import { NotificationItem } from '../../Items/NotificationItem/styles';
// photo the users
import team2 from '../../../assets/images/team-2.jpg';
const DashboardNavbar: React.FC = () => {
    const absolute = false;
    const light= false;
    const isMini = false;

    const route = useLocation().pathname.split("/").slice(1);

    const [navbarType, setNavbarType] = useState<'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'>('sticky');
    const [controller, dispatch] = useSoftUIController();

    const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } = controller;
    const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
    const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);;
    // Funcion para abrir el menu
    const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOpenMenu(event.currentTarget); // Asegurarse de que event.currentTarget sea HTMLElement
    };
     const handleCloseMenu = () => setOpenMenu(null);




    // TODOS verificar el contexto dee esto
    const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);


    useEffect(() => {
        if(fixedNavbar){
            setNavbarType('sticky');
        }else{
            setNavbarType('static');
        }
        // A function that sets the transparent state of the navbar.
        function handleTransparentNavbar() {
         setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
        }
        window.addEventListener("scroll", handleTransparentNavbar);
         // Call the handleTransparentNavbar function to set the state with the initial value.
         handleTransparentNavbar();
         // Remove event listener on cleanup
        return () => window.removeEventListener("scroll", handleTransparentNavbar);

    }, [fixedNavbar, dispatch]);

    const renderMenu = () => (
        <Menu
        anchorEl={openMenu}
        // anchorReference={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={Boolean(openMenu)}
        onClose={handleCloseMenu}
        sx={{ mt: 2 }}
        >
            <NotificationItem
            image={<img src={team2} alt="person" />}
            title={["New message", " From Laur"]}
            date="13 minutes ago"
            onClick={handleCloseMenu}
            >
            </NotificationItem>
        </Menu>
    );

    return (
        <AppBar
            position={absolute ? "absolute":navbarType}
            color='inherit'
            sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}

        >
            <Toolbar sx={(theme) => navbarContainer(theme)}>
                <SoftBox ownerState={{color:"inherit"}} mb={{xs:1, md:0}} sx={(theme) => navbarRow(theme, { isMini })}>
                    <Breadcrumbs icon={<HomeIcon />} title={route[route.length - 1]} route={route} light={light} />
                </SoftBox>
                {isMini ? null : (
                    <SoftBox sx={(theme) => navbarRow(theme, { isMini })}>
                        <SoftBox pr={1}>
                            <SoftInput
                            placeholder="Type here..."
                            icon={{ component: SearchIcon, direction: "left" }}
                            />
                        </SoftBox>
                        <SoftBox ownerState={{color: light ? "white":"inherit"}}>
                            <Link to="/authentication/sign-in">
                                <IconButton sx={navbarIconButton}  size='small' >
                                    <AccountCircleIcon
                                        sx={({ palette: { dark, white } }) => ({
                                        color: light ? white.main : dark.main,
                                        })}
                                    >
                                    </AccountCircleIcon>
                                    <SoftTypography
                                        variant="button"
                                        ownerState={{
                                            color: light ? "white" : "dark",
                                            fontWeight:"medium"

                                        }}
                                    >
                                        Sign in
                                    </SoftTypography>
                                </IconButton>
                            </Link>
                            <IconButton
                            size='small'
                            color='inherit'
                            sx={navbarMobileMenu}
                            onClick={handleMiniSidenav}
                            >
                                {
                                    miniSidenav ?
                                    <MenuOpenIcon className={light ? "text-white" : "text-dark"}></MenuOpenIcon>
                                    :
                                    <MenuIcon className={light ? "text-white" : "text-dark"}></MenuIcon>
                                }
                            </IconButton>
                            <IconButton
                            size='small'
                            color='inherit'
                            sx={navbarIconButton}
                            aria-controls='notification-menu'
                            aria-haspopup='true'
                            onClick={handleConfiguratorOpen}
                            >
                                <SettingsIcon  className={light ? "text-white" : "text-dark"}></SettingsIcon>

                            </IconButton>
                            <IconButton
                            size="small"
                            color="inherit"
                            sx={navbarIconButton}
                            aria-controls="notification-menu"
                            aria-haspopup="true"
                            onClick={handleOpenMenu}
                            >
                                <NotificationsIcon className={light ? "text-white" : "text-dark"}></NotificationsIcon>
                            </IconButton>
                            {renderMenu()}
                        </SoftBox>
                    </SoftBox>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default DashboardNavbar;