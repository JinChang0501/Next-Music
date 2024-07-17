import React from 'react'
import { useTabs } from '@/hooks/Activity/useTabs'
//這個檔案現在未使用

export default function ActivityTabs() {
  const { handleTabChange, activeTab } = useTabs()
  return (
    <>
      <ul className='nav nav-tabs mb-3' id='activityTab' role='tablist'>
        <li className='nav-item col-4 col-md-3' role='presentation'>
          <button
            className={`nav-link w-100 ${activeTab === 'activity' ? 'active' : ''
              } px-5`}
            id='activity-tab'
            data-bs-toggle='tab'
            type='button'
            role='tab'
            aria-controls='activity'
            aria-selected={activeTab === 'activity'}
            onClick={() => handleTabChange('activity')}
          >
            所有活動
          </button>
        </li>
        <li className='nav-item col-4 col-md-3' role='presentation'>
          <button
            className={`nav-link w-100 ${activeTab === 'concert' ? 'active' : ''
              } px-5`}
            id='concert-tab'
            data-bs-toggle='tab'
            type='button'
            role='tab'
            aria-controls='concert'
            aria-selected={activeTab === 'concert'}
            onClick={() => handleTabChange('concert')}
          >
            演唱會
          </button>
        </li>
        <li className='nav-item col-4 col-md-3' role='presentation'>
          <button
            className={`nav-link w-100 ${activeTab === 'festival' ? 'active' : ''
              } px-5`}
            id='festival-tab'
            data-bs-toggle='tab'
            type='button'
            role='tab'
            aria-controls='festival'
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