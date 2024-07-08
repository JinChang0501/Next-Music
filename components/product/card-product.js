import React from 'react'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import Link from 'next/link'
// import required modules
import styles from '@/styles/product/product.module.scss'

export default function CardProduct() {
  return (
    <>
      <div className="col">
        <div className={`card ${styles['card']} ${styles['mt-28']}`}>
          <img
            src="/images/product/list/t-1.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className={`card-body ${styles['bg-bk']}`}>
            <p className={`card-text chb-h6 text-purple3 ${styles['text-center']}`}>商品名稱</p>
            <p className={`card-text chb-h6 text-white ${styles['text-center']}`}>活動名名稱</p>
            <p className={`card-text chb-h6 text-white ${styles['text-center']}`}>價格</p>
            <div className={`${styles['text-center']}`}>
            <DesktopBlackNoIconBtnPurple text="詳細資訊" className={`chb-p`} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
