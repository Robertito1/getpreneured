import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({data}) => {
    return (
        <nav className='flex h-24 w-full'>
         <div className={`${data.color} h-full bg-blue w-3/12`}>
           <p className='p-4 primary-font text-white text-3xl'>prospa</p>
         </div>
         <div className='p-4 flex w-9/12 justify-end'>
           <p className='font-semibold text-purp'>{data.question}</p>
           <Link to={data.url} className='font-semibold text-pink-600'>{data.action}</Link>
         </div>
        </nav>
    )
}

export default Navbar