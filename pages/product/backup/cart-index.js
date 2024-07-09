import React from 'react'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import styles from '@/styles/product/product.module.scss'
import CartLayout from '@/components/layout/cart-layout'
import ProgressBarOne from '@/components/product/progressBarOne'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import InputNumber from '@/components/product/input-number'
import { BiSolidTrash } from "react-icons/bi";
import data from '@/data/product/Product.json'
import Link from 'next/link'

export default function CartIndex() {
  const breadcrumbsURL = [
    { label: '周邊商城', href: '/' },
    { label: '商品資訊', href: '/product/[pid]' },
    { label: '購物車', href: '/product/cart' },
  ]
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <ProgressBarOne />
      <div className={`row ${styles['mb-40']} ${styles.centerItem}`}>
        <div className={`col-12 col-md-8 cart-area ${styles['my-20']} `}>
          <p className={`chb-h5 ${styles['ml-20']} ${styles.text14}`}>購物車</p>
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
          <hr />
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
          <hr />
        
        </div>
       
      </div>
      <div className={`row ${styles['mb-40']} ${styles.centerItem}`}>
      <div className={`col-12 col-md-8 cart-area ${styles['my-20']} ${styles['columnCenter']} `}>
      <Link href={`/cart/payment`}><DesktopBlackNoIconBtnPurple text="結帳" className={`chb-h6 ${styles['btn-760']}`} /></Link>
        </div>
      </div>
    </>
  )
}
CartIndex.getLayout = function getLayout(page) {
    return <CartLayout title="cart">{page}</CartLayout>
  }
