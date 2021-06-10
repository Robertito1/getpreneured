import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const CurrentAccount = () => {
    return (
        <div className='shadow-md p-4 bg-white rounded w-6/12'>
            <div className='flex justify-between'>
                <div>
                    <p className='primary-font text-base text-purp font-bold'>CURRENT ACCOUNT</p>
                    <p className='primary-font text-base dashboard-side-text'>PROVIDENCE BANK - 9906533917</p>
                </div>
                <div className='p-2 text-pink-600'>
                  <FontAwesomeIcon icon={faCreditCard} />
                </div>
            </div>
            <p className='primary-font mt-14 text-3xl text-purp font-semibold'>N814,800</p>
        </div>
    )
}

export default CurrentAccount;