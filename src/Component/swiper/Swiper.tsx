"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const CustomSwiper = ({ data }: { data: any }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
    //   navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {data.map((item: any) => (
        <SwiperSlide key={item.id}>
          <Image
            src={item.image}
            alt={item.title}
            className="absolute object-cover rounded-t-lg"
            fill
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;
