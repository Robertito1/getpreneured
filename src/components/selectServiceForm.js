import React, {useState} from 'react'
import ServiceTypeCard from './serviceTypeCard'
import {services} from '../utils/services'

const SelectServiceForm = () =>{
    const [selected, setSeleced] = useState('')
    const updateSelected = (title) =>{
        setSeleced(title)
    }
    return (
        <div>
            <p className='text-2xl font-bold text-purp'>Open a business account</p>
            <p className='dashboard-side-text mb-4'>Handle your businesses with simple clicks of button</p>
            {services.map(e => <ServiceTypeCard data={e} key={e.title} selected={selected} updateSelected={updateSelected}/>)}
        </div>
    )
}

export default SelectServiceForm;