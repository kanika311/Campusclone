import React, { useEffect, useState } from 'react'
import { BiSolidUpArrow } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { MdFormatListBulleted } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from 'react-icons/ci';
import Slider from '@mui/material/Slider';
import { Drawer, Pagination, Skeleton, Typography } from '@mui/material';
import { RxCross1 } from 'react-icons/rx';
import { BiSliderAlt } from "react-icons/bi";
import { useNavigate, useParams } from 'react-router-dom';
import { shallowEqual, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchProductList } from '../reduxs/slices/product'
import Box from "@mui/material/Box";


const Products = () => {
  const navigate = useNavigate();

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
    "white", "black", "red", "blue",
    " pink", "gray", "yellow", "purple",
    "white", "black", "red", "blue",
    " pink", "gray", "yellow", "purple"];
  const [isFilter, setFilter] = useState(false);
  const [sizeFilter, setSizeFilter] = useState(false);
  const [colorFilter, setColorFilter] = useState(false);
  const [typeFilter, setTypeFilter] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [issortOpen, setSort] = useState(false);
  const [selectedColor, setSelectedcolour] = useState(null);
  const[skeleton,SetSkeleton]=useState(true);
  const handleproduct = (productId) => {
    navigate(`/productdetail/${productId}`);
  };
  // according to params value change
  const params = useParams();
  console.log(params, 'params');

  let data = {};

  switch (params.type) {
    case 'sale':
      data = {
        saleCategory: "Sale",
        NumberOfProduct: "2409",
        image: "https://img.freepik.com/free-vector/colorful-sale-banner-template_1361-1223.jpg?ga=GA1.1.416566523.1736844263&semt=ais_hybrid"
      };
      break;

    case 'collection':
      data = {
        saleCategory: "New Arrival",
        NumberOfProduct: "50",
        image: "https://img.freepik.com/premium-psd/fashion-collection-facebook-template_23-2151224695.jpg?ga=GA1.1.416566523.1736844263&semt=ais_authors_boost"
      };
      break;

    case 'men':
      data = {
        saleCategory: "Men's Sale Store",
        NumberOfProduct: "1560",
        image: "https://img.freepik.com/premium-photo/legs-three-persons-wearing-jeans_23-2147732062.jpg?ga=GA1.1.416566523.1736844263&semt=ais_authors_boost"
      };
      break;

    case 'kids':
      data = {
        saleCategory: "Kids Footwear",
        NumberOfProduct: "520",
        image: "https://img.freepik.com/premium-photo/baby-concept-with-pairs-shoes-love-letters_23-2147665757.jpg?ga=GA1.1.416566523.1736844263&semt=ais_authors_boost"
      };
      break;

    case 'women':
      data = {
        saleCategory: "Women's Footwear",
        NumberOfProduct: "1000",
        image: "https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669603.jpg?ga=GA1.1.416566523.1736844263&semt=ais_authors_boost"
      };
      break;

    case 'trending':
      data = {
        saleCategory: "Top Selling",
        NumberOfProduct: "200",
        image: "https://img.freepik.com/premium-photo/giant-sneaker-urban-environment_23-2150760353.jpg?ga=GA1.1.416566523.1736844263&semt=ais_authors_boost"
      };
      break;

    default:
      data = {
        saleCategory: "Unknown",
        NumberOfProduct: "0",
        image: "https://img.freepik.com/free-psd/shoe-store-concept-banner-template_23-2148738803.jpg?ga=GA1.1.416566523.1736844263&semt=ais_hybrid" // Placeholder image for unknown category
      };
      break;
  }

  console.log(data);

  //pagination
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  //productdetails api call
  const dispatch = useDispatch();
  const { product, productPaginator } = useSelector(state => state.product);


  // filter data  by regex query




  const handleGetProductList = async (sorting, categoryType = null, color) => {
    try {
    
      console.log(color, "colorvalue")

      let filterproduct = {
        $or: [
          { category: { $regex: `${params?.type}`, $options: "i" } },
          { 'title.shortTitle': { $regex: `${params?.type}`, $options: "i" } },
          { 'title.shortTitle': { $regex: `${color}`, $options: "i" } },

        ]
      };
      if (categoryType) {
        filterproduct = { category: categoryType };
      }

      const result = await dispatch(fetchProductList(page, 8, filterproduct, sorting));

if (result){
  console.log("founddata", result);
  SetSkeleton(false);
  return result;
}
     
    } catch (error) {
      console.error("Error fetching product:", error);
      return false;
    }
  };
  console.log(product, 'productlist')

  useEffect(() => {
    console.log("Params changed:", params);
    handleGetProductList();
  }, [params, page]);





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
              <div onClick={() => setFilter(!isFilter)} className="flex items-center justify-between p-2 cursor-pointer">
                PRICE
                <BiSolidUpArrow className={`transition-transform ${isFilter ? "rotate-180" : ""}`} />
              </div>
              {isFilter && (
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
                  {Data?.map((items, index) => (
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
                  {colors?.map((color, index) => (
                    <div
                      onClick={() =>
                        handleGetProductList(null, null, color)
                      }
                      key={index}
                      className={`w-8 h-8 rounded-full border-2 transition-all cursor-pointer border-[#]${selectedColor === color ? "border-black" : "border-transparent"
                        }`}
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
                  {Listdata?.map((items, index) => (
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
            <div className='flex items-center justify-center gap-4'>  Sort <IoIosArrowDown /></div>
          </button>
        </div>

        {/* Mobile Filter Modal */}
        {mobileFilterOpen && (
          <Drawer anchor="left" open={mobileFilterOpen} onClose={() => setMobileFilterOpen(false)}>
            <div className="w-64 ">
              <div className="flex items-end justify-end  py-4 ">
                <RxCross1 onClick={() => setMobileFilterOpen(false)} className="mr-[10px]" />
              </div>
              <div className="block md:hidden col-span-2 sticky top-0 overflow-y  ml-[10px] mt-[10px]">
                <div className="flex flex-col gap-4 text-[black] text-[11px]">
                  <span>Home / Shop / Sale</span>

                  {/* PRICE FILTER */}
                  <div className="text-black font-bold text-[14px] border-b border-[#b4b1b1]">
                    <div onClick={() => setFilter(!isFilter)} className="flex items-center justify-between p-2 cursor-pointer">
                      PRICE
                      <BiSolidUpArrow className={`transition-transform ${isFilter ? "rotate-180" : ""}`} />
                    </div>
                    {isFilter && (
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
                        {Data?.map((items, index) => (
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
                        {colors?.map((color, index) => (
                          <div
                            onClick={() =>
                              handleGetProductList(null, null, color)
                            }
                            key={index}
                            className={`w-8 h-8 rounded-full border-2 transition-all cursor-pointer border-[#]${selectedColor === color ? "border-black" : "border-transparent"
                              }`}
                            style={{ backgroundColor: color }}
                          />))}
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
                        {Listdata?.map((items, index) => (
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
                <RxCross1 onClick={() => setSortOpen(false)} className="mr-[150px]" /> sort
              </div>
              <div className="text-[#787A7C] font-[400] text-[15px] flex flex-col items-center justify-center">

                <p onClick={() => handleGetProductList('asc')} className="p-2 cursor-pointer ">Price - Low to High</p>
                <p onClick={() => handleGetProductList('des')} className="p-2 cursor-pointer ">Price - High to Low</p>
                <p className="p-2 cursor-pointer ">Best Sellers</p>
                <p onClick={() => handleGetProductList(null, "Trending")} className="p-2 cursor-pointer ">New Arrivals</p>
                <p onClick={() => handleGetProductList(null, "Collection")} className="p-2 cursor-pointer ">Discount : high to low</p>
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
            <button className="border hidden md:block border-[#787a7c] w-[220px] h-[42px] px-[10px] relative">
              <div className="flex items-center justify-between text-[#787a7c]">
                Sort <IoIosArrowDown onClick={() => setSort(true)} />
              </div>
              {issortOpen && (
                <div className='absolute z-[10px] left-0 bg-gray-100 h-auto top-[50px] py-6'>

                  <div className="flex items-center justify-start   mx-[10px] text-[#787A7C]">
                    <RxCross1 onClick={() => setSort(false)} className="mr-[150px]" /> sort
                  </div>
                  <div className="text-[#787A7C] font-[400] text-[15px] flex flex-col items-center justify-center">

                    <p onClick={() => handleGetProductList('asc')} className="p-2 cursor-pointer ">Price - Low to High</p>
                    <p onClick={() => handleGetProductList('desc')} className="p-2 cursor-pointer ">Price - High to Low</p>
                    <p onClick={() => handleGetProductList(null, "Trending")} className="p-2 cursor-pointer ">Best Sellers</p>
                    <p onClick={() => handleGetProductList(null, "Collection")} className="p-2 cursor-pointer ">New Arrivals</p>



                  </div>
                </div>
              )}
            </button>
          </div>

          {/* Product Grid */}
          
            
          {skeleton? (<div className="grid grid-rows-4 gap-4">
    {Array.from({ length: 3 }).map((_, index) => (
      <Skeleton key={index} variant="rectangular" width="100%" height={150} />
    ))}
  </div>
) :(
   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 mt-[40px]">
 {product && product?.map((item) => (

  <div onClick={() => handleproduct(item.id)} key={item?.id} className="group flex flex-col  gap-2">
    <div className='flex items-end justify-end'><CiHeart size={25} /></div>
    <img className="h-[200px] w-full object-contain" src={item?.image} alt='' />

    <button className="bg-white border border-[#787A7C] text-[#212B36] w-full h-[38px] rounded opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      Quick Buy
    </button>
    <p className="text-[#787A7C] text-[14px] font-[400]">{item?.title?.shortTitle}</p>
    <span className="text-black text-[14px] font-[400]">Rs.{item?.price?.mrp}</span>
  </div>
))}
</div>
 )
 
 
 }


           
        </div>
      </div>

      <div className="">
        <Box
          sx={{
            margin: "auto",
            width: "fit-content",
            alignItems: "center",
          }}
        >


          <Pagination count={productPaginator?.pageCount
          } page={page}

            onChange={handleChange} />
        </Box>

      </div>
    </div>

  )
}

export default Products