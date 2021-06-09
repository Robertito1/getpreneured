import React from 'react'
import Spendometer from './spendometer'

const MonthSummary = () => {
    return (
        <div className='p-4 bg-white rounded w-7/12'>
            <p className='primary-font text-base text-purp font-bold'>Cash outflow</p>
            <Spendometer item='Bank Fees' progress='w-11/12'/>
            <Spendometer item='Internet' progress='w-8/12'/>
            <Spendometer item='Marketing' progress='w-4/12'/>
            <Spendometer item='Transfer' progress='w-3/12'/>
        </div>
    )
}

export default MonthSummary;