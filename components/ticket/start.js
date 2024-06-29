import React from 'react'
import style from './start.module.scss'
import { BsFillLockFill } from 'react-icons/bs'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'

export default function Start({ onStart }) {
  return (
    <>
      <div className={`${style.start}`}>
        <div className={`${style.startIconBlock}`}>
          <BsFillLockFill className={`${style.startIcon}`} />
        </div>
        <div className={`${style.startTextBlock} chb-h5`}>
          請於10分鐘內完成購買
        </div>
        <div className={`${style.startTextBlock}`}>
          <DesktopWhiteNoIconBtnPurple
            text="開始"
            className="chb-h6"
            onClick={onStart}
          />
        </div>
      </div>
    </>
  )
}
