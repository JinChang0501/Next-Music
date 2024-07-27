import React, { useState, useEffect, useMemo } from 'react'
import { Calendar, Whisper, Popover, Badge } from 'rsuite'
import { useFav } from '@/hooks/use-Fav'
import style from './calendar.module.scss'
import Router, { useRouter } from 'next/router'

export default function CalendarItem({ compact }) {
  const { favorite, resetFavorites } = useFav()
  const [groupedActivities, setGroupedActivities] = useState({})
  const router = useRouter()

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

  // 使用 useMemo 來優化性能
  const activities = useMemo(
    () => favorite.rows.activities,
    [favorite.rows.activities]
  )

  // 當 favorite 變化時，重新計算 groupedActivities
  useEffect(() => {
    console.log('Activities updated:', activities)
    const newGroupedActivities = groupActByMonthAndDay(activities)
    setGroupedActivities(newGroupedActivities)
    // renderingCell()
  }, [activities, favorite, router])

  // 渲染每一格要放的資料
  const renderingCell = (date) => {
    const month = date.getMonth() + 1
    const day = date.getDate()
    const activitiesForDay = groupedActivities[month]?.[day] || []
    const displayList = activitiesForDay.filter((item, index) => index < 3)

    if (activitiesForDay.length) {
      return (
        <>
          {/* 日曆格顯示的內容 */}
          <ul className={`${style['calendar-todo-list']}`}>
            {displayList.map((item, index) => (
              <Whisper // 彈出視窗觸發器
                key={index}
                followCursor
                placement="bottom"
                trigger={['hover', 'focus']}
                speaker={
                  // 彈出視窗的內容
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
                  <Badge color="blue" className="mx-1" />{' '}
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
        compact={compact} // 緊湊型（for 手機）
        renderCell={renderingCell} //渲染每格，把 ToDoList 資料帶入
        // cellClassName={(date) => (date.getDay() % 2 ? 'bg-gray' : undefined)}
      />
      <style jsx>{`
        .bg-gray {
          background-color: #1a1a1a;
        }
      `}</style>
    </>
  )
}
