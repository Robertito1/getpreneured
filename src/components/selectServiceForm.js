import React from 'react'
import ServiceTypeCard from './serviceTypeCard'
import {services} from '../utils/services'

const SelectServiceForm = () =>{
    return (
        <div>
            <p className='text-2xl font-bold text-purp'>Open a business account</p>
            <p className='dashboard-side-text'>Handle your businesses with simple clicks of button</p>
            {services.map(e => <ServiceTypeCard data={e} key={e.title}/>)}
        </div>
    )
}

export default SelectServiceForm;