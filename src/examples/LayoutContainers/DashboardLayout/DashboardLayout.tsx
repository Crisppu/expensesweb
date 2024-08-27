import React from 'react'
import SoftBox from '../../../components/SoftBox';
interface DashboardLayoutProps {
    children: React.ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({children}) => {
    return (
        <SoftBox>
            {children}
        </SoftBox>
    )
}

export default DashboardLayout;