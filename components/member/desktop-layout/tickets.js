import React from 'react'
import styles from './tickets.module.scss'
import { BsClockFill } from 'react-icons/bs'
import { BsFillTicketPerforatedFill } from 'react-icons/bs'
import { BsFillGeoAltFill } from 'react-icons/bs'
import Link from 'next/link'
import moment from 'moment-timezone'

export default function Tickets({
  order_num = '',
  key = {},
  tid = {},
  created_at = '',
  price = {},
  activity_name = '',
  location = '',
  a_datetime = '',
  amount = '',
}) {
  const formateCreated_At = moment(a_datetime)
    .tz('Asia/Taipei')
    .format('YYYY/MM/DD HH:mm')

  const formateA_Datetime = moment(a_datetime)
    .tz('Asia/Taipei')
    .format('YYYY/MM/DD HH:mm')
  return (
    <>
      <tr>
        <td className="align-middle">{order_num}</td>
        <td className="align-middle">{formateCreated_At}</td>
        <td className="d-flex justify-content-center flex-column">
          <div className="d-flex mt-2 w-100 justify-content-center">
            <div className="px-4">
              <BsFillTicketPerforatedFill className="text-purple2" />
            </div>
            <div className={`${styles['same-width-text']}`}>
              <span>{activity_name}</span>
            </div>
          </div>

          <div
            className={`${styles['same-width-text']} ${styles['text-container']} d-flex mt-2  w-100 justify-content-center`}
          >
            <div className="px-4">
              <BsClockFill className="text-purple2" />
            </div>
            <div className={`${styles['same-width-text']}`}>
              <span>{formateA_Datetime}</span>
            </div>
          </div>

          <div className="d-flex mt-2 same-width-text w-100 justify-content-center">
            <div className="px-4">
              <BsFillGeoAltFill className="text-purple2" />
            </div>
            <div className={`${styles['same-width-text']}`}>
              <span>{location}</span>
            </div>
          </div>
        </td>
        <td className="align-middle">{amount}</td>
        <td className="align-middle">
          <Link href={`/member/ticket-detail/${order_num}`}>
            <button className="btn btn-primary">查看明細</button>
          </Link>
        </td>
      </tr>
    </>
  )
}
