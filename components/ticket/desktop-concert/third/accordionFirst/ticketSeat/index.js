import React from 'react'
import style from './ticketSeat.module.scss'

export default function TicketSeat() {
  return (
    <>
      {' '}
      <div className={`${style.ticketSeat} chb-h5 text-black30`}>
        <div className={`${style.ticketSeatBlock}`}>
          <div className={`${style.ticketTextLeft}`}>
            <div className={`${style.ticketSeatSquare} bg-A`}></div>
            <div>A&nbsp;區&nbsp;•&nbsp;B&nbsp;排&nbsp;•&nbsp;9&nbsp;號</div>
          </div>
          <div>$&nbsp;8600</div>
        </div>
        <div className={`${style.ticketSeatBlock}`}>
          <div className={`${style.ticketTextLeft}`}>
            <div className={`${style.ticketSeatSquare} bg-E`}></div>
            <div>E&nbsp;區&nbsp;•&nbsp;D&nbsp;排&nbsp;•&nbsp;16&nbsp;號</div>
          </div>
          <div>$&nbsp;1900</div>
        </div>
        <div className={`${style.ticketSeatBlock}`}>
          <div className={`${style.ticketTextLeft}`}>
            <div className={`${style.ticketSeatSquare} bg-D`}></div>
            <div>D&nbsp;區&nbsp;•&nbsp;C&nbsp;排&nbsp;•&nbsp;5&nbsp;號</div>
          </div>
          <div>$&nbsp;3500</div>
        </div>
        <div className={`${style.ticketSeatBlock}`}>
          <div className={`${style.ticketTextLeft}`}>
            <div className={`${style.ticketSeatSquare} bg-B`}></div>
            <div>B&nbsp;區&nbsp;•&nbsp;A&nbsp;排&nbsp;•&nbsp;11&nbsp;號</div>
          </div>
          <div>$&nbsp;6300</div>
        </div>
        <div className={`${style.ticketSeatBlock}`}>
          <div className={`${style.ticketTextLeft}`}>
            <div className={`${style.ticketSeatSquare} bg-D`}></div>
            <div>D&nbsp;區&nbsp;•&nbsp;E&nbsp;排&nbsp;•&nbsp;1&nbsp;號</div>
          </div>
          <div>$&nbsp;3500</div>
        </div>
        <div className={`${style.ticketSeatBlock}`}>
          <div className={`${style.ticketTextLeft}`}>
            <div className={`${style.ticketSeatSquare} bg-E`}></div>
            <div>E&nbsp;區&nbsp;•&nbsp;B&nbsp;排&nbsp;•&nbsp;13&nbsp;號</div>
          </div>
          <div>$&nbsp;1900</div>
        </div>
      </div>
    </>
  )
}
