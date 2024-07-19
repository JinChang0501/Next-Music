import React from 'react'
import style from './phoneMusicFestivalTicket.module.scss'
import { BsGeoAlt, BsClock, BsQrCode } from 'react-icons/bs'
import { useTicketContext } from '@/context/ticket/ticketContext'
import moment from 'moment'

export default function PhoneMusicFestivalTicket() {
  const { tickets, selectedTickets } = useTicketContext()

  const renderTickets =
    selectedTickets.length > 0
      ? selectedTickets
      : tickets.length > 0
      ? [tickets[0]]
      : []

  return (
    <>
      {renderTickets.map((v) => {
        const actdate = moment(`${v.actdate}`, `YYYY-MM-DD`).format(
          'YYYY-MM-DD'
        )
        return (
          <div key={v.tid} className={`${style.orderTicket}`}>
            <div className={`${style.orderTicketLeft}`}>
              <div
                className={`${style.orderTicketLeftText} eng-h7 text-black30`}
              >
                Lose yourself in music
              </div>
            </div>
            <div className={`${style.ticketTitle} text-white`}>
              <div className="chb-h6">{v.actname}</div>
              <div className="chb-h7">{v.art_name}</div>
              <div className="chb-h7">#re159a753ct</div>
            </div>
            <div className={`${style.ticketSeat} chb-h4 text-white`}>
              {v.ticketSeat}
            </div>
            <div className={`${style.ticketInfo} chb-p text-white`}>
              <div className="d-flex">
                <BsGeoAlt className={`${style.ticketInfoIcon}`} />
                <div>{v.location}</div>
              </div>
              <div className="d-flex">
                <div className="d-flex">
                  <BsClock className={`${style.ticketInfoIcon}`} />
                </div>
                <div className="d-flex flex-column">
                  <div className="mb-1">{actdate}</div>
                  <div>{v.acttime}</div>
                </div>
              </div>
            </div>
            <BsQrCode className={`${style.ticketQRcode} text-white`} />
          </div>
        )
      })}
    </>
  )
}
