import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

const LoginForm = () =>{
    return (
        <div>
            <p className='text-3xl text-purp'>Welcome back to prospa</p>
            <p className='dashboard-side-text'>An account wih powerful, personalized tools all in one place</p>
            <Formik
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
                    <div className='mb-6 w-72'>
                        <Field 
                        type="text" 
                        name="firstName" 
                        className='w-full border-solid border border-pink-600 rounded-md text-pink-600'
                        placeholder='first'
                        />
                        <ErrorMessage name="firstName" component="div" className='text-red-700 text-sm'/>
                    </div>
                    <div>
                        <Field type="text" name="lastName" className='border-solid border border-pink-600 rounded-md text-pink-600'/>
                        <ErrorMessage name="lastName" component="div" />
                    </div>
                    <div>
                        <Field type="number" name="number" />
                        <ErrorMessage name="number" component="div" />
                    </div>
                    <div>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginForm;