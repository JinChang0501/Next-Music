import TicketMobile from '@/components/member/mobile-layout/ticket-mobile'
import React from 'react'

export default function TicketMobileTest() {
  return (
    <>
      <div className="row">
        <div className="col-12 bg-primary p-2 position-relative">
          <div className="p-0 m-0 fs-3 text-center d-flex align-items-center justify-content-center">
            <a href="#" className="text-white d-flex align-items-center">
              <i className="bi bi-arrow-left-circle position-absolute start-3"></i>
            </a>
            <p className="text-center p-0 m-0 fs-2 mx-auto">訂單紀錄</p>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-12 bg-primary py-2">
          <div className="px-5 m-0 fs-3 d-flex justify-content-between">
            <p className="text-center p-0 m-0 fs-5">訂單編號:0000001</p>
            <p className="text-center p-0 m-0 fs-5">已完成</p>
          </div>
        </div>

        <div className="col-12 bg-primary py-2">
          <div className="row text-center">
            <div className="col">活動資訊</div>
          </div>
        </div>
        <div className="col-12 bg-success py-2">
          <div className="px-sm-5 m-0 fs-3 d-flex justify-content-between">
            <p className="text-center p-0 m-0 fs-5">
              <i className="bi bi-play-circle-fill pe-2"></i>活動名稱
            </p>
            <p className="text-center p-0 m-0 fs-5">
              一生到底，One Life, One Shot
            </p>
          </div>
          <div className="px-sm-5 m-0 fs-3 d-flex justify-content-between">
            <p className="text-center p-0 m-0 fs-5">
              <i className="bi bi-music-note-beamed pe-2"></i>演出藝人
            </p>
            <p className="text-center p-0 m-0 fs-5">滅火氣 Fire Ex</p>
          </div>
          <div className="px-sm-5 m-0 fs-3 d-flex justify-content-between">
            <p className="text-center p-0 m-0 fs-5">
              <i className="bi bi-geo-alt-fill pe-2"></i>活動地點
            </p>
            <p className="text-center p-0 m-0 fs-5">台北流行音樂中心</p>
          </div>
          <div className="px-sm-5 m-0 fs-3 d-flex justify-content-between">
            <p className="text-center p-0 m-0 fs-5">
              <i className="bi bi-clock-fill pe-2"></i>活動時間
            </p>
            <p className="text-center p-0 m-0 fs-5">2024/06/31 19:30</p>
          </div>
        </div>
        <div className="col-12 bg-primary py-2">
          <div className="row text-center">
            <div className="col">票夾</div>
          </div>
        </div>

        <div className="col-12 bg-warning py-2">
          <div className="row text-center mb-3">
            <div className="col my-auto p-0">
              <img
                src={`/images/member/img/composing-2391033__340.jpg`}
                className="card-img-top"
                alt=""
              />
            </div>
            <div className="col my-auto p-0">A區第5排8號</div>
            <div className="col my-auto p-0">$700</div>
            <div className="col my-auto p-0">
              <button className="btn btn-primary">查看明細</button>
            </div>
          </div>

          <div className="row text-center mb-3">
            <div className="col p-0">
              <img
                src={`/images/member/img/composing-2391033__340.jpg`}
                className="card-img-top"
                alt=""
              />
            </div>
            <div className="col my-auto p-0">A區第5排8號</div>
            <div className="col my-auto p-0">$700</div>
            <div className="col my-auto p-0">
              <button className="btn btn-primary">查看明細</button>
            </div>
          </div>

          <div className="row text-center mb-3">
            <div className="col p-0">
              <img
                src={`/images/member/img/composing-2391033__340.jpg`}
                className="card-img-top"
                alt=""
              />
            </div>
            <div className="col my-auto p-0">A區第5排8號</div>
            <div className="col my-auto p-0">$700</div>
            <div className="col my-auto p-0">
              <button className="btn btn-primary">查看明細</button>
            </div>
          </div>
        </div>

        <div className="col-12 bg-success py-2">
          <div className="px-sm-5 m-0 fs-3 d-flex justify-content-between">
            <p className="text-center p-0 m-0 fs-5">共3張票</p>
            <p className="text-center p-0 m-0 fs-5">總金額: $2100</p>
          </div>
        </div>

        <div className="col-12 bg-success py-2">
          <div className="px-sm-5 m-0 fs-3 mx-auto">
            <p className="text-center p-0 m-0 fs-5">訂單詳細資訊</p>
          </div>
        </div>

        <div className="col-12 bg-success py-2">
          <div className="px-sm-5 m-0 fs-3 d-flex justify-content-between">
            <p className="text-center p-0 m-0 fs-5">訂單時間</p>
            <p className="text-center p-0 m-0 fs-5">2024/06/31 19:30</p>
          </div>
          <div className="px-sm-5 m-0 fs-3 d-flex justify-content-between">
            <p className="text-center p-0 m-0 fs-5">訂購人</p>
            <p className="text-center p-0 m-0 fs-5">黃大安</p>
          </div>
          <div className="px-sm-5 m-0 fs-3 d-flex justify-content-between">
            <p className="text-center p-0 m-0 fs-5">付款方式</p>
            <p className="text-center p-0 m-0 fs-5">LINE PAY</p>
          </div>
        </div>
      </div>
    </>
  )
}
