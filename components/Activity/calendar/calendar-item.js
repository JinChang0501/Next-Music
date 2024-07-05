import React from 'react'
import { Calendar, Whisper, Popover, Badge } from 'rsuite';
import getTodoList from './getTodoList';

export default function CalendarItem() {
  function renderCell(date) {
    const list = getTodoList(date);
    const displayList = list.filter((item, index) => index < 2);

    if (list.length) {
      const moreCount = list.length - displayList.length;
      const moreItem = (
        <li>
          <Whisper
            placement="top"
            trigger="click"
            speaker={
              <Popover>
                {list.map((item, index) => (
                  <p key={index}>
                    <b>{item.time}</b> - {item.title}
                  </p>
                ))}
              </Popover>
            }
          >
            <a>{moreCount} more</a>
          </Whisper>
        </li>
      )

      return (
        <ul className="calendar-todo-list">
          {displayList.map((item, index) => (
            <li key={index}>
              <Badge /> <b>{item.time}</b> - {item.title}
            </li>
          ))}
          {moreCount ? moreItem : null}
        </ul>
      )
    }

    return null;
  }
  //樣式寫在這，vvvvvvvvvvvvvv選哪一天染顏色
  // <Calendar cellClassName={date => (date.getDay() % 2 ? 'bg-gray' : undefined)} />
  return (
    <>
      <Calendar
        bordered
        renderCell={renderCell}
        cellClassName={date => (date.getDay() % 2 ? 'bg-gray' : undefined)
        }
      />
      <style jsx>{`
    .bg-gray{
      background-color: white;
    }
    `}</style>
    </>
  )
}