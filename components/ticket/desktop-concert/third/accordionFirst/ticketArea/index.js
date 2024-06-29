import React from 'react'
import style from './ticketArea.module.scss'

export default function TicketArea() {
  return (
    <>
      <div className={`${style.ticketArea}`}>
        <div className={`${style.ticketAreaBlock} chb-h6 text-A`}>
          <div>A</div>
          <div>$&nbsp;&nbsp;&nbsp;8600</div>
        </div>
        <div className={`${style.ticketAreaBlock} chb-h6 text-B`}>
          <div>B</div>
          <div>$&nbsp;&nbsp;&nbsp;6300</div>
        </div>
        <div className={`${style.ticketAreaBlock} chb-h6 text-C`}>
          <div>C</div>
          <div>$&nbsp;&nbsp;&nbsp;4900</div>
        </div>
        <div className={`${style.ticketAreaBlock} chb-h6 text-D`}>
          <div>D</div>
          <div>$&nbsp;&nbsp;&nbsp;3500</div>
        </div>
        <div className={`${style.ticketAreaBlock} chb-h6 text-E`}>
          <div>E</div>
          <div>$&nbsp;&nbsp;&nbsp;1900</div>
        </div>
      </div>
    </>
  )
}
