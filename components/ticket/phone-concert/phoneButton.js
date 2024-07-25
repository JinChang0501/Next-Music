import React from 'react'
import style from './phoneButton.module.scss'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import { useRouter } from 'next/router'

export default function PhoneButton({ orderData }) {
  const router = useRouter()
  const handleHome = () => {
    router.push('/')
  }

  const handleOrder = () => {
    router.push(`/member/ticket-detail/${orderData.order_num}`)
  }

  if (!orderData) {
    return <div>正在加載訂單資料...</div>
  }
  return (
    <>
      <div className={`${style.buttonBody}`}>
        <DesktopWhiteNoIconBtnPurple
          text="返回首頁"
          className="chb-h6"
          onClick={handleHome}
        />
        <DesktopWhiteNoIconBtnPurple
          text="查看訂單"
          className="chb-h6"
          onClick={handleOrder}
        />
      </div>
    </>
  )
}
