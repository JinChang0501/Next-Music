import React, { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { Calendar, Whisper, Popover, Badge } from 'rsuite'
import { getFavorites } from '@/configs/fav-api'
import { BsFillStarFill } from "react-icons/bs"
import style from './calendar.module.scss'

export default function CalendarItem() {
  const { auth } = useAuth()
  // 收藏列表，收藏初始值
  const [ favorite, setFavorite ] = useState({
    success: false,
    rows: { 
      favorites: [], // 有收藏的 activity_id
      activities: [] // 活動名稱/日期/時間
    },
  })

  // 取得收藏項目
  const fetchFavorites = async () => {
    // try {
      const res = await getFavorites()
      console.log(res.rows)
      console.log(res)
      if(res.success === true) {
        setFavorite(res)
      }
      // } catch (error) {
      //   console.log('現在的favorite')
      //   console.log(favorite)
      //   console.error('無法獲取收藏', error)
      // }
  }

  // 有登入的話，抓 favorite + activities 資料
  useEffect(() => {
    if (auth.isAuth) {
      fetchFavorites()
      console.log(favorite)
    }
  }, [auth])

  // 取得收藏資料，準備放上行事曆
  const getTodoList = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    return favorite.rows.activities
      .filter((r) => (Date.parse(r.actdate).getMonth() + 1) === month)
      .filter((r) => Date.parse(r.actdate).getDate() === day)
      .map((r) => ({
        time: r.acttime,
        title: r.actname
      }))
  }
  
  // 渲染每一格要放的資料
  const renderCell = (date) => {
    const list = getTodoList(date)
    const displayList = list.filter((item, index) => index < 2)

    if (list.length) {
      const moreCount = list.length - displayList.length
      const moreItem = (
        <li>
          <Whisper // 彈出視窗觸發器
            placement="top"
            trigger="click"
            speaker={
              // 更改 Popover 彈出視窗的內容
              // 這裡要串後端的內容
              <Popover>
                {list.map((item, index) => (
                  <p key={index}>
                    <b>{item.time}</b> - {item.title}
                  </p>
                ))}
              </Popover>
            }
          >
            <a className="text-purple1">{moreCount} <BsFillStarFill /></a>
          </Whisper>
        </li>
      )

      return (
        <>
          {/* 定義 ToDoList */}
          <ul className={`${style['calendar-todo-list']}`}>
            {displayList.map((item, index) => (
              <li key={index}>
                <Badge color="red" className="mx-1" /> <b className="text-purple1">{item.title}</b>
              </li>
            ))}
            {moreCount ? moreItem : null}
          </ul>
          {/* <style jsx>{`
            .calendar-todo-list {
              padding: 0;
              text-align: left;
              list-style: none;
            }

            .calendar-todo-list li {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .calendar-todo-item-badge {
              vertical-align: top;
              margin-top: 8px;
              width: 6px;
              height: 6px;
            }  
          `}</style> */}
        </>
      )
    }

    return null;
  }

  return (
    <>
      <Calendar
        bordered
        renderCell={renderCell} //渲染 ToDoList
      //cellClassName={date => (date.getDay() % 2 ? "bg-gray" : undefined)}
      />
      <style jsx>{`
        .bg-gray{
          background-color: #1A1A1A;
        }   
        `}</style>
    </>
  )
}