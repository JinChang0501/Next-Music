import React, { useState, useEffect } from 'react'
import MemberDLayout from '@/components/member/desktop-layout'
import MemberPLayout from '@/components/member/mobile-layout'

export default function Account() {
  const [isDesktop, setIsDesktop] = useState(true) // 默认桌面版布局

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768) // 假设 768px 以上为桌面布局
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <p className="chb-h1">帳號設定頁</p>
      {isDesktop ? (
        <MemberDLayout>{/* 桌面版特有的内容 */}</MemberDLayout>
      ) : (
        <MemberPLayout>{/* 手机版特有的内容 */}</MemberPLayout>
      )}
    </>
  )
}
