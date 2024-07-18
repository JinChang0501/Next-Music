import React from 'react'
import style from './info.module.scss'
import { BsFillTicketPerforatedFill, BsQrCode } from 'react-icons/bs'
import { useTicketContext } from '@/context/ticket/ticketContext'
import moment from 'moment-timezone'

export default function Info() {
  const { selectedSeatDetails } = useTicketContext()

  const { actname, actdate, acttime, location, art_name } =
    selectedSeatDetails[0] || {}

  const datetime = moment(
    `${actdate} ${acttime}`,
    `YYYY-MM-DD HH:mm:ss`
  ).format('YYYY-MM-DD HH:mm:ss')

  return (
    <>
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
    </>
  )
}
