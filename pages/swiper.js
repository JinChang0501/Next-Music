import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules'
export default function SwiperPage() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-primary" style={{ height: '200px' }}>
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="bg-primary" style={{ height: '200px' }}>
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="bg-primary" style={{ height: '200px' }}>
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="bg-primary" style={{ height: '200px' }}>
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="bg-primary" style={{ height: '200px' }}>
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="bg-primary" style={{ height: '200px' }}>
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="bg-primary" style={{ height: '200px' }}>
          Slide 7
        </SwiperSlide>
        <SwiperSlide className="bg-primary" style={{ height: '200px' }}>
          Slide 8
        </SwiperSlide>
        <SwiperSlide className="bg-primary" style={{ height: '200px' }}>
          Slide 9
        </SwiperSlide>
      </Swiper>
    </>
  )
}
