import React from 'react'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import styles from './ticket-detail-card.module.scss'

export default function TicketDetailCard() {
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
        <div className="col my-auto p-0 chr-h5">A區第5排8號</div>
        <div className="col my-auto p-0 chr-h5">$700</div>
        <div className="col my-auto p-0 mx-auto d-flex justify-content-center">
          <DesktopWhiteNoIconBtnPurple
            className="px-1 px-md-4 py-2"
            text="查看票券"
          />
        </div>
      </div>
    </>
  )
}
