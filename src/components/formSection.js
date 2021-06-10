import React from 'react';
import Dashes from './dashes';
import bank from '../images/bank.png'
import coin from '../images/coin.png'

const FormSection = ({color, children}) => {
    return (
        <div className='flex h-screen w-full'>
          <div className={`p-4 text-white ${color} w-3/12`}>
           <Dashes />   
           <p className='text-4xl'>Create multiple sub-account</p>
           <p className='text-lg mb-14'>Organise your business finances easily with multiple accounts. No limits</p>
           <img src={coin} alt='coin' className='h-8 float-right mb-8 mr-4 transform -rotate-45'/>
           <img src={coin} alt='coin' className='h-6 transform mt-24 ml-32 -rotate-90'/>
           <img src={bank} alt='bank' />
           <img src={coin} alt='coin' className='h-4 transform -mb-14 ml-24 rotate-12'/>
           <img src={coin} alt='coin' className='h-6 transform ml-24 -rotate-45'/>
          </div>
          <div className='w-9/12 flex justify-center mt-32'>
             {children}
          </div>
          {/* <p className='absolute bottom-0 left-0 m-8 primary-font text-xl text-white'>© 2020 Prospa Inc</p> */}
       </div>
    )
}

export default FormSection;