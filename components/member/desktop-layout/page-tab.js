import React from 'react'
import { useTab } from '@/hooks/member/useTab'

export default function PageTab() {
  const { handleTabChange, activeTab } = useTab()
  return (
    <>
      <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
        <li className="nav-item col-6 col-md-3" role="presentation">
          <button
            className={`nav-link w-100 ${
              activeTab === 'concert' ? 'active' : ''
            } px-5`}
            id="concert-tab"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            aria-controls="concert"
            aria-selected={activeTab === 'concert'}
            onClick={() => handleTabChange('concert')}
          >
            演唱會
          </button>
        </li>
        <li className="nav-item col-6 col-md-3" role="presentation">
          <button
            className={`nav-link w-100 ${
              activeTab === 'festival' ? 'active' : ''
            } px-5`}
            id="festival-tab"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            aria-controls="festival"
            aria-selected={activeTab === 'festival'}
            onClick={() => handleTabChange('festival')}
          >
            音樂祭
          </button>
        </li>
      </ul>
    </>
  )
}
