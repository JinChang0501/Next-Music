import React from 'react'
import MemberDLayout from '@/components/member/desktop-layout'
import CalendarItem from '@/components/activity/calendar/calendar-item'

export default function Calendar() {
  return (
    <>
      <p className="chb-h4 text-purple1">活動日程</p>
      <hr className="custom-hr" />
      <CalendarItem />
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
