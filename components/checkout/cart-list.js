import React, {useState, useEffect} from 'react'
import styles from '@/styles/product/product.module.scss'
import { useCart } from '@/hooks/product/use-cart'
import CartLayout from '@/components/layout/cart-layout'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
// import InputNumber from '@/components/product/input-number'
import data from '@/data/product/Product.json'
// import data from '@/data/product/Product.json'
// import Image from 'next/image'
import Link from 'next/link'
import Product from './product-list'

export default function CartList() {
  const cartKey = "product-cart"
  const [cart, setCart] = useState(data)
  //
  const getCartFromStorage = () => {
    const oriData = localStorage.getItem(cartKey)
    let cartData = [] // 預設值
    try {
      cartData = JSON.parse(oriData)
      if (!Array.isArray(cartData)) {
        cartData = []
      }
    } catch (ex) {''}
    return cartData
  };

  // 移除項目
  const cartRemoveItem = (pid) => {
    const resultCart = cart.filter((p) => p.id !== pid)
    localStorage.setItem(cartKey, JSON.stringify(resultCart))
    setCart(resultCart)
  }

  // 變更數量
  const cartModifyQty = (pid, qty) => {
    const resultCart = cart.map((p) => {
      if (pid == p.id) {
        return { ...p, quantity: qty }
      } else {
        return { ...p }
      }
    })
    localStorage.setItem(cartKey, JSON.stringify(resultCart))
    setCart(resultCart)
  }
  useEffect(() => {
    setCart(getCartFromStorage)
  }, [])
  // 用陣列迭代方法reduce來計算總金額/總數量
  //  const totalQty = cart.reduce((acc, p) => acc + p.quantity, 0)
  //  const totalPrice = cart.reduce((acc, p) => acc + p.quantity * p.price, 0)
  return (
    <>
      {/* 一項購物列表 start */}
      <div className="card mb-3 border-0 cart-card">
        {cart.map((p) => {
          return (
            <div key={p.id} className="row g-0">
              <div className={`col-md-3 ${styles['columnCenter']}`}>
                <img
                  src={`/images/product/list/${p.picture}`}
                  className={`img-fluid rounded-start ${styles['wh-200']} `}
                  alt="..."
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <p className="card-title card-text d-flex justify-content-between align-items-center chb-h6">
                    {p.activity} {p.name}
                    {/* <span>$4,000.00</span> */}
                  </p>
                  <p className={`card-text chb-h6 ${styles['mt-40']}`}>
                    單價: NT$ {p.price}
                  </p>

                  <div className="row g-3 align-items-center">
                    <div className="col-auto">
                      <p className="col-form-label chb-h6">數量: </p>
                      <select
                        className="form-select"
                        value={p.quantity}
                        onChange={(e) => cartModifyQty(p.id,  e.currentTarget.value)}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    {/* <div className="col-auto">
                     
                      <InputNumber className={`${styles['w-58']}`}/>
                    </div> */}
                  </div>

                  <div className={`cartTotal ${styles['mt-28']}`}>
                    <p className="card-text chb-h6">
                      小計: NT$ {p.quantity * p.price}
                    </p>
                  </div>
                </div>
              </div>
              <div className={`col-md-2 ${styles['columnCenter']}`}>
                <DesktopBlackNoIconBtnPurple text="刪除" className={`chb-h6`} onClick={() => {
                    if (confirm('你確定要移除項目?')) {
                      cartRemoveItem(p.id)
                    }
                  }}/>
              </div>
            </div>
          )
        })}
      </div>
      {/* 一項購物列表 end */}
      {/* <div>
        總數量: {totalQty} / 總金額: {totalPrice}
      </div> */}
    </>
  )
}
CartList.getLayout = function getLayout(page) {
  return <CartLayout title="cart">{page}</CartLayout>
}
