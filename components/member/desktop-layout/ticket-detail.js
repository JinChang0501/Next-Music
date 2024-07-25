import React, { useEffect, useRef, useState } from 'react'
import styles from './ticket-detail.module.scss'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { BsClockFill } from 'react-icons/bs'
import { BsFillTicketPerforatedFill } from 'react-icons/bs'
import { BsFillGeoAltFill } from 'react-icons/bs'
import { BsMusicNoteBeamed } from 'react-icons/bs'
import TicketDetailCard from './ticket-detail-card'
import Link from 'next/link'
import moment from 'moment-timezone'

export default function TicketDetail({ ticketData }) {
  const [isMobile, setIsMobile] = useState(false)
  console.log('ticket-detail------------------------ticket-data')
  console.log(ticketData)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576) // 螢幕寬度 > 576px 為電腦板
    }

    handleResize() // 初始設定一次

    window.addEventListener('resize', handleResize) // 監聽視窗大小變化

    return () => window.removeEventListener('resize', handleResize) // 清除事件監聽器
  }, [])
  // console.log('下面是ticketData')
  // console.log(ticketData[0].created_at)

  const [isMarquee, setIsMarquee] = useState(false)
  const textRef = useRef(null)

  useEffect(() => {
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth
      if (textWidth > 150) {
        setIsMarquee(true)
      } else {
        setIsMarquee(false)
      }
    }
  }, [ticketData])

  if (!ticketData || ticketData.length === 0) {
    return <div>Loading...</div>
  }

  //計算總價
  const total = () => {
    let sum = 0
    for (let i = 0; i < ticketData.length; i++) {
      sum += ticketData[i].price
    }
    return sum
  }
  console.log('ticketData[0].created_at')
  console.log(ticketData[0].created_at)
  //更改時間格式
  const formateCreated_At = moment(ticketData[0].created_at)
    .tz('Asia/Taipei')
    .format('YYYY/MM/DD HH:mm')

  const formateActdate = moment(ticketData[0].actdate)
    .tz('Asia/Taipei')
    .format('YYYY/MM/DD')

  const formatteActtime = moment(ticketData[0].acttime, 'HH:mm:ss').format(
    'HH:mm'
  )

  console.log('我是total-------------------')
  console.log(total())

  return (
    <>
      <div className="position-relative">
        <div className="py-3">
          <div className="row">
            <div className="col-12 bg-purple3 p-2 position-relative">
              <div className="p-0 m-0 chb-h5 text-center d-flex align-items-center justify-content-center">
                <Link
                  href="/member/ticket-order"
                  className="text-black d-flex align-items-center"
                >
                  <BsArrowLeftCircle className="chr-h3 position-absolute start-3" />
                </Link>
                <p className="text-center p-0 m-0 fs-2 mx-auto">訂單紀錄</p>
              </div>
            </div>
          </div>
          <div className="row mt-3 border border-2 border-purple1">
            <div className="col-12 bg-purple1 py-2">
              <div className="px-md-5 m-0 fs-3 d-flex justify-content-between">
                <p className="text-center p-0 m-0 chb-h5 text-white">
                  訂單編號:{ticketData[0].order_num}
                </p>
                <p className="text-center p-0 m-0 chb-h5 text-white">
                  {ticketData[0].status}
                </p>
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
                <div className={`${styles['marqee-container']} my-auto`}>
                  <span
                    ref={textRef}
                    className={`${styles['marqee-content']} ${
                      isMarquee ? styles.marqee : ''
                    }`}
                  >
                    {ticketData[0].actname}
                  </span>
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
                  <span className="text-center p-0 m-0 chr-h5">
                    {ticketData[0].art_name}
                  </span>
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
                    {ticketData[0].location}
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
                    {`${formateActdate} ${formatteActtime}`}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 bg-purple3 py-2 border-top border-2 border-purple2">
              <div className="row text-center">
                <div className="col chb-h5">票夾</div>
              </div>
            </div>

            <div className="col-12 py-2">
              {ticketData.map((v, i) => {
                return (
                  <TicketDetailCard
                    key={i}
                    seat_area={v.seat_area}
                    seat_row={v.seat_row}
                    seat_number={v.seat_number}
                    price={v.price}
                    cover={v.cover}
                    actname={v.actname}
                    art_name={v.art_name}
                    tid={v.tid}
                    location={v.location}
                    actdate={v.actdate}
                    acttime={v.acttime}
                    picinfrontend={v.picinfrontend}
                  />
                )
              })}
            </div>

            <div className="col-12 py-2 border-top border-2 border-purple2">
              <div className="px-sm-5 m-0 d-flex justify-content-between">
                <p className="text-center p-0 m-0 chb-h5">
                  共{ticketData.length}張票
                </p>
                <p className="text-center p-0 m-0 chb-h5">總金額: {total()}</p>
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
                <p className="text-center p-0 m-0 chr-h5">
                  {formateCreated_At}
                </p>
              </div>
              <div className="px-sm-5 m-0 d-flex justify-content-between mb-2">
                <p className="text-center p-0 m-0 chb-h5">訂購人</p>
                <p className="text-center p-0 m-0 chr-h5">
                  {ticketData[0].name}
                </p>
              </div>
              <div className="px-sm-5 m-0 d-flex justify-content-between mb-2">
                <p className="text-center p-0 m-0 chb-h5">付款方式</p>
                <p className="text-center p-0 m-0 chr-h5">
                  {ticketData[0].payment}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
