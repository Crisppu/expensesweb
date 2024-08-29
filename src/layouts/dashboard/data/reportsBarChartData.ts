/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import PaymentIcon from '@mui/icons-material/Payment';
import ExtensionIcon from '@mui/icons-material/Extension';
interface ChartDataset {
    label: string;
    data: number[];
}interface ChartData {
    labels: string[];
    datasets: ChartDataset;
}

export interface Icon {
    color: string;
    component: React.ElementType;
}export interface Progress {
    content: string;
    percentage: number;
}interface Item {
    icon: Icon;
    label: string;
    progress: Progress;
}

export interface ReportsBarChartData {
    chart: ChartData;
    items: Item[];
}


const ReportsBarChartData: ReportsBarChartData = {
    chart: {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: { label: "Sales", data: [450, 200, 100, 220, 500, 100, 400, 230, 500] },
    },
    items: [
      {
        icon: { color: "primary", component: LibraryBooksIcon },
        label: "users",
        progress: { content: "36K", percentage: 60 },
      },
      {
        icon: { color: "info", component: TouchAppIcon },
        label: "clicks",
        progress: { content: "2M", percentage: 90 },
      },
      {
        icon: { color: "warning", component: PaymentIcon },
        label: "sales",
        progress: { content: "$435", percentage: 30 },
      },
      {
        icon: { color: "error", component: ExtensionIcon },
        label: "items",
        progress: { content: "43", percentage: 50 },
      },
    ],
};

export default ReportsBarChartData;
