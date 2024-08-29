import React from 'react'
import { ReportsBarChartData } from '../../../layouts/dashboard/data/reportsBarChartData';
import { Grid } from '@mui/material';
import { BarReportsChartItem } from './ReportsBarChartItem';
interface ReportsBarChartProps {
    color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | undefined;
    title: string;
    description: string;
    chart: ReportsBarChartData["chart"];
    items: ReportsBarChartData["items"];
}
const ReportsBarChart:React.FC<ReportsBarChartProps> = ({color, title,description,chart, items}) => {
    console.log(title,description,chart,items)
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

    // TODO: seguir aqui despues de realizar softProgress
    return (
        <>
        {renderItems}
        </>
    )
}

export default ReportsBarChart;
