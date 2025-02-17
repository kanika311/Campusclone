import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Shoeslider.css"; // Import the CSS file
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Shoesslider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const products = [
    {
      id: 1,
      description: "Raasile White Women Sneakers",
      amount: "Rs. 1,229.00",
      image: "https://img.freepik.com/free-photo/fashion-shoes_74190-2601.jpg?ga=GA1.1.416566523.1736844263&semt=ais_hybrid",
      discount: "51% off",
    },
    {
      id: 2,
      description: "Raasile Blue Women Sneakers",
      amount: "Rs. 1,299.00",
      image: "https://img.freepik.com/free-photo/fashion-shoes_74190-2601.jpg?ga=GA1.1.416566523.1736844263&semt=ais_hybrid",
      discount: "30% off",
    },
    {
      id: 3,
      description: "Raasile Black Sneakers",
      amount: "Rs. 1,599.00",
      image: "https://img.freepik.com/free-photo/fashion-shoes_74190-2601.jpg?ga=GA1.1.416566523.1736844263&semt=ais_hybrid",
      discount: "20% off",
    },
    {
      id: 4,
      description: "Raasile Green Sneakers",
      amount: "Rs. 1,799.00",
      image: "https://img.freepik.com/free-photo/fashion-shoes_74190-2601.jpg?ga=GA1.1.416566523.1736844263&semt=ais_hybrid",
      discount: "15% off",
    },
    {
        id: 5,
        description: "Raasile Blue Women Sneakers",
        amount: "Rs. 1,299.00",
        image: "https://img.freepik.com/free-photo/fashion-shoes_74190-2601.jpg?ga=GA1.1.416566523.1736844263&semt=ais_hybrid",
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
  ];
  const navigate =useNavigate();
  const   handleproduct=()=>{
    navigate('/productdetail/5465');
  }
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

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
  slidesPerView={6} // Default for large screens
  breakpoints={{
    0: { slidesPerView: 2 }, // Mobile screens
    768: { slidesPerView: 6 }, // Tablets and larger screens
  }}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
>
  {products.map((product) => (
    <SwiperSlide key={product.id} className="slide-item">
      <div onClick={handleproduct} className="product-card group flex flex-col  item-center justify-center md:items-start md:justify-start gap-4 relative overflow-hidden">
        <CiHeart />
        <img src={product.image} alt={product.description} className="product-image" />
        
        {/* Button with smooth transition */}
        <button className="bg-white border-[#212B36] border-[1.5px] text-[#212B36] w-full h-[35px] rounded-[2px] 
          opacity-0 translate-y-4 tansition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          Quick Buy
        </button>

        <p className="text-[#171717] text-[14px]">{product.description}</p>
        <span className="text-[#171717] text-[14px] ">{product.amount}</span>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    
    </div>
  );
};

export default Shoesslider;
