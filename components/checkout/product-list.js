import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import data from '@/data/product/product.json'
import styles from '@/styles/product/product.module.scss'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import DesktopBlackNoIconBtnBlack from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnBlack'
import SwiperBottom from '@/components/product/swiper-bottom'
import SwiperTop from '@/components/product/swiper-top'
import { useCart } from '@/hooks/product/use-cart'

import Link from 'next/link'

export default function Product() {
  const { addItem } = useCart()
  const router = useRouter()

  // 物件類型的狀態的初始值，建議是一個要描述出裡面有什麼屬性的物件
  const [product, setProduct] = useState({
    id: 0,
    picture: '',
    activity: '',
    name: '',
    price: 0,
    intro: '',
    stock: 0,
  })

  // 第二步: 用useEffect監聽router.isReady的變動
  // 樣式3: didMount+didUpdate
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
      <div className={`row ${styles['mx-160']}  ${styles['mt-80']}`}>
        {/* 左 */}
        <div className={`col-sm-6 `}>
          <div className={`position-sticky ${styles['w-456']} ${styles['ml-136']}`}>
            <SwiperTop />
            <SwiperBottom />
          </div>
        </div>
        {/* 右 */}
        <div className={`col-sm-3 ${styles['ml-136']}`}>
          {/* 商品名稱products.name */}
          <p className={`text-white chb-h4 ${styles['mt-80']}`}>{product.name}</p>
          {/* 活動名稱 activity.name*/}
          <p className={`text-white chb-h4 ${styles['mt-80']}`}>{product.activity}</p>
          {/* price */}
          <p className={`text-purple2 chb-h5 ${styles['mt-80']}`}>NT$ {product.price}</p>
          {/*尺寸 */}
          <p className={`text-purple2 chb-h5 ${styles['mt-40']} ${styles['mb-60']}`}>尺寸: F</p>
          <div className={`row row-cols-md-2 ${styles['space-between']} `}>
            <Link href={`/cart`}>購物車</Link>
            <DesktopBlackNoIconBtnBlack text="加入購物車" onClick={() => {
                addItem(product)
              }}
            />
            <Link href={`/cart/payment`}><DesktopBlackNoIconBtnPurple text="立即購買" onClick={""}/></Link>
          </div>
        </div>
      </div>
    </>
  )
}
