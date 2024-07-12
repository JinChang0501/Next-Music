import React, {useState, useEffect} from 'react'
import styles from '@/styles/product/product.module.scss'
import { useCart } from '@/hooks/product/use-cart'
import CartLayout from '@/components/layout/cart-layout'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import InputNumber from '@/components/product/input-number'

// import data from '@/data/product/Product.json'
import Image from 'next/image'
import Link from 'next/link'

export default function CartList() {
  const [cart, setCart] = useState([])
  const { items, removeItem } = useCart()
  return (
    <>
      {/* 一項購物列表 start */}
      <div className="card mb-3 border-0 cart-card">
        {items.map((v, i) => {
          return (
            <div key={v.id} className="row g-0">
              <div className={`col-md-3 ${styles['columnCenter']}`}>
                <Image
                  src={`/images/product/list/${v.picture}`}
                  className={`img-fluid rounded-start ${styles['wh-200']} `}
                  alt="..."
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <p className="card-title card-text d-flex justify-content-between align-items-center chb-h6">
                    {v.activity} {v.name}
                    {/* <span>$4,000.00</span> */}
                  </p>
                  <p className={`card-text chb-h6 ${styles['mt-40']}`}>
                    單價: NT$ {v.price}
                  </p>

                  <div className="row g-3 align-items-center">
                    <div className="col-auto">
                      <label
                        htmlFor="inputPassword6"
                        className="col-form-label chb-h6"
                      >
                        數量: {v.qty}
                      </label>
                    </div>
                    <div className="col-auto">
                      <InputNumber className={`${styles['w-58']}`}/>
                    </div>
                  </div>

                  <div className={`cartTotal ${styles['mt-28']}`}>
                    <p className="card-text chb-h6">
                      小計: NT$ {v.price}*{v.qty}
                    </p>
                  </div>
                </div>
              </div>
              <div className={`col-md-2 ${styles['columnCenter']}`}>
                <DesktopBlackNoIconBtnPurple text="刪除" className={`chb-h6`} onClick={() => {
                    if (confirm('你確定要移除項目?')) {
                      removeItem(v.id)
                    }
                  }}/>
              </div>
            </div>
          )
        })}
      </div>
      {/* 一項購物列表 end */}
      <hr />
    </>
  )
}
CartList.getLayout = function getLayout(page) {
  return <CartLayout title="cart">{page}</CartLayout>
}
