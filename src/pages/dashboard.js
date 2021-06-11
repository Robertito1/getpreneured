import React from 'react'
import DashboardSideNav from '../components/dashboardSideNav';
import DashboardNav from '../components/dashboardNav'
import DashboardDetails from '../components/dashboardDetails';
import SideDraw from '../components/sidedraw';
const Dashboard = () => {
    return (
        <div>
          <SideDraw />
          <DashboardSideNav />
          <div className='w-full lg:w-9/12 lg:float-right z-0'>
         {/* <div className='hidden w-full lg:w-9/12 lg:float-right z-0'> */}
              <DashboardNav />
              <DashboardDetails />
          </div>
        </div>
    )
}

export default Dashboard;