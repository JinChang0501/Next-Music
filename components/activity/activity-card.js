import React from 'react'
import { BsMusicNoteBeamed, BsBookmark, BsGeoAlt, BsCalendar4 } from "react-icons/bs";
import DesktopWhiteNoIconBtnBlack from '../common/button/desktopWhiteButton/desktopWhiteNoIconBtnBlack';
import DesktopBlackNoIconBtnPurple from '../common/button/desktopBlackButton/desktopBlackNoIconBtnPurple';
import DesktopBlackPureIconBtnBlack from '../common/button/desktopBlackButton/desktopBlackPureIconBtnBlack';
import { useState, useEffect } from 'react'
import PhoneBlackPureIconBtnBlack from '../common/button/phoneBlackButton/phoneBlackPureIconBtnBlack';
import PhoneBlackNoIconBtnPurple from '../common/button/phoneBlackButton/phoneBlackNoIconBtnPurple';

export default function ActivityCard({ imgSrc = "https://i.postimg.cc/zB5Gh92q/temp-Image7-Gw6zu.avif" }) {

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
      <div className="card mb-3 bg-dark outline">
        <div className="row g-0">
          {/* 圖 */}
          <div className="col-4">
            <img
              src={imgSrc}
              className="img-fluid"
              alt="..."
            />
          </div>
          {/* 卡片文字 */}
          <div className="col-8 card-body p-2 p-md-3 d-flex flex-column justify-content-between">
            <div className="d-flex">
              <div className="card-title chb-h4 text-purple3 p-0">一生到底</div>
              <div className="p-0 ms-auto">
                {isDesktop ?
                  (<DesktopBlackPureIconBtnBlack
                    icon={BsBookmark}
                    iconWidth={28}
                    iconHeight={28}
                  />) : (
                    <PhoneBlackPureIconBtnBlack
                      icon={BsBookmark}
                    />
                  )}
              </div>
            </div>
            <div className="col-12 d-flex align-items-end">
              <div className="col-8 text-white">
                <div className="d-flex my-2">
                  <BsMusicNoteBeamed className="p-0 me-2 me-md-3" />
                  <div className="card-text col-10 chb-p p-0">滅火器 Fire EX.</div>
                </div>
                <div className="d-md-flex d-none my-2">
                  <BsGeoAlt className="p-0 me-2 me-md-3" />
                  <div className="card-text col-10 chb-p p-0">臺北流行音樂中心</div>
                </div>
                <div className="d-flex my-2">
                  <BsCalendar4 className="p-0 me-2 me-md-3" />
                  <div className="card-text chb-p p-0">
                    2024/06/15
                  </div>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-end gap-2 text-nowrap">
                <DesktopWhiteNoIconBtnBlack text="活動資訊" className="chr-p d-md-block d-none" />
                {/* 如果變成手機大小，要變成手機按鈕的判斷式 */}
                {isDesktop ? (
                  <DesktopBlackNoIconBtnPurple text="立即購票" className="chr-p" />
                ) : (
                  <PhoneBlackNoIconBtnPurple text="立即購票" className="chr-p" />
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .outline {
          border: 1px solid #DBD7FF;
        }
      `}</style>
    </>
  )
}
