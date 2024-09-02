import React from 'react'
import { Icon, Progress} from '../../../../layouts/dashboard/data/reportsBarChartData';
import typography from '../../../../assets/theme/base/typography';
import SoftBox from '../../../../components/SoftBox';
import SoftTypography from '../../../../components/SoftTypography';
import SoftProgress from '../../../../components/SoftProgress';
interface BarReportsChartItemProps {
    color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | undefined;
    icon:Icon;
    label: string;
    progress:Progress;


}
export const BarReportsChartItem: React.FC<BarReportsChartItemProps> = ({color, icon, label, progress}) => {
  const {size}=typography;
    return (
        <SoftBox width="100%">
            <SoftBox display="flex" alignItems="center" mb={2}>
                <SoftBox
                ownerState={{bgColor:icon.color, color:"white",variant:"gradient"}}
                width="1.25rem"
                height="1.25rem"
                borderRadius="sm"
                fontSize={size.xs}
                display="flex"
                justifyContent="center"
                alignItems="center"
                mr={1}
                >
                    <icon.component></icon.component>
                </SoftBox>
                <SoftTypography
                ownerState={{color:"text",textTransform:"capitalize",fontWeight:"medium"}}
                variant='caption'
                >
                    {label}
                </SoftTypography>
            </SoftBox>
            <SoftBox mt={1}>
                <SoftTypography variant="h4" ownerState={{fontWeight:"bold", color:color}}>
                    {progress.content}
                </SoftTypography>

                <SoftBox width="75%" mt={0.5}>
                    <SoftProgress value={progress.percentage} color={color} href='#'  />
                </SoftBox>
            </SoftBox>
        </SoftBox>
    )
}

