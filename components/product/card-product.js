import React from 'react';
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import Link from 'next/link';
// import required modules
import styles from '@/styles/product.module.css'


export default function CardProduct() {
  return (
    <>
      <div className="col">
        <div className={`card mb-3 `}>
        
          <img
            src="/images/product/list/t-1.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className={`card-body ${styles['bg-bk']}`}>
            <p className="card-text chb-h6 text-purple3">活動名名稱</p>
            <p className="card-text chb-h6 text-white">商品名稱</p>
            <p className="card-text chb-h6 text-white">價格</p>
            <DesktopBlackNoIconBtnPurple text="詳細資訊" className="chb-p" />
          </div>
            
          </div>
        </div>
    </>
  );
}
