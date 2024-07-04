import React from 'react'
import { BsMusicNoteBeamed, BsBookmark, BsGeoAlt, BsCalendar4 } from "react-icons/bs";
import DesktopBlackNoIconBtnPurple from '../common/button/desktopBlackButton/desktopBlackNoIconBtnPurple';
import DesktopBlackPureIconBtnBlack from '../common/button/desktopBlackButton/desktopBlackPureIconBtnBlack';

export default function MainMusicInfo() {
  return (
    <>
      {/* 活動主資訊 start */}
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-7 col-12 p-2 mb-5 mb-sm-0 of-hide img-border">
          <div className="custom-bg-01" />
        </div>
        <div className="col-md-5 col-12 d-flex flex-column">
          {/* 等待修改：三行能否頂天立地 */}
          <div className="row d-flex flex-column justify-content-between ms-md-3 ms-0">
            <div className="col-12 chb-h3 text-white mb-3">一生到底 One Life, One Shot</div>
            <div className="col-12 my-4 my-md-5">
              <div className="d-flex my-2">
                <BsCalendar4 className="chb-h5 text-white me-3 mt-1" />
                <div className="chb-h5 text-purple2">2024/06/15&nbsp;&nbsp;19:30</div>
              </div>
              <div className="d-flex my-2">
                <BsGeoAlt className="chb-h5 text-white me-3 mt-1" />
                <div className="chb-h5 text-purple2">臺北流行音樂中心</div>
              </div>
              <div className="d-flex my-2">
                <BsMusicNoteBeamed className="chb-h5 text-white me-3 mt-1" />
                <div className="chb-h5 text-purple2">滅火器 Fire EX.</div>
              </div>
            </div>
            <div className="col-12 text-nowrap mt-3">
              <div className="row">
                <div className="col-4 me-2">
                  <DesktopBlackNoIconBtnPurple text='立即購票' className='chr-h5' />
                </div>
                <div className="col-4 d-none d-md-block">
                  <DesktopBlackPureIconBtnBlack
                    icon={BsBookmark}
                  />
                </div>
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
        @media (max-width: 390px) {
          .custom-bg-01 {
            height: 11.25rem
        }
      }
      `}</style>
    </>
  )
}
