import React, { useEffect, useState } from 'react'
import styles from './ticket-detail.module.scss'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { BsClockFill } from 'react-icons/bs'
import { BsFillTicketPerforatedFill } from 'react-icons/bs'
import { BsFillGeoAltFill } from 'react-icons/bs'
import { BsMusicNoteBeamed } from 'react-icons/bs'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import TicketDetailCard from './ticket-detail-card'

export default function TicketDetail() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576) // 螢幕寬度 > 576px 為電腦板
    }

    handleResize() // 初始設定一次

    window.addEventListener('resize', handleResize) // 監聽視窗大小變化

    return () => window.removeEventListener('resize', handleResize) // 清除事件監聽器
  }, [])

  return (
    <>
      <div className="row">
        <div className="col-12 bg-purple3 p-2 position-relative">
          <div className="p-0 m-0 chb-h5 text-center d-flex align-items-center justify-content-center">
            <a href="#" className="text-black d-flex align-items-center">
              <BsArrowLeftCircle className="chr-h3 position-absolute start-3" />
            </a>
            <p className="text-center p-0 m-0 fs-2 mx-auto">訂單紀錄</p>
          </div>
        </div>
      </div>

      <div className="row mt-3 border border-2 border-purple1">
        <div className="col-12 bg-purple1 py-2">
          <div className="px-md-5 m-0 fs-3 d-flex justify-content-between">
            <p className="text-center p-0 m-0 chb-h5 text-white">
              訂單編號:0000001
            </p>
            <p className="text-center p-0 m-0 chb-h5 text-white">已完成</p>
          </div>
        </div>

        <div className="col-12 bg-purple3 py-2 border-top border-2 border-purple2">
          <div className="row text-center">
            <div className="col chb-h5">活動資訊</div>
          </div>
        </div>
        <div className="col-12  py-2">
          {/* 活動名稱 */}
          <div className="px-sm-5 m-0 fs-3 d-flex justify-content-between">
            <div className="d-flex">
              <div className="">
                <BsFillTicketPerforatedFill className="pe-3 chb-h2" />
              </div>
              <div className="d-flex flex-column">
                <span className="text-center chb-h5 my-auto">活動名稱</span>
              </div>
            </div>
            <div
              className={`${styles['same-width-text']} ${
                isMobile ? styles['marqee'] : styles['']
              } my-auto `}
            >
              <span className="chr-h5">一生到底，One Life, One Shot</span>
            </div>
          </div>
          {/* 演出藝人 */}
          <div className="px-sm-5 m-0 fs-3 d-flex justify-content-between">
            <div className="d-flex">
              <div className="">
                <BsMusicNoteBeamed className="pe-3 chb-h2" />
              </div>
              <div className="d-flex flex-column">
                <span className="text-center chb-h5 my-auto">演出藝人</span>
              </div>
            </div>
            <div>
              <span className="text-center p-0 m-0 chr-h5">滅火氣 Fire Ex</span>
            </div>
          </div>
          {/* 活動地點 */}
          <div className="px-sm-5 m-0 fs-3 d-flex justify-content-between">
            <div className="d-flex">
              <div className="">
                <BsFillGeoAltFill className="pe-3 chb-h2" />
              </div>
              <div className=" d-flex flex-column">
                <span className="text-center chb-h5 my-auto">活動地點</span>
              </div>
            </div>
            <div>
              <span className="text-center p-0 m-0 chr-h5">
                台北流行音樂中心
              </span>
            </div>
          </div>
          {/* 活動時間 */}
          <div className="px-sm-5 m-0 fs-3 d-flex justify-content-between">
            <div className="d-flex">
              <div className="">
                <BsClockFill className="pe-3 chb-h2" />
              </div>
              <div className=" d-flex flex-column">
                <span className="text-center chb-h5 my-auto">活動時間</span>
              </div>
            </div>
            <div>
              <span className="text-center p-0 m-0 chr-h5">
                2024/06/31 19:30
              </span>
            </div>
          </div>
          {/*     */}
        </div>

        <div className="col-12 bg-purple3 py-2 border-top border-2 border-purple2">
          <div className="row text-center">
            <div className="col chb-h5">票夾</div>
          </div>
        </div>

        <div className="col-12 py-2">
          <TicketDetailCard />
        </div>

        <div className="col-12 py-2 border-top border-2 border-purple2">
          <div className="px-sm-5 m-0 d-flex justify-content-between">
            <p className="text-center p-0 m-0 chb-h5">共3張票</p>
            <p className="text-center p-0 m-0 chb-h5">總金額: $2100</p>
          </div>
        </div>

        <div className="col-12 bg-purple3 py-2 border-top border-2 border-purple2">
          <div className="row text-center">
            <div className="col chb-h5">訂單詳細資訊</div>
          </div>
        </div>

        <div className="col-12 py-2">
          <div className="px-sm-5 m-0 d-flex justify-content-between mb-2">
            <p className="text-center p-0 m-0 chb-h5">訂單時間</p>
            <p className="text-center p-0 m-0 chr-h5">2024/06/31 19:30</p>
          </div>
          <div className="px-sm-5 m-0 d-flex justify-content-between mb-2">
            <p className="text-center p-0 m-0 chb-h5">訂購人</p>
            <p className="text-center p-0 m-0 chr-h5">黃大安</p>
          </div>
          <div className="px-sm-5 m-0 d-flex justify-content-between mb-2">
            <p className="text-center p-0 m-0 chb-h5">付款方式</p>
            <p className="text-center p-0 m-0 chr-h5">LINE PAY</p>
          </div>
        </div>
      </div>
    </>
  )
}
