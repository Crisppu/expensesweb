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

export interface Dataset {
  label?: string;
  color: "info" | "success" | "warning" | "error" | "dark" | "light" |string;
  data?: number[];
}

export interface GradientLineChartData {
  labels?: string[];
  datasets: Dataset[];
}

const gradientLineChartData: GradientLineChartData = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Mobile apps",
      color: "info",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
    {
      label: "Websites",
      color: "dark",
      data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
    },
  ],
};

export default gradientLineChartData;

