import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Sale = () => {
  const naviagte= useNavigate();
  const handleManPage=()=>{
    naviagte('/product/man')
  }
  const handleWomanPage=()=>{
    naviagte('/product/woman')
  }
  const handleKidsPage=()=>{
    naviagte('/product/kids')
  }
  return (
    <div className='md:flex-row flex flex-col items-center justify-center md:gap-4 space-y-4 md:space-y-0 md:mt-0 mt-4'>
    <div onClick={handleManPage} className='hover:text-[#C16452] text-[#787A7C] md:font-[400] font-[700] text-[16px] cursor-pointer'>Men</div>
    <div onClick={handleWomanPage} className='hover:text-[#C16452] text-[16px] text-[#787A7C] md:font-[400] font-[700] cursor-pointer'>Women</div>
    <div onClick={handleKidsPage} className='hover:text-[#C16452] text-[16px] text-[#787A7C] md:font-[400] font-[700] cursor-pointer'>Kids</div>
  </div>
  )
}
