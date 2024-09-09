import React, { useEffect, useRef, useState} from 'react'
import { GradientLineChartData } from '../../../../layouts/dashboard/data/gradientLineChartData';
import SoftBox from '../../../../components/SoftBox';
import SoftTypography from '../../../../components/SoftTypography';
import configs, { ChartConfig } from './config';
import colors from '../../../../assets/theme/base/colors';
import gradientChartLine from '../../../../assets/theme/functions/gradientChartLine';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




interface GradientLineChartProps {
    title?:string;
    description?:React.ReactNode;
    height?:string;
    chart:GradientLineChartData;
}
/*
interface useStateChartData {
    data:GradientLineChartData;
    options:{
        interaction?:{
            intersect?:boolean;
            mode?:string;
        }
        plugins?:{
            legend?:{
                display?:boolean;
            }
        }
        maintainAspectRatio?:boolean;
        responsive?:boolean;
        scales?:{
            y?:{
                grid?:{
                    drawBorder?:boolean;
                    display?:boolean;
                    drawOnChartArea?:boolean;
                    drawTicks?:boolean;
                    borderDash?:number[];
                }
                ticks?:{
                    display?:boolean;
                    padding?:number;
                    color?:string;
                    font?:{
                        size?:number;
                        family?:string;
                        style?:string;
                        lineHeight?:number;
                    }
                }
            },

        }
    };
}
*/
const GradientLineChart:React.FC<GradientLineChartProps> = ({title,height,description,chart}) => {
    const chartRef = useRef<HTMLElement>(document.createElement('div'));
    const [chartData, setChartData] = useState<ChartConfig>(
        {data:{
                labels: [""],
                datasets: [
                {
                    label: "",
                    color: "",
                    data: [],
                },
                {
                    label: "",
                    color: "",
                    data: [],
                },
                ],
            }
        }

    );

    useEffect(() => {
        const canvas = chartRef.current?.children[0] as HTMLCanvasElement ;

        const chartDatasets = chart?.datasets
          ? chart.datasets.map((dataset) => ({
              ...dataset,
              tension: 0.4,
              pointRadius: 0,
              borderWidth: 3,
              borderColor: colors[dataset.color as keyof typeof colors] ? colors[dataset.color as keyof typeof colors] as {main:string} :
              colors.dark.main,
              fill: true,
              maxBarThickness: 6,
              backgroundColor: gradientChartLine(
                canvas,
                 colors[dataset?.color as keyof typeof colors] ?
                 (colors[dataset.color as keyof typeof colors || "dark"]as {main:string}).main
                 :colors.dark.main,
              ),
            }))
          : [];

        setChartData(configs(chart?.labels || [], chartDatasets));
    }, [chart]);
    //console.log(chartData, "chartData")

    return (
        <SoftBox p={2}>
        {
            title || description ?
            (<SoftBox px={description ? 1 : 0} pt={description ? 1:0 }>
                {title && (
                    <SoftBox mb={1}>
                    <SoftTypography variant="h6" fontWeight="medium" ownerState={{color:'text'}}>
                        {title}
                    </SoftTypography>
                    </SoftBox>
                )}
                <SoftBox mb={2}>
                    <SoftTypography component="div" variant='button' fontSize='regular' ownerState={{color:"text"}}>
                        {description}
                    </SoftTypography>
                </SoftBox>
            </SoftBox>):
            null
        }
        {/* TODOS : tengo que hacer bien el tipado en el useState es por eso las advertencias, pero funciona  */}
            <SoftBox ref={chartRef} sx={{ height }}>
                <Line data={chartData.data} options={chartData.options} />
            </SoftBox>



        </SoftBox>
    )
}

export default GradientLineChart;

/*
{useMemo(
            () => (
            <SoftBox ref={chartRef} sx={{ height }}>
                <Line data={data} options={options} />
            </SoftBox>
            ),
            [data, options, height]
        )}
*/