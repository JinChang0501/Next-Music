import React, { useState } from 'react'
import style from './selectTicket.module.scss'
import { BsCaretDownFill } from 'react-icons/bs'
import { useTicketContext } from '@/context/ticket/ticketContext'

export default function SelectTicket() {
  const { tickets, selectedCount, setSelectedCount, setSelectedTickets } =
    useTicketContext()

  const [isOpen, setIsOpen] = useState(false)
  const [hasSelected, setHasSelected] = useState(false)
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleBlur = () => {
    setIsOpen(false)
  }

  const handleSelect = (num) => {
    // 過濾出 order_num 為 NULL 的項目
    const filteredTickets = tickets.filter(
      (ticket) => ticket.order_num === null
    )

    // 取得需要的票數資料
    const ticketsToSelect = filteredTickets.slice(0, num)

    // 按 tid 排序
    const sortedTickets = ticketsToSelect.sort((a, b) => a.tid - b.tid)

    // 更新選擇的票數
    setSelectedCount(num)
    setSelectedTickets(sortedTickets)
    setHasSelected(true)
    setIsOpen(false)
  }

  return (
    <>
      <div className={`${style.selectTicket}`}>
        {/* first */}

        <div className="chb-h5 text-black">請選擇需購買票數</div>

        {/* bottom */}

        <div className={`${style.selectTicketBottom}`}>
          {/* select */}
          <div
            className={`${style.selectTicketBox} chb-h5`}
            onBlur={handleBlur}
          >
            <button
              className={`${style.selectTicketBoxFirst}`}
              onClick={toggleDropdown}
            >
              <div className={`${style.selectTicketBoxFirstText} chb-h5`}>
                {hasSelected ? selectedCount : '請選擇票數'}
              </div>
              <BsCaretDownFill
                className={`${style.selectTicketBoxIcon} ${
                  isOpen ? style.rotate : ''
                }`}
              />
            </button>
            <div
              className={`${style.selectTicketBoxOptionBox} ${
                isOpen ? style.open : ''
              }`}
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <button
                  key={num}
                  className={`${style.selectTicketBoxOption} chb-h5`}
                  onClick={() => handleSelect(num)}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* totalPrice */}
          <div className={`${style.totalPrice} chb-h5 text-black60`}>
            總價 : $ {2500 * selectedCount}
          </div>
        </div>
      </div>
    </>
  )
}
