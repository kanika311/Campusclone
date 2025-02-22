import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Shoeslider.css"; // Import the CSS file
import { CiHeart } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import { CloudCog } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../reduxs/slices/product";

const Shoesslider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
const params =useParams()
// productvalue
const dispatch =useDispatch();
    const {product} = useSelector(state => state.product);
    

    let filterproduct = { 
   
        category: { $regex: "Trending", $options: "i" } 
        
      
    };
    
    console.log("After setting:", filterproduct); 
  
    const handleGetProduct = async () => {
      try {
       
      
        const result = await dispatch(fetchProductList(1,10,filterproduct)); 
   
      
        return !!result;
      } catch (error) {
        console.error("Error fetching product:", error);
        return false;
      }
    };
           console.log(product,'productlist')
           
  const navigate =useNavigate();
  const   handleproduct=(productid)=>{
    navigate(`/productdetail/${productid}`);
  }
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);


  useEffect(()=>{
   handleGetProduct();
  },[])

  return (
    <div className="slider-container h-auto sm:m-0 sm:p-0  z-0">
      <div className="slider-header">
        <button ref={prevRef} className="arrow-button left-arrow">‹</button>
        <h2 className="slider-title">Bestsellers</h2>
        <button ref={nextRef} className="arrow-button right-arrow">›</button>
      
      </div>
      <h2 className="text-red-400">View All</h2>

      <Swiper
  modules={[Navigation]}
  spaceBetween={20}
  slidesPerView={4} // Default for large screens
  breakpoints={{
    0: { slidesPerView: 1}, // Mobile screens
    768: { slidesPerView: 4}, // Tablets and larger screens
  }}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
>
  {product.map((product) => (
    <SwiperSlide onClick={()=>handleproduct(product?.id)}  key={product?.id} className="slide-item">
      <div  className="product-card group flex flex-col  item-center justify-center md:items-start md:justify-start gap-4 relative overflow-hidden">
        <CiHeart size={25}/>
        <img src={product.image} alt={product?.title?.shortTitle} className="product-image" />
        
        {/* Button with smooth transition */}
        <button className="hidden md:block bg-white border-[#212B36] border-[1.5px] text-[#212B36] w-[100%] h-[80px] rounded-[2px] 
          opacity-0 translate-y-4 tansition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          Quick Buy
        </button>

        <p className="text-[#171717] text-[14px]">{product?.title?.shortTitle}</p>
        <span className="text-[#171717] text-[14px] ">{product.price.mrp}</span>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    
    </div>
  );
};

export default Shoesslider;
