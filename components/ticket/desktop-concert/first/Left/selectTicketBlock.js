import React from 'react'
import style from './selectTicketBlock.module.scss'

export default function SelectTicketBlock({ show, styles }) {
  return (
    <>
      <div
        className={`${style.selectTicketBlock} ${show ? style.visible : ''}`}
        style={{ ...styles }}
      >
        <div className={`${style.colorBar}`}></div>
        <div className={`${style.content}`}>
          <div className={`${style.contentTop} chb-h6`}>
            <div>區域</div>
            <div>排</div>
            <div>座位</div>
          </div>
          <div className={`${style.contentBottom} chb-h5`}>
            <div>A</div>
            <div>A</div>
            <div>1</div>
          </div>
        </div>
      </div>
    </>
  )
}
