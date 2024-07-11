import React from 'react'
import style from './selectTicketBlock.module.scss'
import PhoneWhiteNoIconBtnPurple from '@/components/common/button/phoneWhiteButton/phoneWhiteNoIconBtnPurple'

export default function SelectTicketBlock({
  show,
  styles,
  className,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <>
      <div
        className={`${style.selectTicketBlock} ${
          show ? style.visible : ''
        } ${className}`}
        style={{ ...styles, transitionDelay: show ? '0s' : '0.5s' }}
        onMouseEnter={() => onMouseEnter(true)}
        onMouseLeave={() => onMouseLeave(false)}
      >
        <div className={`${style.colorBar}`}></div>
        <div className={`${style.content}`}>
          <div className={`${style.contentTop} chb-h7`}>
            <div>區域</div>
            <div>排</div>
            <div>座位</div>
          </div>
          <div className={`${style.contentBottom} chb-h6`}>
            <div>A</div>
            <div>A</div>
            <div>1</div>
          </div>
          <PhoneWhiteNoIconBtnPurple
            text="加入購票"
            className="chb-p-14 w-100 p-1"
          />
        </div>
      </div>
    </>
  )
}
