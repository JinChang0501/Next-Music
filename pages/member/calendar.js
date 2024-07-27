import React, { useEffect, useState } from 'react'
import MemberDLayout from '@/components/member/desktop-layout'
import CalendarItem from '@/components/Activity/calendar/calendar-item'
import CalendarItemMob from '@/components/Activity/calendar/calendar-item-mob'
import { useFav } from '@/hooks/use-Fav'
import { useRouter } from 'next/router'

export default function Calendar() {
  const [isDesktop, setIsDesktop] = useState(true)
  const { favorite, fetchFavorites } = useFav
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 576) // 螢幕寬度 > 576px 為電腦板
    }
    handleResize() // 初始設定一次

    window.addEventListener('resize', handleResize) // 監聽視窗大小變化

    return () => window.removeEventListener('resize', handleResize) // 清除事件監聽器
  }, [])

  useEffect(() => {
    async function loadFavorites() {
      if (router.isReady) {
        try {
          await fetchFavorites
        } catch (error) {
          console.error('Failed to fetch favorites:', error)
        } finally {
          setIsLoading(false)
        }
      }
    }
    loadFavorites()
  }, [router.isReady, favorite])

  // 加載中，拔掉
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <p className="chb-h4 text-purple1">活動日程</p>
      <hr className="custom-hr" />
      {isDesktop ? <CalendarItem /> : <CalendarItemMob />}
      <style jsx>{`
        .custom-hr {
          border: 0;
          border-top: 4px solid #007bff; /* 設置粗細和顏色 */
          width: 100%; /* 分隔線寬度 */
          margin: 1rem auto; /* 上下邊距和自動水平對齊 */
        }
      `}</style>
    </>
  )
}
Calendar.getLayout = function getLayout(page) {
  return (
    <MemberDLayout title="Makin | 活動日程" pageName="calendar">
      {page}
    </MemberDLayout>
  )
}
