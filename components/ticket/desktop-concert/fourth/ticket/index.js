import React from 'react'
import style from './ticket.module.scss'
import orderTicketData from '@/data/ticket/desktop-concert/fourth/orderTicketData'
import { BsGeoAlt, BsClock, BsQrCode } from 'react-icons/bs'

export default function ConcertTicket() {
  return (
    <>
      {orderTicketData.map((v) => (
        <div key={v.id} className={`${style.orderTicket}`}>
          <div className={`${style.orderTicketLeft}`}>
            <div className={`${style.orderTicketLeftText} eng-h7 text-black30`}>
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
            <div className="chb-h6">一生到底 One Life, One Shot</div>
            <div className="chb-p">滅火器 Fire EX.</div>
            <div className="chb-p">#re159a753ct</div>
          </div>
          <div className={`${style.ticketSeat} chb-h5 text-white`}>
            {v.ticketSeat}
          </div>
          <div className={`${style.ticketInfo} chb-p text-white`}>
            <div className="d-flex">
              <BsGeoAlt className={`${style.ticketInfoIcon}`} />
              <div>臺北流行音樂中心</div>
            </div>
            <div className="d-flex">
              <BsClock className={`${style.ticketInfoIcon}`} />
              <div>2024/06/15&nbsp;&nbsp;&nbsp;19:30</div>
            </div>
          </div>
          <BsQrCode className={`${style.ticketQRcode} text-white`} />
        </div>
      ))}
    </>
  )
}
