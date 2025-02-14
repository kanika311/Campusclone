import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper/modules";
import "./slider.css";

const SwiperSlider = () => {
  const images = [
    "https://img.freepik.com/premium-photo/portrait-young-beautiful-woman-casual-clothes-street-dressed-pink-shirt-jeans-spring-summer-concept-relax-time-girl-with-blue-eyes-enjoy-street-sunset_217236-254.jpg?w=740",
    "https://img.freepik.com/free-photo/top-view-blank-slate-shoes-father-s-day_23-2147630302.jpg?t=st=1738912448~exp=1738916048~hmac=6f0d2048903760c9e2aedbb1c91a039410a744dbab21547397c6680e68bda0c7&w=740",
    "https://img.freepik.com/free-vector/sales-abstract-landing-page-with-photo_52683-28304.jpg?ga=GA1.1.416566523.1736844263&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/fashion-store-banner-template_1361-1248.jpg?ga=GA1.1.416566523.1736844263&semt=ais_hybrid",
    "https://img.freepik.com/premium-psd/new-exclusive-collection-fashion-sale-social-media-post-template_251266-233.jpg?ga=GA1.1.416566523.1736844263&semt=ais_hybrid",
  ];

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect="fade"
        loop={true}
        slidesPerView={1}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
