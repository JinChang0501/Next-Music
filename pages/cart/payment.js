import { useState, useEffect } from 'react'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import styles from '@/styles/product/product.module.scss'
import CartLayout from '@/components/layout/cart-layout'
import ProgressBarTwo from '@/components/product/progressBarTwo'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import { GET_PRODUCTS } from '@/configs/api-path'
import { POST_PRODUCTS } from '@/configs/api-path'

import Transport from '@/components/product/transport'
import EcPay from '@/components/product/ec-pay'

// import data from '@/data/product/Product.json'
import Link from 'next/link'
// import toast, { Toaster } from 'react-hot-toast'
import { useTotal } from '@/hooks/product/use-Total'

export default function Payment() {
  const { clearLocalStorageCart, userProfile, setOrderNum } = useTotal()
  const [products, setProducts] = useState([])
  const cartKey = 'makin-cart'
  const storeKey = 'store711'

  const [cart, setCart] = useState([])
  const [items, setItems] = useState([])
  const [totalQty, setTotalQty] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  // 手機
  const [mobileNumber, setMobileNumber] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [selectedTransport, setSelectedTransport] = useState(null) 

  const breadcrumbsURL = [
    { label: '周邊商城', href: '/product' },
    { label: '購物車', href: '/cart' },
  ]
  // 後端商品
  useEffect(() => {
    fetch(GET_PRODUCTS, {
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products')
        }
        return res.json()
      })
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.error('Error fetching products', error)
      })

    setCart(getCartFromStorage())
  }, [])
  // 購物車內容
  useEffect(() => {
    setItems(
      cart.map((item) => ({
        ...item,
        ...products.find((product) => product.id === item.id),
      }))
    )

    let qty = 0
    let price = 0
    cart.forEach((item) => {
      qty += +item.quantity
      price += item.quantity * item.price
    })
    setTotalQty(qty)
    setTotalPrice(price)
  }, [cart, products])

  // localStorage.getItem
  const getCartFromStorage = () => {
    let cartData = []
    const oriData = localStorage.getItem(cartKey)
    console.log(oriData)
    try {
      cartData = JSON.parse(oriData)
      if (!Array.isArray(cartData)) {
        cartData = []
      }
    } catch (ex) {
      console.error('Error parsing cart data', ex)
    }
    return cartData
  }

  const [exist, setExist] = useState(false)
  const [localData, setLocalData] = useState('')

  useEffect(() => {
    const checkLocalstorageKey = (key) => {
      if (localStorage.getItem(key)) {
        setExist(true)
      }
    }

    checkLocalstorageKey(storeKey)
    const checkData = JSON.parse(localStorage.getItem(storeKey))
    setLocalData(checkData)
  }, [])

  console.log(exist)
  console.log(localData)

  // 傳送到後端
  const handleSubmit = async () => {
    try {
      // 使用 fetch 或 axios 等方法發送 POST 請求

      const storageKey2 = localStorage.getItem('store711')
      // 創建包含所有商品信息的數组
      console.log(
        '----items---items--------items-----items-----items------------'
      )
      console.log(items)
      const orderItems = items.map((item) => ({
        product_id: item.id, // 這里將 p.id 作為 product_id 傳遞
        quantity: item.quantity,
        price: item.price,
      }))
      const res = await fetch(POST_PRODUCTS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          storageKey2: storageKey2, // 第二个 storageKey 的值
          items: orderItems,
        }),
        credentials: 'include', // 將資料轉換為 JSON 格式
      })

      console.log(storageKey2)

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      // 處理後端回應，例如顯示成功訊息
      const resData = await res.json()
      console.log('Server response:', resData)
      console.log(resData)
      const res_orderNum = resData.data.results[0].randomString
      console.log(res_orderNum) //這是後端生的亂數7碼
      setOrderNum(res_orderNum)
    } catch (error) {
      console.error('Error submitting cart:', error)
      // 處理錯誤，例如顯示錯誤訊息給使用者
    }
  }
  // 手機
  const handleChange = (e) => {
    const formattedMobile = e.target.value.replace(/\D/g, '') // 移除非數字字符

    if (formattedMobile.length <= 10) {
      // 確保不超過10個字符
      setMobileNumber(formattedMobile)
      setIsValid(/^09\d{8}$/.test(formattedMobile)) // 使用正則表達式驗證格式
    }
  }

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <ProgressBarTwo />
      <div className={`container ${styles['mb-40']} ${styles['center-item']}`}>
        <div className={`col-12 col-md-8 cart-area ${styles['my-20']} `}>
          <p className={`chb-h5 ${styles['ml-20']}`}>購買的商品 </p>
          {/* 購物列表 start */}
          <div className="card mb-3 border-0 cart-card">
            {items.map((p) => (
              <div key={p.id} className="row g-0">
                <div className={`col-md-3 ${styles['columnCenter']}`}>
                  <img
                    src={`/images/product/list/${p.picture}`}
                    className={`img-fluid rounded-start ${styles['wh-250']} `}
                    alt="..."
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <p className="card-title card-text d-flex justify-content-between align-items-center chb-h6">
                      {p.activity} {p.name}
                    </p>
                    <p
                      className={`card-text chb-h6 ${styles['mt-40']}`}
                      name="price"
                    >
                      單價: NT$ {p.price}
                    </p>
                    <div className="row g-3 align-items-center">
                      <div className="col-auto">
                        <p className="col-form-label chb-h6" name="quantity">
                          數量: {p.quantity}
                        </p>
                      </div>
                    </div>
                    <div className={`cartTotal ${styles['mt-28']}`}>
                      <p className="card-text chb-h6">
                        小計: NT$ {p.quantity * p.price}
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className={`card-text chb-h6 `}>
            總數量: {totalQty} 件/ 總金額: NT$ {totalPrice}
          </div>
          {/* 購物列表 end */}
          <hr />
        </div>

        {/* ------------------------------------------------------- */}
        <div className={`second ${styles['mt-40']} ${styles['w-800']}`}>
          <form method="post">
            <p className="chb-h5">請確認收貨人基本資訊</p>
            {/* 表單 */}

            <div className="mb-3">
              <p for="exampleInputEmail1" className="chb-p">
                姓名
              </p>
              <input
                type="text"
                className={`form-control ${styles['w-800']}`}
                aria-label="default input example"
                value={userProfile.name}
                disabled
              />
            </div>
            <div className="mb-3">
              <p
                for="exampleInputEmail1"
                className={`chb-p ${styles['mt-28']}`}
              >
                電子郵件
              </p>
              <input
                type="email"
                className={`form-control ${styles['w-800']}`}
                aria-describedby="emailHelp"
                value={userProfile.email}
                disabled
              />
              <div id="emailHelp" className="form-text chb-p text-black40">
                購買後確認信將發送至此電子郵件
              </div>
            </div>
            <div className="mb-3">
              <p
                for="exampleInputEmail1"
                className={`chb-p ${styles['mt-28']}`}
              >
                手機號碼
              </p>
              <input
                type="text"
                className={`form-control ${styles['w-800']} ${
                  isValid ? '' : 'is-invalid'
                }`}
                value={mobileNumber}
                onChange={handleChange}
              />
              {!isValid && (
                <div className="invalid-feedback">
                  手機號碼格式不正確，請輸入正確格式 (09XXXXXXXX)
                </div>
              )}
              <div id="emailHelp" className="form-text chb-p text-black40">
                到貨時通知將發送至此手機號碼
              </div>
            </div>
          </form>
        </div>
        <div className={`third ${styles['mt-40']} ${styles['w-800']}`}>
          <p className="chb-h5">請選擇配送方式</p>
          <Transport onSelectTransport={setSelectedTransport} />
        </div>
        <div
          className={`fourth ${styles['mt-40']} ${styles['w-800']}`}
          disabled
        ></div>
        <div
          className={`fifth ${styles['mt-40']} ${styles['w-800']} ${styles['center-item']}`}
        >
          <Link href={`/cart`}>
            <DesktopBlackNoIconBtnPurple
              text="上一步"
              className={`chb-h6 ${styles['btn-760']}`}
            />
          </Link>
        </div>
        <div
          className={`fifth ${styles['my-40']} ${styles['w-800']} ${styles['center-item']}`}
        >
          {isValid && mobileNumber.length > 1 && selectedTransport ? (
            <Link href={`/cart/complete`}>
              <DesktopBlackNoIconBtnPurple
                text="確定訂購"
                className={`chb-h6 ${styles['btn-760']}`}
                onClick={() => {
                  handleSubmit()
                  clearLocalStorageCart()
                }}
              />
            </Link>
          ) : (
            <DesktopBlackNoIconBtnPurple
              text="確定訂購"
              className={`chb-h6 ${styles['btn-760']}`}
              disabled
            />
          )}
        </div>
      </div>
    </>
  )
}

Payment.getLayout = function getLayout(page) {
  return <CartLayout title="payment">{page}</CartLayout>
}
