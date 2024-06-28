import React from 'react'
import { BsMusicNoteBeamed, BsBookmark, BsGeoAlt, BsCalendar4 } from "react-icons/bs";
import DesktopBlackNoIconBtnPurple from '../common/button/desktopBlackButton/desktopBlackNoIconBtnPurple';
import DesktopBlackPureIconBtnBlack from '../common/button/desktopBlackButton/desktopBlackPureIconBtnBlack';

export default function MainMusicInfo() {
  return (
    <>
      {/* 活動主資訊 start */}
      <div className="row mb-120 d-flex justify-content-center align-items-center">
        <div className="col-md-7 col-12 p-2 of-hide img-border">
          <div className="custom-bg-01" />
        </div>
        <div className="col-md-5 col-12">
          {/* 等待修改：三行能否頂天立地 */}
          <div className="d-flex flex-column justify-content-between ms-md-3 ms-0 my-auto">
            <div className="chb-h3 text-white">一生到底&nbsp;One&nbsp;Life,&nbsp;One&nbsp;Shot</div>
            <div className="row">
              <div className="row my-3">
                <BsCalendar4 className="col-2 text-white" />
                <div className="card-text col-10 chb-h5 text-purple2">2024/06/15&nbsp;&nbsp;19:30</div>
              </div>
              <div className="row my-3">
                <BsGeoAlt className="col-2 text-white" />
                <div className="card-text col-10 chb-h5 text-purple2">臺北流行音樂中心</div>
              </div>
              <div className="row my-3">
                <BsMusicNoteBeamed className="col-2 text-white" />
                <div className="card-text col-10 chb-h5 text-purple2">滅火器 Fire EX.</div>
              </div>
            </div>
            <div className="row text-nowrap">
              <div className="col-5 me-2">
                <DesktopBlackNoIconBtnPurple text='立即購票' />
              </div>
              <div className="col-6">
                <DesktopBlackPureIconBtnBlack
                  className="d-md-block d-none"
                  icon={BsBookmark}
                  iconWidth={48}
                  iconHeight={48}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 活動主資訊 end */}
      <style jsx>{`
        .img-border {
          border: 1px solid var(--Primary-02, #958CEA);
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(5px);
        }
        .of-hide {
  overflow: hidden;
}
.custom-bg-01 {
  background-image: url('https://i.postimg.cc/CLWYD3d9/temp-Imagea-Dk-U5o.avif');
  background-size: cover;
  background-position: center;
  height: 25rem;
}
      `}</style>
    </>
  )
}
