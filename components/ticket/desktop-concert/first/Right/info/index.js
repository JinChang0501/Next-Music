import React from 'react'
import style from './info.module.scss'
import { BsInfoCircle } from 'react-icons/bs'

export default function Info() {
  return (
    <div className={style.info}>
      <div className={style.infoTitle}>
        <BsInfoCircle className={style.infoTitleIcon} />
      </div>
      <div className={`${style.infoContent} chb-p`}>
        <div>1. 點選尚未售出座位區域，可以放大該區域</div>
        <div>2. 選取座位後會依序顯示在右側</div>
        <div>3. 訂票上限 6 張</div>
        <div>4. 電子票券將會發送到您的電子郵件</div>
      </div>
    </div>
  )
}
