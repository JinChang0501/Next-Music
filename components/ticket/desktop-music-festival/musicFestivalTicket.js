import React from 'react'
import style from './musicFestivalTicket.module.scss'
import { BsGeoAlt, BsClock, BsQrCode } from 'react-icons/bs'
import { useTicketContext } from '@/context/ticket/ticketContext'
import moment from 'moment'

export default function MusicFestivalTicket({ orderData }) {
  const { tickets, selectedTickets } = useTicketContext()

  const renderTickets =
    selectedTickets.length > 0
      ? selectedTickets
      : tickets.length > 0
      ? [tickets[0]]
      : []

  if (!orderData) {
    return <div>正在加載訂單資料...</div>
  }
  return (
    <>
      {renderTickets.map((v) => {
        const datetime = moment(
          `${v.actdate} ${v.acttime}`,
          `YYYY-MM-DD HH:mm:ss`
        ).format('YYYY-MM-DD HH:mm:ss')
        return (
          <div key={v.tid} className={`${style.orderTicket}`}>
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
              <div className="chb-h5">{v.actname}</div>
              <div className="chb-h7">{v.art_name}</div>
              <div className="chb-h7">{orderData.order_num}</div>
            </div>
            <div className={`${style.ticketInfo} chb-h7 text-white`}>
              <div className="d-flex">
                <BsGeoAlt className={`${style.ticketInfoIcon}`} />
                <div>{v.location}</div>
              </div>
              <div className="d-flex">
                <BsClock className={`${style.ticketInfoIcon}`} />
                <div>{datetime}</div>
              </div>
            </div>
            <BsQrCode className={`${style.ticketQRcode} text-white`} />
          </div>
        )
      })}
    </>
  )
}
