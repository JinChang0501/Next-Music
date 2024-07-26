import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  BsMusicNoteBeamed,
  BsBookmark,
  BsGeoAlt,
  BsCalendar4,
} from 'react-icons/bs'
import DesktopBlackNoIconBtnPurple from '../common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import DesktopBlackPureIconBtnBlack from '../common/button/desktopBlackButton/desktopBlackPureIconBtnBlack'
import PhoneBlackPureIconBtnBlack from '../common/button/phoneBlackButton/phoneBlackPureIconBtnBlack'
import PhoneBlackNoIconBtnPurple from '../common/button/phoneBlackButton/phoneBlackNoIconBtnPurple'

export default function MainMusicInfo({
  title,
  actdate,
  acttime,
  location,
  artist,
  banner,
  aid,
  handleBookTicket,
}) {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 576) // 螢幕寬度 > 576px 為電腦板
    }
    handleResize() // 初始設定一次

    window.addEventListener('resize', handleResize) // 監聽視窗大小變化

    return () => window.removeEventListener('resize', handleResize) // 清除事件監聽器
  }, [])

  return (
    <>
      {/* 活動主資訊 start */}
      <div className="row d-flex justify-content-center align-items-center">
        {/* 圖片 start */}
        <div className="col-md-7 col-12 p-2 mb-5 mb-sm-0 of-hide custom-bg-01 img-border">
          {/* 跑太慢了 */}
          <div className="custom-bg-03">
            {/* <div className="custom-bg-01" style={{ backgroundImage: `url('${banner}')` }} /> */}
            <Image
              src={banner}
              alt="banner"
              className="custom-bg-02"
              fill
              priority
            />
            {/* <img src={banner} className="custom-bg-02" /> */}
          </div>
        </div>
        {/* 圖片 end */}
        <div className="col-md-5 col-12 d-flex flex-column">
          {/* 等待修改：三行能否頂天立地 */}
          <div className="row d-flex flex-column justify-content-between ms-md-5 ms-0">
            <div className="col-12 chb-h3 text-white mb-3">{title}</div>
            <div className="col-12 my-2 my-md-5">
              <div className="d-flex my-2">
                <BsCalendar4 className="chb-h5 text-white me-3 mt-1" />
                <div className="chb-h5 text-purple2">
                  {actdate}&nbsp;{acttime}
                </div>
              </div>
              <div className="d-flex my-2">
                <BsGeoAlt className="chb-h5 text-white me-3 mt-1" />
                <div className="chb-h5 text-purple2">{location}</div>
              </div>
              <div className="d-flex my-2">
                <BsMusicNoteBeamed className="chb-h5 text-white me-3 mt-1" />
                <div className="chb-h5 text-purple2">{artist}</div>
              </div>
            </div>
            <div className="col-12 text-nowrap mt-3">
              <div className="d-flex mb-5 mb-sm-0">
                {isDesktop ? (
                  <DesktopBlackNoIconBtnPurple
                    text="立即購票"
                    className="chr-h5"
                    onClick={handleBookTicket}
                  />
                ) : (
                  <PhoneBlackNoIconBtnPurple
                    text="立即購票"
                    className="chr-h4 w-100"
                    onClick={handleBookTicket}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 活動主資訊 end */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
        .img-border {
          border: 1px solid var(--Primary-02, #958cea);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
        }
        .of-hide {
          overflow: hidden;
        }

        .custom-bg-01 {
          height: 25rem;
        }

        .custom-bg-02 {
          object-fit: cover;
          object-position: center;
          height: 25rem;
        }
        .custom-bg-03 {
          width: 100%;
          height: 100%;
          position: relative;
          img {
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
          }
        }
        @media (max-width: 390px) {
          .custom-bg-01 {
            height: 11.25rem;
          }
        }
      `}</style>
    </>
  )
}
