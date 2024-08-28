import React from 'react'
import Footer from '../../examples/Footer';
import DashboardLayout from '../../examples/LayoutContainers/DashboardLayout/DashboardLayout';
import SoftBox from '../../components/SoftBox';
import { Grid } from '@mui/material';
import MiniStatisticsCard from '../../examples/Cards/StatisticsCards';
import PaidIcon from '@mui/icons-material/Paid';
import PublicIcon from '@mui/icons-material/Public';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Dashboard: React.FC = () => {
    return (
        <DashboardLayout>
            <SoftBox py={4}>
                <SoftBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} xl={3}>
                            <MiniStatisticsCard
                            bgColor='white'
                            title={{ fontWeight:'medium', text: "today's money" }}
                            percentage={{ color: "success", text: "+55%" }}
                            count="$53,000"
                            direction="right"
                            icon={{ color: "info", component: PaidIcon }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} xl={3}>
                            <MiniStatisticsCard
                            bgColor='white'
                            title={{ fontWeight:'medium', text: "today's users" }}
                            percentage={{ color: "success", text: "+3%" }}
                            count="2,300"
                            direction="right"
                            icon={{ color: "info", component: PublicIcon }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} xl={3}>
                            <MiniStatisticsCard
                            bgColor='white'
                            title={{ fontWeight:'medium', text: "new clients" }}
                            percentage={{ color: "error", text: "-2%" }}
                            count="+3,462"
                            direction="right"
                            icon={{ color: "info", component: EmojiEventsIcon }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} xl={3}>
                            <MiniStatisticsCard
                            bgColor='white'
                            title={{ fontWeight:'medium', text: "sales" }}
                            percentage={{ color: "success", text: "+5%" }}
                            count="$103,430"
                            direction="right"
                            icon={{ color: "info", component: ShoppingCartIcon }}
                            />
                        </Grid>

                    </Grid>

                </SoftBox>

            </SoftBox>
            <Footer></Footer>
        </DashboardLayout>
    )
}

export default Dashboard;