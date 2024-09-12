import React from 'react'
import SoftBox from '../../components/SoftBox';
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import { Link } from 'react-router-dom';
import SoftTypography from '../../components/SoftTypography';

interface BreadcrumbsProps {
    icon?: React.ReactNode;
    title:string;
    light?:boolean;
    route:string[];

}
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({icon,title,light, route}) => {
    const routes = route.slice(0, -1);

    return (
        <SoftBox mr={{xs:0, xl:8}}>
            <MuiBreadcrumbs sx={{
                "& .MuiBreadcrumbs-separator": {
                    color: ({ palette: { white, grey } }) => (light ? white.main : grey[600]),
                },
            }}>
                <Link to={"/"}>
                    <SoftTypography
                    component="span"
                    variant='body2'
                    ownerState={{
                        color: light ? "white" : "dark",
                        opacity: light ? 0.8 : 0.5
                    }}
                    sx={{lineHeight:0}}
                    >
                        {icon}
                    </SoftTypography>
                </Link>
                {
                    routes.map((el) => (
                        <Link to={`/${el}`} key={el}>
                            <SoftTypography
                            component="span"
                            variant='button'
                            fontWeight='regular'
                            textTransform="capitalize"
                            ownerState={{
                                color: light ? "white" : "dark",
                                opacity: light ? 0.8 : 0.5
                            }}
                            sx={{lineHeight:0}}
                            >
                                {el}
                            </SoftTypography>
                        </Link>
                    ))
                }
                <SoftTypography
                variant='button'
                fontWeight='regular'
                textTransform="capitalize"
                ownerState={{
                    color: light ? "white" : "dark",
                }}
                sx={{lineHeight:0}}
                >
                    {title.replace("-", " ")}
                </SoftTypography>

            </MuiBreadcrumbs>
            <SoftTypography
            variant='h6'
            noWrap
            ownerState={{
                fontWeight:'bold',
                textTransform: "capitalize",
                color: light ? "white" : "dark",
            }}
            >
                {title.replace("-", " ")}
            </SoftTypography>
        </SoftBox>
    )
}
export default Breadcrumbs;
