import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLogin } from '../../hooks/use-login'

import {
  BsMusicNoteBeamed,
  BsBookmark,
  BsGeoAlt,
  BsCalendar4,
} from 'react-icons/bs'
import FavIcon from '@/components/Activity/fav/fav-icon'
import DesktopWhiteNoIconBtnBlack from '../common/button/desktopWhiteButton/desktopWhiteNoIconBtnBlack'
import DesktopBlackNoIconBtnPurple from '../common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import DesktopBlackPureIconBtnBlack from '../common/button/desktopBlackButton/desktopBlackPureIconBtnBlack'
import PhoneBlackPureIconBtnBlack from '../common/button/phoneBlackButton/phoneBlackPureIconBtnBlack'
import PhoneBlackNoIconBtnPurple from '../common/button/phoneBlackButton/phoneBlackNoIconBtnPurple'

export default function ActivityCard({
  imgSrc = 'https://i.postimg.cc/zB5Gh92q/temp-Image7-Gw6zu.avif',
  title,
  artist,
  location,
  actdate,
  eventId,
  isFavorite,
  handleToggleFav,
  aid,
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
      <div key={eventId} className="card mb-3 bg-dark outline">
        <div className="row g-0">
          {/* 圖 */}
          <div className="col-4">
            <img src={imgSrc} className="img-fluid" alt="..." />
          </div>
          {/* 卡片文字 */}
          <div className="col-8 card-body p-2 p-md-3 d-flex flex-column justify-content-between">
            <div className="d-flex align-items-center">
              <div className="card-title chb-h4 text-purple3 m-0 p-0">
                {title}
              </div>
              <div className="p-0 ms-auto">
                {isDesktop ? (
                  <FavIcon
                    eventId={eventId}
                    // isFavorite={isFavorite}
                    iconWidth={28}
                    iconHeight={28}
                    handleToggleFav={handleToggleFav}
                  />
                ) : (
                  <FavIcon
                    eventId={eventId}
                    // isFavorite={isFavorite}
                    iconWidth={16}
                    iconHeight={16}
                    handleToggleFav={handleToggleFav}
                  />
                )}
              </div>
            </div>
            <div className="col-12 d-flex align-items-end">
              <div className="col-8 text-white">
                <div className="d-flex my-2">
                  <BsMusicNoteBeamed className="p-0 me-2 me-md-3" />
                  <div className="card-text col-10 chb-p p-0 to-e">
                    {artist}
                  </div>
                </div>
                <div className="d-md-flex d-none my-2">
                  <BsGeoAlt className="p-0 me-2 me-md-3" />
                  <div className="card-text col-10 chb-p p-0">{location}</div>
                </div>
                <div className="d-flex my-2">
                  <BsCalendar4 className="p-0 me-2 me-md-3" />
                  <div className="card-text chb-p p-0">{actdate}</div>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-end gap-2 text-nowrap">
                <Link href={`/Activity/${aid}`}>
                  <DesktopWhiteNoIconBtnBlack
                    text="活動資訊"
                    className="chr-p d-md-block d-none"
                  />
                </Link>
                {/* 如果變成手機大小，要變成手機按鈕的判斷式 */}
                {isDesktop ? (
                  <Link
                    href={`/ticket/${
                      aid > 9 ? 'musicFestival' : 'concert'
                    }/selectSeat/${aid}`}
                  >
                    <DesktopBlackNoIconBtnPurple
                      text="立即購票"
                      className="chr-p"
                    />
                  </Link>
                ) : (
                  <Link
                    href={`/ticket/${
                      aid > 9 ? 'musicFestival' : 'concert'
                    }/selectSeat/${aid}`}
                  >
                    <PhoneBlackNoIconBtnPurple
                      text="立即購票"
                      className="chr-p"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .outline {
          border: 1px solid #dbd7ff;
        }
        .to-e {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
           {
            /* -webkit-line-clamp: 2 */
          }
        }
        @media (max-width: 390px) {
          .chb-h4 {
            font-size: 18px;
            letter-spacing: 1.8px;
          }
          .chb-p {
            font-size: 12px;
            font-weight: 400;
          }
        }
      `}</style>
    </>
  )
}
