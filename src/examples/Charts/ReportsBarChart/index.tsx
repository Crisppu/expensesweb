import React from 'react'
import { ReportsBarChartData } from '../../../layouts/dashboard/data/reportsBarChartData';
interface ReportsBarChartProps {
    color: string;
    title: string;
    description: string;
    chart: ReportsBarChartData["chart"];
    items: ReportsBarChartData["items"];
}
const ReportsBarChart:React.FC<ReportsBarChartProps> = ({color, title,description,chart, items}) => {
    console.log(chart, items);
    console.log(color, title,description);
    return (
        <></>
    )
}

export default ReportsBarChart;
