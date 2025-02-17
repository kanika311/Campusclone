import React, { useState } from 'react'
import { RxAvatar } from 'react-icons/rx'
import Editprofile from '../Content/Editprofile';
import Orders from '../Content/Orders';
import Address from '../Content/Address';

const Profilesidebar = () => {
    const[profile,setProfile]=useState(false);
    const handleprofile=()=>{
setProfile(!profile);
setAddress(false);
setOrders(false);
    }
    const[orders,setOrders]=useState(false);
    const handleOrders=()=>{
      setProfile(false);
      setAddress(false);
      setOrders(!orders);
          }
          const[address ,setAddress]=useState(false);
          const handleAddress=()=>{
            setAddress(!address);
            setProfile(false);
            setOrders(false);
                }
  return (
    <div className='grid md:grid-cols-12  grid-rows mt-[60px] mx-[30px] h-screen'>
        <div className='md:col-span-2 row-span md:sticky md:top-0 my-[20px] '>
        
        <div className='flex flex-col items-start justify-start gap-4'>
       <div className='flex flex-col md:items-start md:justify-start gap-4 items-center justify-center'>
        <RxAvatar size={45} />

        <div className='text-[black] text-[22px] font-[400]'>KANIKA AGGARWAL</div>
        <div className='text-[#787A7C] md:text-[14px] text-[22px] font-[400]'>aggarwalkanika676@gmail.com</div>
        <div onClick={handleprofile} className='text-[#787A7C] text-[14px] font-[400] underline'>Edit profile</div>
        </div>
        <div onClick={handleOrders} className='text-[black] text-[14px] font-[400] border-b-[1px] w-full p-2'>My orders</div>

        <div onClick={handleAddress} className='text-[black] text-[14px] font-[400] border-b-[1px] w-full p-2'>View Address</div>
        <div className='text-[#999] text-[10px] font-[400] underline'>LOG OUT</div>




        </div>
        </div>
        <div className='md:col-span-10 row-span md:ml-[60px] overflow-y-auto no-scrollbar   my-[20px] h-auto'>
           {profile&& (
          <Editprofile/>
           )}
           {orders && (
             <Orders/>
           )}
           {address && (
        
    <Address/>

           )}
        </div>


    </div>
  )
}

export default Profilesidebar