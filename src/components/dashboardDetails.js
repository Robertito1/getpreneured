import React from 'react'
import DetailCard from './detailCard'

const DashboardDetails = () => {
    return (
        <div className='p-12 w-full dashboard-background'>
           <div className='flex justify-between'>
               <div>
                <p className='primary-font text-2xl text-purp font-bold'>Welcome back Kathy</p>
                <p className='primary-font text-xl text-purp font-semibold'>Here's what has been happening in the last 7 days</p>
               </div>
               <button className='rounded bg-pink-600 px-4 text-white'>
                   Add a sub account
               </button>
           </div>
           <div className='flex'>
                <div className='p-4 bg-white rounded w-6/12'>
                    <div className='flex justify-between'>
                        <div>
                            <p className='primary-font text-base text-purp font-bold'>CURRENT ACCOUNT</p>
                            <p className='primary-font text-base dashboard-side-text'>PROVIDENCE BANK - 9906533917</p>
                        </div>
                        <div className='p-2 bg-black'>
                        <p>$</p>
                        </div>
                    </div>
                    <p className='primary-font mt-14 text-3xl text-purp font-semibold'>N814,800</p>
                </div>
                <div className='p-4 bg-white rounded ml-4 w-6/12'>
                    <div className='flex justify-between'>
                        <div>
                            <p className='primary-font text-base text-purp font-bold'>SAVINGS ACCOUNT</p>
                            <p className='primary-font text-base dashboard-side-text'>SUN ACCOUNT - 12346789</p>
                        </div>
                        <div className='p-2 bg-black'>
                        <p>$</p>
                        </div>
                    </div>
                    <p className='primary-font mt-14 text-3xl text-purp font-semibold'>N39,342</p>
                </div>
           </div>
        </div>
    )
}

export default DashboardDetails