import React from 'react'
import style from './accordionFirst.module.scss'
import Image from 'next/image'
import { BsFillTicketPerforatedFill, BsQrCode } from 'react-icons/bs'
import { useTicketContext } from '@/context/ticket/ticketContext'
import moment from 'moment-timezone'

export default function AccordionFirst() {
  const { tickets, selectedCount } = useTicketContext()

  const { picture, actname, actdate, acttime, location, art_name } =
    tickets[0] || {}

  const datetime = moment(
    `${actdate} ${acttime}`,
    `YYYY-MM-DD HH:mm:ss`
  ).format('YYYY-MM-DD HH:mm:ss')
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button chb-h5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
          >
            請確認票券座位
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
        >
          <div className="accordion-body">
            {/* ActivityImage */}
            <div className={`${style.activityImage}`}>
              <Image src={picture} alt="test" fill priority />
            </div>

            {/* info */}
            <div className={`${style.info} text-black`}>
              <div className={`${style.infoBlock} chb-h5`}>{actname}</div>
              <div className={`${style.infoBlock} chb-h5`}>{art_name}</div>
              <div className={`${style.infoBlock} chb-h5`}>{location}</div>
              <div className={`${style.infoBlock} chb-h5`}>{datetime}</div>
              <div className={`${style.infoBlock}`}>
                <div>
                  <BsFillTicketPerforatedFill
                    className={`${style.infoTextIcon}`}
                    style={{ marginRight: '20px' }}
                  />
                </div>
                <div className="chb-h5">訂票上限 6 張</div>
              </div>
              <div className={`${style.infoBlock}`}>
                <div>
                  <BsQrCode
                    className={`${style.infoTextIcon}`}
                    style={{ marginRight: '20px' }}
                  />
                </div>
                <div>
                  <div className="chb-h5" style={{ marginBottom: '10px' }}>
                    電子票券
                  </div>
                  <div className="chb-p text-black60">
                    這是電子票券，將發送到您的電子郵件
                  </div>
                </div>
              </div>
            </div>

            {/* totalPrice */}
            <div className={`${style.totalPrice} chb-h5 text-black`}>
              <div>張數 : {selectedCount} 張</div>
              <div>總價 : {2500 * selectedCount}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
