import React from 'react'
import style from './phoneTitle.module.scss'
import { FaChevronLeft } from 'react-icons/fa'
import moment from 'moment'

export default function PhoneTitle({ tickets, showDeleteAllSeat }) {
  if (!tickets || tickets.length === 0) {
    return null
  }

  const { actname, actdate, acttime, location } = tickets[0] || {}

  const datetime = moment(
    `${actdate} ${acttime}`,
    `YYYY-MM-DD HH:mm:ss`
  ).format('YYYY-MM-DD HH:mm:ss')

  return (
    <>
      <div className={`${style.title}`}>
        <button className="bg-white" onClick={showDeleteAllSeat}>
          <FaChevronLeft className={`${style.titleIcon}`} />
        </button>
        <div className={`${style.titleText}`}>
          <div className="chb-h5 text-black">{actname}</div>
          <div className="chb-h7 text-black60">{datetime}</div>
          <div className="chb-h7 text-black60">{location}</div>
        </div>
      </div>
    </>
  )
}
