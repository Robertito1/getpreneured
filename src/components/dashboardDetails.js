import React from 'react'

const DashboardDetails = () => {
    return (
        <div className='p-12'>
           <div className='flex justify-between'>
               <div>
                <p className='text-2xl text-purp'>Welcome back Kathy</p>
                <p>Here is what has been happening in the last 7 days</p>
               </div>
               <button>
                   Add a sub account
               </button>
           </div>
        </div>
    )
}

export default DashboardDetails