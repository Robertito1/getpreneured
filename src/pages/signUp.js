import React from 'react'
import FormSection from '../components/formSection'
import Navbar from '../components/navbar'
import SignUpForm from '../components/signUpForm'

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
          <FormSection color={data.color}> 
            <SignUpForm />
          </FormSection>   
        </div>
    )
}

export default SignUp;