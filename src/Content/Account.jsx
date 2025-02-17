import React from 'react'

import { FaGoogle } from "react-icons/fa";

import { Link } from 'react-router-dom';


const Account = () => {
  return (
  
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="bg-white p-6 w-full max-w-md">
        <h2 className="text-[32px] font-[400] text-center mb-4"> Login  </h2>

        {/* Phone Input */}
        <div className="flex md:flex-row flex-col gap-4 ">

          <input
            type="Email"
            placeholder="Email"
          
            className="flex-1 p-2  rounded-lg outline-none border border-gray-300"
          />
          
          <input
            type="Password"
            placeholder="Enter your passowrd"
          
            className="flex-1 p-2  rounded-lg outline-none border border-gray-300"
          />
        </div>

        {/* Get OTP Button */}
        <button className="w-full bg-gray-900 text-white py-2 mt-4 rounded-lg hover:bg-gray-700">
    Login
        </button>
        <div className='   w-full flex items-center justify-center gap-4  mt-4'  >
<div className='border-t-[0.65px] border-[#E2E2E2] w-[30%]'></div>
<div className='text-[10.41px] text-[#636363] font-[500] w-[25%]'> or sign up with </div>
<div className='border-t-[0.65px] border-[#E2E2E2] w-[30%] '></div>
</div>
        {/* Social Login Buttons */}
        <div className="mt-4 space-y-10">
          

          <button className="w-full flex items-center justify-center gap-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
            <FaGoogle size={25}/>Sign in with Google
          </button>
<div className='flex items-center justify-center gap-10'>
          <Link to="/signin" className="hover:text-red-900 text-black text-sm underline">SignUp</Link>
          <Link to="/Forget password" className="hover:text-red-900 text-black text-sm underline">Forget password</Link>
          </div>
        </div>
      </div>
</div>
  )
}

export default Account