import React, { useState } from 'react'
import { BiSolidUpArrow } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { MdFormatListBulleted } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from 'react-icons/ci';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Drawer } from '@mui/material';
import { RxCross1 } from 'react-icons/rx';
import { BiSliderAlt } from "react-icons/bi";
import { useNavigate, useParams } from 'react-router-dom';

const Products = () => {
  const navigate=useNavigate();  
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
        {
            id: 5,
            description: "Raasile Blue Women Sneakers",
            amount: "Rs. 1,299.00",
            image: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/TERMINATOR_N__5G-846_GRY-D.GRY_2.jpg?v=1738850026",
            discount: "30% off",
        },
        {
            id: 6,
            description: "Raasile Black Sneakers",
            amount: "Rs. 1,599.00",
            image: "https://img.freepik.com/free-photo/fashion-shoes_74190-2601.jpg?ga=GA1.1.416566523.1736844263&semt=ais_hybrid",
            discount: "20% off",
        },
        {
            id: 7,
            description: "Raasile Green Sneakers",
            amount: "Rs. 1,799.00",
            image: "https://img.freepik.com/free-photo/fashion-shoes_74190-2601.jpg?ga=GA1.1.416566523.1736844263&semt=ais_hybrid",
            discount: "15% off",
        },
        {
            id: 8,
            description: "Raasile Blue Women Sneakers",
            amount: "Rs. 1,299.00",
            image: "https://img.freepik.com/free-photo/fashion-shoes_74190-2601.jpg?ga=GA1.1.416566523.1736844263&semt=ais_hybrid",
            discount: "30% off",
        },
        {
            id: 9,
            description: "Raasile Black Sneakers",
            amount: "Rs. 1,599.00",
            image: "https://img.freepik.com/free-photo/fashion-shoes_74190-2601.jpg?ga=GA1.1.416566523.1736844263&semt=ais_hybrid",
            discount: "20% off",
        },
        {
            id: 10,
            description: "Raasile Green Sneakers",
            amount: "Rs. 1,799.00",
            image: "https://img.freepik.com/free-photo/fashion-shoes_74190-2601.jpg?ga=GA1.1.416566523.1736844263&semt=ais_hybrid",
            discount: "15% off",
        },
        {
            id: 11,
            description: "Raasile Green Sneakers",
            amount: "Rs. 1,799.00",
            image: "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/ABACUS_6G-221_MOONLIGHT-BLU_2.jpg?v=1738850599",
            discount: "15% off",
        },
        {
            id: 12,
            description: "Raasile Blue Women Sneakers",
            amount: "Rs. 1,299.00",
            image: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/TERMINATOR_N__5G-846_GRY-D.GRY_2.jpg?v=1738850026",
            discount: "30% off",
        },
    ];
    const Data = [
        { Number: '1', length: "(73)" },
        { Number: '2', length: "(125)" },
        { Number: '3', length: "(125)" },
        { Number: '4', length: "(485)" },
        { Number: '5', length: "(474)" },
        { Number: '6', length: "(1858)" },
        { Number: '7', length: "(1770)" },
        { Number: '8', length: "(1465)" },
        { Number: '9', length: "(1190)" },
        { Number: '10', length: "(7300)" },
        { Number: '11', length: "(7378)" },
        { Number: '12', length: "(738)" },
        { Number: '13', length: "(734)" }


    ];
    const Listdata = [
        { name: "Kids casual shoes", number: "(2)" },
        { name: "Kids Running shoes", number: "(20)" },
        { name: "Kids Slippers ", number: "(22)" },
        { name: "Kids Slippers", number: "(24)" },
        { name: "Kids Sports shoes", number: "(22)" },
        { name: "Kids Sports shoes", number: "(22)" },
        { name: "Kids Sports shoes", number: "(22)" },
        { name: "Kids Sports shoes", number: "(22)" },
        { name: "Kids Sports shoes", number: "(22)" },
        { name: "Kids Sports shoes", number: "(22)" },
        { name: "Kids Sports shoes", number: "(22)" }
    ];
    const colors = [
        "#000000", "#0000FF", "#FAFAD2", "#008000",
        "#808080", "#8B0000", "#00008B", "#FFFFFF",
        "#808000", "#FFEBCD", "#FFC0CB", "#800080",
        "#FF0000", "#008080", "#FFFF00"
    ];
    const [Filter, setFilter] = useState(false);

    const [sizeFilter, setSizeFilter] = useState(false);
    const [colorFilter, setColorFilter] = useState(false);
    const [typeFilter, setTypeFilter] = useState(false);
    const [mobileFilterOpen,setMobileFilterOpen]=useState(false);
    const [sortOpen, setSortOpen] = useState(false);
    const   handleproduct=()=>{
      navigate('/productdetail/5465');
    }
    const params = useParams();
    console.log(params, 'params');
    let data= {};
    if (params.type === 'sale') {
      data = {
        saleCategory:"sale",
        NumberOfProduct:"2409",
        image:"https://img.freepik.com/free-vector/colorful-sale-banner-template_1361-1223.jpg?ga=GA1.1.416566523.1736844263&semt=ais_hybrid"
      }
    }
    if (params.type === 'newarrival') {
      data = {
        saleCategory :"New arrival",
        NumberOfProduct :"50",
        image : "https://img.freepik.com/premium-psd/fashion-collection-facebook-template_23-2151224695.jpg?ga=GA1.1.416566523.1736844263&semt=ais_authors_boost"

      }
    }
    if (params.type === 'man') {
      data = {
        saleCategory:"Man sale store",
        NumberOfProduct:"1560",
        image:"https://img.freepik.com/premium-photo/legs-three-persons-wearing-jeans_23-2147732062.jpg?ga=GA1.1.416566523.1736844263&semt=ais_authors_boost"

      }
    }
    if (params.type === 'kids') {
      data = {
        saleCategory:"Kids Footwear",
        NumberOfProduct:"520",
        image:"https://img.freepik.com/premium-photo/baby-concept-with-pairs-shoes-love-letters_23-2147665757.jpg?ga=GA1.1.416566523.1736844263&semt=ais_authors_boost"

      }
    }
    if (params.type === 'woman') {
      data = {
        saleCategory:"Women's Footwear",
        NumberOfProduct:"1000",
        image:"https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669603.jpg?ga=GA1.1.416566523.1736844263&semt=ais_authors_boost"
      }
    }
    if (params.type === 'trending') {
      data = {
        saleCategory: "Top sailing",
        NumberOfProduct: "200",
        image: "https://img.freepik.com/premium-photo/giant-sneaker-urban-environment_23-2150760353.jpg?ga=GA1.1.416566523.1736844263&semt=ais_authors_boost"
      }
    }
    console.log(data,'data')
    return (
        <div className="flex flex-col items-center justify-center mb-10">
        <div className="w-[100%]">
          <img
            className="w-full h-[300px]"
            src={data?.image}
            alt=""
          />
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
          {/* Sidebar - Filters */}
          <div className="hidden md:block col-span-2 sticky top-0 overflow-y  ml-[10px] mt-[10px]">
            <div className="flex flex-col gap-4 text-[#787A7C] text-[11px]">
              <span>Home / Shop / Sale</span>
      
              {/* PRICE FILTER */}
              <div className="text-black font-bold text-[14px] border-b border-[#b4b1b1]">
                <div onClick={() => setFilter(!Filter)} className="flex items-center justify-between p-2 cursor-pointer">
                  PRICE
                  <BiSolidUpArrow className={`transition-transform ${Filter ? "rotate-180" : ""}`} />
                </div>
                {Filter && (
                  <div>
                    <div className="flex items-center justify-center">
                      <input type="number" className="w-[45%] h-[33px] border border-[#b4b1b1] px-2" />
                      <span>-</span>
                      <input type="number" className="w-[45%] h-[33px] border border-[#b4b1b1] px-2" />
                    </div>
                    <Slider track="inverted" defaultValue={[349, 37]} />
                  </div>
                )}
              </div>
      
              {/* SIZE FILTER */}
              <div className="text-black font-bold text-[14px] border-b border-[#b4b1b1]">
                <div onClick={() => setSizeFilter(!sizeFilter)} className="flex items-center justify-between p-2 cursor-pointer">
                  SIZE
                  <BiSolidUpArrow className={`transition-transform ${sizeFilter ? "rotate-180" : ""}`} />
                </div>
                {sizeFilter && (
                  <div className="flex flex-col gap-2 h-[200px] overflow-auto">
                    {Data.map((items, index) => (
                      <div key={index} className="flex justify-between">
                        <label className="flex items-center text-[#b4b1b1]">
                          <input type="checkbox" className="mr-2" />
                          {items.Number}
                        </label>
                        <span className="text-[#b4b1b1]">{items.length}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
      
              {/* COLOR FILTER */}
              <div className="text-black font-bold text-[14px] border-b border-[#b4b1b1]">
                <div onClick={() => setColorFilter(!colorFilter)} className="flex items-center justify-between p-2 cursor-pointer">
                  COLOUR
                  <BiSolidUpArrow className={`transition-transform ${colorFilter ? "rotate-180" : ""}`} />
                </div>
                {colorFilter && (
                  <div className="grid grid-cols-5 gap-2 p-2">
                    {colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full border-2 transition-all hover:border-gray-500 cursor-pointer"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                )}
              </div>
      
              {/* PRODUCT TYPE FILTER */}
              <div className="text-black font-bold text-[14px] border-b border-[#b4b1b1]">
                <div onClick={() => setTypeFilter(!typeFilter)} className="flex items-center justify-between p-2 cursor-pointer">
                  PRODUCT TYPE
                  <BiSolidUpArrow className={`transition-transform ${typeFilter ? "rotate-180" : ""}`} />
                </div>
                {typeFilter && (
                  <div className="flex flex-col gap-2 h-[200px] overflow-auto">
                    {Listdata.map((items, index) => (
                      <div key={index} className="flex justify-between text-[#b4b1b1]">
                        <span>{items.name}</span>
                        <span>{items.number}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
      
          {/*  buttons */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-[0.5px] border-[#e3e6e6]  shadow-md md:hidden">
        <button
          className="bg-white text-[#787A7C] font-[400]  w-[50%] text-[14px] p-3  rounded"
          onClick={() => setMobileFilterOpen(true)}
        >
           <div className='flex items-center justify-center gap-4'>      <BiSliderAlt /> Filters</div>
       
        </button>
        <button
          className="bg-white text-[#787A7C] font-[400] w-[50%] text-[14px] p-3 border-l-[1px] border-[#e3e6e6] rounded"
          onClick={() => setSortOpen(true)}
        >
        <div className='flex items-center justify-center gap-4'>  Sort <IoIosArrowDown  /></div>
        </button>
      </div>

      {/* Mobile Filter Modal */}
      {mobileFilterOpen && (
        <Drawer anchor="left" open={mobileFilterOpen} onClose={() => setMobileFilterOpen(false)}>
              <div className="w-64 ">
          <div className="flex items-end justify-end  py-4 ">
                        <RxCross1 onClick={() =>setMobileFilterOpen(false)} className="mr-[10px]" />
                      </div>
                      <div className="block md:hidden col-span-2 sticky top-0 overflow-y  ml-[10px] mt-[10px]">
            <div className="flex flex-col gap-4 text-[black] text-[11px]">
              <span>Home / Shop / Sale</span>
      
              {/* PRICE FILTER */}
              <div className="text-black font-bold text-[14px] border-b border-[#b4b1b1]">
                <div onClick={() => setFilter(!Filter)} className="flex items-center justify-between p-2 cursor-pointer">
                  PRICE
                  <BiSolidUpArrow className={`transition-transform ${Filter ? "rotate-180" : ""}`} />
                </div>
                {Filter && (
                  <div>
                    <div className="flex items-center justify-center">
                      <input type="number" className="w-[45%] h-[33px] border border-[#b4b1b1] px-2" />
                      <span>-</span>
                      <input type="number" className="w-[45%] h-[33px] border border-[#b4b1b1] px-2" />
                    </div>
                    <Slider track="inverted" defaultValue={[349, 37]} />
                  </div>
                )}
              </div>
      
              {/* SIZE FILTER */}
              <div className="text-black font-bold text-[14px] border-b border-[#b4b1b1]">
                <div onClick={() => setSizeFilter(!sizeFilter)} className="flex items-center justify-between p-2 cursor-pointer">
                  SIZE
                  <BiSolidUpArrow className={`transition-transform ${sizeFilter ? "rotate-180" : ""}`} />
                </div>
                {sizeFilter && (
                  <div className="flex flex-col gap-2 h-[200px] overflow-auto">
                    {Data.map((items, index) => (
                      <div key={index} className="flex justify-between">
                        <label className="flex items-center text-[#b4b1b1]">
                          <input type="checkbox" className="mr-2" />
                          {items.Number}
                        </label>
                        <span className="text-[#b4b1b1]">{items.length}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
      
              {/* COLOR FILTER */}
              <div className="text-black font-bold text-[14px] border-b border-[#b4b1b1]">
                <div onClick={() => setColorFilter(!colorFilter)} className="flex items-center justify-between p-2 cursor-pointer">
                  COLOUR
                  <BiSolidUpArrow className={`transition-transform ${colorFilter ? "rotate-180" : ""}`} />
                </div>
                {colorFilter && (
                  <div className="grid grid-cols-5 gap-2 p-2">
                    {colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full border-2 transition-all hover:border-gray-500 cursor-pointer"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                )}
              </div>
      
              {/* PRODUCT TYPE FILTER */}
              <div className="text-black font-bold text-[14px] border-b border-[#b4b1b1]">
                <div onClick={() => setTypeFilter(!typeFilter)} className="flex items-center justify-between p-2 cursor-pointer">
                  PRODUCT TYPE
                  <BiSolidUpArrow className={`transition-transform ${typeFilter ? "rotate-180" : ""}`} />
                </div>
                {typeFilter && (
                  <div className="flex flex-col gap-2 h-[200px] overflow-auto">
                    {Listdata.map((items, index) => (
                      <div key={index} className="flex justify-between text-[#b4b1b1]">
                        <span>{items.name}</span>
                        <span>{items.number}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          </div>
        </Drawer>
      )}

      {/* Mobile Sort Modal */}
      {sortOpen && (
      <Drawer anchor="bottom" open={sortOpen} onClose={() => setSortOpen(false)}>
          <div className='h-[350px]'>
          <div className="flex items-center justify-start  py-4 mx-[10px] ">
                        <RxCross1 onClick={() =>setSortOpen(false)} className="mr-[150px]" /> sort
                      </div>
          <div className="text-[#787A7C] font-[400] text-[15px] flex flex-col items-center justify-center">
          <p className="p-2 cursor-pointer ">Date:  New to Old</p>
          <p className="p-2 cursor-pointer ">Date:  Old to New</p>
            <p className="p-2 cursor-pointer ">Price - Low to High</p>
            <p className="p-2 cursor-pointer ">Price - High to Low</p>
            <p className="p-2 cursor-pointer ">Best Sellers</p>
            <p className="p-2 cursor-pointer ">New Arrivals</p>
            <p className="p-2 cursor-pointer ">Discount : high to low</p>
          </div>
          </div>
        </Drawer>
      )}
      
          {/* Products Section */}
          <div className="col-span-12 md:col-span-10 mt-6 mx-6">
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-2">
                <CgMenuGridO size={30} className="text-[#787a7c]" />
                <MdFormatListBulleted size={30} className="text-[#787a7c]" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[14px] text-[#171717] font-[400]">{data?.saleCategory}</span>
                <span className="text-[14px] text-[#787a7c] font-[400]">{data?.NumberOfProduct}Products</span>
              </div>
              <button className="border hidden md:block border-[#787a7c] w-[220px] h-[42px] px-[10px]">
                <div className="flex items-center justify-between text-[#787a7c]">
                  Sort <IoIosArrowDown />
                </div>
              </button>
            </div>
      
            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
              {products.map((product, index) => (
                <div    onClick={handleproduct} key={index} className="group flex flex-col items-start">
                  <CiHeart />
                  <img className="h-[200px] w-[305px]" src={product.image} alt={product.description} />
                  <button className="bg-white border border-[#787A7C] text-[#212B36] w-full h-[38px] rounded opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    Quick Buy
                  </button>
                  <p className="text-[#787A7C] text-[14px]">{product.description}</p>
                  <span className="text-[#787A7C] text-[14px]">{product.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      
        <div className="text-[#964233] mt-4">1 2 3 ..... 100</div>
      </div>
      
    )
}

export default Products