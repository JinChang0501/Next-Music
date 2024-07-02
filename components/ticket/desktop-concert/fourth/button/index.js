import React from 'react'
import style from './button.module.scss'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'

export default function Button() {
  return (
    <>
      <div className={`${style.buttonBody}`}>
        <DesktopWhiteNoIconBtnPurple
          text="返回首頁"
          className={`${style.buttonMargin} chb-h6`}
        />
        <DesktopWhiteNoIconBtnPurple text="查看訂單" className="chb-h6" />
      </div>
    </>
  )
}
