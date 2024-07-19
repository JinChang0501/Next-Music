import React, { useEffect, useState } from 'react'
import style from './start.module.scss'
import { BsFillLockFill } from 'react-icons/bs'
import DesktopWhiteNoIconBtnPurple from '../common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import PhoneWhiteNoIconBtnPurple from '../common/button/phoneWhiteButton/phoneWhiteNoIconBtnPurple'
import { useCountdown } from '@/context/ticket/countdownContext'

export default function Start() {
  const { setIsStarted } = useCountdown()
  const handleStart = () => {
    setIsStarted(true)
  }
  const [isPhoneView, setIsPhoneView] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsPhoneView(window.innerWidth <= 390)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // #region PhoneView

  if (isPhoneView) {
    return (
      <div className={`${style.start}`}>
        <div className={`${style.startIconBlock}`}>
          <BsFillLockFill className={`${style.startIcon}`} />
        </div>
        <div className={`${style.startTextBlock} chb-h6`}>
          請於10分鐘內完成購買
        </div>
        <div className={`${style.startTextBlock}`}>
          <PhoneWhiteNoIconBtnPurple
            text="開始"
            className="chb-h5 w-100"
            onClick={handleStart}
          />
        </div>
      </div>
    )
  }

  // #endregion PhoneView

  // #region DesktopView

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
            onClick={handleStart}
          />
        </div>
      </div>
    </>
  )

  // #endregion DesktopView
}
