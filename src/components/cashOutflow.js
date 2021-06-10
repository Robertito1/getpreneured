import React from 'react'
import Spendometer from './spendometer'

const CashOutflow = () => {
    return (
        <div className='shadow-md ml-4 p-4 bg-white rounded w-5/12'>
            <p className='primary-font text-base text-purp font-bold'>Cash outflow</p>
            <Spendometer item='Bank Fees' progress='w-11/12'/>
            <Spendometer item='Internet' progress='w-8/12'/>
            <Spendometer item='Marketing' progress='w-4/12'/>
            <Spendometer item='Transfer' progress='w-3/12'/>
        </div>
    )
}

export default CashOutflow;