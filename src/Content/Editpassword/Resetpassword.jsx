import { Button, TextField } from '@mui/material'
import React from 'react'
import { NewPasswordValidation } from './validation';
import { authApi } from '../../mocks/authapi';
import { Navigate } from 'react-router-dom';
import { useFormik } from 'formik';

const Resetpassword = () => {
   const formik=useFormik({
      initialValues:{
       
       code:"",
        newPassword:""
      },
      validationSchema:NewPasswordValidation,
      onSubmit: async (values,action) => {
      console.log(values,'values'); 
                   if(values){
                       const result =  await authApi.ResetPassword(values)
                      
                       if(result?.status === 'SUCCESS'){
                          console.log(result,'result')
                         alert("rest passwordsuccessfully");
                        Navigate('/account')
                      
                         action.resetForm();
                       }else{
                         alert('otp not verify')
                       }
                   }
                   
                 },
      
    })
  return (
    <div className="flex flex-col items-center  justify-center min-h-screen">
    <form onSubmit={formik.handleSubmit} className="w-full max-w-md bg-gray-200 shadow-lg rounded-2xl p-8">
   <TextField
     label="Enter OTP"
    name="code"
     onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.code}
      error={formik.touched.code && Boolean(formik.errors.code)}
      helperText={formik.touched.code && formik.errors.code}
     fullWidth
     margin="normal"
   />

   <TextField
     label="Change Password"
     type="password"
    name='newPassword'
     onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.newPassword}
     fullWidth
     margin="normal"
     error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
     helperText={formik.touched.newPassword && formik.errors.newPassword}
   />

   <Button
     variant="contained"
     color="primary"
     className="mt-4 py-3 rounded-xl"
     fullWidth
      type="submit"
   >
     Change Password
   </Button>
 </form>
 </div>
  )
}

export default Resetpassword