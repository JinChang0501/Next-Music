import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GET_PRODUCTS } from '@/configs/api-path'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import styles from '@/styles/product/product.module.scss'
// import data from '@/data/product/Product.json'
import Link from 'next/link'
import SwiperBottom from '@/components/product/swiper-bottom'
import SwiperTop from '@/components/product/swiper-top'
import CardProduct2 from '@/components/product/card-product2'

export default function Detail() {
  const [products, setProducts] = useState([])
  const addToCart = (pid) => {
    const cartKey = "product-cart";

    const item = products.find((p) => p.id === pid);
    if(! item) return; //沒找到項目就結束
    console.log({ pid, item });

    const oriData = localStorage.getItem(cartKey);
    let cartData = []; // 預設值
    try {
      cartData = JSON.parse(oriData);
      if (!Array.isArray(cartData)) {
        cartData = [];
      }
    } catch (ex) {''}
    const cartItem = cartData.find((p) => p.id === pid); // 購物車裡有沒有這個商品
    if(cartItem) return; //購物車裡已經有這個商品
    const {id, picture, activity, name, price}= item;
    cartData.push({ id, picture, activity, name, price, quantity: 1 });

    localStorage.setItem(cartKey, JSON.stringify(cartData));
  };
  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '周邊商城', href: '/product' },
    { label: '商品資訊', href: '/product[pid]' },
  ]
  const router = useRouter()
  // 物件類型的狀態的初始值，建議是一個要描述出裡面有什麼屬性的物件
  // const [product, setProduct] = useState({
  //   id: 0,
  //   picture: '',
  //   activity: '',
  //   name: '',
  //   price: 0,
  //   intro: '',
  //   stock: 0,
  // })

  // 第二步: 用useEffect監聽router.isReady的變動
  // 樣式3: didMount+didUpdate
  // useEffect(() => {
  //   if (router.isReady) {
  //     // 這裡可以得到router.query(pid屬性)值
  //     // 動態路由得到的pid屬性值都是字串值(比對時要小心)
  //     console.log(router.query)
  //     // 解構出pid屬性值
  //     const { pid } = router.query
  //     // 這裡單純用json中的範例資料來呈現，查找範例資料中的對應id資料
  //     const nextProduct = data.find((v) => v.id === Number(pid))
  //     // 如果有找到設定到狀態中呈現
  //     if (nextProduct) {
  //       setProducts(nextProduct)
  //     }
  //   }
  //   // 註解: 讓eslint略過一行檢查
  //   // eslint-disable-next-line
  // }, [router.isReady])
  useEffect(() => {
    fetch(`${GET_PRODUCTS}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('server data',data);
        setProducts(data)
      })
  }, [])


  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      {/* 第一個區塊 */}
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
          <p className={`text-white chb-h4 ${styles['mt-80']}`}>{products.name}</p>
          {/* 活動名稱 activity.name*/}
          <p className={`text-white chb-h4 ${styles['mt-80']}`}>{products.activity}</p>
          {/* price */}
          <p className={`text-purple2 chb-h5 ${styles['mt-80']}`}>NT$ {products.price}</p>
          {/*尺寸 */}
          <p className={`text-purple2 chb-h5 ${styles['mt-40']} ${styles['mb-60']}`}>尺寸: F</p>
          <div className={`row row-cols-md-2 ${styles['space-between']} `}>
            <DesktopBlackNoIconBtnBlack text="加入購物車" onClick={() => addToCart(products.id)}
            />
            {/* <Link href={`/cart/payment`}><DesktopBlackNoIconBtnPurple text="立即購買" onClick={""}/></Link> */}
          </div>
        </div>
      </div>
      {/* 第二個區塊 */}
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-12">
          <p className={`text-purple1 chb-h4 ${styles['mt-80']} ${styles['borderPurple3']}`}>商品介紹</p>
          <p className={`text-purple3 chb-h6 ${styles['mt-40']}`}>{products.intro}</p>
        </div>
      </div>
      {/* 第三個區塊 */}
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-12">
          <p className={`text-purple1 chb-h4 ${styles['mt-80']} ${styles['borderPurple3']}`}>付款方式</p>
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
            <CardProduct2 />
          </div>
        </div>
      </div>
    </>
  )
}
