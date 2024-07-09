import React from 'react'
import { useTabs } from '@/hooks/artist/useTabs'

// 待修改，研究頁籤 換頁要換內容
export default function artistTabs() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { handleTabChange, artistTab } = useTabs()
  return (
    <>
      <ul className="nav nav-tabs mb-3" id="artistTab" role="tablist">
        <li className="nav-item col-6 col-md-3" role="presentation">
          <button
            className={`nav-link w-100 ${artistTab === 'artist' ? 'artist' : ''
              } px-5`}
            id="artist-tab"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            aria-controls="artist"
            aria-selected={artistTab === 'artist'}
            onClick={() => handleTabChange('artist')}
          >
            所有活動
          </button>
        </li>
        <li className="nav-item col-6 col-md-3" role="presentation">
          <button
            className={`nav-link w-100 ${artistTab === 'concert' ? 'artist' : ''
              } px-5`}
            id="concert-tab"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            aria-controls="concert"
            aria-selected={artistTab === 'concert'}
            onClick={() => handleTabChange('concert')}
          >
            演唱會
          </button>
        </li>
        <li className="nav-item col-6 col-md-3" role="presentation">
          <button
            className={`nav-link w-100 ${artistTab === 'festival' ? 'artist' : ''
              } px-5`}
            id="festival-tab"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            aria-controls="festival"
            aria-selected={artistTab === 'festival'}
            onClick={() => handleTabChange('festival')}
          >
            音樂祭
          </button>
        </li>
      </ul>
    </>
  )
}