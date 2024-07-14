import React from 'react'
import ActivityImage from './activityImage'
import Info from './info'
import TicketArea from './ticketArea'
import TicketSeat from './ticketSeat'
import TotalPrice from './totalPrice'

export default function AccordionFirst() {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button chb-h5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
          >
            請確認票券座位
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
        >
          <div className="accordion-body">
            {/* ActivityImage */}
            <ActivityImage />

            {/* info */}
            <Info />

            {/* ticketArea */}
            <TicketArea />

            {/* ticketSeat */}
            <TicketSeat />

            {/* totalPrice */}
            <TotalPrice />
          </div>
        </div>
      </div>
    </>
  )
}
