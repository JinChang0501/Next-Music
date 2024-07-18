import React from 'react'
import TicketSeatBlock from './ticketSeatBlock'
import style from './rightSecond.module.scss'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import { useRouter } from 'next/router'
import {
  BsChevronLeft,
  BsFillTicketPerforatedFill,
  BsQrCode,
  BsCalendar4,
} from 'react-icons/bs'
import moment from 'moment'
import { useTicketContext } from '@/context/ticket/ticketContext'

export default function RightSecond({
  selectedSeats,
  onDeleteSeat,
  showDeleteAllSeat,
  tickets,
}) {
  const router = useRouter()
  const { actid } = useTicketContext()

  const handleNext = () => {
    router.push(`/ticket/concert/payment/${actid}`)
  }

  if (!tickets || tickets.length === 0) {
    return null
  }

  const totalPrice = selectedSeats.reduce((acc, seat) => acc + seat.price, 0)

  const { actname, actdate, acttime, location, art_name } = tickets[0] || {}

  const datetime = moment(
    `${actdate} ${acttime}`,
    `YYYY-MM-DD HH:mm:ss`
  ).format('YYYY-MM-DD HH:mm:ss')

  return (
    <>
      {/* rightTitle */}
      <div className={`${style.rightTitle}`}>
        <button className="bg-white" onClick={showDeleteAllSeat}>
          <BsChevronLeft className={`${style.rightTitleIcon} text-black30`} />
        </button>
        <div className="chb-h6 text-black40">返回選擇區域</div>
      </div>

      {/* ticketSeatBlock */}
      {selectedSeats.map((seat) => (
        <TicketSeatBlock key={seat.tid} seat={seat} onDelete={onDeleteSeat} />
      ))}

      {/* priceTotal */}
      <div className={`${style.priceTotal} chb-h6 text-black`}>
        <div>張數 : {selectedSeats.length} 張</div>
        <div>總價 : {totalPrice.toLocaleString()}</div>
      </div>

      {/* info */}
      <div className={`${style.info}`}>
        <div className={`${style.infoBlock}`}>
          <div>
            <BsFillTicketPerforatedFill className={`${style.infoTextIcon}`} />
          </div>
          <div className="chb-h6 text-black">訂票上限&nbsp;6&nbsp;張</div>
        </div>
        <div className={`${style.infoBlock}`}>
          <div>
            <BsQrCode className={`${style.infoTextIcon}`} />
          </div>
          <div>
            <div className="chb-h6 text-black" style={{ marginBottom: '10px' }}>
              電子票券
            </div>
            <div className="chb-p text-black60">
              這是電子票券，將發送到您的電子郵件
            </div>
          </div>
        </div>
        <div className={`${style.infoBlock}`}>
          <div>
            <BsCalendar4 className={`${style.infoTextIcon}`} />
          </div>
          <div>
            <div className="chb-h6 text-black" style={{ marginBottom: '10px' }}>
              {actname}
            </div>
            <div
              className="chb-p text-black60"
              style={{ marginBottom: '10px' }}
            >
              {art_name}
            </div>
            <div
              className="chb-p text-black60"
              style={{ marginBottom: '10px' }}
            >
              {datetime}
            </div>
            <div className="chb-p text-black60">{location}</div>
          </div>
        </div>
      </div>

      {/* nextButton */}
      <DesktopWhiteNoIconBtnPurple
        text="下一步"
        className={`${style.nextButton} w-100 chb-h6`}
        onClick={handleNext}
      />
    </>
  )
}
