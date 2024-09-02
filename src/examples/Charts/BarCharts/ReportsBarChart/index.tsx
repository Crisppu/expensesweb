import React, { useMemo } from 'react'
import { ReportsBarChartData } from '../../../../layouts/dashboard/data/reportsBarChartData';
import { Grid } from '@mui/material';
import { BarReportsChartItem } from './ReportsBarChartItem';
import SoftBox from '../../../../components/SoftBox';
import SoftTypography from '../../../../components/SoftTypography';
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
import configs from './configs';

interface ReportsBarChartProps {
    color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" ;
    title: string;
    description: string;
    chart: ReportsBarChartData["chart"];
    items: ReportsBarChartData["items"];
}
const ReportsBarChart:React.FC<ReportsBarChartProps> = ({color, title,description,chart, items}) => {

    const chartConfig = configs(chart.labels, chart.datasets);
    const renderItems = items.map(({icon, label, progress}) => {
        return (
            <Grid item xs={6} sm={3} key={label}>
                <BarReportsChartItem
                color={color}
                icon={{color:icon.color, component:icon.component}}
                label={label}
                progress={{content:progress.content, percentage:progress.percentage}}
                >

                </BarReportsChartItem>
            </Grid>
        );
    });

    return (
        <>
            <SoftBox padding="1rem">
            {
                    useMemo(()=>(
                        <SoftBox
                        py={2}
                        pr={0.5}
                        mb={3}
                        height='12.5rem'
                        ownerState={{bgColor:color, borderRadius:"lg", variant:"gradient"}}
                        >
                            <Bar data={chartConfig.data} options={chartConfig.options }></Bar>

                        </SoftBox>

                    ),[color,chartConfig])
                }



                <SoftBox px={1}>
                    <SoftBox mb={2}>
                        <SoftTypography variant='h6' textTransform="capitalize" ownerState={{color:"text",fontWeight:"medium"}}>{title}</SoftTypography>
                        <SoftTypography variant='button' component="div" ownerState={{color:"text",fontWeight:"regular"}}>{description}</SoftTypography>
                    </SoftBox>
                    <SoftBox py={1} px={0.5}>
                        <Grid container spacing={2}>
                            {renderItems}
                        </Grid>
                    </SoftBox>
                </SoftBox>
            </SoftBox>
        </>
    )
}

export default ReportsBarChart;
