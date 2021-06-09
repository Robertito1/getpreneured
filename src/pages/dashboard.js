import React from 'react'
import DashboardSideNav from '../components/dashboardSideNav';
import DashboardNav from '../components/dashboardNav'
import DashboardDetails from '../components/dashboardDetails';
const Dashboard = () => {
    return (
        <div>
          <DashboardSideNav />
          <div className='w-9/12 float-right'>
              <DashboardNav />
              <DashboardDetails />
          </div>
        </div>
    )
}

export default Dashboard;