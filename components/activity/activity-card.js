import React from 'react'
import { BsMusicNoteBeamed, BsBookmark, BsGeoAlt, BsCalendar4 } from "react-icons/bs";
import DesktopWhiteNoIconBtnBlack from '../common/button/desktopWhiteButton/desktopWhiteNoIconBtnBlack';
import DesktopBlackNoIconBtnPurple from '../common/button/desktopBlackButton/desktopBlackNoIconBtnPurple';

export default function ActivityCard({ imgSrc = "https://i.postimg.cc/zB5Gh92q/temp-Image7-Gw6zu.avif" }) {
  return (
    <div className="card mb-3">
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
        <div className="col-8">
          <div className="card-body d-flex flex-column">
            <div className="row">
              <div className="card-title col-10 col-md-11 chb-h4">一生到底</div>
              <BsBookmark className='col-2 col-md-1' />
              <div className="col-12 d-flex align-items-end">
                <div className="col-8">
                  <div className="row my-2">
                    <BsMusicNoteBeamed className='col-2' />
                    <div className="card-text col-10 chb-p">滅火器 Fire EX.</div>
                  </div>
                  <div className="row my-2">
                    <BsGeoAlt className='col-2' />
                    <div className="card-text col-10 chb-p">臺北流行音樂中心</div>
                  </div>
                  <div className="row my-2">
                    <BsCalendar4 className='col-2' />
                    <div className="card-text col-10 chb-p">
                      2024/06/15&nbsp;&nbsp;19:30
                    </div>
                  </div>
                </div>
                <div className="col-4 d-flex justify-content-end gap-4 text-nowrap">
                  <DesktopWhiteNoIconBtnBlack text="活動資訊" className="chr-p d-md-block d-none" />
                  <DesktopBlackNoIconBtnPurple text="立即購票" className="chr-p" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
