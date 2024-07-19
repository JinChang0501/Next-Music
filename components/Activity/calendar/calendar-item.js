import React, { useState, useEffect } from 'react'
import { Calendar, Whisper, Popover, Badge } from 'rsuite'
import { useFav } from '@/hooks/useFav'
import { BsFillStarFill } from 'react-icons/bs'
import style from './calendar.module.scss'

export default function CalendarItem() {
  const { favorite } = useFav()

  const activities = favorite.rows.activities
  console.log(activities)
  // 取得收藏資料，準備放上行事曆

  // 將活動按月份和日期分組的函數
  const groupActByMonthAndDay = (activities) => {
    return activities.reduce((acc, activity) => {
      const actDate = new Date(activity.actdate)
      const month = actDate.getMonth() + 1 // JavaScript 的月份從 0 開始，所以需要 +1
      const day = actDate.getDate() - 1

      if (!acc[month]) {
        acc[month] = {}
      }
      if (!acc[month][day]) {
        acc[month][day] = []
      }

      acc[month][day].push({
        time: activity.acttime,
        title: activity.actname,
      })

      return acc
    }, {})
  }
  // 取得該會員按月份和日期分組的收藏資料
  const groupedActivities = groupActByMonthAndDay(activities)
  console.log(groupedActivities)

  // 渲染每一格要放的資料
  const renderingCell = (date) => {
    const month = date.getMonth() + 1
    const day = date.getDate()
    const activitiesForDay = groupedActivities[month]?.[day] || []
    const displayList = activitiesForDay.filter((item, index) => index < 2)

    if (activitiesForDay.length) {
      // const moreCount = activitiesForDay.length - displayList.length
      // const moreCount = activitiesForDay.length
      // const moreItem = (
      //   <li>
      //     <Whisper // 彈出視窗觸發器
      //       placement="top"
      //       trigger="click"
      //       speaker={
      //         // 更改 Popover 彈出視窗的內容
      //         // 這裡要串後端的內容
      //         <Popover>
      //           {activitiesForDay.map((item, index) => (
      //             <p key={index}>
      //               <b>{item.time}</b> - {item.title}
      //             </p>
      //           ))}
      //         </Popover>
      //       }
      //     >
      //       <a className="text-purple1">
      //         {moreCount} <BsFillStarFill />
      //       </a>
      //     </Whisper>
      //   </li>
      // )

      return (
        <>
          {/* 日曆格顯示的內容 */}
          <ul className={`${style['calendar-todo-list']}`}>
            {displayList.map((item, index) => (
              <Whisper
                key={index}
                followCursor
                placement="bottom"
                trigger={['hover', 'focus']}
                speaker={
                  <Popover title="已收藏：">
                    <div className={`w-100 ${style['line-bk']}`}></div>
                    <p className="text-purple1 chr-p">
                      <b className="text-purple2 chr-p">{item.time}</b> -{' '}
                      {item.title}
                    </p>
                  </Popover>
                }
              >
                <li>
                  <Badge color="violet" className="mx-1" />{' '}
                  <b className="text-black60 chr-p">{item.title}</b>
                </li>
              </Whisper>
            ))}
            {/* {moreCount ? moreItem : null} */}
          </ul>
        </>
      )
    }

    return null
  }

  return (
    <>
      <Calendar
        bordered
        // compact // 緊湊型（for 手機）
        renderCell={renderingCell} //渲染每格，把 ToDoList 資料帶入
        cellClassName={(date) => (date.getDay() % 2 ? 'bg-gray' : undefined)}
      />
      <style jsx>{`
        .bg-gray {
          background-color: #1a1a1a;
        }
      `}</style>
    </>
  )
}
