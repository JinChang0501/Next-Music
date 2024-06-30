import React from 'react'
// import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import styles from './ticket-detail-card.module.scss'

export default function StoreDetailCard() {
  return (
    <>
      <div className="row text-center my-3">
        <div className="col d-flex justify-content-center">
          <img
            src={`/images/member/img/composing-2391033__340.jpg`}
            className={styles.img160}
            alt=""
          />
        </div>
        <div className="col my-auto p-0 chr-h5">夢幻樂園演唱會棒球帽-藍</div>
        <div className="col my-auto p-0 chr-h5">1 件</div>
        <div className="col my-auto p-0 chr-h5">$ 700</div>
      </div>
    </>
  )
}
