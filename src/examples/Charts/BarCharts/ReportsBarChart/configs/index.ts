import { ChartOptions } from "chart.js";

interface Dataset {
    label: string;
    data: number[];
  }
  interface Configs {
    data: {
      labels: string[];
      datasets: Array<{
        label: string;
        tension: number;
        borderWidth: number;
        borderRadius: number;
        borderSkipped: boolean;
        backgroundColor: string;
        data: number[];
        maxBarThickness: number;
      }>;
    };
    options: ChartOptions<"bar">; // Explicitly typing options for a Bar chart
  }
  function configs(labels: string[], datasets: Dataset): Configs {
    return {
      data: {
        labels,
        datasets: [
          {
            label: datasets.label,
            tension: 0.4,
            borderWidth: 0,
            borderRadius: 4,
            borderSkipped: false,
            backgroundColor: "#fff",
            data: datasets.data,
            maxBarThickness: 6,
          },
        ],
      },
  
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 500,
              beginAtZero: true,
              padding: 15,
              font: {
                size: 14,
                family: "Roboto",
                style: "normal",
                lineHeight: 2,
              },
              color: "#fff",
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      } as ChartOptions<"bar">, // Casting the options object
    };
  }
  
  export default configs;
  