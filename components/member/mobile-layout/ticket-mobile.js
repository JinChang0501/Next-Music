import React from 'react'
import { BsClockFill } from 'react-icons/bs'
import { BsFillTicketPerforatedFill } from 'react-icons/bs'
import { BsFillGeoAltFill } from 'react-icons/bs'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import styles from './ticket-mobile.module.scss'
import Link from 'next/link'

export default function TicketMobile() {
  return (
    <>
      <div style={{ width: '336px', height: '108px' }} className="bg-purple3">
        <div className="d-flex w-100 h-100">
          <div style={{ width: '88px', height: '88px' }} className="m-auto">
            <img
              src={`/images/member/img/composing-2391033__340.jpg`}
              alt=""
              className="w-100 h-100"
            />
          </div>
          <div className="px-3">
            <div className=" d-flex justify-content-center flex-column">
              <div
                className={`${styles['same-width-text']} d-flex mt-2  w-100 justify-content-center`}
              >
                <div className="px-2">
                  {/* <i className="bi bi-ticket-perforated-fill"></i> */}
                  <BsFillTicketPerforatedFill />
                </div>
                <div className={`${styles['same-width-text']}`}>
                  <span className="chb-h7">
                    一生一生一生一一生一一生一一一生
                  </span>
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
                  <span>2024/06/15 19:30</span>
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
                  <span>臺北流行音樂中心</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-100 bg-purple1 d-flex justify-content-center align-items-center"
            style={{ width: '20px' }}
          >
            <div className="h-100 d-flex align-items-center">
              {/* <i className="bi bi-arrow-right-circle-fill my-auto"></i> */}
              <button className={styles['no-background']}>
                <Link href="/member/ticket-detail">
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
