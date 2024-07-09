import { useTabs } from '@/hooks/artist/useTabs'
import React from 'react'

// 待修改，研究頁籤 換頁要換內容
export default function IntroTabs() {
  const { handleTabChange, artistTab } = useTabs()
  return (
    <>
      {/* 簡介：頁籤 start */}
      <div className="row mb-3">
        <div className="col-12 mb-4">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              {/* 這邊要改 */}
              <a className={`nav-link ${artistTab === 'concert' ? 'artist' : ''
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
           
          </div>
        </div>
      </div>
      {/* 簡介：頁籤 end */}
    </>
  )
}