import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const SignUpForm = () =>{
    return (
        <div>
            <p className='text-3xl text-purp'>Create your account</p>
            <p className='dashboard-side-text'>There are various account types to choose from</p>
            {/* <Formik
                initialValues={{ firstName: '', lastName: '', number: '', email: '', password: '' }}
                validationSchema={yup.object({
                firstName: yup.string()
                .required('Firstname is required'),
                lastName: yup.string()
                .required('Lastname is required'),
                number: yup.number()
                .required('Phonenumber is required'),
                email: yup.string().email()
                .required('Email is required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='flex flex-col'>
                    <div className='mb-6'>
                        <Field 
                            type="text" 
                            name="firstName" 
                            className='w-full input-shadow border-none rounded-md offwhite-background p-3 h-10 outline-none'
                            placeholder='Firstname'
                            />
                        <ErrorMessage name="firstName" component="div" className='text-red-700 text-sm'/>
                    </div>
                    <div className='mb-6'>
                        <Field 
                          type="text"
                          name="lastName"
                          className='w-full input-shadow border-none rounded-md offwhite-background p-3 h-10 outline-none'
                          placeholder='Lastname'
                        />
                        <ErrorMessage name="lastName" component="div" className='text-red-700 text-sm'/>
                    </div>
                    {/* <div className='mb-6'>
                        <Field
                            label="number"
                            placeholder="number"
                            name="number"
                            component={}
                        />
                        <ErrorMessage name="number" component="div" />
                    </div> 
                    <div className='mb-6'>
                        <Field 
                          type="email" 
                          name="email"
                          className='w-full input-shadow border-none rounded-md offwhite-background p-3 h-10 outline-none'
                          placeholder='Email'
                           />
                        <ErrorMessage name="email" component="div" className='text-red-700 text-sm'/>
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    </Form>
                )}
            </Formik> */}
    </div>
    )
}

export default SignUpForm;