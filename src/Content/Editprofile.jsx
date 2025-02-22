import React from 'react'

const Editprofile = ({user}) => {
  return (
    <div className='flex flex-col items-start justify-start gap-10 mr-[40px] '>
      <div className='bg-[#f9f9f9] h-[160px] w-full p-[15px]'>
        <div className='text-[black] text-[22px] font-[400]'>{user.name}</div>
    

        <div className='text-[#787A7C] text-[14px] font-[400] mt-[20px]'>{user.email}</div>
      </div>
      <div className='flex flex-col items-start justify-start gap-4 w-full '>
        <div className='text-[13px] font-[400] text-black'>Edit Your Account</div>
        <div className=' flex flex-col items-start justify-start gap-4 mt-[10px] w-full'>


          <div className='flex gap-6 w-full'>
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
          </div>

          <div className='flex w-[100%] gap-6'>
          <div className='flex flex-col gap-2 w-full'>
          <label className='text-[14px] text-[#787A7C] font-[400]'>Phone number</label>
            <input id="filled-basic" placeholder='Phone' type='number'
              className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
              </div>
              <div className='flex flex-col gap-2 w-full'>
              <label className='text-[14px] text-[#787A7C] font-[400]'>Email</label>
            <input id="filled-basic" placeholder='Email' type='email'
              className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
          </div>
          </div>
          <div className='flex flex-col gap-2 w-full'>
          <label className='text-[14px] text-[#787A7C] font-[400]'>Gender</label>
          <div className='flex items-center justify-start gap-4'>
          <div className='flex items-center justify-start gap-2'>
          <input id="filled-basic" placeholder='' type='radio'
              className='' /><span className='text-[14px] text-[#787A7C] font-[400]'>Male</span>
          </div>
          <div className='flex items-center justify-start gap-2'>
          <input id="filled-basic" placeholder='' type='radio'
              className='' /><span className='text-[14px] text-[#787A7C] font-[400]'>Female</span>
          </div>
          <div className='flex items-center justify-start gap-2'>
          <input id="filled-basic" placeholder='' type='radio'
              className='' /><span className='text-[14px] text-[#787A7C] font-[400]'>Other</span>
          </div>
          </div>
          </div>
          <button className='bg-black h-[37px] w-[118px] text-white'>UPDATE</button>
        </div>
      </div>

    </div>
  )
}

export default Editprofile