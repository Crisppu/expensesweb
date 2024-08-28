import React from 'react'
import SoftBox from '../../../components/SoftBox';
import { Card, Grid } from '@mui/material';
import SoftTypography from '../../../components/SoftTypography';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface MiniStatisticsCardProps{
    bgColor?:string;
    title:{
        fontWeight?: false | "light" | "regular" | "medium" | "bold";
        text?:string;
    };
    percentage: {
        color?: "inherit"|"primary"|"secondary"|"info"|"success"|"warning"|"error"|"light"|"dark"|"text"|"white";
        text?: string;
    };
    direction?: string;
    count?:string;
    icon:{
        color:string;
        component: React.ElementType<SvgIconProps>;

    }
}

const MiniStatisticsCard: React.FC<MiniStatisticsCardProps> = ({bgColor,title,percentage,direction,count,icon}) => {
    return (
        <Card>
            <SoftBox ownerState={{bgColor:bgColor, variant:'gradient'}} >
                <SoftBox p={2}>
                    <Grid container alignItems={'center'}>
                        {direction === "left" ? (
                            <Grid item>
                                <SoftBox
                                ownerState={{
                                    variant:"gradient",
                                    bgColor:`${bgColor === "white" ? icon.color : "white"}`,
                                    color:`${bgColor === "white" ? "white" : "dark"}`,
                                    borderRadius:"md",
                                    shadow:"md"
                                }}
                                width="3rem"
                                height="3rem"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                >
                                    <icon.component fontSize="small" color="inherit" />
                                </SoftBox>
                            </Grid>
                        ) : null}
                        <Grid item xs={8}>
                            <SoftBox ml={direction === "left" ? 2 : 0} lineHeight={1}>
                                <SoftTypography
                                ownerState={{
                                    color:`${bgColor === "white" ? "text" : "white"}`,
                                    opacity:Number(`${bgColor === "white" ? 1 : 0.7}`),
                                    textTransform:"capitalize",
                                    fontWeight:title.fontWeight
                                }}
                                variant="button"
                                >
                                {title.text}
                                </SoftTypography>
                                <SoftTypography
                                variant="h5"
                                ownerState={{
                                    color:`${bgColor === "white" ? "dark" : "white"}`,
                                    fontWeight:"bold"
                                }}
                                >
                                {count}{" "}
                                    <SoftTypography variant="button"
                                    ownerState={{
                                        color:percentage.color,
                                        fontWeight:"bold"
                                    }}
                                    >
                                        {percentage.text}
                                    </SoftTypography>
                                </SoftTypography>
                            </SoftBox>
                        </Grid>
                        {direction === "right" ? (
                        <Grid item xs={4}>
                            <SoftBox
                            ownerState={{
                                variant:"gradient",
                                bgColor:`${bgColor === "white" ? icon.color : "white"}`,
                                color:`${bgColor === "white" ? "white" : "dark"}`,
                                borderRadius:"md",
                                shadow:"md"
                            }}
                            width="3rem"
                            height="3rem"
                            marginLeft="auto"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            >
                                <icon.component fontSize="small" color="inherit" />
                            </SoftBox>
                        </Grid>
                        ) : null}
                    </Grid>

                </SoftBox>
            </SoftBox>
        </Card>
    )
};
export default MiniStatisticsCard;
