import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import user from '../images/user.png'

const DashboardNav = () => {
    return (
        <nav className='px-12 flex h-24 justify-between items-center'>
            <p className='primary-font dashboard-side-text text-3xl'>Dashboard</p>
            <div className='flex items-center'>
              <FontAwesomeIcon icon={faBell} className='h-6 border-solid border w-6'/>
              <img src={user} className='h-8 ml-2 rounded-full' alt='user'/>
            </div>
        </nav>
    )
}

export default DashboardNav
