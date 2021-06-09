import React from 'react'
import FormSection from '../components/formSection'
import Navbar from '../components/navbar'

const SelectService = () => {
  const data = {
    color: 'cyan',
    question: 'Don\'t have an account?',
    action: 'Sign Up',
    url: '/signup'
  }
    return (
        <div>
          <Navbar data={data}/>
          <FormSection color={data.color}/>    
        </div>
    )
}

export default SelectService;