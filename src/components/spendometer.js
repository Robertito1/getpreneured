import React from 'react'

const Spendometer = ({item, progress}) => {
    return (
        <div className='flex items-center justify-between mb-8'> 
            <p className='dashboard-side-text'>{item}</p>
            <div>
                <p className='text-purp font-semibold'>-N250,000</p>
                <div className='rounded h-2 w-48 bg-gray-400'>
                    <div className={`rounded h-2 ${progress} bg-yellow-400`}></div>
                </div>
            </div>   
        </div>
    )
}

export default Spendometer;