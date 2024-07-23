import { useState, useEffect } from 'react'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import styles from '@/styles/product/product.module.scss'
import CartLayout from '@/components/layout/cart-layout'
import ProgressBarTwo from '@/components/product/progressBarTwo'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import { GET_PRODUCTS } from '@/configs/api-path'
import Transport from '@/components/product/transport'
import Link from 'next/link'
import { useTotal } from '@/hooks/product/use-Total'

export default function Payment() {
  const { clearLocalStorageCart, userProfile } = useTotal()
  const [products, setProducts] = useState([])
  const cartKey = 'makin-cart'
  const [cart, setCart] = useState([])
  const [items, setItems] = useState([])
  const [totalQty, setTotalQty] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [name, setName] = useState(userProfile.name || '')
  const [email, setEmail] = useState(userProfile.email || '')
  const [mobile, setMobile] = useState('')
  const [formValid, setFormValid] = useState(false)

  const breadcrumbsURL = [
    { label: '周邊商城', href: '/product' },
    { label: '購物車', href: '/cart' },
  ]

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

  const getCartFromStorage = () => {
    let cartData = []
    const oriData = localStorage.getItem(cartKey)
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

  const handleSubmit = async () => {
    if (!name || !email) {
      alert('請填寫姓名和電子郵件')
      return
    }

    const formData = {
      name,
      email,
      mobile,
      items,
    }

    try {
      const res = await fetch(GET_PRODUCTS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      const resData = await res.json()
      console.log('Server response:', resData)
      clearLocalStorageCart()
      // Redirect or show success message
    } catch (error) {
      console.error('Error submitting cart:', error)
      // Handle error, show error message to user
    }
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleMobileChange = (e) => {
    setMobile(e.target.value)
  }

  useEffect(() => {
    setFormValid(!!name && !!email && !!mobile)
  }, [name, email, mobile])

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <ProgressBarTwo />
      <div className={`container ${styles['mb-40']} ${styles['center-item']}`}>
        <div className={`col-12 col-md-8 cart-area ${styles['my-20']} `}>
          <p className={`chb-h5 ${styles['ml-20']}`}>購買的商品 </p>
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
                    <p className={`card-text chb-h6 ${styles['mt-40']}`}>
                      單價: NT$ {p.price}
                    </p>
                    <div className="row g-3 align-items-center">
                      <div className="col-auto">
                        <p className="col-form-label chb-h6">
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
          <hr />
        </div>
        <div className={`second ${styles['mt-40']} ${styles['w-800']}`}>
          <p className="chb-h5">請確認收貨人基本資訊</p>
          <form method="post">
            <div className="mb-3">
              <p className="chb-p">姓名</p>
              <input
                type="text"
                className={`form-control ${styles['w-800']}`}
                aria-label="default input example"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="mb-3">
              <p className={`chb-p ${styles['mt-28']}`}>電子郵件</p>
              <input
                type="email"
                className={`form-control ${styles['w-800']}`}
                aria-describedby="emailHelp"
                value={email}
                onChange={handleEmailChange}
              />
              <div id="emailHelp" className="form-text chb-p text-black40">
                購買後確認信將發送至此電子郵件
              </div>
            </div>
            <div className="mb-3">
              <p className={`chb-p ${styles['mt-28']}`}>手機號碼</p>
              <input
                type="mobile"
                className={`form-control ${styles['w-800']}`}
                value={mobile}
                onChange={handleMobileChange}
              />
              <div id="emailHelp" className="form-text chb-p text-black40">
                到貨時通知將發送至此手機號碼
              </div>
            </div>
          </form>
        </div>
        <div className={`third ${styles['mt-40']} ${styles['w-800']}`}>
          <p className="chb-h5">請選擇配送方式</p>
          <Transport />
        </div>
        <div className={`fifth ${styles['mt-40']} ${styles['w-800']} ${styles['center-item']}`}>
          <Link href={`/cart`}>
            <DesktopBlackNoIconBtnPurple
              text="上一步"
              className={`chb-h6 ${styles['btn-760']}`}
            />
          </Link>
        </div>
        <div className={`fifth ${styles['my-40']} ${styles['w-800']} ${styles['center-item']}`}>
          {formValid ? (
            <Link href={`/cart/complete`}>
              <DesktopBlackNoIconBtnPurple
                text="確定訂購"
                className={`chb-h6 ${styles['btn-760']}`}
                onClick={handleSubmit}
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
