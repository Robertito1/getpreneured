import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const ServiceTypeCard = ({data}) => {
    const [show, setShow] = useState(false)
    const showingBenefits = show ? 'hidden' : null
    const showingSelect = show ? 'bg-gray-200' : 'bg-pink-200'
    const showingBox = show ?  'border-none': 'border border-solid border-pink-200'
    const toggle = () =>{
        setShow(show => !show)
    }
    return (
        <div className={`${showingBox} flex justify-center items-top shadow-md ml-4 bg-white rounded w-10/12`}>
            <div className={` ${showingSelect} rounded-full shadow h-2 w-2  p-2 mt-1 mx-2`}>
               
            </div>
            <div onClick={toggle} className='w-96'>
                <p className='font-bold text-purp'>{data.title}</p>
                <div className={`${showingBenefits}`}>
                    <p className='dashboard-side-text text-sm primary-font'>{data.description}</p>
                    {data.offers.map((e) =>
                    <div className='flex items-center' key={e}>                      
                        <FontAwesomeIcon icon={faCheck} color='green'/>  {'\u00A0'}                         
                        <p className='dashboard-side-text text-sm primary-font'>{e}</p>                    
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ServiceTypeCard;
