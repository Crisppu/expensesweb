import React from 'react'
import Footer from '../../examples/Footer';
import DashboardLayout from '../../examples/LayoutContainers/DashboardLayout/DashboardLayout';

const Dashboard: React.FC = () => {
    return (
        <DashboardLayout>
            <Footer></Footer>
        </DashboardLayout>
    )
}

export default Dashboard;