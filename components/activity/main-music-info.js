import React from 'react'
import { BsMusicNoteBeamed, BsBookmark, BsGeoAlt, BsCalendar4 } from "react-icons/bs";
import DesktopBlackNoIconBtnPurple from '../common/button/desktopBlackButton/desktopBlackNoIconBtnPurple';
import DesktopBlackPureIconBtnBlack from '../common/button/desktopBlackButton/desktopBlackPureIconBtnBlack';

export default function MainMusicInfo() {
  return (
    <>
      {/* 活動主資訊 start */}
      <div className="row mb-120">
        <div className="col-md-7 col-12 p-2 of-hide img-border">
          <div className="custom-bg-01" />
        </div>
        <div className="col-md-5 col-12">
          <div className="d-flex flex-column gap-3 ms-md-5 ms-0 mt-5">
            <div className="chb-h3">一生到底&nbsp;One&nbsp;Life,&nbsp;One Shot</div>
            <div className="col-8">
              <div className="row my-3">
                <BsCalendar4 className="col-2" />
                <div className="card-text col-10 chb-h5">2024/06/15&nbsp;&nbsp;19:30</div>
              </div>
              <div className="row my-3">
                <BsGeoAlt className="col-2" />
                <div className="card-text col-10 chb-h5">臺北流行音樂中心</div>
              </div>
              <div className="row my-3">
                <BsMusicNoteBeamed className="col-2" />
                <div className="card-text col-10 chb-h5">滅火器 Fire EX.</div>
              </div>
            </div>
            <div className="row text-nowrap">
              <div className="col-4 me-2">
                <DesktopBlackNoIconBtnPurple text='立即購票' />
              </div>
              <div className="col-4">
                <DesktopBlackPureIconBtnBlack
                  className="d-md-block d-none"
                  icon={BsBookmark}
                  iconWidth={40}
                  iconHeight={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 活動主資訊 end */}
    </>

  )
}
