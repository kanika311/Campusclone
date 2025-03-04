import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { ForgetPasswordValidation } from './validation'
import { authApi } from '../../mocks/authapi'
import {  useNavigate } from 'react-router-dom'

const ForgetPassword = () => {
  const navigate=useNavigate();
  const formik=useFormik({
    initialValues:{
      email:""
    },
    validationSchema:ForgetPasswordValidation,
    onSubmit: async (values,action) => {
    console.log(values,'values'); 
                 if(values){
                     const result =  await authApi.forgetPassword(values)
                    
                     if(result?.status === 'SUCCESS'){
                        console.log(result,'result')
                       alert("Otp sent successfully")
                       navigate('/resetpassword');
                       console.log('navigate')
                       action.resetForm();
                     }else{
                       alert('otp not snet')
                     }
                 }
                 
               },
    
  })
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <form
      onSubmit={formik.handleSubmit}
      className="w-full max-w-md bg-gray-200 shadow-lg rounded-2xl p-10"
    >
      <h1>Forget Password</h1>
      <TextField
        label="Enter Email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        className="mt-4 py-3 rounded-xl"
        fullWidth
        type="submit"
        
      >
        Send OTP
      </Button>
    </form>
  </div>
);
};
 

export default ForgetPassword