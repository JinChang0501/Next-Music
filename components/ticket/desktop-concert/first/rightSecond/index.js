import React from 'react'
import TicketSeatBlock from './ticketSeatBlock'
import PriceTotal from './priceTotal'
import Info from './info'
import style from './rightSecond.module.scss'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import { useRouter } from 'next/router'
import { BsChevronLeft } from 'react-icons/bs'

export default function RightSecond({
  selectedSeats,
  onDeleteSeat,
  showDeleteAllSeat,
  tickets,
}) {
  const router = useRouter()

  if (!tickets || tickets.length === 0) {
    return null
  }

  const selectedTicket = tickets.find(
    (ticket) => ticket.seat_number === selectedSeats
  )

  const handleNext = () => {
    router.push('/ticket/concert/second')
  }

  return (
    <>
      {/* rightTitle */}
      <div className={`${style.rightTitle}`}>
        <button className="bg-white" onClick={showDeleteAllSeat}>
          <BsChevronLeft className={`${style.rightTitleIcon} text-black30`} />
        </button>
        <div className="chb-h6 text-black40">返回選擇區域</div>
      </div>

      {/* ticketSeatBlock */}
      {selectedTicket &&
        selectedTicket.map((seat) => (
          <TicketSeatBlock
            key={seat.id}
            seat={selectedSeats}
            onDelete={onDeleteSeat}
            tickets={tickets}
          />
        ))}

      {/* priceTotal */}
      <PriceTotal />

      {/* info */}
      <Info />

      {/* nextButton */}
      <DesktopWhiteNoIconBtnPurple
        text="下一步"
        className={`${style.nextButton} w-100 chb-h6`}
        onClick={handleNext}
      />
    </>
  )
}
