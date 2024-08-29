import { Card } from '@mui/material';
import React from 'react'
import SoftBox from '../../../../components/SoftBox';
import ivancik from "../../../../assets/images/ivancik.jpg";
import SoftTypography from '../../../../components/SoftTypography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const WorkWithTheRockets:React.FC = () => {
    return (
        <Card sx={{ height: "100%" }}>
        <SoftBox position='relative' height='100%' p={2}>
            <SoftBox
            display='flex'
            flexDirection='column'
            height='100%'
            py={2}
            px={2}
            ownerState={{borderRadius:"lg"}}
            sx={() => ({
                backgroundImage:({functions:{linearGradient, rgba}, palette:{gradients}})=>(
                    `${linearGradient(rgba(gradients.dark.main,0.8),rgba(gradients.dark.state,0.8))},url(${ivancik})`
                ),
                backgroundSize: 'cover',
                height:"85%"
            })}
            >
                <SoftBox mb={3} pt={1}>
                    <SoftTypography variant="h5" ownerState={{color:"white",fontWeight:"bold"}}>
                        Work with the rockets
                    </SoftTypography>
                </SoftBox>
                <SoftBox mb={2}>
                    <SoftTypography variant="body2" ownerState={{color:"white"}}>
                    Wealth creation is an evolutionarily recent positive-sum game. It is all about who
                    take the opportunity first.
                    </SoftTypography>
                </SoftBox>
                <SoftTypography
                component="a"
                href="#"
                variant="button"
                ownerState={{fontWeight:"medium",color:"white"}}
                sx={()=>({
                mt: "auto",
                mr: "auto",
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
                "&:hover .MuiSvgIcon-root, &:focus .MuiSvgIcon-root": {
                    transform: `translate(6px, -0.5px)`,
                },
                })}
                >
                    Read More
                    <ArrowForwardIcon
                    sx={{fontSize: "1.125rem",
                    transform: `translate(2px, -0.5px)`,
                    transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
                    fontWeight: "bold",}}
                    />
                </SoftTypography>

            </SoftBox>

        </SoftBox>

        </Card>
    )
}

export default WorkWithTheRockets;