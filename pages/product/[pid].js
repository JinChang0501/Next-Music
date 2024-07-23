import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { GET_PRODUCTS } from '@/configs/api-path'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import styles from '@/styles/product/product.module.scss'
import DesktopBlackNoIconBtnBlack from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnBlack'
import Link from 'next/link'
import SwiperBottom from '@/components/product/swiper-bottom'
import SwiperTop from '@/components/product/swiper-top'
import CardProduct from '@/components/product/card-product'
import toast, { Toaster } from 'react-hot-toast'
import { useTotal } from '@/hooks/product/use-Total'

export default function Detail() {
  const [product, setProduct] = useState(null)
  const router = useRouter()
  const [cartData, setCardData] = useState([])
  const topRef = useRef(null)
 
  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '周邊商城', href: '/product' },
    { label: '商品資訊', href: `/product/${router.query.pid}` },
  ]
  // ToTop 
  const scrollToTop = (e) => {
    //console.log('scrollToTop called')
    if (topRef.current) {
      console.log('topRef.current:', topRef.current)
      topRef.current.scrollIntoView({ behavior: 'smooth' })
      
    } else {
      console.log('topRef.current is null')
    }
  }

  useEffect((e)=>{
    scrollToTop(e)
  },[router])
  // ToTop end

  useEffect(() => {
    if (router.isReady) {
      fetch(`${GET_PRODUCTS}`, {
        credentials: 'include',
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch')
          }
          return res.json()
        })
        .then((data) => {
          const { pid } = router.query
          const product = data.find((p) => p.id === Number(pid))
          if (product) {
            setProduct(product)
          } else {
            console.warn(`Product with id ${pid} not found`)
          }
        })
        .catch((error) => {
          console.error('Error fetching products', error)
        })
    }
  }, [router.isReady, router.query.pid])

  let cart = []

  const checkCart = () => {
    const cart = localStorage.getItem('makin-cart')
    setCardData(cart)
  }
  const addToCart = () => {
    if (!product) return

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    }

    const cartData = localStorage.getItem('makin-cart')

    if (cartData) {
      cart = JSON.parse(cartData)
    }
    setCardData(cart)
    const existingItem = cart.find((item) => item.id === cartItem.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push(cartItem)
    }

    localStorage.setItem('makin-cart', JSON.stringify(cart))

    toast.success(`本商品已成功加入購物車`)
  }

  useEffect(() => {
    checkCart()
    console.log(cartData)
  }, [cartData, router])

  if (!product) {
    return <p>Loading...</p>
  }

  // 為了推薦商品
    // 亂數取得陣列中的index
    function getRandomIndexes(array, num) {
      const indexes = []
  
      // 計算原始資料數
      const arrayLength = array.length
  
      // 避免取得資料數量 num > 原始資料數量時造成的 Error
      const count = num < array.length ? num : array.length
  
      while (indexes.length < count) {
        const randomIndex = Math.floor(Math.random() * arrayLength)
        if (!indexes.includes(randomIndex)) {
          indexes.push(randomIndex)
        }
      }
  
      return indexes
    }
  
    // 對應陣列index取得資料
    function getRandomElementsFromArray(array, count) {
      const randomIndexes = getRandomIndexes(array, count)
      const randomElements = randomIndexes.map(index => array[index])
      return randomElements
    }
  
    // 根據 aid 從 rows 中選擇對應的資料
    const mainInfoData = product.rows.find((r) => r.actid === actid)
    console.log(mainInfoData)
    if (!mainInfoData) return <div>走錯路囉</div>
  
    // 從所有活動的資料裡撈出 4 筆（隨機），且不包含本頁這筆：
    const recommendData = product.rows.filter((r) => r.actid !== actid)
    console.log(recommendData)
    const random4Recommend = getRandomElementsFromArray(recommendData, 4)
  
    console.log(random4Recommend)

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-6">
          <div
            className={`position-sticky ${styles['w-456']} ${styles['ml-136']}`}
          >
            <SwiperTop />
            <SwiperBottom />
          </div>
        </div>
        <div className="col-sm-3">
          <p className={`text-white chb-h4 ${styles['mt-80']}`}>
            {product.name}
          </p>
          <p className={`text-white chb-h4 ${styles['mt-80']}`}>
            {product.activity}
          </p>
          <p className={`text-purple2 chb-h5 ${styles['mt-80']}`}>
            NT$ {product.price}
          </p>
          <p
            className={`text-purple2 chb-h5 ${styles['mt-40']} ${styles['mb-60']}`}
          >
            尺寸: F
          </p>
          <div className={`row row-cols-md-2 ${styles['space-between']}`}>
            <DesktopBlackNoIconBtnBlack text="加入購物車" onClick={addToCart} />
            {/* <Link href={`/cart/payment`}><DesktopBlackNoIconBtnPurple text="立即購買" /></Link> */}
          </div>
        </div>
      </div>
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-12">
          <p
            className={`text-purple1 chb-h4 ${styles['mt-80']} ${styles['borderPurple3']}`}
          >
            商品介紹
          </p>
          <p className={`col-sm-6 text-purple3 chb-h6 ${styles['mt-40']}`}>
            {product.intro}
          </p>
        </div>
      </div>
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-12">
          <p
            className={`text-purple1 chb-h4 ${styles['mt-80']} ${styles['borderPurple3']}`}
          >
            付款方式
          </p>
          <p className={`text-purple3 chb-h6 ${styles['mt-40']}`}>
            目前提供付款方式有3種：
          </p>
          <p className={`text-purple3 chb-h6 `}>
            1.『綠界』付款，宅配到府（限台灣本島）
          </p>
          <p className={`text-purple3 chb-h6 `}>
            2.『LINE PAY』付款，宅配到府（限台灣本島）
          </p>
          <p className={`text-purple3 chb-h6 `}>3.『超商取貨付款』</p>
          <p className={`text-purple3 chb-h6 `}>
            ※ 配合的宅配公司為：黑貓宅急便
          </p>
        </div>
      </div>
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-12">
          <p className={`text-purple1 chb-h4 ${styles['mt-80']}`}>推薦商品</p>
          <div
            className={`row row-cols-1 row-cols-md-4 ${styles['mt-40']} ${styles['mb-100']}`}
          >
          {random4Recommend.map((v, i) => {
            return (
              <CardProduct
                key={v.actid}
                imgSrc={v.cover}
                activity_name={v.actname}
                artist_name={v.artists}
                aid={v.actid}
                scrollToTop={scrollToTop}
              />
            )
          })}
            {/* <CardProduct2 /> */}
          </div>
        </div>
      </div>
    </>
  )
}
