import React from 'react'

export default function TicketMobile() {
  return (
    <>
      <div style={{ width: '336px', height: '108px' }} className="bg-primary">
        <div className="d-flex w-100 h-100">
          <div style={{ width: '88px', height: '88px' }} className="m-auto">
            <img
              src="/public/images/member/img/beautiful-2405131__340.jpg"
              alt=""
              className="w-100 h-100"
            />
          </div>
          <div className="px-3">
            <div className="bg-warning d-flex justify-content-center flex-column">
              <div className="d-flex mt-2 same-width-text bg-primary w-100 justify-content-center">
                <div className="bg-success px-2">
                  <i className="bi bi-ticket-perforated-fill"></i>
                </div>
                <div className="bg-secondary same-width-text">
                  <span>一生一生一生一生一生</span>
                </div>
              </div>

              <div className="d-flex mt-2 same-width-text bg-primary w-100 justify-content-center">
                <div className="bg-success px-2">
                  <i className="bi bi-clock-fill"></i>
                </div>
                <div className="bg-secondary same-width-text">
                  <span>2024/06/15 19:30</span>
                </div>
              </div>

              <div className="d-flex mt-2 same-width-text bg-primary w-100 justify-content-center">
                <div className="bg-success px-2">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="bg-secondary same-width-text">
                  <span>臺北流行音樂中心</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-100 bg-secondary d-flex justify-content-center align-items-center"
            style={{ width: '20px' }}
          >
            <div className="h-100 d-flex align-items-center">
              <i className="bi bi-arrow-right-circle-fill my-auto"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
