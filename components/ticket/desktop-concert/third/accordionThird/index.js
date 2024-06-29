import React from 'react'
import Payment from './payment'

export default function AccordionThird() {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed  chb-h5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
          >
            請確認支付方式
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            {/* payment */}
            <Payment />
          </div>
        </div>
      </div>
    </>
  )
}
