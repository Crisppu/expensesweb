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
import BuildByDevelopers from './components/BuildByDevelopers';
import WorkWithTheRockets from './components/WorkWithTheRockets';
import ReportsBarChartData from './data/reportsBarChartData';
import ReportsBarChart from '../../examples/Charts/ReportsBarChart';

const Dashboard: React.FC = () => {
    const { chart, items } = ReportsBarChartData;
    console.log(chart, items)

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
                <SoftBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={7}>
                            <BuildByDevelopers />
                        </Grid>
                        <Grid item xs={12} lg={5}>
                            <WorkWithTheRockets />
                        </Grid>
                    </Grid>
                </SoftBox>
                <SoftBox>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={5}>
                            <ReportsBarChart
                            title="active users"
                            description="Users who visited the website in the last 30 days"
                            color="info"
                            chart={chart}
                            items={items}
                            >
                            </ReportsBarChart>
                        </Grid>

                    </Grid>
                </SoftBox>

            </SoftBox>
            <Footer></Footer>
        </DashboardLayout>
    )
}

export default Dashboard;