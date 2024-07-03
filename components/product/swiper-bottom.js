import { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import styles from './progressBar.module.scss';

// 範例出處
// https://swiperjs.com/demos#thumbs-gallery
// https://codesandbox.io/s/k3cyyc
export default function SwiperBottom() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`mySwiper`}
      >
        <SwiperSlide>
          <img src="/images/product/slide/t-1s.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product/slide/t-4s.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product/slide/t-5s.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
