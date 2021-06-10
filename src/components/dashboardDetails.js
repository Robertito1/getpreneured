import React from 'react'
import CashOutflow from './cashOutflow'
import CurrentAccount from './currentAccount'
import MonthSummary from './monthSummary'
import RecentTransactions from './recentTransactions'
import SavingsAccount from './savingsAccount'


const DashboardDetails = () => {
    return (
        <div className='p-12 w-full offwhite-background'>
           <div className='flex justify-between mb-6'>
               <div>
                <p className='primary-font text-2xl text-purp font-bold'>Welcome back Kathy</p>
                <span className='primary-font text-xl text-purp font-semibold'>
                    Here's what has been happening in the last
                    <a href='#' className='ml-1 text-pink-600 underline'>
                     7 days
                    </a>
                </span>
               </div>
               <button className='rounded bg-pink-600 px-4 text-white h-10 outline-none'>
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