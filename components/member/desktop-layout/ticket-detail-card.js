import React, { useState } from 'react'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import styles from './ticket-detail-card.module.scss'

export default function TicketDetailCard({
  seat_area = '',
  seat_row = '',
  seat_number = '',
  price = '',
  picture = '',
  handleWakeTicket = () => {},
}) {
  return (
    <>
      <div className="row text-center my-3">
        <div className="col d-flex justify-content-center">
          <img src={picture} className={styles.img160} alt="" />
        </div>
        <div className="col my-auto p-0 chr-h6 text-nowrap">{`${seat_area}區${seat_row}排${seat_number}號`}</div>
        <div className="col my-auto p-0 chr-h6">${price}</div>
        <div className="col my-auto p-0 mx-auto d-flex justify-content-center">
          <DesktopWhiteNoIconBtnPurple
            className="px-1 px-md-4 py-2"
            text="查看票券"
            onClick={handleWakeTicket}
          />
        </div>
      </div>
    </>
  )
}
