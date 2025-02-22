import React from 'react'
import { useFormik } from "formik";
import{GoogleAuthProvider,signInWithPopup,getAuth} from 'firebase/auth';
import { FaGoogle } from "react-icons/fa";
import {app} from '../Firebase/Firebase'
import { Link } from "react-router-dom";
import {SignupValidation} from './SignupValidation';
import { authApi } from '../mocks/authapi';


// // google login
//   const handleGoogleSignIn = async () => {
//       if (isSigningIn) return; // Prevent multiple requests
//       setIsSigningIn(true);
  
//       const auth = getAuth(app);
//       const provider = new GoogleAuthProvider();
  
//       // Force the Google dialog box to appear every time
//       provider.setCustomParameters({
//         prompt: "select_account",
//       });
  
//       try {
//         const result = await signInWithPopup(auth, provider);
       
        
//         if(result.user){
//           const data = {
//              credentials:{
//               idToken:result?.user?.accessToken
//              }
//           }
//           const response = await authApi.GoogleLogin(data)
//           // console.log(response,'response')
//           if(response.status === 'SUCCESS'){
//             localStorage.setItem('token',response?.data?.token)
//             navigate('/')
//             console.log('navigate')
//           }
//         }
//       } catch (error) {
//         console.error("Sign-in error:", error);
//       } finally {
//         setIsSigningIn(false); // Enable button after sign-in attempt
//       }
//     };
const Signup = () => {
      const initialValues = {
        email: "",
        password: "",
        name:"" 
      };
    
      const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues,
        validationSchema: SignupValidation, 
      onSubmit: async (values,action) => {  
               console.log(values,'values'); 
               if(values){
                   const result =  await authApi.register(values)
                  
                   if(result?.status === 'SUCCESS'){
                     console.log(result,'result')
                     
                     action.resetForm()
                   }else{
                     alert('Wrong user credentials')
                   }
               }
               
             },
      });
  return (
    <div className='md:items-center flex items-start md:justify-center justify-center' >
      <form onSubmit={handleSubmit} className="flex flex-col md:items-center md:justify-center items-start justify-center min-h-screen p-2 md:w-auto w-full   ">
        <div className="bg-white md:p-6 p-2 w-full ">
          <h2 className="text-[32px] font-[400] text-center mb-4 ">SignUp</h2>

          <div className="flex  items-center justify-center w-full">
          
      
          <div className="flex flex-col gap-2  items-center justify-center mb-[10px] w-full">
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className="p-2 rounded-lg outline-none border border-gray-300 w-full"
            />
            {touched.name && errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          </div>
        
          {/* Email & Password Input */}
          <div className="flex md:flex-row flex-col gap-4 items-center justify-center">
          <div className="flex flex-col gap-2 items-center justify-center w-full">
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="p-2 rounded-lg outline-none border border-gray-300 w-full"
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
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
          Signup
          </button>

          {/* Divider */}
          <div className="w-full flex items-center justify-center gap-4 mt-4">
            <div className="border-t-[0.65px] border-[#E2E2E2] w-[30%]"></div>
            <div className="text-[10.41px] text-[#636363] font-[500] w-[25%]">or signup with</div>
            <div className="border-t-[0.65px] border-[#E2E2E2] w-[30%]"></div>
          </div>

          {/* Social Login */}
          <div className="mt-4 space-y-4">
            <button className="w-full flex items-center justify-center gap-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
              <FaGoogle size={25} /> Sign in with Google
            </button>
            <div className="flex items-center justify-center ">
              <Link to="/account" className="hover:text-red-900 text-black text-[20px] underline">Login</Link>

            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signup
