import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci';
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPinterest } from "react-icons/fa6";


import { RiSecurePaymentFill } from "react-icons/ri";
import { MdAssignmentReturn } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { Drawer } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Swipershoe from './Swiper';
const Productdescription = () => {
  const products = [
    {
      id: 1,
      description: "Raasile White Women Sneakers",
      amount: "Rs. 1,229.00",
      image: "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_2.jpg?v=1738849570",
      discount: "51% off",
    },
    {
      id: 2,
      description: "Raasile Blue Women Sneakers",
      amount: "Rs. 1,299.00",
      image: "https://www.campusshoes.com/cdn/shop/files/FIRST_11G-787_WHT-SIL-B.ORG_1_540x.jpg?v=1738849908",
      discount: "30% off",
    },
    {
      id: 3,
      description: "Raasile Black Sneakers",
      amount: "Rs. 1,599.00",
      image: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/VIBGYOR-6G-829-YAN-GOLDEN_2.jpg?v=1738849905",
      discount: "20% off",
    },
    {
      id: 4,
      description: "Raasile Green Sneakers",
      amount: "Rs. 1,799.00",
      image: "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/ABACUS_6G-221_MOONLIGHT-BLU_2.jpg?v=1738850599",
      discount: "15% off",
    },

  ];
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const handleDrawer = () => {
    setDrawerOpen(true);
  }
const navigate= useNavigate();

  const colors = [
    "#000000", "#0000FF", "#FAFAD2", "#008000",
    "#808080", "#8B0000", "#00008B", "#FFFFFF",

  ];

  return (
    <div className=' px-4 md:px-8 '>
      <div className=" mt-10 ">
        <div className='md:grid md:grid-cols-12 '>
       
        <div className="md:col-span-2 md:block hidden">
<div className='flex flex-col items-start justify-start'>

<img  className="w-[200px] h-[200px] " src='https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_2.jpg?v=1738849570' alt=''/>
<img  className="w-[200px] h-[200px]  " src='https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_1.jpg?v=1738849570' alt=''/>
<img  className="w-[200px] h-[200px]  " src='https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_3.jpg?v=1738849570' alt=''/>
<img  className="w-[200px] h-[200px]  " src='https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_3.jpg?v=1738849570' alt=''/>
<img  className="w-[200px] h-[200px]  " src='https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_3.jpg?v=1738849570' alt=''/>





</div>
    </div>
        <div className="md:col-span-5  mx-[8px]  ">
     <Swipershoe/>
       
    </div>
    <div className=" flex  flex-row gap-2 md:hidden">
<div className='flex flex-row items-start justify-start'>

<img  className="w-[100px] h-[100px] " src='https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_2.jpg?v=1738849570' alt=''/>
<img  className="w-[100px] h-[100px]  " src='https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_1.jpg?v=1738849570' alt=''/>
<img  className="w-[100px] h-[100px]  " src='https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_3.jpg?v=1738849570' alt=''/>
<img  className="w-[100px] h-[100px]  " src='https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_3.jpg?v=1738849570' alt=''/>
<img  className="w-[100px] h-[100px]  " src='https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_3.jpg?v=1738849570' alt=''/>





</div>
    </div>
          <div className='md:col-span-5 row-span-6  px-4 md:px-8'>
            <div className='flex flex-col gap-4'>
              <div className='text-lg text-black font-medium'>Raasile White Women Sneakers</div>
              <div className='text-sm text-red-600 font-medium'>PRICE Rs. 1,229.00</div>
              <div className='text-xs text-gray-500 font-medium'>inclusive of all tax</div>
              <div className='border-b border-gray-400 w-full' />
              <div className='text-sm text-black font-medium'>Colors</div>
              <div className="flex flex-wrap gap-2 p-2">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className="border border-gray-700 w-12 h-10 flex items-center justify-center"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className='text-[15px] text-black font-medium'>Raasile White Women Sneakers</div>
              <div className='text-sm text-black font-medium'>Size (UK)</div>
              <div className='flex flex-wrap gap-2'>
                {[6, 7, 8, 9, 10].map(size => (
                  <button key={size} className='border border-gray-700 w-12 h-10 text-gray-700 hover:bg-black hover:text-white'>{size}</button>
                ))}
              </div>
              <div className='text-sm text-black font-medium'>Quantity</div>
              <div className='flex gap-4'>
                <button className='border border-gray-700 w-12 h-10 text-gray-700 '>-</button>
                <button className='border border-gray-700 w-12 h-10 text-gray-700 '>1</button>
                <button className='border border-gray-700 w-12 h-10 text-gray-700 '>+</button>
              </div>
              <div className="text-[15px] text-[400] font-[400] flex items-center justify-center gap-4 text-[#787A7C]"><CiDeliveryTruck size={30}/>Check delivery at your location</div>
              <div className='flex items-start justify-start gap-4'>

                <input type='number' placeholder='Enter Your Pincode'
                  className='border-[1px] border-[#afafaf] w-[200px] h-[46px]  font-[400] p-4 '

                />
                <button className='border-[1px] border-[#404040] w-[80px] h-[46px]  font-[400] bg-[#1c1d45] text-[white] '>Check</button>

              </div>
              <div className='flex items-start justify-start gap-4'>

                <button onClick={handleDrawer} className='border-[1px] border-[#404040] w-[240px] h-[48px] text-[#404040] font-[400] hover:bg-[black] hover:text-[white] '>ADD TO CART</button>


                <Drawer anchor='top' open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
                  <div className='w-full block md:h-[224px] h-auto bg-[#f4f6f8] border-b-[1px] border-[#e2e2e2] p-[30px] '>

                    <div className='flex  gap-10 border-b-[1px] border-[#e2e2e2] pb-[10px]'>
                      <div className="flex items-center justify-between  w-full">
                        <div className="flex  gap-8 text-[#787A7C] text-[13px] font-[400] flex-1">
                          <span>Just added</span>
                          <span>Item</span>
                        </div>
                        <div className="md:flex hidden items-center justify-center gap-8 text-[#787A7C] text-[13px] font-[400] flex-1">
                          <span>Item price</span>
                          <span>Qty</span>
                          <span>Total price</span>
                        </div>
                        <div className="md:flex hidden items-end justify-end  gap-4 text-[#787A7C] text-[13px] font-[400] flex-1">
                          <span>Subtotal</span>
                        </div>

                      </div>
                    </div>

                    <div className='flex pb-[10px]'>
                      <div className="flex items-center justify-between  w-full">

                        <div className="flex items-start justify-start gap-2 text-[#787A7C] text-[13px] font-[400] flex-1">

                          <div className="flex   ">
                            <img className=' w-[85px]' src='https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_2.jpg?v=1738849570' alt="image"></img>
                          </div>
                          <div className="flex flex-col gap-3 items-start justify-start text-[#787A7C]  text-[13px] font-[400] flex-1">
                            <span className='text-black md:text-[#787A7C]'>FIRST White Men's Running Shoes</span>
                            <span>white</span>
                            <span>6</span>
                            <span className='md:hidden block'>Rs. 1,899.00</span>
                          </div>
                        </div>



                        <div className="flex items-center justify-center gap-8">

                          <div className="md:flex hidden flex-col gap-3 items-start justify-start text-[#787A7C] text-[13px] font-[400] flex-1">

                            <span>Rs. 1,899.00</span>
                            <span>Rs. 1,099.00
                            </span>
                          </div>
                          <div className="flex flex-row gap-3 items-start justify-start text-[#787A7C] text-[13px] font-[400] flex-1">
                          <span className='flex md:hidden'>Qty</span>
                            <span>1</span>

                          </div>
                          <div className="md:flex hidden flex-col gap-3 items-start justify-start text-[#787A7C] text-[13px] font-[400] flex-1">

                            <span>Rs. 1,899.00</span>
                            <span>Rs. 1,099.00
                            </span>
                          </div>
                        </div>
                        <div className="md:flex hidden flex-col items-end justify-end gap-8 text-[#787A7C] text-[13px] font-[400] flex-1">
                          <span>Rs. 1,099.00</span>
                          <span>Excl. shipping </span>
                          <div className='flex  items-start justify-start gap-4'>
                            <button onClick={()=> setDrawerOpen(false)} className='border-[1px] border-[#404040] w-[220px] h-[46px]  font-[400] hover:bg-[#1c1d45] hover:text-[white] bg-white text-black'>KEEP SHOPPING</button>
                            <button onClick={()=> navigate('/cart')} className='border-[1px] border-[#404040] w-[80px] h-[46px]  font-[400] bg-[#1c1d45] text-[white] hover:bg-[#C16452] hover:text-[white] '>CART</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:hidden flex-col items-end justify-end gap-8 text-[#787A7C] text-[13px] font-[400] flex-1 border-t-[1px] border-[#e2e2e2]">
                    <div className="flex md:hidden items-end justify-end  gap-4 text-[#787A7C] text-[13px] font-[400] flex-1">
                          <span>Subtotal</span>
                        </div>
                          <span className='text-black'>Rs. 1,099.00</span>
                          <span>Excl. shipping </span>
                          <div className='flex  items-start justify-start gap-4'>
                            <button onClick={()=> setDrawerOpen(false)} className='border-[1px] border-[#404040] w-[150px] h-[46px]  font-[400] hover:bg-[#1c1d45] hover:text-[white] bg-white text-black'>KEEP SHOPPING</button>
                            <button onClick={()=> navigate('/cart')} className='border-[1px] border-[#404040] w-[150px] h-[46px]  font-[400] bg-[#1c1d45] text-[white] hover:bg-[#C16452] hover:text-[white] '>CART</button>
                          </div>
                        </div>
                  </div>




                </Drawer>


                <button className='border-[1px] border-[#404040] w-[240px] h-[48px]  font-[400] bg-[#1c1d45] text-[white] hover:bg-[#C16452] hover:text-[white]'>BUY NOW</button>

              </div>
              <div className='flex items-center justify-between mt-[20px]'>
                <div className='flex flex-col items-center justify-center gap-2' >
                  <RiSecurePaymentFill size={30} /> <span>Secure Payment</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-2' >
                  <MdAssignmentReturn size={30} /><span>Free Shipping</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-2' >
                  <CiDeliveryTruck size={30} /><span>15 days return</span>
                </div>
              </div>
              <p className='text-[15px] font-[600] text-[#787A7C]'>Meet the new chunky number in town, the Campus Stardust Men's Sneakers. Featuring Bubble Yoga
                Max insole, this pair introduces you to a brand new level of cushioned comfort. The innovative Anti-Slip
                Sole Design enhances grip, reducing the chances of accidental slips. The mesh & PU upper further ensure breathability and protection, while the
                outsole engineered with EVA and TPR - offers flexibility and longevity. Making these sneakers a standout
                choice for men seeking both style & functionality is the dashing design and the vibrant red, blue, and white
                palette!</p>
              <ul className='text-[15px] font-[600] text-[#787A7C] flex flex-col gap-2'>
                <li>Occasion: Everyday</li>
                <li>Insole: Super soft</li>


                <li>Care Instructions: Wash in Lukewarm Water. Do Not Bleach</li>
                <li>Upper Material: Mesh+PU+Printing+Welding</li>
                <li>Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi, 110041</li>
                <li>Country of Origin: India</li>
                <li> Qty: 1 Pair of Shoes</li>
              </ul>



            </div>
          </div>
        </div>
      </div>
      <div className='mt-[120px] mb-[30px] '>
        <div className='flex flex-col items-center gap-6'>
          <div className='text-lg font-medium text-gray-800'>Share This Product</div>
          <div className='flex flex-wrap gap-4 justify-center'>
            <button className='border border-gray-300 w-24 h-8 text-green-500 flex items-center justify-center gap-2'><FaWhatsapp />Share</button>
            <button className='border border-gray-300 w-24 h-8 text-blue-500 flex items-center justify-center gap-2'><FaFacebookF />Share</button>
            <button className='border border-gray-300 w-24 h-8 text-black flex items-center justify-center gap-2'><RiTwitterXFill />Tweet</button>
            <button className='border border-gray-300 w-24 h-8 text-gray-700 flex items-center justify-center gap-2'><MdEmail />Email</button>
            <button className='border border-gray-300 w-24 h-8 text-red-600 flex items-center justify-center gap-2'><FaPinterest />Pin</button>
          </div>
        </div>
        <div className='text-lg font-medium text-gray-800 text-center mt-10'>You may also like</div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mx-4 md:mx-8'>
          {products.map((product, index) => (
            <div key={index} className="group flex flex-col items-start gap-4">
              <CiHeart />
              <img className="h-48 w-64 object-cover" src={product.image} alt={product.description} />
              <button className="bg-white border border-gray-400 text-gray-900 w-4/5 h-10 rounded opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                Quick Buy
              </button>
              <p className="text-black text-sm">{product.description}</p>
              <span className="text-black text-sm">{product.amount}</span>
              <span className="text-gray-600 text-sm">6 7 8 9 10</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

}

export default Productdescription