import React from 'react'
import { BsClockFill } from 'react-icons/bs'
import { BsFillTicketPerforatedFill } from 'react-icons/bs'
import { BsFillGeoAltFill } from 'react-icons/bs'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import styles from './ticket-mobile.module.scss'
import Link from 'next/link'
import moment from 'moment-timezone'

export default function TicketMobile({
  order_num = '',
  key = {},
  tid = {},
  created_at = '',
  price = {},
  actname = '',
  location = '',
  a_datetime = '',
  amount = '',
}) {
  const formattedDate = moment(a_datetime)
    .tz('Asia/Taipei')
    .format('YYYY/MM/DD HH:mm:ss')

  return (
    <>
      <div className="col-12 bg-purple1 py-1 px-2">
        <div className="px-md-5 d-flex justify-content-between">
          <p className="text-center p-0 m-0 chb-p text-white">
            訂單編號:{order_num}
          </p>
          <p className="text-center p-0 m-0 chb-p text-white">X {amount}張</p>
        </div>
      </div>
      <div
        style={{ width: '326px', height: '108px' }}
        className="bg-purple3 mb-3"
      >
        <div className="d-flex w-100 h-100">
          <div style={{ width: '88px', height: '88px' }} className="m-auto">
            <img
              src={`/images/member/img/composing-2391033__340.jpg`}
              alt=""
              className="w-100 h-100"
            />
          </div>
          <div className="px-2">
            <div className=" d-flex justify-content-center flex-column">
              <div
                className={`${styles['same-width-text']} d-flex mt-2 w-100 justify-content-center`}
              >
                <div className="px-2">
                  {/* <i className="bi bi-ticket-perforated-fill"></i> */}
                  <BsFillTicketPerforatedFill />
                </div>
                <div className={`${styles['same-width-text']}`}>
                  <span className="chb-h7">{actname}</span>
                </div>
              </div>

              <div
                className={`${styles['same-width-text']} d-flex mt-2 w-100 justify-content-center`}
              >
                <div className=" px-2">
                  <i className="bi bi-clock-fill"></i>
                  <BsClockFill />
                </div>
                <div className={`${styles['same-width-text']} `}>
                  <span>{formattedDate}</span>
                </div>
              </div>

              <div
                className={`${styles['same-width-text']} d-flex mt-2  w-100 justify-content-center`}
              >
                <div className=" px-2">
                  <i className="bi bi-geo-alt-fill"></i>
                  <BsFillGeoAltFill />
                </div>
                <div className={`${styles['same-width-text']}`}>
                  <span>{location}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-100 bg-purple2 d-flex justify-content-center align-items-center"
            style={{ width: '20px' }}
          >
            <div className="h-100 d-flex align-items-center">
              <button className={styles['no-background']}>
                <Link href={`/member/ticket-detail/${order_num}`}>
                  <BsArrowRightCircleFill className="my-auto text-purple3" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
