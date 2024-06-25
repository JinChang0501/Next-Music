import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function CarouselIndex() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/images/product/list/mountain-top.jpg" /></SwiperSlide>
        <SwiperSlide><img src="/images/product/list/mountain-top.jpg" /></SwiperSlide>
        <SwiperSlide><img src="/images/product/list/mountain-top.jpg" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
