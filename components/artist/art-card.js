import React from 'react'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import Link from 'next/link'
// import required modules
import styles from '@/styles/artist/artist.module.scss'

export default function CardProduct() {
  return (
    <>
      <div className="col">
        <div className={`card ${styles['card']} ${styles['mt-28']}`}>
          <img
            src="/images/artist/list/t-1.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className={`card-body `}>
            <p className="card-text chb-h6 text-purple3">[pid]</p>
            <p className="card-text chb-h6 text-white">商品名稱</p>
            <p className="card-text chb-h6 text-white">價格</p>
            
            <DesktopBlackNoIconBtnPurple text="詳細資訊" className="chb-p" />
          </div>
        </div>
      </div>
    </>
  )
}
