import React from 'react';
import { Line } from 'react-chartjs-2';
import { data } from '../utils/data';

const MonthSummary = () => {
    
    return (
        <div className='shadow-md p-4 bg-white rounded w-7/12'>
            <Line data={data} />
        </div>
    )
}

export default MonthSummary;