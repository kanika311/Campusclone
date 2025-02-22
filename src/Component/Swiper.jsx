import React from 'react'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "./Swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Swipershoe = ({productDetail}) => {
    const defaultImages = [
        "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_2.jpg?v=1738849570",
        "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_1.jpg?v=1738849570",
        "https://www.campusshoes.com/cdn/shop/files/FIRST_11G-787_WHT-SIL-B.ORG_540x.webp?v=1738849908",
      ];
    
  
     
  return (
    <div className=" slider-container w-full  mx-auto ">
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction:true}}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      className="slider-container"
    >
            {productDetail?.productImages?.map((img, index) => (
          <SwiperSlide key={img.id||index} className="slide-item">
            <img
              className="w-full h-auto object-cover"
              src={img.path}
              alt={`Shoe ${img.name}`}
            />

        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default Swipershoe