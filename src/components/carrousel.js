import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles/carrousel.css"

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import cities from "./cities";

export default function CarrouselImg() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {cities.map(evento =>(
        <SwiperSlide>
          <img src={evento.image} />
          <h3>{evento.name}</h3>
        
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
