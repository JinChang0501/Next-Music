import React from 'react'
import styles from './tickets.module.scss'
import { BsClockFill } from 'react-icons/bs'
import { BsFillTicketPerforatedFill } from 'react-icons/bs'
import { BsFillGeoAltFill } from 'react-icons/bs'
import Link from 'next/link'
import moment from 'moment-timezone'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'

export default function Tickets({
  order_num = '',
  tid = {},
  created_at = '',
  price = {},
  actname = '',
  location = '',
  actdate = '',
  acttime = '',
  amount = '',
  payment = '',
  status = '',
}) {
  const formateCreated_At = moment(created_at)
    .tz('Asia/Taipei')
    .format('YYYY/MM/DD HH:mm')

  const formateActdate = moment(actdate).tz('Asia/Taipei').format('YYYY/MM/DD')

  const formatteActtime = moment(acttime, 'HH:mm:ss').format('HH:mm')

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
              <span>{actname}</span>
            </div>
          </div>

          <div
            className={`${styles['same-width-text']} ${styles['text-container']} d-flex mt-2  w-100 justify-content-center`}
          >
            <div className="px-4">
              <BsClockFill className="text-purple2" />
            </div>
            <div className={`${styles['same-width-text']}`}>
              <span>{`${formateActdate} ${formatteActtime}`}</span>
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
            {/* <button className="btn btn-primary">查看明細</button> */}
            <DesktopWhiteNoIconBtnPurple
              className="px-1 px-md-4 py-2 mx-auto"
              text="查看明細"
            />
          </Link>
        </td>
      </tr>
    </>
  )
}
