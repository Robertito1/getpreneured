import React from 'react'

const CurrentAccount = () => {
    return (
        <div className='p-4 bg-white rounded w-6/12'>
            <div className='flex justify-between'>
                <div>
                    <p className='primary-font text-base text-purp font-bold'>CURRENT ACCOUNT</p>
                    <p className='primary-font text-base dashboard-side-text'>PROVIDENCE BANK - 9906533917</p>
                </div>
                <div className='p-2 bg-black'>
                <p>$</p>
                </div>
            </div>
            <p className='primary-font mt-14 text-3xl text-purp font-semibold'>N814,800</p>
        </div>
    )
}

export default CurrentAccount;