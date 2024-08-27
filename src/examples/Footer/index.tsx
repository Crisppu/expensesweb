import { Link } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

import SoftBox from "../../components/SoftBox";
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import typography from "../../assets/theme/base/typography";
import SoftTypography from "../../components/SoftTypography";

function Footer() {
    interface Link {
        name: string; // `name` es un string y es lo que usarás como `key`
        href: string; // puede haber otras propiedades como `href`
    }
  const  company = { href: "https://www.creative-tim.com/", name: "Creative Tim" };
  const links: Link[] = [
    { href: "https://www.creative-tim.com/", name: "Creative Tim" },
    { href: "https://www.creative-tim.com/presentation", name: "About Us" },
    { href: "https://www.creative-tim.com/blog", name: "Blog" },
    { href: "https://www.creative-tim.com/license", name: "License" },
  ];
  const { href, name } = company;
  const { size } = typography;

    const renderLinks = () =>
    links.map((link : Link) => (
        <SoftBox
        key={link.name}
        component="li"
        px={2}
        lineHeight={1}
        >
            <Link key={link.name} href={link.href} target="_blank" style={{ textDecoration: 'none' }}>
                <SoftTypography ownerState={{color:'text', fontWeight:'regular'}} variant="button">
                    {link.name}
                </SoftTypography>
            </Link>
        </SoftBox>
    ));
    /**
     ** responsive
     *ejemplo equivalente
        const styles: SxProps<Theme> = (theme) => ({
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            listStyle: 'none',
            marginTop: 24,
            marginBottom: 0,
            padding: 0,
            [theme.breakpoints.up('lg')]: {
                marginTop: 0,
            },
        });
     */

     // Define los estilos usando `sx` prop
    const styles: SxProps<Theme> = ({ breakpoints }) => ({
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        listStyle: 'none',
        marginTop: 24, // mt: 3
        marginBottom: 0,
        padding: 0,
        // Aplicar un estilo diferente en pantallas grandes
        [breakpoints.up('lg')]: {
            marginTop: 0,
        },
        //equivalente
        /*
        marginTop: {
            xs: 24, // Aplica un margin-top de 24px en pantallas extra pequeñas (xs).
            lg: 0,  // Aplica un margin-top de 0px en pantallas grandes (lg) o mayores.
        },
        */
    });
    const flexDirectionResponsive: SxProps<Theme> = {
        flexDirection: {
          xs: 'column',
          lg: 'row',
        },
    };
    const flexWrap: SxProps<Theme> = {
        flexWrap: 'wrap',
    };

  return (
        <SoftBox
        width="100%"
        display="flex"
        sx={flexDirectionResponsive}
        justifyContent="space-between"
        alignItems="center"
        px={1.5}
        ownerState={
            {
                variant: "contained",
                bgColor: "transparent",
                color: "dark",
                opacity: 1,
                borderRadius: "none",
                shadow: "none",
            }
        }

        >
            <SoftBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={flexWrap}
            color="text"
            fontSize={size.sm}
            px={1.5}
            >
                &copy; {new Date().getFullYear()}, made with
                <SoftBox fontSize={size.md} color="text"  mb={-0.5} mx={0.25}>
                    <FavoriteIcon />
                </SoftBox>
                by
                <Link href={href} target="_blank" style={{ textDecoration: 'none' }}>
                    <SoftTypography
                    ownerState={
                        {
                            color: "dark",
                            fontWeight: 'bold',
                            textTransform: "none",
                            verticalAlign: "middle",
                            textGradient: false,
                            opacity: 1,
                        }
                    }
                    variant="button"
                    fontWeight="medium"
                    >
                        &nbsp;{name}&nbsp;
                    </SoftTypography>
                </Link>
                for a better web
            </SoftBox>


            <SoftBox
            component="ul"
            sx={styles}
            >
                {renderLinks()}
            </SoftBox>
        </SoftBox>

    )
}
export default Footer;