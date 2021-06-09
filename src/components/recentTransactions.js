import React from 'react'

const RecentTransactions = () => {
    return (
        <div className='p-4 bg-white rounded w-full flex justify-between'>
            <p className='primary-font text-base text-purp font-semibold'>Recent transactions</p>
            <button className='px-1 border-solid border border-pink-600 rounded-md text-pink-600'>
                See all
            </button>
        </div>
    )
}

export default RecentTransactions;