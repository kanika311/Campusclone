import React, { useEffect, useState } from 'react'
import { RxAvatar } from 'react-icons/rx'
import Editprofile from './Editprofile';
import Orders from './Orders';
import Address from './Address';
import {getUser} from '../reduxs/slices/auth'
import { useDispatch, useSelector } from 'react-redux';

const Profilesidebar = () => {
  const dispatch=useDispatch();

    const[profile,setProfile]=useState(false);
    const[orders,setOrders]=useState(false);
    const[address ,setAddress]=useState(false);
    const {user} = useSelector((state)=>state.auth)
    const handleprofile=()=>{
      setProfile(!profile);
         setAddress(false);
         setOrders(false);
    }
   
    const handleOrders=()=>{
      setProfile(false);
      setAddress(false);
      setOrders(!orders);
          }
         
          const handleAddress=()=>{
            setAddress(!address);
            setProfile(false);
            setOrders(false);
                }


       const handleGetUser = async() => {
         const result = await dispatch(getUser());
         if(result){
          return true;
         }
       } 
       

       console.log(user,'userdetail')
       
       useEffect(()=>{
          handleGetUser();
       },[])
   
  return (
    <div className='grid md:grid-cols-12  grid-rows mt-[60px] mx-[30px] h-screen'>
        <div className='md:col-span-2 row-span md:sticky md:top-0 my-[20px] '>
        
        <div className='flex flex-col items-start justify-start gap-4'>
       <div className='flex flex-col md:items-start md:justify-start gap-4 items-center justify-center'>
        <RxAvatar size={45} />

        <div className='text-[black] text-[22px] font-[400]'>{user.name}</div>
        <div className='text-[#787A7C] md:text-[14px] text-[22px] font-[400]'>{user.email}</div>
        <div onClick={handleprofile} className='text-[#787A7C] text-[14px] font-[400] underline'>Edit profile</div>
        </div>
        <div onClick={handleOrders} className='text-[black] text-[14px] font-[400] border-b-[1px] w-full p-2'>My orders</div>

        <div onClick={handleAddress} className='text-[black] text-[14px] font-[400] border-b-[1px] w-full p-2'>View Address</div>
        <div  className='text-[#999] text-[10px] font-[400] underline'>LOG OUT</div>




        </div>
        </div>
        <div className='md:col-span-10 row-span md:ml-[60px] overflow-y-auto no-scrollbar   my-[20px] h-auto'>
        {profile && <Editprofile user={user} />}
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