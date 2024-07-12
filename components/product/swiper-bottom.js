import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import data from '@/data/product/product.json'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import styles from '@/components/product/swiper.module.scss'

// 範例出處
// https://swiperjs.com/demos#thumbs-gallery
// https://codesandbox.io/s/k3cyyc
export default function SwiperBottom() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const router = useRouter()
  const [product, setProduct] = useState({
    id: 0,
    picture: '',
    picture2: '',
    picture3: '',
    activity: '',
    name: '',
    price: 0,
    intro: '',
    stock: 0,
  })

  useEffect(() => {
    if (router.isReady) {
      // 這裡可以得到router.query(pid屬性)值
      // 動態路由得到的pid屬性值都是字串值(比對時要小心)
      console.log(router.query)
      // 解構出pid屬性值
      const { pid } = router.query
      // 這裡單純用json中的範例資料來呈現，查找範例資料中的對應id資料
      const nextProduct = data.find((v) => v.id === Number(pid))
      // 如果有找到設定到狀態中呈現
      if (nextProduct) {
        setProduct(nextProduct)
      }
    }
    // 註解: 讓eslint略過一行檢查
    // eslint-disable-next-line
  }, [router.isReady])
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
          <img src={`/images/product/list/${product.picture}`} className={`${styles['pic2']}`}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={`/images/product/list/${product.picture2}`} className={`${styles['pic2']}`}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={`/images/product/list/${product.picture3}`} className={`${styles['pic2']}`}/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
