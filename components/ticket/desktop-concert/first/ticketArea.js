import React from 'react'
import style from './ticketArea.module.scss'

export default function TicketArea() {
  return (
    <>
      {/* ticketArea */}
      <div className={`${style.ticketArea} chb-h5`}>
        <div className={`${style.ticketAreaBlock}`}>
          <div className={`${style.ticketAreaBlockLeft}`}>
            <div className={`${style.ticketAreaSquare} bg-A`}></div>
            <div>A&nbsp;區</div>
          </div>
          <div>$&nbsp;8600</div>
        </div>
        <div className={`${style.ticketAreaBlock}`}>
          <div className={`${style.ticketAreaBlockLeft}`}>
            <div className={`${style.ticketAreaSquare} bg-B`}></div>
            <div>B&nbsp;區</div>
          </div>
          <div>$&nbsp;6300</div>
        </div>
        <div className={`${style.ticketAreaBlock}`}>
          <div className={`${style.ticketAreaBlockLeft}`}>
            <div className={`${style.ticketAreaSquare} bg-C`}></div>
            <div>C&nbsp;區</div>
          </div>
          <div>$&nbsp;4900</div>
        </div>
        <div className={`${style.ticketAreaBlock}`}>
          <div className={`${style.ticketAreaBlockLeft}`}>
            <div className={`${style.ticketAreaSquare} bg-D`}></div>
            <div>D&nbsp;區</div>
          </div>
          <div>$&nbsp;3500</div>
        </div>
        <div className={`${style.ticketAreaBlock}`}>
          <div className={`${style.ticketAreaBlockLeft}`}>
            <div className={`${style.ticketAreaSquare} bg-E`}></div>
            <div>E&nbsp;區</div>
          </div>
          <div>$&nbsp;1900</div>
        </div>
      </div>
    </>
  )
}
