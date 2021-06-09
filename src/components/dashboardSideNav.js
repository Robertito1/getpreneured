import React from 'react'

const DashboardSideNav = () => {
    return (
        <div className='pt-3 px-5 box-shadow flex flex-col fixed h-full w-3/12 top-0 left-0 z-10'>
           <div className='flex justify-between mb-8'>
                <p className='primary-font h-10 purple rounded-full p-2 bg-black text-white font-bold'>BN</p>
                <div>
                    <p className='primary-font text-purp font-black'>Clayvant Inc</p>
                    <p className='primary-font'>manage account</p>
                </div>
                <select className='h-8' name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
           </div>
           <div className='primary-font text-xl dashboard-side-text flex flex-col'>
               <p className='cursor-pointer mb-8 hover:text-purple-900'>Transactions</p>
               <p className='cursor-pointer mb-8 hover:text-purple-900'>Prospects</p>
               <p className='cursor-pointer mb-8 hover:text-purple-900'>Invoice</p>
               <p className='cursor-pointer mb-8 hover:text-purple-900'>Managment</p>
               <p className='cursor-pointer mb-8 hover:text-purple-900'>Security</p>
               <p className='cursor-pointer mb-8 hover:text-purple-900'>Support</p>
           </div>
           <p className='absolute bottom-0 left-0 m-8 primary-font text-3xl dashboard-side-text'>prospa</p>
        </div>
    )
}

export default DashboardSideNav