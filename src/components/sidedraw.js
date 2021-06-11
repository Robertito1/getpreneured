import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faMagic,
    faReceipt,
    faTasks,
    faFileInvoiceDollar,
    faUsers,
    faShieldAlt
     } from '@fortawesome/free-solid-svg-icons'
import Hamburger from './hamburger'

const SideDraw = () => {
    return (
        <div className='pt-3 px-5 flex flex-col fixed cyan h-full w-full z-10 lg:hidden'>
           <div className='flex justify-between mb-8'>
                <p className='primary-font h-10 purple rounded-full p-2 bg-black text-white font-bold'>BN</p>
                <div>
                    <p className='primary-font text-purp font-black'>Clayvant Inc</p>
                    <p className='primary-font'>manage account</p>
                </div>
                <select className='h-8 outline-none' name="cars" id="cars">
                    <option value="volvo"></option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                <Hamburger />
           </div>
           <div className='primary-font text-sm text-purp flex flex-col items-center'>
               <p className='cursor-pointer mb-8 hover:text-purple-900'>
               <FontAwesomeIcon icon={faFileInvoiceDollar} />
               {'\u00A0'} Transactions</p>
               <p className='cursor-pointer mb-8 hover:text-purple-900'>
               <FontAwesomeIcon icon={faUsers} />
               {'\u00A0'} Prospects</p>
               <p className='cursor-pointer mb-8 hover:text-purple-900'>
               <FontAwesomeIcon icon={faReceipt} />  
               {'\u00A0'} Invoice</p>
               <p className='cursor-pointer mb-8 hover:text-purple-900'>
               <FontAwesomeIcon icon={faTasks} />
               {'\u00A0'} Management</p>
               <p className='cursor-pointer mb-8 hover:text-purple-900'>
               <FontAwesomeIcon icon={faShieldAlt} />   
               {'\u00A0'} Security</p>
               <p className='cursor-pointer mb-8 hover:text-purple-900'>
               <FontAwesomeIcon icon={faMagic} /> 
               {'\u00A0'} Support</p>
           </div>
           <p className='absolute bottom-0 left-0 m-8 primary-font text-3xl dashboard-side-text'>prospa</p>
        </div>
    )
}

export default SideDraw;