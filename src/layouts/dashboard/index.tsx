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
import ReportsBarChart from '../../examples/Charts/BarCharts/ReportsBarChart';
import GradientLineChart from '../../examples/Charts/LineCharts/GradientLineChart';
import typography from '../../assets/theme/base/typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SoftTypography from '../../components/SoftTypography';
import gradientLineChartData from './data/gradientLineChartData';

const Dashboard: React.FC = () => {
    const { chart, items } = ReportsBarChartData;
    const {size} = typography
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
                <SoftBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={5}>
                            <ReportsBarChart
                            title="active users"
                            description={
                                <>
                                  (<strong>+23%</strong>) than last week
                                </>
                              }
                            color="info"
                            chart={chart}
                            items={items}
                            />
                        </Grid>
                        <Grid item xs={12} lg={7}>
                            <GradientLineChart
                            title='sales Overview'
                            height="20.25rem"
                            chart={gradientLineChartData}
                            description={
                                <SoftBox display='flex' alignItems='center'>
                                    <SoftBox fontSize={size.lg} ownerState={{
                                        color:'success',
                                    }}
                                    mb={0.3}
                                    mr={0.5}
                                    lineHeight={0}
                                    >
                                        <ArrowUpwardIcon className='fonBold'></ArrowUpwardIcon>
                                    </SoftBox>
                                    <SoftTypography
                                    variant='button'
                                    fontSize={size.md}
                                    ownerState={{
                                        color:'text',
                                    }}
                                    >
                                        4% more{""}
                                        <SoftTypography variant="button" fontWeight="regular"
                                        ownerState={{color:'text'}}
                                        >
                                            in 2021
                                        </SoftTypography>
                                    </SoftTypography>
                                </SoftBox>
                            }
                            >

                            </GradientLineChart>
                        </Grid>

                    </Grid>
                </SoftBox>

            </SoftBox>
            <Footer></Footer>
        </DashboardLayout>
    )
}

export default Dashboard;