import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import styles from '@/styles/product/product.module.scss'
// import Carousel from '@/components/product/carousel'
import CardProduct from '@/components/product/card-product'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import DesktopBlackNoIconBtnBlack from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnBlack'
import SwiperBottom from '@/components/product/swiper-bottom'
import SwiperTop from '@/components/product/swiper-top'

export default function Detail() {
  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '周邊商城', href: '/product' },
    { label: '商品資訊', href: '/product[pid]' },
  ]
  const router = useRouter()

  // 物件類型的狀態的初始值，建議是一個要描述出裡面有什麼屬性的物件
  const [product, setProduct] = useState({
    id: 0,
    picture: '',
    activity: '',
    name: '',
    price: 0,
    intro: '',
  })

  // 與伺服器作fetch獲得資料(建議寫在useEffect上面與外面比較容易維護管理)
  const getProduct = async (pid) => {
    const url = 'https://localhost:3000/product/' + pid

    // 使用try-catch陳述式，讓和伺服器連線程式作錯誤處理
    try {
      const res = await fetch(url)
      const data = await res.json()

      //console.log(data)

      // 檢查是否為物件資料類型(基本保護)
      if (
        typeof data === 'object' &&
        data !== null &&
        !Array.isArray(data) &&
        data.id
      ) {
        // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)
        setProduct(data)

        // // 關閉載入動畫，撥放1.5秒
        // setTimeout(() => {
        //   setIsLoading(false)
        // }, 1500)
      }
    } catch (e) {
      console.error(e)
    }
  }
  // 第二步: 用useEffect監聽router.isReady的變動
  // 樣式3: didMount+didUpdate
  useEffect(() => {
    if (router.isReady) {
      // 這裡可以得到router.query(pid屬性)值
      // 動態路由得到的pid屬性值都是字串值(比對時要小心)
      console.log(router.query)
      // 解構出pid屬性值
      const { pid } = router.query

      // 呼叫getProduct
      getProduct(pid)
    }
    // 註解: 讓eslint略過一行檢查
    // eslint-disable-next-line
  }, [router.isReady])

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      {/* 第一個區塊 */}
      <div className={`row ${styles['mx-160']}  ${styles['mt-80']}`}>
        {/* 左 */}
        <div className={`col-sm-6 `}>
          <div className={`position-sticky `}>
            <SwiperTop />
            <SwiperBottom />
          </div>
        </div>
        {/* 右 */}
        <div className={`col-sm-3  ${styles['ml-136']}`}>
          {/* 活動名稱 activity.name*/}
          <p className="text-white chb-h4">音樂祭名稱</p>
          {/* 商品名稱products.name */}
          <p className={`text-white chb-h4 ${styles['mt-80']}`}>商品名稱</p>
          {/* price */}
          <p className={`text-purple2 chb-h5 ${styles['mt-80']}`}>價格</p>
          {/*尺寸 */}
          <p className={`text-purple2 chb-h5 ${styles['mt-40']} ${styles['mb-60']}`}>尺寸: F</p>
          <div className={`row row-cols-md-2 `}>
            <DesktopBlackNoIconBtnBlack text="加入購物車" />
            <DesktopBlackNoIconBtnPurple text="立即購買" />
          </div>
        </div>
      </div>
      {/* 第二個區塊 */}
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-12">
          <p className={`text-purple1 chb-h4 ${styles['mt-80']}`}>商品介紹</p>
          <p className={`text-purple3 chb-h6 ${styles['mt-40']}`}>活動聯名限量HOODIE</p>
          <p className={`text-purple3 chb-h6 `}>名牌設計總監親自設計</p>
          <p className={`text-purple3 chb-h6 `}>親膚材質 保暖透氣</p>
          <p className={`text-purple3 chb-h6 `}>超高回頭率！</p>
        </div>
      </div>
      {/* 第三個區塊 */}
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-12">
          <p className={`text-purple1 chb-h4 ${styles['mt-80']}`}>付款方式</p>
          <p className={`text-purple3 chb-h6 ${styles['mt-40']}`}>目前提供付款方式有3種：</p>
          <p className={`text-purple3 chb-h6 `}>1.『綠界』付款，宅配到府（限台灣本島）</p>
          <p className={`text-purple3 chb-h6 `}>2.『LINE PAY』付款，宅配到府（限台灣本島）</p>
          <p className={`text-purple3 chb-h6 `}>3.『超商取貨付款』</p>
          <p className={`text-purple3 chb-h6 `}>※ 配合的宅配公司為：黑貓宅急便</p>
        </div>
      </div>
      {/* 第四個區塊 */}
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-12">
          <p className={`text-purple1 chb-h4 ${styles['mt-80']}`}>推薦商品</p>
          <div className={`row row-cols-1 row-cols-md-4 ${styles['mt-40']} ${styles['mb-100']}`}>
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>
      </div>
    </>
  )
}
