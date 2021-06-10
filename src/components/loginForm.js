import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

const LoginForm = () =>{
    return (
        <div>
            <p className='text-3xl text-purp'>Welcome back to prospa</p>
            <p className='dashboard-side-text'>An account wih powerful, personalized tools all in one place</p>
            <Formik
       initialValues={{ email: '', password: '' }}
       validationSchema={yup.object({
        firstName: yup.string()
        .required('The date is required'),
        lastName: yup.string()
        .required('This Field is required'),
        number: yup.number()
        .required('This Field is required'),
        email: yup.string().email()
        .required('This Field is required'),
      })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="text" name="email" />
           <ErrorMessage name="firstName" component="div" />
           <Field type="email" name="email" />
           <ErrorMessage name="lastName" component="div" />
           <Field type="email" name="email" />
           <ErrorMessage name="number" component="div" />
           <Field type="email" name="password" />
           <ErrorMessage name="email" component="div" />
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