import React from 'react'
import styles from './tickets.module.scss'
import { BsClockFill } from 'react-icons/bs'
import { BsFillTicketPerforatedFill } from 'react-icons/bs'
import { BsFillGeoAltFill } from 'react-icons/bs'

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
        <td className="bg-warning d-flex flex-column mx-auto">
          <div
            className={`text-left justify-content-center mt-2 mx-auto ${styles['same-width-text']}`}
          >
            <i className="bi bi-ticket-perforated-fill"></i>
            <span className="ms-2">{activity_name}</span>
          </div>
          {/*  */}
          <div
            className={`text-left justify-content-center mt-2 mx-auto ${styles['same-width-text']}`}
          >
            <i className="bi bi-clock-fill me-2"></i>
            <span>{activity_time}</span>
          </div>

          <div
            className={`text-left justify-content-center mt-2 mx-auto ${styles['same-width-text']}`}
          >
            <i className="bi bi-geo-alt-fill me-2"></i>
            <span>{activity_place}</span>
          </div>
        </td>
        <td className="align-middle">2</td>
        <td className="align-middle">
          <button className="btn btn-primary">查看明細</button>
        </td>
      </tr>
    </>
  )
}
