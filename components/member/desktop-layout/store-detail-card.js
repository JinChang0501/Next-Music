import React from 'react'
// import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import styles from './ticket-detail-card.module.scss'

export default function StoreDetailCard({
  picture = '',
  price = '',
  productName = '',
  quantity = '',
}) {
  return (
    <>
      <div className="row text-center my-3">
        <div className="col d-flex justify-content-center">
          <img
            src={`/images/product/list/${picture}`}
            className={styles.img160}
            alt=""
          />
        </div>
        <div className="col my-auto p-0 chr-h5">{productName}</div>
        <div className="col my-auto p-0 chr-h5">{quantity}</div>
        <div className="col my-auto p-0 chr-h5">$ {price}</div>
      </div>
    </>
  )
}
