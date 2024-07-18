import React, { useState } from 'react'
import style from './phoneSelectTicket.module.scss'
import { BsCaretDownFill } from 'react-icons/bs'
import { useTicketContext } from '@/context/ticket/ticketContext'

export default function PhoneSelectTicket() {
  const { tickets, selectedCount, setSelectedCount, setSelectedTickets } =
    useTicketContext()

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleBlur = () => {
    setIsOpen(false)
  }

  const handleSelect = (num) => {
    setSelectedCount(num)
    const selectedTickets = tickets.slice(0, num)
    setSelectedTickets(selectedTickets)
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
            className={`${style.selectTicketBox} chb-h6`}
            onBlur={handleBlur}
          >
            <button
              className={`${style.selectTicketBoxFirst}`}
              onClick={toggleDropdown}
            >
              <div className="text-black chb-h5">{selectedCount}</div>
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
