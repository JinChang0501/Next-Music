import React from 'react'
import style from './phoneAccordionFirst.module.scss'
import { BsFillTicketPerforatedFill, BsQrCode } from 'react-icons/bs'
import Image from 'next/image'
import { useTicketContext } from '@/context/ticket/ticketContext'
import moment from 'moment-timezone'

export default function PhoneAccordionFirst() {
  const { tickets, selectedCount } = useTicketContext()

  const { mingpic, actname, actdate, acttime, location, art_name } =
    tickets[0] || {}

  const pic = `/images/Activity/banner/${mingpic}`

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
            {/* activityImage */}

            <div className={`${style.activityImage}`}>
              <Image src={pic} alt="Activity" fill priority />
            </div>

            {/* info */}

            <div className={`${style.info} text-black`}>
              <div className={`${style.infoBlock} chb-h6`}>{actname}</div>
              <div className={`${style.infoBlock} chb-h6`}>{art_name}</div>
              <div className={`${style.infoBlock} chb-h6`}>{location}</div>
              <div className={`${style.infoBlock} chb-h6`}>{datetime}</div>
              <div className={`${style.infoBlock}`}>
                <div>
                  <BsFillTicketPerforatedFill
                    className={`${style.infoTextIcon}`}
                    style={{ marginRight: '20px' }}
                  />
                </div>
                <div className="chb-h6">訂票上限 6 張</div>
              </div>
              <div className={`${style.infoBlock}`}>
                <div>
                  <BsQrCode
                    className={`${style.infoTextIcon}`}
                    style={{ marginRight: '20px' }}
                  />
                </div>
                <div>
                  <div className="chb-h6" style={{ marginBottom: '10px' }}>
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
