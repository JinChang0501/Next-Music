import React from 'react'
import style from './button.module.scss'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import { useRouter } from 'next/router'

export default function Button() {
  const router = useRouter()

  const handleHome = () => {
    router.push('/')
  }

  return (
    <>
      <div className={`${style.buttonBody}`}>
        <DesktopWhiteNoIconBtnPurple
          text="返回首頁"
          className={`${style.buttonMargin} chb-h6`}
          onClick={handleHome}
        />
        <DesktopWhiteNoIconBtnPurple text="查看訂單" className="chb-h6" />
      </div>
    </>
  )
}
