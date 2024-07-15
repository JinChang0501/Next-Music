import MemberDLayout from '@/components/member/desktop-layout'
import React, { useEffect, useState } from 'react'
import StoreDetail from '@/components/member/desktop-layout/store-detail'
import StoreDetailMobile from '@/components/member/mobile-layout/store-detail-mobile'

export default function StoreDetailPage() {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 576) // 螢幕寬度 > 576px 為電腦板
    }

    handleResize() // 初始設定一次

    window.addEventListener('resize', handleResize) // 監聽視窗大小變化

    return () => window.removeEventListener('resize', handleResize) // 清除事件監聽器
  }, [])

  return <>{isDesktop ? <StoreDetail /> : <StoreDetailMobile />}</>
}
StoreDetailPage.getLayout = function getLayout(page) {
  return (
    <MemberDLayout title="Makin | 購物訂單詳細頁面" pageName="store-order">
      {page}
    </MemberDLayout>
  )
}
