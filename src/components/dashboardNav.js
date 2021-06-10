import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const DashboardNav = () => {
    return (
        <nav className='px-12 flex h-24 justify-between items-center'>
            <p className='primary-font dashboard-side-text text-3xl'>Dashboard</p>
            <div className=''>
              <FontAwesomeIcon icon={faBell} />
            </div>
        </nav>
    )
}

export default DashboardNav
