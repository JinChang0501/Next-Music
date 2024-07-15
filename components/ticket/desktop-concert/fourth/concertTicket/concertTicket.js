import React, { useEffect, useState } from 'react'
import style from './concertTicket.module.scss'
import { BsFillXCircleFill } from 'react-icons/bs'

import { BsGeoAlt, BsClock, BsQrCode } from 'react-icons/bs'

export default function ConcertTicketNew({ handleCloseTicket, ticketData }) {
  const [data, setData] = useState([])

  useEffect(() => {
    if (ticketData) {
      setData(ticketData)
    }
  }, [ticketData])
  return (
    <>
      {data.map((v, i) => {
        return (
          <div className="position-relative" key={i}>
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
                <div className="chb-h6">一生到底 One Life, One Shot</div>
                <div className="chb-p">滅火器 Fire EX.</div>
                <div className="chb-p">#re159a753ct</div>
              </div>
              <div className={`${style.ticketSeat} chb-h5 text-white`}>
                A區B排12號
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
          </div>
        )
      })}
    </>
  )
}
