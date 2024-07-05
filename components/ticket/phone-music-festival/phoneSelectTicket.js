import React, { useContext, useState } from 'react'
import style from './phoneSelectTicket.module.scss'
import { BsCaretDownFill } from 'react-icons/bs'
import { TicketContext } from '@/context/ticket/selectNumber'

export default function PhoneSelectTicket() {
  const [isOpen, setIsOpen] = useState(false)

  const { selectedNumber, setSelectedNumber } = useContext(TicketContext)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectOption = (number) => {
    setSelectedNumber(number)
    setIsOpen(false)
  }

  const handleBlur = () => {
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
              <div className="text-black chb-h5">{selectedNumber}</div>
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
                  onClick={() => selectOption(num)}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* totalPrice */}
          <div className={`${style.totalPrice} chb-h5 text-black60`}>
            總價 : $ 18000
          </div>
        </div>
      </div>
    </>
  )
}
