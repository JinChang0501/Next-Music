import React from 'react'
import { Calendar, Whisper, Popover, Badge } from 'rsuite'
import getTodoList from './getTodoList'
import { BsFillStarFill } from "react-icons/bs"
import style from './calendar.module.scss'

export default function CalendarItem() {
  function renderCell(date) {
    const list = getTodoList(date);
    const displayList = list.filter((item, index) => index < 2);

    if (list.length) {
      const moreCount = list.length - displayList.length;
      const moreItem = (
        <li>
          <Whisper // 彈出視窗觸發器
            placement="top"
            trigger="click"
            speaker={
              // 更改 Popover 彈出視窗的內容
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