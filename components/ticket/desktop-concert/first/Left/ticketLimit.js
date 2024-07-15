import React from 'react'
import style from './ticketLimit.module.scss'
import { BsX } from 'react-icons/bs'

export default function TicketLimit({ onDelete }) {
  return (
    <>
      <div className={`${style.ticketLimit}`}>
        <button className="bg-transparent" onClick={onDelete}>
          <BsX
            className={`${style.ticketLimitIcon} position-absolute top-0 end-0`}
          />
        </button>
        <div className={`${style.ticketLimitTitle} chb-h5 text-black`}>
          已達訂票上限
        </div>
        <div className={`${style.ticketLimitText} chb-h7 text-black`}>
          哎呀 ! 超出了訂票 6 張的限制，如果您確實想要這個座位，請更改您的選擇。
        </div>
      </div>
    </>
  )
}
