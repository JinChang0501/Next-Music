import React from 'react'
import ActivityCard from '@/components/activity/activity-card'

export default function TabContentConcert({ tabTargetConcert }) {
  return (
    <>
      <div
        className="tab-pane fade"
        //^^^^^^^^show跟active只需要寫在第一個tab的content裡面
        id={tabTargetConcert}
        role="tabpanel"
        aria-labelledby={`${tabTargetConcert}-tab`}
      >
        <ActivityCard />
        <ActivityCard />
      </div>
    </>
  )
}
