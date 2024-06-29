import React from 'react'
import styles from './tickets.module.scss'
import { BsClockFill } from 'react-icons/bs'
import { BsFillTicketPerforatedFill } from 'react-icons/bs'
import { BsFillGeoAltFill } from 'react-icons/bs'
import Link from 'next/link'

export default function Tickets({
  key = {},
  tid = {},
  created_at = '',
  price = {},
  activity_name = '',
  activity_place = '',
  activity_time = '',
}) {
  return (
    <>
      <tr>
        <td className="align-middle">{tid}</td>
        <td className="align-middle">{created_at}</td>
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
              <span>{activity_time}</span>
            </div>
          </div>

          <div className="d-flex mt-2 same-width-text w-100 justify-content-center">
            <div className="px-4">
              <BsFillGeoAltFill className="text-purple2" />
            </div>
            <div className={`${styles['same-width-text']}`}>
              <span>{activity_place}</span>
            </div>
          </div>
        </td>
        <td className="align-middle">2</td>
        <td className="align-middle">
          <Link href="/member/ticket-detail">
            <button className="btn btn-primary">查看明細</button>
          </Link>
        </td>
      </tr>
    </>
  )
}
