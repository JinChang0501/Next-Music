import { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// // Import Swiper styles
// import 'swiper/css'
// import 'swiper/css/free-mode'
// import 'swiper/css/navigation'
// import 'swiper/css/thumbs'

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import styles from '@/components/product/swiper.module.scss'

// 範例出處
// https://swiperjs.com/demos#thumbs-gallery
// https://codesandbox.io/s/k3cyyc
export default function SwiperTop() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#685beb',
          '--swiper-pagination-color': '#685beb',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className={`mySwiper2`}
      >
        <SwiperSlide>
          <img src="/images/product/slide/t-1.jpg" className={`${styles['pic']}`}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product/slide/t-4.jpg" className={`${styles['pic']}`}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product/slide/t-5.jpg" className={`${styles['pic']}`}/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
