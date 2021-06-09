import React from 'react'
import CashOutflow from './cashOutflow'
import CurrentAccount from './currentAccount'
import MonthSummary from './monthSummary'
import RecentTransactions from './recentTransactions'
import SavingsAccount from './savingsAccount'


const DashboardDetails = () => {
    return (
        <div className='p-12 w-full dashboard-background'>
           <div className='flex justify-between mb-6'>
               <div>
                <p className='primary-font text-2xl text-purp font-bold'>Welcome back Kathy</p>
                <p className='primary-font text-xl text-purp font-semibold'>Here's what has been happening in the last 7 days</p>
               </div>
               <button className='rounded bg-pink-600 px-4 text-white'>
                   Add a sub account
               </button>
           </div>
           <div className='flex mb-6'>
                <CurrentAccount />
                <SavingsAccount />
           </div>
           <div className='flex mb-6'>
                <MonthSummary />
                <CashOutflow />
           </div>
           <RecentTransactions />
        </div>
    )
}

export default DashboardDetails