import React, { useEffect, useState } from 'react'
import { RxAvatar } from 'react-icons/rx'
import Editprofile from './Editprofile';
import Orders from './Orders';
import Address from './Address';
import {getUser} from '../reduxs/slices/auth'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';



const Profilesidebar = () => {
 const navigate=useNavigate();

    const[profile,setProfile]=useState(false);
    const[orders,setOrders]=useState(false);
    const[address ,setAddress]=useState(false);
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

  // Api call for getting  profile data
  const dispatch=useDispatch();
  const {user} = useSelector((state)=>state.auth)
       const handleGetUser = async() => {
         const result = await dispatch(getUser());
         if(result){
          return true;
         }
       } 
   

       // Fetch user details
       useEffect(() => {
         dispatch(getUser());
       }, [dispatch]);
     
       // Logout function
       const handleLogout = () => {
         localStorage.removeItem('token'); // Remove token

         navigate('/'); // Navigate to home page
         window.location.reload(); // Reload page 
       };
    
      

       
       useEffect(()=>{
          handleGetUser();
       },[])
       console.log(user,'userdetail');
      
      

      //  orderlist
     
    
    

   
  return (
    <div className='grid md:grid-cols-12  grid-rows mt-[60px] mx-[30px] h-screen'>
        <div className='md:col-span-2 row-span md:sticky md:top-0 my-[20px] '>
        
        <div className='flex flex-col items-start justify-start gap-4'>
       <div className='flex flex-col md:items-start md:justify-start gap-4 items-center justify-center'>
        <RxAvatar size={45} />

        <div className='text-[black] text-[22px] font-[400]'>{user?.name}</div>
        <div className='text-[#787A7C] md:text-[14px] text-[22px] font-[400]'>{user?.email}</div>
        <div onClick={handleprofile} className='text-[#787A7C] text-[14px] font-[400] underline cursor-pointer'>Edit profile</div>
        </div>
        <div onClick={handleOrders} className='text-[black] text-[14px] font-[400] border-b-[1px] w-full p-2 cursor-pointer'>My orders</div>

        <div onClick={handleAddress} className='text-[black] text-[14px] font-[400] border-b-[1px] w-full p-2 cursor-pointer'>View Address</div>
        <button  
        onClick={() => {
          handleLogout();
        
        }}
        
        
        className='text-[#999] text-[10px] font-[400] underline cursor-pointer'>LOG OUT </button>




        </div>
        </div>
        <div className='md:col-span-10 row-span md:ml-[60px] overflow-y-auto no-scrollbar   my-[20px] h-auto'>
        {profile && <Editprofile userdetail={user} />}
           {orders && (
             <Orders/>
           )}
           {address && (
        
    <Address userdetail={user} />

           )}
        </div>


    </div>
  )
}

export default Profilesidebar