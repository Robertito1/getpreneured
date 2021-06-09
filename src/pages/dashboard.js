import React from 'react'
import DashboardSideNav from '../components/dashboardSideNav';
import DashboardNav from '../components/dashboardNav'
const Dashboard = () => {
    return (
        <div>
          <DashboardSideNav />
          <div className='w-9/12 float-right'>
              <DashboardNav />
              <div className='h-full w-full dashboard-background'>
                p
              </div>
          </div>
        </div>
    )
}

export default Dashboard;