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
        <td className="bg-warning d-flex justify-content-center flex-column">
          <div className="d-flex mt-2 bg-primary w-100 justify-content-center">
            <div className="bg-success px-4">
              <BsFillTicketPerforatedFill />
            </div>
            <div className={`${styles['same-width-text']} bg-secondary`}>
              <span>{activity_name}</span>
            </div>
          </div>

          <div
            className={`${styles['same-width-text']} ${styles['text-container']} d-flex mt-2  bg-primary w-100 justify-content-center`}
          >
            <div className="bg-success px-4">
              <BsClockFill />
            </div>
            <div className={`${styles['same-width-text']} bg-secondary`}>
              <span>{activity_time}</span>
            </div>
          </div>

          <div className="d-flex mt-2 same-width-text bg-primary w-100 justify-content-center">
            <div className="bg-success px-4">
              <BsFillGeoAltFill />
            </div>
            <div className={`${styles['same-width-text']} bg-secondary`}>
              <span>{activity_place}</span>
            </div>
          </div>
        </td>
        <td className="align-middle">2</td>
        <td className="align-middle">
          <button className="btn btn-primary">查看明細</button>
        </td>
      </tr>
      {/* <tr>
        <td className="align-middle">{tid}</td>
        <td className="align-middle">{created_at}</td>
        <td className="bg-warning d-flex flex-column mx-auto">
          <div
            className={`text-left justify-content-center mt-2 mx-auto ${styles['same-width-text']}`}
          >
            <i className="bi bi-ticket-perforated-fill"></i>
            <BsFillTicketPerforatedFill />
            <span className="ms-2">{activity_name}</span>
          </div>

          <div
            className={`text-left justify-content-center mt-2 mx-auto ${styles['same-width-text']}`}
          >
            <BsClockFill />
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
      </tr> */}
    </>
  )
}
