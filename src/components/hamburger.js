import React from 'react'

const Hamburger = () =>{
    return (
        <div className='flex flex-col h-6 ml-4 justify-around lg:hidden'>
            <div className='rounded h-1 w-6 bg-gray-600'></div>
            <div className='rounded h-1 w-6 bg-gray-600'></div>
            <div className='rounded h-1 w-6 bg-gray-600'></div>
        </div>
    )
}

export default Hamburger;