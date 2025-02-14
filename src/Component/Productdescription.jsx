import React from 'react'
import { CiHeart } from 'react-icons/ci';
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPinterest } from "react-icons/fa6";
const Productdescription = ({Title,price}) => {
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
  return (
    <div className='grid grid-rows-12'>
<div className="row-span-6 grid-cols-12">
<div className='col-span-6'>
    <img  className=" w-full" src="https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_2.jpg?v=1738849570" alt="SHOES"/>
</div>
<div className='col-span-6 overflow-y-auto ml-[20px]'>
    <div className='text-[20px] text-[black] font-[400]'>{Title}</div>
    <div className='text-[14px] text-[#E53D3D] font-[400]'>Price Rs. {price}</div>
   
    <div className='text-[11px] text-[#6E6E6E] font-[400]'>inclusive of all tax</div>

</div>


</div>

<div className="row-span-6 mb-[20px]">
<div className='flex flex-col items-center justify-center gap-[20px]'>
<div className='flex items-center justify-center  text-[19px] font-[400] text-[#171717]'>Share This Product</div>
<div className='flex items-center justify-center gap-4'>

<button className='border-[1px] border-[#ccc] w-[120px] h-[32px] text-[#25d366] flex items-center justify-center gap-2'><FaWhatsapp/>Share</button>
<button className='border-[1px] border-[#ccc] w-[120px] h-[32px] text-[#007aff] flex items-center justify-center gap-2'><FaFacebookF/>Share</button>
<button className='border-[1px] border-[#ccc] w-[120px] h-[32px] text-[black] flex items-center justify-center gap-2'><RiTwitterXFill/>Tweet</button>
<button className='border-[1px] border-[#ccc] w-[120px] h-[32px] text-[#3d3d3d] flex items-center justify-center gap-2'><MdEmail/>Email</button>
<button className='border-[1px] border-[#ccc] w-[120px] h-[32px] text-[#cb2027] flex items-center justify-center gap-2'><FaPinterest/>Pin</button>
</div>

   <div className='flex items-center justify-center mb-[30px] text-[19px] font-[400] text-[#171717]'>You may also like</div>
   </div>
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 mx-[20px]">
                  {products.map((product, index) => (
                    <div  key={index} className="group flex flex-col items-start gap-4">
                      <CiHeart />
                      <img className="h-[200px] w-[305px]" src={product.image} alt={product.description} />
                      <button className="bg-white border border-[#787A7C] text-[#212B36] w-[80%] h-[38px] rounded opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        Quick Buy
                      </button>
                      <p className="text-[black] text-[14px]">{product.description}</p>
                      <span className="text-[black] text-[14px]">{product.amount}</span>
                      <span className="text-[#787A7C] text-[14px]">6 7 8 9 10</span>

                    </div>
                  ))}
                </div>
</div>
    </div>
  )
}

export default Productdescription