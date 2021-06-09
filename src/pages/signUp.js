import React from 'react'
import FormSection from '../components/formSection'
import Navbar from '../components/navbar'

const SignUp = () => {
  const data = {
    color: 'purple',
    question: 'Already have an account?',
    action: 'Sign In',
    url: '/'
  }
    return (
        <div>
          <Navbar data={data}/>
          <FormSection color={data.color}/>    
        </div>
    )
}

export default SignUp;