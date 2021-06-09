import React from 'react'

const SavingsAccount = () => {
    return (
        <div className='p-4 bg-white ml-4 rounded w-6/12'>
            <div className='flex justify-between'>
                <div>
                    <p className='primary-font text-base text-purp font-bold'>SAVINGS ACCOUNT</p>
                    <p className='primary-font text-base dashboard-side-text'>SUB ACCOUNT - 12346789</p>
                </div>
                <div className='p-2 bg-black'>
                <p>$</p>
                </div>
            </div>
            <p className='primary-font mt-14 text-3xl text-purp font-semibold'>N39,342</p>
        </div>
    )
}

export default SavingsAccount;