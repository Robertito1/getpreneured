import React from 'react'
import Dashes from './dashes'

const FormSection = ({color, children}) => {
    return (
        <div className='flex h-screen w-full'>
          <div className={`p-4 text-white ${color} h-full bg-blue w-3/12`}>
           <Dashes />   
           <p className='text-4xl'>Create multiple sub-account</p>
           <p className='text-lg'>Organise your business finances easily with multiple accounts. No limits</p>
          </div>
          <div className='w-9/12 flex justify-center mt-24 bg-black'>
             {children}
          </div>
          <p className='absolute bottom-0 left-0 m-8 primary-font text-xl text-white'>© 2020 Prospa Inc</p>
       </div>
    )
}

export default FormSection;