import React, { useState } from 'react'
import campuslogo from '../assets/campuslogo.avif';
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineShoppingBag } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import '../Component/Swiper.css'

const Payment = () => {
    const carddata = [
        {
            id: 1,
            description: "Raasile White Women Sneakers",
            price: "1899.00",
            image: "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_2.jpg?v=1738849570",
            color: "white",
            size: "6",
            qty: '1',
            total: "1234"
        },
        {
            id: 1,
            description: "Raasile White Women Sneakers",
            price: "1899.00",
            image: "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_2.jpg?v=1738849570",
            color: "white",
            size: "6",
            qty: '1',
            total: "1234"
        },
    ]
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex flex-col  h-screen'>

            <div className="flex items-center justify-between mx-[30px] p-6 ">

                <img className="w-[90px] md:w-[180px]" src={campuslogo} alt="Campus Logo" />
                <MdOutlineShoppingBag size={30} onClick={() => navigate('/cart')} />
            </div>
            <div className=" block md:hidden w-full">
                {/* Order Overview Header */}
                <div
                    className="h-auto p-6 w-full bg-[#dedede] flex items-center justify-between cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="flex items-center justify-start gap-4 text-black text-lg font-medium">
                        Order Overview {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                    </span>
                    <span className="font-semibold">Rs. 62,897</span>
                </div>

                {/* Dropdown Content */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-[#dedede] "
                >
                    <div className='flex flex-col items-start gap-4  mt-[10px]'>
                        {carddata.map((items, index) => (
                            <div className='w-[100%]' >

                                <div className="flex items-center justify-center gap-4  ml-[20px] mr-[40px]">

                                    <div className="flex   ">
                                        <img className=' w-[60px]' src='https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_2.jpg?v=1738849570' alt="image"></img>
                                    </div>
                                    <div className="flex flex-col gap-3 items-start justify-start text-[#787A7C]  text-[14px] font-[400] flex-1">
                                        <span className='text-black  '>{items.description}</span>
                                        <span>{items.color}/{items.size}</span>


                                    </div>
                                    <span className='flex items-center justify-center text-[14px] text-[black] font-[400]'>Rs. {items.price}</span>
                                </div>


                            </div>

                        ))}
                        <div className='w-[100%] flex flex-col  gap-4 mt-[20px]'>
                            <div className='flex items-center justify-between'>
                                <span>Subtotal · 5 items</span>
                                <span>₹6,295.00</span>

                            </div>
                            <div className='flex items-center justify-between'>
                                <span>Shipping

                                </span>
                                <span>Enter shipping address</span>

                            </div>

                            <div className='flex items-center justify-between'>

                                <div className="flex flex-col gap-2">
                                    <span>Total

                                    </span>
                                    Tax Included

                                </div>
                                <span>
                                    INR
                                    ₹6,295.00</span>

                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="flex items-center justify-between border-t-[1px]  " />

            <div className='grid grid-cols-12 w-[100%] h-screen'>

                <div className='md:col-span-6 col-span-12 m-10 overflow-y-auto no-scrollbar h-screen'>
                    <h1 className='text-black text-[21px] font-[600]'>Delivery</h1>
                    <div className=' flex flex-col items-start justify-start gap-4 mt-[10px]'>
                        <input id="filled-basic" placeholder='country/Region'
                            className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />

                        <div className='flex w-[100%] gap-4'>
                            <input id="filled-basic" placeholder='First Name'
                                className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                            <input id="filled-basic" placeholder='Last Name'
                                className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />

                        </div>
                        <input id="filled-basic" placeholder='Address'
                            className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1] hover:border-black rounded-[2px] p-2' />
                        <input id="TextField2" name="address2" placeholder="Apartment, suite, etc. (optional)" type="text" aria-required="false"
                            className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1] hover:border-black rounded-[2px] p-2'></input>

                        <div className='flex w-[100%] gap-4'>
                            <input id="filled-basic" placeholder='City'
                                className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                            <input id="filled-basic" placeholder='State'
                                className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                            <input id="filled-basic" placeholder='Pincode'
                                className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />

                        </div>
                        <input id="filled-basic" placeholder='Phone' type='number'
                            className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                        <div className='flex items-center justify-center gap-2'>
                            <input id="filled-basic" type='checkbox'
                                className=' border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                            <span>Save this information for next time</span></div>
                    </div>
                    <h1 className='text-black text-[21px] font-[600] mt-[20px]'>Payment</h1>
                    <span className='text-[14px] font-[400] text-[#707070]'>All transactions are secure and encrypted.</span>
                    <button className='w-[100%] h-[51px] border-[1px] hover:border-black rounded-[2px] p-2 flex items-center justify-start gap-2'>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="cash"
                        />
                        Cash on delivery
                    </button>

                    <button className='w-[100%] h-[51px] border-[1px] hover:border-black rounded-[2px] p-2 flex items-center justify-start gap-2'>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="online"
                        />
                        Online Payment
                    </button>
                    <button className='w-[100%] h-[51px] border-[1px] bg-black  text-white rounded-[2px] mt-[20px] mb-[30px]'>

                        PAY NOW
                    </button>
                </div>

                <div className="col-span-6 bg-[#f5f5f5] h-screen w-full top-0 border-l-[1px] sticky p-[40px] md:block hidden">

                    <div className='flex flex-col items-start gap-4 '>
                        {carddata.map((items, index) => (
                            <div className='w-[100%]' >

                                <div className="flex items-center justify-center gap-4  ml-[20px] mr-[40px]">

                                    <div className="flex   ">
                                        <img className=' w-[85px]' src='https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_2.jpg?v=1738849570' alt="image"></img>
                                    </div>
                                    <div className="flex flex-col gap-3 items-start justify-start text-[#787A7C]  text-[14px] font-[400] flex-1">
                                        <span className='text-black  '>{items.description}</span>
                                        <span>{items.color}</span>
                                        <span>{items.size}</span>
                                        <span className='md:hidden block'>Rs. {items.price}</span>
                                    </div>
                                    <span className='flex items-center justify-center text-[14px] text-[black] font-[400]'>Rs. {items.price}</span>
                                </div>


                            </div>

                        ))}
                        <div className='w-[100%] flex flex-col  gap-4 mt-[20px]'>
                            <div className='flex items-center justify-between'>
                                <span>Subtotal · 5 items</span>
                                <span>₹6,295.00</span>

                            </div>
                            <div className='flex items-center justify-between'>
                                <span>Shipping

                                </span>
                                <span>Enter shipping address</span>

                            </div>

                            <div className='flex items-center justify-between'>

                                <div className="flex flex-col gap-2">
                                    <span>Total

                                    </span>
                                    Tax Included

                                </div>
                                <span>
                                    INR
                                    ₹6,295.00</span>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Payment