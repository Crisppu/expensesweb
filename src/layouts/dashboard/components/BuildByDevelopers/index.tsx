import { Card, Grid, SxProps } from '@mui/material';
import React from 'react'
import SoftBox from '../../../../components/SoftBox';
import SoftTypography from '../../../../components/SoftTypography';
import { Theme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import wavesWhite from '../../../../assets/images/shapes/waves-white.svg';
import rocketWhite from "../../../../assets/images/illustrations/rocket-white.png";

const BuildByDevelopers: React.FC = () => {
    const styles: SxProps<Theme> = () => ({
        mt: "auto",
        mr: "auto",
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        "&:hover .MuiSvgIcon-root, &:focus .MuiSvgIcon-root": {
          transform: `translate(6px, -0.5px)`,
        },


    });
  return (
    <Card>
        <SoftBox p={2}>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                    <SoftBox display='flex'  flexDirection='column' height='100%' >
                        <SoftBox pt={1} mb={0.5}>
                            <SoftTypography variant="body2" ownerState={{ color:"text" ,fontWeight:"medium" }}>
                                Build by developers
                            </SoftTypography>
                        </SoftBox>
                        <SoftTypography variant="h5" ownerState={{color:"text", fontWeight:"bold"}} gutterBottom>
                            Soft UI Dashboard
                        </SoftTypography>
                        <SoftBox mb={6}>
                            <SoftTypography variant="body2" ownerState={{ color:"text" }}>
                            From colors, cards, typography to complex elements, you will find the full
                            documentation.
                            </SoftTypography>
                        </SoftBox>
                        <SoftTypography
                        component="a"
                        href="#"
                        variant="button"
                        ownerState={{ color:"text" ,fontWeight:"medium" }}
                        sx={styles}
                        >
                            Read More
                            <ArrowForwardIcon sx={{
                                fontSize: "1.125rem",
                                transform: `translate(2px, -0.5px)`,
                                transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
                                fontWeight: "bold",
                            }} />
                        </SoftTypography>
                    </SoftBox>
                </Grid>
                <Grid item xs={12} lg={5} sx={{ position: "relative", ml: "auto" }}>
                    <SoftBox
                    height='100%'
                    display='grid'
                    justifyContent='center'
                    alignItems='center'
                    ownerState={
                        {
                            bgColor:"info",
                            borderRadius:"lg",
                            variant:"gradient",
                        }
                    }
                    >
                        <SoftBox
                        component="img"
                        src={wavesWhite}
                        alt="waves"
                        display="block"
                        position="absolute"
                        left={30}
                        width="85%"
                        height="100%"
                        />
                        <SoftBox component="img" src={rocketWhite} alt="rocket" width="100%" pt={3} />
                    </SoftBox>
                </Grid>
            </Grid>
        </SoftBox>
    </Card>
  )
}
export default BuildByDevelopers;
