import { useFormik } from "formik";

import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AccountValidation } from "./AccountValidation";
import { authApi } from "../../mocks/authapi";
import { useState } from "react";
import { CircularProgress } from "@mui/material";


const Account = () => {
  const initialValues = {
    username: "",
    password: "" 
  };

  const navigate =useNavigate();
  const[loader,setLoader]=useState(false);

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema: AccountValidation,
   onSubmit: async (values,action) => {  
    setLoader(true);
                 console.log(values,'values'); 
                 if(values){
                     const result =  await authApi.login(values)
                    
                     if(result?.status === 'SUCCESS'){
                      setLoader(false);
                       console.log(result,'result')
                      localStorage.setItem('token',result?.data?.token)
                
                       navigate('/')
                    
                       action.resetForm()
                       
               
                     }else{
                       alert('Wrong user credentials')
                     }
                 }
                 
               },
  });
 

  return (
    <div >
      
      <form onSubmit={handleSubmit} className="flex flex-col md:items-center justify-center items-start md:p-0 p-2  h-screen  border-2">
        <div className="bg-white w-full max-w-md">
          <h2 className="text-[32px] font-[400] text-center mb-4">Login</h2>

          {/* Email & Password Input */}
          <div className="flex md:flex-row flex-col gap-4 items-center justify-center">
          <div className="flex flex-col gap-2 items-center justify-center w-full">
            <input
              type="email"
              placeholder="Email"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="p-2 rounded-lg outline-none border border-gray-300 w-full"
            />
            {touched.username && errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2  items-center justify-center w-full">
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className="p-2 rounded-lg outline-none border border-gray-300 w-full"
            />
            {touched.password && errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          </div>

          {/* Login Button */}
          <button type="submit" className="w-full bg-gray-900 text-white py-2 mt-4 rounded-lg hover:bg-gray-700">
           {loader?<CircularProgress size={20}/>:"Login"} 
          </button>

          {/* Divider */}
          <div className="w-full flex items-center justify-center gap-4 mt-4">
            <div className="border-t-[0.65px] border-[#E2E2E2] w-[30%]"></div>
            <div className="text-[10.41px] text-[#636363] font-[500] w-[25%]">or sign up with</div>
            <div className="border-t-[0.65px] border-[#E2E2E2] w-[30%]"></div>
          </div>

          {/* Social Login */}
          <div className="mt-4 space-y-4">
            <button className="w-full flex items-center justify-center gap-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
              <FaGoogle size={25} /> Sign in with Google
            </button>
            <div className="flex items-center justify-center gap-10">
              <Link to="/signup" className="hover:text-red-900 text-black text-sm underline">SignUp</Link>
              <Link to="/forgetpassword" className="hover:text-red-900 text-black text-sm underline">Forget password</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Account;
