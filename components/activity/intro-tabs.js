import { useTabs } from '@/hooks/activity/useTabs'
import React from 'react'

// 待修改，研究頁籤 換頁要換內容
export default function IntroTabs() {
  const { handleTabChange, activeTab } = useTabs()
  return (
    <>
      {/* 簡介：頁籤 start */}
      <div className="row mb-3">
        <div className="col-12 mb-4">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              {/* 這邊要改 */}
              <a className={`nav-link ${activeTab === 'concert' ? 'active' : ''
                }`} aria-current="page" href="#">
                簡介
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                注意事項
              </a>
            </li>
          </ul>
        </div>
        {/* 簡介：內容 start */}
        <div className="col-12 col-md-6 text-purple3">
          <div className="chr-h5">
            One Life, One Shot人生像場一鏡到底的電影，時間不曾為誰停下，無法倒轉重來、也無法按下暫停。&nbsp;Let's
            keep rolling!不斷前進的過程中，最珍貴的便是每次聚在一起就充滿能量，很多事情一時沒有答案，至少、你有滅火器的音樂可以作伴。人生keep
            rolling的BGM，讓滅火器陪你，一生到底
          </div>
        </div>
      </div>
      {/* 簡介：頁籤 end */}
    </>
  )
}