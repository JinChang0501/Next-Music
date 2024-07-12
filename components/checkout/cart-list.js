import React from 'react'
import styles from '@/styles/product/product.module.scss'
import CartLayout from '@/components/layout/cart-layout'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import InputNumber from '@/components/product/input-number'

// import data from '@/data/product/Product.json'
import Link from 'next/link'

export default function CartList() {
  return (
    <>
      {/* 一項購物列表 start */}
      <div className="card mb-3 border-0 cart-card">
            <div className="row g-0">
              <div className={`col-md-3 ${styles['columnCenter']}`}>
                <img
                  src="/images/product/list/red_baseball-cap.jpg"
                  className={`img-fluid rounded-start ${styles['wh-200']} `}
                  alt="..."
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <p className="card-title card-text d-flex justify-content-between align-items-center chb-h6">
                    夢幻樂園演唱會 棒球帽-紅
                    {/* <span>$4,000.00</span> */}
                  </p>
                  <p className={`card-text chb-h6 ${styles['mt-40']}`}>單價: NT$ $700</p>

                  <div className="row g-3 align-items-center">
                    <div className="col-auto">
                      <label
                        htmlFor="inputPassword6"
                        className="col-form-label chb-h6"
                      >
                        數量:
                      </label>
                    </div>
                    <div className="col-auto">
                      <InputNumber className={`${styles['w-58']}`}/>
                    </div>
                  </div>

                  <div className={`cartTotal ${styles['mt-28']}`}>
                    <p className="card-text chb-h6">小計: NT$ $700</p>
                  </div>
                </div>
              </div>
              <div className={`col-md-2 ${styles['columnCenter']}`}>
                <DesktopBlackNoIconBtnPurple text="刪除" className={`chb-h6`} />
              </div>
            </div>
      </div>
      {/* 一項購物列表 end */}
      <hr />
    </>
  )
}
CartList.getLayout = function getLayout(page) {
  return <CartLayout title="cart">{page}</CartLayout>
}
