import React, { useState } from 'react'

const Address = () => {
    const[form,setForm]=useState(false);
    return (
        <div className='flex flex-col items-start justify-start gap-6 mr-[40px] '>
            <div className='text-[18px] text-black fonr-[400]'>My Address</div>
            <button onClick={()=>{setForm (true)}} className='w-[207px] h-[46px] border-[1px] border-black text-black bg-white hover:text-white hover:bg-black'>ADD A NEW ADDRESS</button>
            
            
            
            {form&& (<div className='flex flex-col w-full gap-4'>
                <div  className='text-black text-[19px]'>ADD A NEW ADDRESS</div>
                <div className='flex flex-col gap-2 w-full'>
                    <label className='text-[14px] text-[#787A7C] font-[400]'>First Name</label>
                    <input id="filled-basic" placeholder='First Name'
                        className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label className='text-[14px] text-[#787A7C] font-[400]'>Last Name</label>
                    <input id="filled-basic" placeholder='Last Name'
                        className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />

                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label className='text-[14px] text-[#787A7C] font-[400]'>Company</label>
                    <input id="filled-basic" placeholder='Company'
                        className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />

                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label className='text-[14px] text-[#787A7C] font-[400]'>Address1</label>
                    <input id="filled-basic" placeholder='Address1'
                        className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />

                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label className='text-[14px] text-[#787A7C] font-[400]'>Address2</label>
                    <input id="filled-basic" placeholder='Address2'
                        className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />

                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label className='text-[14px] text-[#787A7C] font-[400]'>City</label>
                    <input id="filled-basic" placeholder='City'
                        className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />

                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label className='text-[14px] text-[#787A7C] font-[400]'>Country</label>
                    <input id="filled-basic" placeholder='Country'
                        className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />

                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label className='text-[14px] text-[#787A7C] font-[400]'>Last Name</label>
                    <input id="filled-basic" placeholder='Last Name'
                        className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />

                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label className='text-[14px] text-[#787A7C] font-[400]'>Province</label>
                    <input id="filled-basic" placeholder='Province'
                        className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />

                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label className='text-[14px] text-[#787A7C] font-[400]'>Postal/Zipcode</label>
                    <input id="filled-basic"
                        className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />

                </div>

                <div className='flex flex-col gap-2 w-full'>
                    <label className='text-[14px] text-[#787A7C] font-[400]'>Phone</label>
                    <input id="filled-basic"
                        className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />

                </div>
                <div className='flex  gap-2'>
                    <input id="filled-basic" type='checkbox'
                        className=' border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                    <span>Set as default address</span>
                </div>

                <button className='bg-black h-[47px] w-[150px] text-white'>Add Address</button>
                <div onClick={()=>{  setForm(false)}} className='text-[#964233] text-[15px] font-[400] mt-[4px]'>cancel</div>
            </div>
            )}



        </div>

    )
}

export default Address