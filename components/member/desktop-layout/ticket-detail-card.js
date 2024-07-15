import React, { useState } from 'react'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import styles from './ticket-detail-card.module.scss'
import ConcertTicket from '@/components/member/desktop-layout/concertTicket/concertTicket'
import style from '../desktop-layout/concertTicket/concertTicket.module.scss'
import { BsFillXCircleFill } from 'react-icons/bs'
import { BsGeoAlt, BsClock, BsQrCode } from 'react-icons/bs'
import moment from 'moment-timezone'

export default function TicketDetailCard({
  seat_area = '',
  seat_row = '',
  seat_number = '',
  price = '',
  picture = '',
  actname = '',
  art_name = '',
  tid = '',
  location = '',
  actdate = '',
  acttime = '',
}) {
  const [showTicket, setShowTicket] = useState(false)

  const handleWakeTicket = () => {
    setShowTicket(true)
  }

  const handleCloseTicket = () => {
    setShowTicket(false)
  }

  //更改時間格式
  const formateActdate = moment(actdate).tz('Asia/Taipei').format('YYYY/MM/DD')

  const formatteActtime = moment(acttime, 'HH:mm:ss').format('HH:mm')
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
        <div
          className={`${
            showTicket ? 'd-block' : 'd-none'
          } position-fixed top-50 start-50`}
          style={{ transform: 'translate(-5%, -50%)' }}
        >
          <div className="position-relative">
            <div className="position-absolute">
              <button
                className={style['close-btn']}
                onClick={handleCloseTicket}
              >
                <BsFillXCircleFill className="chr-h4" />
              </button>
            </div>
            <div className={`${style.orderTicket}`}>
              <div className={`${style.orderTicketLeft}`}>
                <div
                  className={`${style.orderTicketLeftText} eng-h7 text-black30`}
                >
                  Lose yourself in music
                </div>
              </div>
              <div className={`${style.orderTicketRight}`}>
                <div
                  className={`${style.orderTicketRightText} eng-h7 text-black30`}
                >
                  Find yourself in the festivity
                </div>
              </div>
              <div className={`${style.ticketTitle} text-white`}>
                <div className="chb-h6">{actname}</div>
                <div className="chb-p">{art_name}</div>
                <div className="chb-p">#{tid}</div>
              </div>
              <div className={`${style.ticketSeat} chb-h5 text-white`}>
                {`${seat_area}區${seat_row}排${seat_number}號`}
              </div>
              <div className={`${style.ticketInfo} chb-p text-white`}>
                <div className="d-flex">
                  <BsGeoAlt className={`${style.ticketInfoIcon}`} />
                  <div>{location}</div>
                </div>
                <div className="d-flex">
                  <BsClock className={`${style.ticketInfoIcon}`} />
                  <div>
                    {formateActdate}&nbsp;
                    {formatteActtime}
                  </div>
                </div>
              </div>
              <BsQrCode className={`${style.ticketQRcode} text-white`} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
