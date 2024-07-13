import React from 'react'
import styles from './selectTicketBlock.module.scss'

export default function SelectTicketBlock({ show, style, colorBarBackground }) {
  return (
    <div
      className={`${styles.selectTicketBlock} ${show ? styles.visible : ''}`}
      style={style}
    >
      <div
        className={`${styles.colorBar}`}
        style={{ backgroundColor: colorBarBackground }}
      ></div>
      <div className={`${styles.content}`}>
        <div className={`${styles.contentTop} chb-h6`}>
          <div>區域</div>
          <div>排</div>
          <div>座位</div>
        </div>
        <div className={`${styles.contentBottom} chb-h5`}>
          <div>A</div>
          <div>A</div>
          <div>1</div>
        </div>
      </div>
    </div>
  )
}
