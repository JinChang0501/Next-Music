import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { Calendar, Whisper, Popover, Badge } from 'rsuite'
import { useFav } from '@/hooks/use-Fav'
import style from './calendar.module.scss'
import { useRouter } from 'next/router'
import { getTicketCalendar } from '@/services/ticket-order'

export default function CalendarItem({ compact }) {
  const { favorite, resetFavorites } = useFav()
  const [groupedActivities, setGroupedActivities] = useState({})
  // const [groupedTickets, setGroupedTickets] = useState({})
  const router = useRouter()

  // 訂票內容 預設資料
  const initialTicketeState = {
    status: 'failed',
    data: {
      result: [],
      calendar: [], // 已訂票的活動資訊
    },
  }

  const [ticket, setTicket] = useState(initialTicketeState)

  // 將活動按月份和日期分組的函數
  const groupActByMonthAndDay = (activities) => {
    // reduce(方法,初始值) acc為累加器
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

      const existingActivityIndex = acc[month][day].findIndex(
        (existingActivity) => existingActivity.title === activity.actname
      )

      if (existingActivityIndex !== -1) {
        // 如果活動已存在，更新狀態
        const existingActivity = acc[month][day][existingActivityIndex]
        existingActivity.isTicket =
          existingActivity.isTicket || activity.isTicket
        existingActivity.isFavorite =
          existingActivity.isFavorite || !activity.isTicket
      } else {
        // 如果活動不存在，添加新活動
        acc[month][day].push({
          time: activity.acttime,
          title: activity.actname,
          isTicket: activity.isTicket || false,
          isFavorite: !activity.isTicket,
        })
      }

      return acc
    }, {})
  }

  // 獲取已訂票的資料
  const getUserData = useCallback(async () => {
    try {
      const res = await getTicketCalendar()
      if (res.status === 'success' && res.data && res.data.calendar) {
        setTicket(res)
        console.log('會員訂單資料載入成功')
      } else {
        console.log('會員訂單資料載入失敗')
      }
    } catch (error) {
      console.error('Error fetching order data:', error)
      console.log('會員訂單資料載入失敗')
    }
  }, [])

  useEffect(() => {
    getUserData()
  }, [getUserData])

  // 使用 useMemo 來優化性能，整合收藏和已訂票的活動
  const combinedActivities = useMemo(() => {
    const favoriteActivities = favorite.rows.activities.map((act) => ({
      ...act,
      isTicket: false,
      isFavorite: true,
    }))
    const ticketActivities = (ticket.data.calendar || []).map((act) => ({
      ...act,
      isTicket: true,
      isFavorite: false,
    }))
    return [...favoriteActivities, ...ticketActivities]
  }, [favorite.rows.activities, ticket.data.calendar])

  // 當 combinedActivities 變化時，重新計算 groupedActivities
  useEffect(() => {
    const newGroupedActivities = groupActByMonthAndDay(combinedActivities)
    setGroupedActivities(newGroupedActivities)
  }, [combinedActivities])

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
                  <Popover>
                    <div className={`w-100 ${style['line-bk']}`}></div>
                    <p>
                      {item.isTicket && (
                        <Badge color="green" className="mx-1" />
                      )}
                      {item.isTicket ? '已訂票' : ''}
                      {item.isTicket && item.isFavorite ? '  ' : ''}
                      {item.isFavorite && (
                        <Badge color="blue" className="mx-1" />
                      )}
                      {item.isFavorite ? '已收藏' : ''}
                    </p>
                    <p className="text-purple1 chr-p">
                      <b className="text-purple1 chr-p">{item.time}</b> -{' '}
                      {item.title}
                    </p>
                  </Popover>
                }
              >
                <li>
                  <Badge
                    color={item.isTicket ? 'green' : 'blue'}
                    className="mx-1"
                  />{' '}
                  <b className="text-black60 chr-p">{item.title}</b>
                </li>
              </Whisper>
            ))}
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
