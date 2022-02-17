// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import cities from "./cities"

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


import React, { useRef, useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/carrousel.css"

// import required modules
import { Grid, Autoplay, Pagination, Navigation } from "swiper";

// import required modules

export default function Carrousel1() {
  return (
      
    <div className="carrito">
      <Swiper
        slidesPerView={2}
        slidesPerGroup={2}
        grid={{
          rows: 2
        }}
        spaceBetween={15}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Grid, Pagination, Autoplay, Pagination, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        className="mySwiper"
      >
        {cities.map(evento =>
            <SwiperSlide>
           <img className="imagenes" src={evento.image} />
            {evento.name}
            </SwiperSlide>
          )}
        
      </Swiper>
    </div>

  );
}